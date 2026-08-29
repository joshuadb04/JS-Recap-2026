const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    firstName: "Michael",
    lastName: "Jackson",
  }),
};

const url = "https://reqres.in/api/users";

const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const json = await response.json();
  console.log(json);

  if (!response.ok && json.message) {
    throw new Error(json.message);
  } else if (!response.ok) {
    throw new Error("Error found: " + response.statusText);
  }

  return json;
};

export { fetchData };
