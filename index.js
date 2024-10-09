const products = [
    {
        "id": 1,
        "Nombre": "BMW M5",
        "Sector": "Sedan deportivo",
        "Motor": "V8 biturbo de 4.4l",
        "Precio": 1200000.00,
        "image": "./img/bmw.webp"
    },
    {
        "id": 2,
        "Nombre": "Pagani Huayra",
        "Sector": "Superdeportivo",
        "Motor": "V12 biturbo de 6.0l",
        "Precio": 1200000.00,
        "image": "./img/pagani.webp"
    },
    {
        "id": 3,
        "Nombre": "Bugatti Chiron",
        "Sector": "Hyperdeportivo",
        "Motor": "W16 quad-turbo de 8.0l",
        "Precio": 1200000.00,
        "image": "./img/buga2.jpg"
    },
    {
        "id": 4,
        "Nombre": "Porsche 911 Turbo S",
        "Sector": "Deportivo",
        "Motor": "6 cilindros con 2 turbocompresores",
        "Precio": 1200000.00,
        "image": "./img/porsche1.jpg"
    },
    {
        "id": 5,
        "Nombre": "Porsche 911 ST",
        "Sector": "Deportivo",
        "Motor": "6 cilindros en boxer de 2.4l",
        "Precio": 1200000.00,
        "image": "./img/porsche1.jpg"
    },
    {
        "id": 6,
        "Nombre": "Ferrari 458 Italia",
        "Sector": "Superdeportivo",
        "Motor": "V8 aspirado de 4.5l",
        "Precio": 1200000.00,
        "image": "./img/ferra.jpeg"
    },
    {
        "id": 7,
        "Nombre": "Audi R8 quattro",
        "Sector": "Superdeportivo",
        "Motor": "V10 atmosférico de 5.2l",
        "Precio": 1200000.00,
        "image": "./img/r8.jpg"
    },
    {
        "id": 8,
        "Nombre": "Audi RS5",
        "Sector": "Deportivo",
        "Motor": "V12 biturbo de 2.9l",
        "Precio": 1200000.00,
        "image": "./img/rs5.jpg"
    }
];

const productList = document.getElementById("product-list");
const productDetail = document.getElementById("product-detail");


function renderProductList() {
    products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <h2>${product.Nombre}</h2>
            <img src="${product.image}" alt="${product.Nombre}" width="150" />
            <p> ${product.Sector} </p>
            <p> ${product.Motor} </p>
            <p>Precio: $${product.Precio}</p>
            <button data-id="${product.id}">Ver detalles</button>
        `;

        
        productDiv.querySelector("button").addEventListener("click", (e) => {
            const productId = e.target.getAttribute("data-id");
            renderProductDetail(productId);
        });

        productList.appendChild(productDiv);
    });
}


function renderProductDetail(id) {
    const product = products.find(p => p.id == id);

    productDetail.innerHTML = `
        <h2>${product.Nombre}</h2>
        <img src="${product.image}" alt="${product.Nombre}" width="300" />
        <p><strong>Sector:</strong> ${product.Sector}</p>
        <p><strong>Motor:</strong> ${product.Motor}</p>
        <p><strong>Precio:</strong> $${product.Precio}</p>
        <button id="back-btn">Volver</button>
    `;

    
    productList.classList.add("hidden");
    productDetail.classList.remove("hidden");

    
    document.getElementById("back-btn").addEventListener("click", () => {
        productDetail.classList.add("hidden");
        productList.classList.remove("hidden");
    });
}


renderProductList();
