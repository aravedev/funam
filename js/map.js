var map = L.map("map").setView([6.3777, -75.4453], 17);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);

var marker = L.marker([6.3777, -75.4453]).addTo(map);
