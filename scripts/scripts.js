document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            id: "fc-1888",
            name: "flux capacitor",
            "avg-rating": 4.5
        },
        {
            id: "fc-2050",
            name: "power laces",
            averagerating: 4.7
        },
        {
            id: "fs-1987",
            name: "time circuits",
            averagerating: 3.5
        },
        {
            id: "ac-2000",
            name: "low voltage reactor",
            averagerating: 3.9
        },
        {
            id: "jj-1969",
            name: "warp equalizer",
            averagerating: 5.0
        }
    ];

    const productSelect = document.getElementById('product');


    const defaultOption = document.createElement('option');
    defaultOption.value = "";
    defaultOption.textContent = "Select a Product ";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    productSelect.appendChild(defaultOption);

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;  
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});
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