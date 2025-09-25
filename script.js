document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
  e.preventDefault();
  const target = document.querySelector(this.getAttribute('href'));
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});
});









document.getElementById('showMapBtn').addEventListener('click', function() {
    const mapDiv = document.getElementById('map');
    mapDiv.style.display = 'block';  

    
    const schoolLat = 48.2841;
    const schoolLng = 23.5595;

  
    const map = L.map('map').setView([schoolLat, schoolLng], 16);

  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

  
    L.marker([schoolLat, schoolLng]).addTo(map)
        .bindPopup('Школа у селі Репинне, Карпати')
        .openPopup();
});
