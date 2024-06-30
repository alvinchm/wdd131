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