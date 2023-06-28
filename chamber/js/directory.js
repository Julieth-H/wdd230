
const url = 'https://julieth-h.github.io/wdd230/chamber/json/data.json';

async function getData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displaydata(data.jason);
  } catch (error) {
    console.error('Error:', error);
  }
  }
 /*getdivcards();*/
  function displayBusinessInfo(entries) {
   /* const = document.querySelector('business-container');*/


    }
    //add cards to div
    const displayBusiness = (business) => {
        const cards = document.querySelector("div.cards");
        business.forEach((item) => {
            let card = document.createElement("section");
            let image = document.createElement("img");
            let name = document.createElement("h3");
            let address1 = document.createElement("p");
            let phone = document.createElement("p");
            let category = document.createElement("P");
            let web = document.createElement("a");
    
            image.setAttribute("src", item.image);
            image.setAttribute("alt", `imagre of ${item.name}`);
            image.setAttribute("loading", "lazy");        
            
            name.textContent = `${item.name}`;
            address1.textContent = `${item.address[0]}`;
            phone.textContent = `${item.phone}`;
            web.innerHTML = `${item.web}`;            
            web.setAttribute("href", `${item.web}`);
            card.appendChild(name);
            card.appendChild(image);
            card.appendChild(address1);
            card.appendChild(phone);
            card.appendChild(category);
            card.appendChild(web);
            
            cards.appendChild(card);
        });
    }
    //buttons to change views
    const gridbutton = document.querySelector("#grid");
    const listbutton = document.querySelector("#list");
    const display = document.querySelector("article");
    //add class 'list' to article
    listbutton.addEventListener("click", () => {
        display.classList.add("list");
    });
    //remove class 'list' from article
    gridbutton.addEventListener("click", () => {
        display.classList.remove("list");
    })
     