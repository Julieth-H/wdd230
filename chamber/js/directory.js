

  const urlData = "https://julieth-h.github.io/wdd230/chamber/json/data.json";
  async function getdata() {
    try{
    const respnse = await fetch(url);
    const data = await respnse.json();
    displeycards(data.json);
    }  catch (error) {
    console.error('Error:', error);
  }
}

  const displayentries = (entries) => {
    const grid = document.querySelector('div.grid');

    entries.forEach((company) => {
      let card = document.createElement('section');
      let logo = document.createElement('img');
      let name = document.createElement('h2');
      let address = document.createElement('p');
      let phone = document.createElement('p');
      let category = document.createElement('p');
      let website = document.createElement('a');

      name.innerHTML = `${company.name}`;
      address.innerHTML = `${company.address}`;
      phone.innerHTML = `${company.phone}`;
      website.innerHTML = `${company.website}`;
      website.href = `${company.website}`;

      logo.setAttribute('src', company.imageurl);
      logo.setAttribute('alt', `Logo of ${company.name}`);
      logo.setAttribute('loading', 'lazy');

      card.appendChild(logo);
      card.appendChild(name);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(category);
      card.appendChild(website);

      grid.appendChild(card);
    });
  }

  getCompanyData(urlData)
    .then((companies) => {
      displayCompanies(companies);
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

