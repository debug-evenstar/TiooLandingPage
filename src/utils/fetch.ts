export async function fetchData(url: string) {
  try {
    const response = await fetch(url); // Await the fetch request
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json(); // Await the conversion to JSON
  } catch (error) {
    console.error('Fetch error:', error);
  }
}
