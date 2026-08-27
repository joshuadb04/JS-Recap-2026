async function fetchData() {
  try {
    const response = await fetch("https://reqres.in/api/unknown/23");
    if (!response.ok) throw new Error("Error: " + response.status);
    const jsonData = await response.json();
    console.log(jsonData);
  } catch (error) {
    console.log(error.message);
  }
}
fetchData();
