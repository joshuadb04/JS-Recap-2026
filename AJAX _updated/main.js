import { restaurantRow, restaurantModal } from "./components.js";
import { baseUrl } from "./variables.js";
import { fetchData } from "./utils.js";

const apiURL = `${baseUrl}/restaurants`;
const table = document.querySelector("table");
let restaurants;
try {
  restaurants = await fetchData(apiURL);
} catch (error) {
  console.log(error.message);
  alert(`Error: ${error.message}`);
}
const sodexoButton = document.querySelector("#sodexo");
const compassButton = document.querySelector("#compass");
const allButton = document.querySelector("#all");

restaurants.sort((a, b) => a.name.localeCompare(b.name));

const filterCompanies = (company) => {
  return restaurants.filter((restaurant) => restaurant.company === company);
};

const showRestaurants = (list) => {
  for (const restaurant of list) {
    const tr = restaurantRow(restaurant);

    tr.addEventListener("click", async () => {
      document.querySelectorAll(".highlight").forEach((element) => element.classList.remove("highlight")); //used to add and remove highlights per selection (to be further studied).
      tr.classList.add("highlight");

      const dialog = document.querySelector("dialog");
      const dayMenuURL = `${baseUrl}/restaurants/daily/${restaurant._id}/en`;
      let dayMenu;
      try {
        dayMenu = await fetchData(dayMenuURL);
      } catch (error) {
        console.log(error.message);
        alert(`Error: ${error.message}`);
      }

      dialog.innerHTML = restaurantModal(restaurant, dayMenu);

      dialog.querySelector("button").addEventListener("click", () => {
        dialog.close();
      });

      dialog.show();
    });

    table.insertAdjacentElement("beforeend", tr);
  }
};

showRestaurants(restaurants);

sodexoButton.addEventListener("click", () => {
  const filteredRestaurants = filterCompanies("Sodexo");
  table.innerHTML = "";
  showRestaurants(filteredRestaurants);
});

compassButton.addEventListener("click", () => {
  const filteredRestaurants = filterCompanies("Compass Group");
  table.innerHTML = "";
  showRestaurants(filteredRestaurants);
});

allButton.addEventListener("click", () => {
  table.innerHTML = "";
  showRestaurants(restaurants);
});
