// calculator.js

function calcularPesoEAqua() {
    var altura = parseFloat(document.getElementById("altura").value);
    var sexo = document.getElementById("sexo").value;

    // Fórmula para calcular o peso ideal
    var pesoIdeal;
    if (sexo === "masculino") {
        pesoIdeal = (altura - 100) - ((altura - 150) / 4);
    } else {
        pesoIdeal = (altura - 100) - ((altura - 150) / 2.5);
    }

    // Fórmula para calcular a quantidade de água recomendada por dia
    var aguaRecomendada = altura * 0.030;

    // Exibir resultados
    document.getElementById("result").innerHTML = "Seu peso ideal é: " + pesoIdeal.toFixed(2) + " kg.<br>";
    document.getElementById("result").innerHTML += "Quantidade recomendada de água por dia: " + aguaRecomendada.toFixed(2) + " litros.";
}
function processarLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Aqui você faria a validação do login
    // Por simplicidade, vamos apenas verificar se o usuário inseriu algo
    if (username && password) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "/Users/Usuario/Desktop/healthweb/perfil-de-usuario/HTML.html"; // Redireciona para a página de perfil
    } else {
        alert("Por favor, insira um usuário e senha.");
    }
}

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
let map;
let marker;
let infoWindow;

async function initMap() {
  // Request needed libraries.
  //@ts-ignore
  const [{ Map }, { AdvancedMarkerElement }] = await Promise.all([
    google.maps.importLibrary("marker"),
    google.maps.importLibrary("places"),
  ]);

  // Initialize the map.
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.749933, lng: -73.98633 },
    zoom: 13,
    mapId: "4504f8b37365c3d0",
    mapTypeControl: false,
  });

  //@ts-ignore
  const placeAutocomplete = new google.maps.places.PlaceAutocompleteElement();

  //@ts-ignore
  placeAutocomplete.id = "place-autocomplete-input";

  const card = document.getElementById("place-autocomplete-card");

  //@ts-ignore
  card.appendChild(placeAutocomplete);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(card);
  // Create the marker and infowindow
  marker = new google.maps.marker.AdvancedMarkerElement({
    map,
  });
  infoWindow = new google.maps.InfoWindow({});
  // Add the gmp-placeselect listener, and display the results on the map.
  //@ts-ignore
  placeAutocomplete.addEventListener("gmp-placeselect", async ({ place }) => {
    await place.fetchFields({
      fields: ["displayName", "formattedAddress", "location"],
    });
    // If the place has a geometry, then present it on a map.
    if (place.viewport) {
      map.fitBounds(place.viewport);
    } else {
      map.setCenter(place.location);
      map.setZoom(17);
    }

    let content =
      '<div id="infowindow-content">' +
      '<span id="place-displayname" class="title">' +
      place.displayName +
      "</span><br />" +
      '<span id="place-address">' +
      place.formattedAddress +
      "</span>" +
      "</div>";

    updateInfoWindow(content, place.location);
    marker.position = place.location;
  });
}

// Helper function to create an info window.
function updateInfoWindow(content, center) {
  infoWindow.setContent(content);
  infoWindow.setPosition(center);
  infoWindow.open({
    map,
    anchor: marker,
    shouldFocus: false,
  });
}

initMap();