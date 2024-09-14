import { getData } from "./getData.js";

const urlClothes = 'http://localhost:3000/clothes';

const contenedorFiltrado = document.createElement('div');
contenedorFiltrado.classList.add('row', 'filtered-cards');
document.querySelector('.container').appendChild(contenedorFiltrado);


const CardsFiltradas = (clothes) => {
    contenedorFiltrado.innerHTML = '';
    clothes.forEach(ropa => {
        const card = `
            <div class="col-md-3">
                <div class="card">
                    <img src="${ropa.image1}" class="card-img-top" alt="${ropa.name}">
                    <div class="card-body">
                        <h5 class="card-title">${ropa.name}</h5>
                        <p class="card-price">Precio: $${ropa.price}</p>
                        <p class="card-collection">Color: ${ropa.collection}</p>
                        
                    </div>
                </div>
            </div>
        `;
        contenedorFiltrado.innerHTML += card;
    });
};


const filtrarPorColeccion = async (coleccion) => {
    const ropa = await getData(urlClothes);
    const ropaFiltrada = ropa.filter(item => item.collection === coleccion);
    CardsFiltradas(ropaFiltrada);
};

document.getElementById('Azul').addEventListener('click', () => filtrarPorColeccion('Azul'));
document.getElementById('Rayado').addEventListener('click', () => filtrarPorColeccion('Rayado'));
document.getElementById('Negro').addEventListener('click', () => filtrarPorColeccion('Negro'));
document.getElementById('Blanco').addEventListener('click', () => filtrarPorColeccion('Blanco'));
