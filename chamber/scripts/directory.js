const url = "data/members.json";
const cards = document.querySelector('#directory');
async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);
    displayMembers(data);
}
getData();

function displayMembers(members) {
    members.forEach((member) => {
        let card = document.createElement('section');
        let address = document.createElement('p');
        address.textContent = `Address: ${member.address}`;
        let website = document.createElement('p');
        if (member.website) {
            website.innerHTML = `<strong>Website:</strong> <a href="${member.website}" target="_blank" rel="noopener">${member.website}</a>`;
        } else {
            website.textContent = "Website: N/A";
        }
        let phone = document.createElement('p');
        let membership = document.createElement('p');
        membership.textContent = `Membership Level: ${member.membership}`;
        phone.textContent = `Phone: ${member.phone}`;
        let info = document.createElement('p');
        info.textContent = ` ${member.info}`;
        let name = document.createElement('h2');
        let portrait = document.createElement('img');
        name.textContent = `${member.name}`;
        portrait.setAttribute('src', member.image);
        portrait.setAttribute('alt', `Portrait of ${member.name} Company`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        card.appendChild(name);
        card.appendChild(portrait);
        card.appendChild(info);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(membership);
        card.appendChild(website);
        cards.appendChild(card);
    });
    console.log(cards);
}
const gridbutton = document.querySelector("#gridView");
const listbutton = document.querySelector("#listView");
const display = document.querySelector("#directory");
gridbutton.addEventListener("click", () => {
    display.classList.add("grid-view");
    display.classList.remove("list-view");
});
listbutton.addEventListener("click", () => {
    display.classList.add("list-view");
    display.classList.remove("grid-view");
});

