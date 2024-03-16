document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.npoint.io/7bbd3a59c401f616bb89')
    .then(response => response.json())
    .then(data => {
        const places = data.places;
        const citiesContainer = document.getElementById('citiesContainer');

        places.forEach(place => {
            const cityCard = document.createElement('div');
            cityCard.classList.add('city-card');

            const cityName = document.createElement('h2');
            cityName.classList.add('city-name');
            cityName.textContent = place.name;

            const cityInfo = document.createElement('p');
            cityInfo.classList.add('city-info');
            cityInfo.textContent = place.info;

            const cityImage = document.createElement('img');
            cityImage.classList.add('city-image');
            cityImage.src = place.image;
            cityImage.alt = place.name;

            cityCard.appendChild(cityName);
            cityCard.appendChild(cityInfo);
            cityCard.appendChild(cityImage);
            citiesContainer.appendChild(cityCard);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        const citiesContainer = document.getElementById('citiesContainer');
        citiesContainer.innerHTML = '<p>Error fetching data. Please try again later.</p>';
    });
});
