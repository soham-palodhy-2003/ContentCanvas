import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request) {
  try {
    const blogData = path.join(process.cwd(), 'src', 'app', 'Blogdata');
    const files = await fs.readdir(blogData);
    
    // Parse query parameters
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page')) || 1;
    const limit = parseInt(url.searchParams.get('limit')) || 10;
    const start = (page - 1) * limit;
    const end = start + limit;

    let allBlogs = [];
    for (let index = 0; index < files.length; index++) {
      const item = files[index];
      const fileContent = await fs.readFile(path.join(blogData, item), 'utf-8');
      allBlogs.push(JSON.parse(fileContent));
    }

    // Paginate blogs
    const paginatedBlogs = allBlogs.slice(start, end);
    
    return new Response(JSON.stringify(paginatedBlogs), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
