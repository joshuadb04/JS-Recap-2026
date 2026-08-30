const restaurantRow = (restaurant) => {
  const { name, address } = restaurant;
  const tr = document.createElement("tr");

  tr.innerHTML = `
  <td>${name}</td>
  <td>${address}</td>`;

  return tr;
};

const restaurantModal = (restaurant, menu) => {
  const { name, address, postalCode, city, phone, company } = restaurant;
  const { courses } = menu;

  const menuHtml = courses
    .map(
      (i) =>
        `<div class="meal">
        Name: ${i.name}<br />
        Diets: ${!i.diets || i.diets.length === 0 ? "Not available" : i.diets}<br />
        Price: ${i.price === "" ? "Unspecified" : i.price}
        </div>`,
    )
    .join("");

  return `
    Restaurant name: ${name}<br />
    Address: ${address}<br />
    Postal code: ${postalCode}<br />
    City: ${city}<br />
    Phone number: ${phone}<br />
    Company: ${company}<br />

    Daily Menu: <br />
    ${courses.length === 0 ? "No menu available for today <br />" : menuHtml}

    <button>Close</button>
  `;
};

export { restaurantRow, restaurantModal };
