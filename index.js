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
        "image": "./img/ferra.jpeg"
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

const carruselItems = document.getElementById("carrusel-items");

function renderProductList() {
    products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("carrusel-item");

        productDiv.innerHTML = `
            <div class="tarjeta">
                <h2>${product.Nombre}</h2>
                <img src="${product.image}" alt="${product.Nombre}" />
                <p>Sector: ${product.Sector}</p>
                <p>Precio: US$${product.Precio}</p>
                <a href="/pages/detalle.html?id=${product.id}">Ver detalles</a>
            </div>
        `;

        carruselItems.appendChild(productDiv);
    });

    // Mostrar el primer slide al cargar
    mostrarSlide(slideIndex);
}

let slideIndex = 0;
const itemsToShow = 4; // Número de productos a mostrar

function cambiarSlide(n) {
    mostrarSlide(slideIndex += n);
}

function mostrarSlide(n) {
    const slides = document.getElementsByClassName("carrusel-item");
    const totalSlides = slides.length;

    // Ajustar el índice para que no se salga de los límites
    if (n >= Math.ceil(totalSlides / itemsToShow)) { 
        slideIndex = 0; 
    }
    if (n < 0) { 
        slideIndex = Math.ceil(totalSlides / itemsToShow) - 1; 
    }

    // Calcular el desplazamiento
    const offset = -slideIndex * (100 / itemsToShow); 
    carruselItems.style.transform = `translateX(${offset}%)`;

    // Ocultar todos los elementos
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Mostrar los elementos correspondientes al índice actual
    for (let i = slideIndex * itemsToShow; i < Math.min((slideIndex + 1) * itemsToShow, totalSlides); i++) {
        slides[i].style.display = "block";  
    }
}

// Llama a la función para renderizar los productos
renderProductList();