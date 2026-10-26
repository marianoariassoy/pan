const API_URL = "https://marianoarias.soy/works/pan/api";

export async function getTexts() {
  const res = await fetch(`${API_URL}/textos`, {
    next: {
      revalidate: 1296000, // 15 días en segundos (15 * 24 * 60 * 60)
    },
  });
  return res.json();
}

export async function getData(url: string) {
  const res = await fetch(`${API_URL}/${url}`, {
    cache: "no-store",
  });
  return res.json();
}

export async function getDataBySlug(url: string, slug: string) {
  const res = await fetch(`${API_URL}/${url}/${slug}`, {
    cache: "no-store",
  });
  return res.json();
}
