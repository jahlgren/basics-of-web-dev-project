import { createServer  } from 'http';
import fs from 'fs';
import path from 'path';



// ------------------------------------------------------------------
// Global state / config
// ------------------------------------------------------------------

const port = process.env.PORT || 3000;
let routeHandlers = new Map();



// ------------------------------------------------------------------
// Main: Crete and start http server
// ------------------------------------------------------------------

const server = createServer(async (request, response) => {
  
  // 1. Get requested route
  
  const route = routeHandlers.has(request.url) ? request.url : '/_public';

  // 2. Handle requested route with the given method

  const {GET, POST} = routeHandlers.get(route);

  if(request.method === 'GET' && !!GET) 
    return await GET(request, response);
  
  if(request.method === 'POST' && !!POST) 
    return await POST(request, response);
  
  // 3. Handle unknown method.

  response.writeHead(501, { 'Content-Type' : 'text/plain' });
  response.end('501 - Method Not Implemented');

});

server.listen(port, async () => {

  // 1. Build route handlers map

  routeHandlers = new Map(await getRouteHandlers());

  // 2. Debug log

  process.stdout.write(`Server runnong on port ${port}\n`);
});



// ------------------------------------------------------------------
// Helper functions
// ------------------------------------------------------------------

async function getRouteHandlers(folder = '') {
  const routesRootPath = './src/routes/';
  const absoluteFolderPath = path.resolve(routesRootPath + folder);
  const files = [];
  const items = fs.readdirSync(absoluteFolderPath);
  for(let i = 0; i < items.length; i++) {
    if(fs.statSync(absoluteFolderPath + '/' + items[i]).isDirectory()) {
      files.push(...(await getRouteHandlers(folder + '/' + items[i])));
      continue;
    }
    const fileNameInfo = path.parse(items[i]);
    if(fileNameInfo.ext !== '.js')
      continue;
    const {GET, POST} = await import(path.normalize('file://' + path.resolve(routesRootPath + folder + '/' + items[i])));
    files.push([
      folder + '/' + fileNameInfo.name,
      {GET, POST}
    ]);
  }
  return files;
}
