import { ClientRequest, ServerResponse } from 'http';

/**
 * @param {ClientRequest} request 
 * @param {ServerResponse} response 
 */
export async function GET(request, response) {
  response.writeHead(200, { 'Content-Type' : 'application/json' });
  response.end(`{"message": "Hello from api route!"}`);
}
