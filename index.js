import {dataInfo} from "./data.js";
const data = JSON.parse(dataInfo);
console.log(data);

const divEl = document.querySelector(".content");

data.forEach(({ id, name, breed, age, image }) => {
    const cardEl = document.createElement('div');
    cardEl.classList.add('card');
    divEl.appendChild(cardEl);
    cardEl.style.display = 'inline-block';
    cardEl.style.margin = '10px';
    cardEl.style.textAlign = 'center';
    cardEl.style.backgroundColor = 'lightgray';
    cardEl.style.boxShadow = '5px 0 8px 4px gray';

    const img = document.createElement('img');
    img.src = image;
    img.width = 350;
    img.height = 200;
    cardEl.appendChild(img);

    const nameEl = document.createElement('p');
    nameEl.classList.add('name');
    nameEl.textContent = `Имя: ${name}`;
    nameEl.style.fontSize = '24px';
    nameEl.style.paddingBottom = '5px';
    nameEl.style.borderBottom = '1px dashed black';
    cardEl.appendChild(nameEl);

    const idEl = document.createElement('p');
    idEl.id = id;
    idEl.textContent = `ID: ${id}`;
    cardEl.appendChild(idEl);

    const breedEl = document.createElement('p');
    breedEl.classList.add('.breed');
    breedEl.textContent = `Порода: ${breed}`;
    cardEl.appendChild(breedEl);

    const ageEl = document.createElement('p');
    ageEl.classList.add('.age');
    ageEl.textContent = `Возраст: ${age}`;
    cardEl.appendChild(ageEl);
});