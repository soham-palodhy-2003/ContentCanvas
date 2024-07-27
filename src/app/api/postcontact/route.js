import * as fs from 'fs/promises';
import path from 'path';

export async function GET(req) {
  return new Response(JSON.stringify(["AllBlogs"]), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export async function POST(req) {
  try {
    const body = await req.json();
    console.log(body);

    // Convert JSON object to string
    const data = JSON.stringify(body);

    // Define the directory
    const dirPath = path.join(process.cwd(), 'src', 'app', 'Contactdata');

    // Get the list of files in the directory
    const files = await fs.readdir(dirPath);

    // Determine the next file number
    const nextFileNumber = files.length + 1;
    const fileName = `${nextFileNumber}.json`;

    // Write the data to a file asynchronously
    await fs.writeFile(path.join(dirPath, fileName), data);

    return new Response(JSON.stringify(["Yes Post Request"]), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error("Error writing file:", error);

    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
