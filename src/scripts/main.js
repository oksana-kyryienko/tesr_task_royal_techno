const links = document.querySelectorAll("nav a");
const pages = document.querySelectorAll(".article");

function showPage(targetPage) {
  pages.forEach((page) => {
    if (page.id === targetPage) {
      page.classList.remove("hidden");
    } else {
      page.classList.add("hidden");
    }
  });
}

links.forEach((link) => {
  link.addEventListener("click", () => {
    const targetPage = link.getAttribute("data-target");
    showPage(targetPage);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  showPage("description");
});

const bookVisitButton = document.getElementById("book-visit");

bookVisitButton.addEventListener("click", () => {
  const targetPage = "contact";
  showPage(targetPage);
});


function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 50.4501, lng: 30.5234 },
    zoom: 10,
  });

  map.setOptions({styles: [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#181818"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1b1b1b"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#2c2c2c"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8a8a8a"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#373737"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3c3c3c"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#4e4e4e"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3d3d3d"
        }
      ]
    }
  ]})
}

const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slides__img');
const prevBtn = slider.querySelector('.prev');
const nextBtn = slider.querySelector('.next');
let currentIndex = 0;

function showSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    let slideIndex = (index + i) % slides.length;
    slides[slideIndex].style.display = 'block';
    slides[slideIndex].style.order = i;
  }
  currentIndex = index;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

showSlide(currentIndex);

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);


const burgerButton = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.menu__list');

burgerButton.addEventListener('click', function() {
    menu.classList.toggle('open');
    if (burgerButton.classList.contains('open')) {
      nav.style.display = 'none';
    } else {
      nav.style.display = 'flex';
    }
    burgerButton.classList.toggle('open');
});




