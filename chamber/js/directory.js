/*document.addEventListener('DOMContentLoaded', () => {
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
      let category = document.createElement('p');
      let website = document.createElement('a');

      name.innerHTML = business.name;
     /* logo.setAttribute('src', business.logourl);*/
     /* address.innerHTML = business.address;
      phone.innerHTML = business.phone;
      category.innerHTML= business.category;
      website.innerHTML = business.website;
      website.href = business.website;

      logo.setAttribute('alt', `logo of ${business.name}`);
      logo.setAttribute('loading', 'lazy');
      logo.setAttribute('width', '140');
      logo.setAttribute('height', '150');

      if (business.logourl) {
        logo.setAttribute('src', business.logourl);
      } else {
        logo.setAttribute('src','https://static.wixstatic.com/media/a312d4_80eb4859aef64a35bba3f285c472bc61~mv2.png/v1/fill/w_168,h_153,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/WolfeMountainApprovedLogo_BZ%20at%20WM.png');
     }
    

    if (business.logourl) {
      logo.setAttribute('src', business.logourl);
    } else {
      logo.setAttribute('src','https://assets.website-files.com/59a3254bfdd0390001e0eec4/627ec13a3fe1b5617ec5ee84_grand-country-logo-2022.pn');
   }





      card.appendChild(logo);
      card.appendChild(name);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(category);
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
*/

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
      let category = document.createElement('p');
      let website = document.createElement('a');

      name.innerHTML = business.name;
      logo.setAttribute('src', business.logo);
      address.innerHTML = business.address;
      phone.innerHTML = business.phone;
      category.innerHTML = business.category;
      website.innerHTML = business.website;
      website.href = business.website;

      logo.setAttribute('alt', `Logo of ${business.name}`);
      logo.setAttribute('loading', 'lazy');
      logo.setAttribute('width', '140');
      logo.setAttribute('height', '150');

      card.appendChild(logo);
      card.appendChild(name);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(category);
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

