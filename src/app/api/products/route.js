export async function GET() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      headers: { "User-Agent": "Mozilla/5.0" },
    });

    if (!res.ok) {
      return new Response("Erro ao buscar produtos", { status: 500 });
    }

    const data = await res.json();
    return Response.json(data);
  } catch (err) {
    return new Response("Erro ao buscar produtos", { status: 500 });
  }
}
