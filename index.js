export default {
  async fetch(request, env) {
    if (request.method === 'POST') {
      try {
        const contentType = request.headers.get('content-type') || '';
        if (!contentType.includes('application/json')) {
          return new Response('Expected JSON body', { status: 400 });
        }

        const data = await request.json();

        const { secret, title, content, date, image } = data;

        // Secret validation
        if (secret !== env.ADMIN_SECRET) {
          return new Response('Unauthorized', { status: 403 });
        }

        if (!title || !content || !date) {
          return new Response('Missing required fields', { status: 400 });
        }

        // Use ISO date as key (or customize!)
        const key = `post-${date}`;

        await env.BLOG_KV.put(key, JSON.stringify({ title, content, date, image }));

        return new Response('Blog post saved successfully', { status: 200 });
      } catch (err) {
        return new Response(`Error: ${err.message}`, { status: 500 });
      }
    }

    return new Response('Method Not Allowed', { status: 405 });
  }
};
