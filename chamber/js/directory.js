
document.addEventListener('DOMContentLoaded', () => {
  const urlData = "https://julieth-h.github.io/wdd230/chamber/json/data.json";

  async function getbusinessdata(urlData) {
    const response = await fetch(urlData);
    const data = await response.json();
    return data.business;

 
  }

  const displaybusiness = (business) => {
    const grid = document.querySelector('div.grid');

    business.forEach((business) => {
      let card = document.createElement('section');
      let logo = document.createElement('img');
      let name = document.createElement('h2');
      let address = document.createElement('p');
      let phone = document.createElement('p');
      let category = document.createElement('p');
      let website = document.createElement('a');

      name.innerHTML = `${business.name}`;
      address.innerHTML = `${business.address}`;
      phone.innerHTML = `${business.phone}`;
      website.innerHTML = `${business.website}`;
      website.href = `${business.website}`;

      logo.setAttribute('src', business.imageurl);
      logo.setAttribute('alt', `Logo of ${business.name}`);
      logo.setAttribute('loading', 'lazy');

      card.appendChild(logo);
      card.appendChild(name);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(website);
      card.appendChild(category);
      grid.appendChild(card);
    });
  }

  getbusinessData(urlData)
    .then((business) => {
      displaybusiness(business);
    });

  const gridbutton = document.querySelector("#grid");
  const listbutton = document.querySelector("#list");
  const display = document.querySelector(".grid");

  gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
  });

  listbutton.addEventListener("click", () => {
    display.classList.remove("grid");
    display.classList.add("list");
  });
});