document.addEventListener('DOMContentLoaded', function() {
    fetch('json/data.json')
      .then(response => response.json())
      .then(data => displayBusinessInfo(data.entries))
      .catch(error => console.error('Error fetching JSON data:', error));
  });

  function displayBusinessInfo(entries) {
    const businessContainer = document.getElementById('business-container');

    entries.forEach(entry => {
      const entryContainer = document.createElement('div');
      entryContainer.classList.add('entry');

      const image = document.createElement('img');
      image.src = entry.image;
      image.alt = entry.name;
      image.classList.add('entry-image');

      const name = document.createElement('h2');
      name.textContent = entry.name;

      const address = document.createElement('p');
      address.textContent = 'Address: ' + entry.address;

      const phone = document.createElement('p');
      phone.textContent = 'Phone: ' + entry.phone;

      const website = document.createElement('p');
      const websiteLink = document.createElement('a');
      websiteLink.href = entry.website;
      websiteLink.textContent = 'Website';
      website.appendChild(websiteLink);

      const category = document.createElement('p');
      category.textContent = 'Category: ' + entry.category;

      entryContainer.appendChild(image);
      entryContainer.appendChild(name);
      entryContainer.appendChild(address);
      entryContainer.appendChild(phone);
      entryContainer.appendChild(website);
      entryContainer.appendChild(category);

      businessContainer.appendChild(entryContainer);
    });
  }

