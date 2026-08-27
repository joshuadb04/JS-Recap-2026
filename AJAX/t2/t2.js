const data = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    firstName: "Michael",
    lastName: "Jackson",
  }),
};

async function fetchURL() {
  try {
    const response = await fetch("https://reqres.in/api/users", data);
    if (!response.ok) throw new Error("Invalid string!");
    const jsonData = await response.json();
    console.log(jsonData);
  } catch (error) {
    console.log(error.message);
  }
}
fetchURL();
