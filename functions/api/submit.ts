interface Env {
  // If you bind a D1 database, it would be defined here
  // DB: D1Database;
}

interface PagesFunctionContext {
  request: Request;
  env: Env;
  waitUntil: (promise: Promise<any>) => void;
  next: () => Promise<Response>;
  params: Record<string, string>;
  data: any;
}

export const onRequestPost = async (context: PagesFunctionContext) => {
  try {
    const data = await context.request.json();
    
    // TODO: In a real production environment, you would insert 'data' into a D1 database
    // or KV storage here.
    // Example: 
    // await context.env.DB.prepare("INSERT INTO submissions (...) VALUES (...)").bind(...).run();

    // For now, we just echo back success. The frontend uses localStorage, 
    // but can be switched to fetch('/api/submit') easily.
    
    return new Response(JSON.stringify({ success: true, message: "Received" }), {
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to process request" }), { 
      status: 500,
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
}

// Handle CORS preflight requests
export const onRequestOptions = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400"
    }
  });
}