import { ClientRequest, ServerResponse } from 'http';
import fs from 'fs';
import path from 'path';


const fileTypeToMimeMap = new Map([
  ['.html', 'text/html'],
  ['.css', 'text/css'],
  ['.js', 'text/javascript'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.webp', 'image/webp']
]);


/**
 * @param {ClientRequest} request 
 * @param {ServerResponse} response 
 */
export async function GET(request, response) {
  if(await servePublicResource(request, response))
    return;
  
  response.writeHead(404, { 'Content-Type' : 'text/plain' });
  response.end('404 - Resource Not Found');
}


/**
 * @param {ClientRequest} request 
 * @param {ServerResponse} response 
 */
export function servePublicResource(request, response) {
  return new Promise(resolve => {
    const url = (request.url === '' || request.url === '/') ? '/index.html' : request.url;
    const resourcePath = path.normalize(path.resolve('./public/') + url);
    const fileExtension = path.parse(resourcePath).ext;
  
    if(!fileTypeToMimeMap.has(fileExtension))
      return resolve(false);
  
    fs.readFile(resourcePath, (err, data) => {
      if(err) {
        if(err.path && !fs.existsSync(err.path)) {
          response.writeHead(404);
          response.end("404: The given resource does not exist.");
        }
        else {
          response.writeHead(500);
          response.end("500: Server error.");
          console.log("Server error", err);
        }
      } 
      else {
        response.writeHead(200, {'Content-Type': fileTypeToMimeMap.get(fileExtension)});
        response.end(data);
      }
      return resolve(true);
    });
  });
}
