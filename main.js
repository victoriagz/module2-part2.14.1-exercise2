'use strict';

const input = document.querySelector('.js-input-search');
const button = document.querySelector('.js-button-search');
const list = document.querySelector('.list-characters');

function renderList(characters) {
    list.innerHTML = ''; // Limpiar la lista antes de agregar nuevos elementos

    if (characters.length === 0) {
        list.innerHTML = 'No se encontraron personajes.';
        return;
    }

    characters.forEach(character => {
        const listItem = document.createElement('li');
        listItem.textContent = `Name: ${character.name}, Gender: ${character.gender}`;
        list.appendChild(listItem);
    });
}

const handleSearch = () => {
    const inputValue = input.value; 

    if (inputValue === '') {
        list.innerHTML = 'Por favor, ingresa un nombre de personaje';
        return;
    }

    const url = `https://swapi.py4e.com/api/people/?search=${inputValue}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const characters = data.results;
            renderList(characters);
        })
};

button.addEventListener('click', handleSearch);
