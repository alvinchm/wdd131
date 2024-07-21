function setCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;
}
function setLastModified() {
    document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;
}
document.addEventListener('DOMContentLoaded', function() {
    setCurrentYear();
    setLastModified();
});
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
];
function createTempleCard(temple) {
    return `
      <article class="temple-card">
        <h3>${temple.templeName}</h3>
        <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Area: ${temple.area} sq ft</p>
      </article>
    `;
}
  
function displayTemples(templeList) {
    const templesContainer = document.getElementById('temples-container');
    templesContainer.innerHTML = templeList.map(createTempleCard).join('');
}
  
const filterFunctions = {
    old: temple => {
        const [year] = temple.dedicated.split(', ');
        return parseInt(year) <= 1900;
    },
    new: temple => {
        const [year] = temple.dedicated.split(', ');
        return parseInt(year) >= 2000;
    },
    large: temple => temple.area > 90000,
    small: temple => temple.area < 10000,
    home: () => true
};
function handleNavigation(filter) {
    console.log(`Applying filter: ${filter}`);
    const filteredTemples = temples.filter(filterFunctions[filter]);
    console.log(`Filtered temples:`, filteredTemples);
    displayTemples(filteredTemples);
}

document.querySelectorAll('#primaryNav a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const filter = event.target.id;
        handleNavigation(filter);
    });
});

function setupNavigation() {
    const navLinks = document.querySelectorAll('#primaryNav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const filter = event.target.id;
            handleNavigation(filter);
            
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            event.target.classList.add('active');
        
            document.getElementById('templeListTitle').textContent = `${filter.charAt(0).toUpperCase() + filter.slice(1)} Temples`;
        });
    });
}
function setupMobileMenu() {
    const listOptions = document.getElementById('listOptions');
    const primaryNav = document.getElementById('primaryNav');

    listOptions.addEventListener('click', () => {
        primaryNav.classList.toggle('open');
        listOptions.classList.toggle('open');
        listOptions.setAttribute('aria-expanded', listOptions.classList.contains('open'));
    });
}

function handleNavigation(filter) {
    console.log(`Applying filter: ${filter}`);
    const filteredTemples = temples.filter(filterFunctions[filter]);
    console.log(`Filtered temples (${filteredTemples.length}):`);
    filteredTemples.forEach(temple => {
        console.log(`- ${temple.templeName} (${temple.dedicated.split(', ')[0]})`);
    });
    displayTemples(filteredTemples);
    document.getElementById('templeListTitle').textContent = `${filter.charAt(0).toUpperCase() + filter.slice(1)} Temples`;
    updateFooter(); 
}
document.addEventListener('DOMContentLoaded', () => {
    displayTemples(temples);
    updateFooter();
    setupMobileMenu();
    setupNavigation();
});
function updateFooter() {
    const currentYear = new Date().getFullYear();
    const lastModified = new Date().toLocaleString();
    document.getElementById('currentyear').textContent = currentYear;
    document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;
}
temples.push(
    {
        templeName: "Bogotá Colombia",
        location: "Bogotá, Colombia",
        dedicated: "1999, April, 24 ",
        area: 	53500,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/d08e861b3d488bc4327fd4183e1136e23bd441c7/full/1280%2C/0/default"
    },
    {
        templeName: "Provo City Center",
        location: "Provo, Utah, United States",
        dedicated: "2016, March, 20",
        area: 128325,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/ff8c7df0c3ca5323549b8f87790ec42c0ce18662/full/1280%2C/0/default"
    },
    {
        templeName: "Cochabamba Bolivia",
        location: "Cochabamba, Bolivia",
        dedicated: "2000, April, 30",
        area: 35500,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/fd6d75177441ba184c29b4aa8b4bba50b214c052/full/1280%2C/0/default"
    }
);
