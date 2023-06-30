
document.addEventListener('DOMContentLoaded', () => {
  const urldata = "https://julieth-h.github.io/wdd230/chamber/json/data.json";

  async function getBusinessData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.business;
  }

  const displayBusiness = (businesses) => {
    const grid = document.querySelector('.cards');

    businesses.forEach((business) => {
      let card = document.createElement('section');
      let logo = document.createElement('img');
      let name = document.createElement('h2');
      let address = document.createElement('p');
      let phone = document.createElement('p');
      let website = document.createElement('a');

      name.innerHTML = business.name;
      logo.setAttribute('src', business.logourl);
      address.innerHTML = business.address;
      phone.innerHTML = business.phone;
      website.innerHTML = business.website;
      website.href = business.website;

      logo.setAttribute('alt', `logo of ${business.name}`);
      logo.setAttribute('loading', 'lazy');
      logo.setAttribute('width', '140');
      logo.setAttribute('height', '150');
      logo.src = 'path/to/default/image.jpg'; // Replace with the URL of a default image

      card.appendChild(logo);
      card.appendChild(name);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(website);

      grid.appendChild(card);
    });
  }

  getBusinessData(urldata)
    .then((businesses) => {
      displayBusiness(businesses);
    })
    .catch((error) => {
      console.log('Error:', error);
    });

  const gridButton = document.querySelector("#grid");
  const listButton = document.querySelector("#list");
  const display = document.querySelector(".cards");

  gridButton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
  });

  listButton.addEventListener("click", () => {
    display.classList.remove("grid");
    display.classList.add("list");
  });
});
