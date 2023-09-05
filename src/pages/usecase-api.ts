import { getCollection } from "astro:content";
 
const projects = (await getCollection("usecase")).sort((a, b) => a.data.id - b.data.id);
 

  
  import type { APIRoute } from 'astro'; 
export const get: APIRoute = async function get() {
  try {
   return   new Response(JSON.stringify(projects), {
    status: 200,
    headers: { 'content-type': `application/json`, "access-control-allow-origin" : "*" },
  });

  } catch (error: unknown) {
    return new Response(`Something went wrong in json route!: ${error as string}`, {
      status: 501,
      statusText: 'Server error',
    });
  }
};
