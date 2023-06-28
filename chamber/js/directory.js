
document.addEventListener('DOMContentLoaded', () => {
  const urldata = "https://julieth-h.github.io/wdd230/chamber/json/data.json";

  async function getbusinessdata(urldata) {
    const response = await fetch(urldata);
    const data = await response.json();
    return data.business;

 
  }

  const displaybusiness = (business) => {
    const grid = document.querySelector('div.grid');

    business.forEach((business) => {
      let card = document.createElement('section');
      let image = document.createElement('image');
      let name = document.createElement('h2');
      let address = document.createElement('p');
      let phone = document.createElement('p');
      let category = document.createElement('p');
      let website = document.createElement('a');

      name.innerHTML = `${business.name}`;
      image.innerHTML =$`{business.image}`;
      address.innerHTML = `${business.address}`;
      phone.innerHTML = `${business.phone}`;
      website.innerHTML = `${business.website}`;
      website.href = `${business.website}`;

      image.setAttribute('src', business.imageurl);
      image.setAttribute('alt', `logo of ${business.name}`);
      image.setAttribute('loading', 'lazy');

      card.appendChild(image);
      card.appendChild(name);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(website);
      card.appendChild(category);
      grid.appendChild(card);
    });
  }

  getbusinessdata(urldata)
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