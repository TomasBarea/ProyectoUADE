const products = [
    {
        "id": 1,
        "Nombre": "BMW M5",
        "Sector": "Sedan deportivo",
        "Motor": "V8 biturbo de 4.4l",
        "Precio": "161.000,00",
        "image": "./img/bmw.webp"
    },
    {
        "id": 2,
        "Nombre": "Pagani Huayra",
        "Sector": "Superdeportivo",
        "Motor": "V12 biturbo de 6.0l",
        "Precio": "6.400.000,00",
        "image": "./img/pagani.webp"
    },
    {
        "id": 3,
        "Nombre": "Bugatti Chiron",
        "Sector": "Hyperdeportivo",
        "Motor": "W16 quad-turbo de 8.0l",
        "Precio": "3.200.000,00",
        "image": "./img/buga2.jpg"
    },
    {
        "id": 4,
        "Nombre": "Porsche 911 Turbo S",
        "Sector": "Deportivo",
        "Motor": "6 cilindros con 2 turbocompresores",
        "Precio": "800.000,00",
        "image": "./img/porsche1.jpg"
    },
    {
        "id": 5,
        "Nombre": "Porsche 911 ST",
        "Sector": "Deportivo",
        "Motor": "6 cilindros en boxer de 2.4l",
        "Precio": "990.000,00",
        "image": "./img/porsche2.jpg"
    },
    {
        "id": 6,
        "Nombre": "Ferrari 458 Italia",
        "Sector": "Superdeportivo",
        "Motor": "V8 aspirado de 4.5l",
        "Precio": "240.000,00",
        "image": "./img/ferrariItalia.avif"
    },
    {
        "id": 7,
        "Nombre": "Audi R8 quattro",
        "Sector": "Superdeportivo",
        "Motor": "V10 atmosférico de 5.2l",
        "Precio": "210.000,00",
        "image": "./img/r8.jpg"
    },
    {
        "id": 8,
        "Nombre": "Audi RS5",
        "Sector": "Deportivo",
        "Motor": "V12 biturbo de 2.9l",
        "Precio": "120.000,00",
        "image": "./img/rs5.jpg"
    }
];



document.getElementById('menuToggle').addEventListener('click', function () {
    const links = document.getElementById('links');
    links.classList.toggle('show'); // Alternar la clase para mostrar/ocultar
});



const carruselItems = document.getElementById("carrusel-items");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

let currentIndex = 0;
let itemsToShow; // Calculado dinámicamente según el tamaño de la pantalla
const totalItems = products.length;

function calculateItemsToShow() {
    // Cambia la cantidad de elementos mostrados según el ancho de la pantalla
    itemsToShow = window.innerWidth <= 375 ? 1 : 4; // 1 para pantallas pequeñas, 4 para grandes
}

function renderProductList() {
    carruselItems.innerHTML = "";

    products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("carrusel-item");

        productDiv.innerHTML = `
            <div class="tarjeta">
                <img src="${product.image}" alt="${product.Nombre}" />
                <h2>${product.Nombre}</h2>
                <p>Sector: ${product.Sector}</p>
                <p>Precio: US$${product.Precio}</p>
                <a href="/pages/detalle.html?id=${product.id}"><button>Ver detalles</button></a>
            </div>
        `;
        carruselItems.appendChild(productDiv);
    });

    updateCarousel();
}

function updateCarousel() {
    const itemWidth = carruselItems.firstElementChild.getBoundingClientRect().width;
    const offset = -(currentIndex * itemWidth);  
    carruselItems.style.transform = `translateX(${offset}px)`;  
}

nextButton.addEventListener("click", () => {
    if (currentIndex < totalItems - itemsToShow) {
        currentIndex++;
    } else {
        currentIndex = 0;  
    }
    updateCarousel();
});

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - itemsToShow;  
    }
    updateCarousel();
});

window.addEventListener('resize', () => {
    calculateItemsToShow();
    updateCarousel();
});

calculateItemsToShow();
renderProductList();



