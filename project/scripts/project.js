const sites = [
    {
        name: "Machu Picchu",
        location: "Cusco, Peru",
        imageUrl: "https://caminoincamachupicchu.org/cmingutd/wp-content/uploads/2021/06/machu-picchu-ci.jpg",
        likes: 0,
        visits: 1500000
    },
    {
        name: "Eiffel Tower",
        location: "Paris, France",
        imageUrl: "https://c.wallhere.com/photos/30/4f/paris_eiffel_tower_dawn_city-1058647.jpg!d",
        likes: 0,
        visits: 7000000
    },
    {
        name: "Great Wall of China",
        location: "China",
        imageUrl: "https://c.wallhere.com/photos/2d/8e/Great_Wall_of_China_wall_China_mountains_history_landscape_sky_Asia-2155345.jpg!d",
        likes: 0,
        visits: 10000000
    },
    {
        name: "The Blue Lagoon",
        location: "Islandia",
        imageUrl: "https://images.unsplash.com/photo-1439725434120-c1b50e0cc329?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhZ3VuYSUyMGF6dWwlMjBpc2xhbmRpYXxlbnwwfHwwfHx8MA%3D%3D",
        likes: 0,
        visits: 1200000
    },
    {
        name: "Stonehenge",
        location: "United Kingdom",
        imageUrl: "https://content.skyscnr.com/7805c7de6f4e7816a4fe0a7cc386969e/GettyImages-183633046.jpg",
        likes: 0,
        visits: 1300000
    },
    {
        name: "Cristo Redentor",
        location: "Brazil",
        imageUrl: "https://content.skyscnr.com/e9f18d98773d244ceef7d45bc67f6ef8/GettyImages-523665439.jpg",
        likes: 0,
        visits: 700000
    },
    {
        name: "acropolis of athens",
        location: "Greece",
        imageUrl: "https://content.skyscnr.com/28f9e38f288581eea0a2c2cd73016f9e/GettyImages-177102278.jpg",
        likes: 0,
        visits: 4500000
    },
    {
        name: "The great Pyramid of Giza",
        location: "Egypt",
        imageUrl: "https://content.skyscnr.com/73b2d0e7d3be0bb696808efda2ce7227/GettyImages-460860677.jpg",
        likes: 0,
        visits: 14700000
    },
    {
        name: "Niagara Falls",
        location: "EE.UU / Canada",
        imageUrl: "https://c.wallhere.com/photos/95/79/niagara_falls_fog_water_height_stream_people-1104006.jpg!d",
        likes: 0,
        visits: 30000000
    },
    {
        name: "Salar de Uyuni",
        location: "Bolivia",
        imageUrl: "https://blog.hotelnights.es/wp-content/uploads/2018/05/uyuni.jpg",
        likes: 0,
        visits: 300000
    },
    {
        name: "Copacabana ",
        location: "Bolivia",
        imageUrl: "https://unifranz.edu.bo/wp-content/uploads/2024/05/isla-del-sol1-1.jpg",
        likes: 0,
        visits: 91200
    },
    {
        name: "Volcán Licancabur",
        location: "Boliva",
        imageUrl: "https://boliviaturistica.com/wp-content/uploads/2019/06/destinos-turisticos-de-bolivia-volcan-licancabur.jpg ",
        likes: 0,
        visits: 154.918
    },
    {
        name: "Lago Titicaca ",
        location: "Boliva",
        imageUrl: "https://boliviaturistica.com/wp-content/uploads/2019/06/sitios-turisticos-de-bolivia-lago-titicaca.jpg",
        likes: 0,
        visits: 138000
    },
    {
        name: "Tiahuanaco",
        location: "Boliva",
        imageUrl: "https://boliviaturistica.com/wp-content/uploads/2019/06/top-mejores-destinos-bolivia-tiahuanaco.jpg",
        likes: 0,
        visits: 115000
    },
    {
        name: "Illimani/La Paz City",
        location: "Boliva",
        imageUrl: "https://boliviaesturismo.com/wp-content/uploads/2016/10/Mt-Illimani-La-Paz-Bolivia.jpg",
        likes: 0,
        visits: 1000000
    },
    
];

function createSiteCard(site) {
    return `
      <article class="site-card">
        <h3>${site.name}</h3>
        <img src="images/placeholder-image.jpg" data-src="${site.imageUrl}" alt="${site.name}" loading="lazy" class="lazy-image">
        <p>Location: ${site.location}</p>
        <p>${site.description}</p>
        <button class="like-button" data-site="${site.name}">
          Like (${site.likes})
        </button>
        <span class="visit-count">Visits: ${site.visits}</span>
      </article>
    `;
}

function lazyLoad() {
    const lazyImages = document.querySelectorAll('img.lazy-image');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const image = entry.target;
                image.src = image.dataset.src;
                image.classList.remove('lazy-image');
                imageObserver.unobserve(image);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
}


function setupLikeButtons() {
    document.querySelectorAll('.like-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const siteName = event.target.dataset.site;
            const site = sites.find(s => s.name === siteName);
            if (site) {
                site.likes++;
                event.target.textContent = `Like (${site.likes})`;
                event.target.classList.add('liked');
            }
        });
    });
}

const filterFunctions = {
    allPlaces: () => true,
    favorites: site => site.likes > 0,
    mostVisited: site => site.visits >= 1000000,
    leastVisited: site => site.visits < 1000000
};

function handleNavigation(filter) {
    console.log(`Applying filter: ${filter}`);
    let filteredSites = sites.filter(filterFunctions[filter]);
    
    if (filter === 'mostVisited' || filter === 'leastVisited') {
        filteredSites.sort((a, b) => b.visits - a.visits);
    }
    
    console.log(`Filtered sites (${filteredSites.length}):`, filteredSites);
    displaySites(filteredSites);
    document.getElementById('siteListTitle').textContent = `${filter.charAt(0).toUpperCase() + filter.slice(1)}`;
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('#primaryNav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const filter = event.target.id;
            handleNavigation(filter);
            
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            event.target.classList.add('active');
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
function displaySites(siteList) {
    const sitesContainer = document.getElementById('sites-container');
    if (siteList.length === 0) {
        sitesContainer.innerHTML = '<p>No sites match this filter.</p>';
    } else {
        sitesContainer.innerHTML = siteList.map(createSiteCard).join('');
        setupLikeButtons();
        lazyLoad();
    }
}
function updateFooter() {
    const currentYear = new Date().getFullYear();
    const lastModified = new Date().toLocaleString();
    document.getElementById('currentyear').textContent = currentYear;
    document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;
}

document.addEventListener('DOMContentLoaded', () => {
    displaySites(sites);
    updateFooter();
    setupMobileMenu();
    setupNavigation();
    lazyLoad();
});