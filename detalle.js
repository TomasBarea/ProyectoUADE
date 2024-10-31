console.log("script cargado")
const products = [
    {
        "id": 1,
        "Nombre": "BMW M5",
        "Sector": "Sedan deportivo",
        "Motor": "V8 biturbo de 4.4l",
        "HP": "+600hp",
        "Kilometros": "47.320 kilómetros",
        "Precio": "161.000,00",        
        "image": "bmw.webp"
    },
    {
        "id": 2,
        "Nombre": "Pagani Huayra",
        "Sector": "Superdeportivo",
        "Motor": "V12 biturbo de 6.0l",
        "HP": "+720hp",
        "Kilometros": "12.850 kilómetros",
        "Precio": "6.400.000,00",        
        "image": "pagani.webp"
    },
    {
        "id": 3,
        "Nombre": "Bugatti Chiron",
        "Sector": "Hyperdeportivo",
        "Motor": "W16 quad-turbo de 8.0l",
        "HP": "+1470hp",
        "Kilometros": "23.456 kilómetros",
        "Precio": "3.200.000,00",        
        "image": "buga2.jpg"
    },
    {
        "id": 4,
        "Nombre": "Porsche 911 Turbo S",
        "Sector": "Deportivo",
        "Motor": "6 cilindros con 2 turbocompresores",
        "HP": "640hp",
        "Kilometros": "34.789 kilómetros",
        "Precio": "800.000,00",      
        "image": "porsche1.jpg"
    },
    {
        "id": 5,
        "Nombre": "Porsche 911 ST",
        "Sector": "Deportivo",
        "Motor": "6 cilindros en boxer de 2.4l",
        "HP": "+240hp",
        "Kilometros": "58.320 kilómetros",
        "Precio": "990.000,00",
        "image": "porsche1.jpg"
    },
    {
        "id": 6,
        "Nombre": "Ferrari 458 Italia",
        "Sector": "Superdeportivo",
        "Motor": "V8 aspirado de 4.5l",
        "HP": "570hp",
        "Kilometros": "29.457 kilómetros",
        "Precio": "240.000,00",       
        "image": "ferra.jpeg"
    },
    {
        "id": 7,
        "Nombre": "Audi R8 quattro",
        "Sector": "Superdeportivo",
        "Motor": "V10 atmosférico de 5.2l",
        "HP": "+560hp",
        "Kilometros": "41.732 kilómetros",
        "Precio": "210.000,00",        
        "image": "r8.jpg"
    },
    {
        "id": 8,
        "Nombre": "Audi RS5",
        "Sector": "Deportivo",
        "Motor": "V12 biturbo de 2.9l",
        "HP": "444hp",
        "Kilometros": "3.540 kilómetros",
        "Precio": "120.000,00",        
        "image": "rs5.jpg"
    }
];



// Función para obtener parámetros de la URL
console.log("Script cargado");

function getProductIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    console.log("ID obtenido de la URL:", id);
    return id;
}

function renderProductDetail(id) {
    console.log("Renderizando detalle para ID:", id);
    const product = products.find(p => p.id == id);
    const productDetail = document.getElementById("product-detail");
    
    if (!productDetail) {
        console.error("El contenedor #product-detail no fue encontrado en el DOM.");
        return;
    }

    if (!product) {
        console.error("Producto no encontrado con ID:", id);
        productDetail.innerHTML = `<p>Producto no encontrado.</p>`;
        return;
    }

    productDetail.innerHTML = `
<div id="imagenDetail">
        <img src="../img/${product.image}" alt="${product.Nombre}" width="300" /> 
    </div>
    <div id="detalleDetail">
        <h2>${product.Nombre}</h2>
        <p><strong>Sector:</strong> ${product.Sector}</p>
        <div id="motor">
            <p><strong>Motor:</strong> ${product.Motor}</p>
            <p><strong>HP:</strong> ${product.HP}</p>
        </div>
        <p><strong>Kilometros:</strong> ${product.Kilometros}</p>
        <div id="precio">
            <p ><strong>Precio:</strong> US$${product.Precio}</p>
        </div>
        <div  id="botones">
            <button id="back-btn">Volver a los modelos</button>
            <button  id="comprar-btn">Comprar</button>
        </div>
        <div id="footer">
            <p>Este vehiculo es vendido por  <span>'Emerald Fusion Cars'</span> </p>
        </div>
    </div>
    `;

    document.getElementById("back-btn").addEventListener("click", () => {
        window.location.href = "../index.html#modelos";
    });
    document.getElementById("comprar-btn").addEventListener("click",() =>{
        window.location.href = "../pages/compra.html";
    })
}

const productId = getProductIdFromURL();
console.log("ID obtenido:", productId);
renderProductDetail(productId);
