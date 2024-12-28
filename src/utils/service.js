export async function fetchData(api) {
  try {
    const response = await fetch(api);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
}
