import { attractions } from '../data/attractions.mjs';

// Display visitor message based on localStorage
function displayVisitorMessage() {
    const visitorMessageDiv = document.getElementById('visitor-message');
    const lastVisit = localStorage.getItem('lastVisit');
    const currentDate = Date.now();

    let messageHTML = '';
    let messageClass = '';

    if (!lastVisit) {
        // First visit
        messageHTML = '<p>Welcome! Let us know if you have any questions.</p>';
        messageClass = 'first-visit';
    } else {
        const lastVisitDate = parseInt(lastVisit);
        const timeDifference = currentDate - lastVisitDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference < 1) {
            // Less than a day
            messageHTML = '<p>Back so soon! Awesome!</p>';
            messageClass = 'recent-visit';
        } else {
            // More than a day
            const dayText = daysDifference === 1 ? 'day' : 'days';
            messageHTML = `<p>You last visited ${daysDifference} ${dayText} ago.</p>`;
            messageClass = '';
        }
    }

    visitorMessageDiv.innerHTML = messageHTML;
    visitorMessageDiv.classList.add(messageClass);

    // Add close button
    const closeButton = document.createElement('button');
    closeButton.textContent = '✕';
    closeButton.type = 'button';
    closeButton.setAttribute('aria-label', 'Close message');
    closeButton.style.display = 'none'; // Will be shown in CSS if needed
    closeButton.addEventListener('click', () => {
        visitorMessageDiv.style.display = 'none';
    });

    // Only add close button if message exists
    if (messageHTML) {
        const pTag = visitorMessageDiv.querySelector('p');
        if (pTag) {
            pTag.parentNode.insertBefore(closeButton, pTag.nextSibling);
        }
    }

    // Update localStorage with current date
    localStorage.setItem('lastVisit', currentDate.toString());
}

// Render attraction cards
function renderAttractions() {
    const container = document.getElementById('attractions-container');
    container.innerHTML = '';

    attractions.forEach((attraction, index) => {
        const card = document.createElement('article');
        card.className = 'attraction-card';
        card.style.gridArea = `card${index + 1}`;

        card.innerHTML = `
            <h2>${attraction.name}</h2>
            <figure>
                <img 
                    src="${attraction.image}" 
                    alt="${attraction.name}"
                    loading="lazy"
                    width="300"
                    height="200"
                >
            </figure>
            <address>${attraction.address}</address>
            <p>${attraction.description}</p>
            <button type="button" onclick="handleLearnMore('${attraction.name}')">Learn More</button>
        `;

        container.appendChild(card);
    });
}

// Handle Learn More button click
function handleLearnMore(attractionName) {
    alert(`Learn more about ${attractionName} - Coming soon!`);
}

// Make handleLearnMore global so onclick works
window.handleLearnMore = handleLearnMore;

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    displayVisitorMessage();
    renderAttractions();
});
