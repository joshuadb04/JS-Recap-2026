import { fetchData } from "../t4/t4.js";

const apiURL = "https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants";

const restaurants = await fetchData(apiURL);
const table = document.querySelector("table");

for (const restaurant of restaurants) {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");

  td1.innerText = restaurant.name;
  td2.innerText = restaurant.address;

  tr.insertAdjacentElement("beforeend", td1);
  tr.insertAdjacentElement("beforeend", td2);

  tr.addEventListener("click", async () => {
    document.querySelectorAll(".highlight").forEach((element) => element.classList.remove("highlight")); //used to add and remove highlights per selection (to be further studied).

    tr.classList.add("highlight");

    const dialog = document.querySelector("dialog");
    const dayMenuURL = `https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants/daily/${restaurant._id}/en`;
    const dayMenu = await fetchData(dayMenuURL);
    const dailyMenu = dayMenu.courses
      .map(
        (i) =>
          `<div class="meal">
        Name: ${i.name}<br />
        Diets: ${i.diets.length === 0 ? "Not available" : i.diets}<br />
        Price: ${i.price === "" ? "Unspecified" : i.price}
        </div>`,
      )
      .join("");

    dialog.innerHTML = `
    Restaurant name: ${restaurant.name}<br />
    Address: ${restaurant.address}<br />
    Postal code: ${restaurant.postalCode}<br />
    City: ${restaurant.city}<br />
    Phone number: ${restaurant.phone}<br />
    Company: ${restaurant.company}<br />

    Daily Menu: <br />
    ${dayMenu.courses.length === 0 ? "No menu available for today <br />" : dailyMenu}

    <button>Close</button>`;

    dialog.querySelector("button").addEventListener("click", () => {
      dialog.close();
    });

    dialog.show();
  });

  table.insertAdjacentElement("beforeend", tr);
}
