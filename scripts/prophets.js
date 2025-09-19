const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);
    displayProphets(data.prophets);
}
getProphetData();

function displayProphets(prophets) {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let birthDate = document.createElement('p');
        let birthPlace = document.createElement('p');
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}${getOrdinalSuffix(prophet.order)} Latter-day President`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
    console.log(cards);
}
function getOrdinalSuffix(order) {
    if (order % 10 === 1 && order % 100 !== 11) {
        return 'st';
    } else if (order % 10 === 2 && order % 100 !== 12) {
        return 'nd';
    } else if (order % 10 === 3 && order % 100 !== 13) {
        return 'rd';
    } else {
        return 'th';
    }
}