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

document.addEventListener('DOMContentLoaded', function() {
    const listOptions = document.getElementById('listOptions');
    const primaryNav = document.getElementById('primaryNav');
    
    listOptions.addEventListener('click', function() {
        primaryNav.classList.toggle('open');
        listOptions.classList.toggle('open');
        
        const isOpen = primaryNav.classList.contains('open');
        listOptions.setAttribute('aria-expanded', isOpen);
    });
});