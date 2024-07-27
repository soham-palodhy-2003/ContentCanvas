import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');

  try {
    // Resolve the path to your JSON file within the src/app/Blogdata directory
    const jsonFilePath = path.join(process.cwd(), 'src', 'app', 'Blogdata', `${slug}.json`);
    
    // Read the file content
    const data = await fs.readFile(jsonFilePath, 'utf-8');
    
    // Parse JSON data
    const jsonData = JSON.parse(data);
    
    // Return the JSON response
    return new Response(JSON.stringify(jsonData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    
    return new Response(JSON.stringify({ error: 'No Such Blog Found' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
