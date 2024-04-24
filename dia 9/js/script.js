function fetchPersonaje() {
    let xhr = new XMLHttpRequest();
    let heroID = document.getElementById('heroID').value;
    console.log(heroID);
    let url = `https://swapi.py4e.com/api/people/${heroID}`;
    xhr.open('GET',url, true);
    xhr.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText);
            console.log(response);
            displayHero(response);
        } else if (this.readyState === 4){
            console.log('Error:', this.statusText);
        }
    };
    xhr.send();
    /*SEND es Es una forma rápida y 
    sencilla de enviar una respuesta HTTP al cliente desde el servidor.*/
}
function displayHero(data) {
    let heroInfo = document.getElementById('startHeroInfo');
    if (data.response === "error") {
        heroInfo.innerHTML = `<p>Error: ${data.error}</p>`;
    } else {
        let filmsList = data.films.map(film => `<li>${film}</li>`).join('');
        let vehicles = data.vehicles.map(vehicle => `<li>${vehicle}</li>`).join('');
        let starships = data.starships.map(starship => `<li>${starship}</li>`).join('');

        // Realiza una solicitud al planeta (homeworld)
        fetch(data.homeworld)
            .then(response => response.json())
            .then(homeworldData => {
                // Construye la información del planeta
                const planetInfo = `
                <p><strong>Name:</strong> ${homeworldData.name}</p>
                <p><strong>Rotation Period:</strong> ${homeworldData.rotation_period}</p>
                <p><strong>Orbital Period:</strong> ${homeworldData.orbital_period}</p>
                <p><strong>Diameter:</strong> ${homeworldData.diameter}</p>
                <p><strong>Climate:</strong> ${homeworldData.climate}</p>
                <p><strong>Gravity:</strong> ${homeworldData.gravity}</p>
                <p><strong>Terrain:</strong> ${homeworldData.terrain}</p>
                <p><strong>Surface Water:</strong> ${homeworldData.surface_water}</p>
                <p><strong>Population:</strong> ${homeworldData.population}</p>
                `;
            
                // Inserta la información del héroe y del planeta en el DOM
                heroInfo.innerHTML = `
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Height:</strong> ${data.height}</p>
                <p><strong>Mass:</strong> ${data.mass}</p>
                <p><strong>Hair Color:</strong> ${data.hair_color}</p>
                <p><strong>Skin Color:</strong> ${data.skin_color}</p>
                <p><strong>Eye Color:</strong> ${data.eye_color}</p>
                <p><strong>Birth Year:</strong> ${data.birth_year}</p>
                <p><strong>Gender:</strong> ${data.gender}</p>
                <p><strong><h5 style="color:blue";>Home World:</h5></strong>${planetInfo}</p>
                <p><strong><h5 style="color:blue";>Films:</h5></strong></p><ul>${filmsList}</ul>
                <p><strong><h5 style="color:blue";>Vehicles:</h5></strong></p>
                <ul>${vehicles}</ul>
                <p><strong><h5 style="color:blue";>StarShips:</h5></strong></p>
                <ul>${starships}</ul>
                <p><strong>Created:</strong> ${data.created}</p>
                <p><strong>Edited:</strong> ${data.edited}</p>
                <p><strong><h5 style="color:blue";>URL:</h5></strong> ${data.url}</p>
                `;
            })
            .catch(error => {
                console.error('Error fetching homeworld:', error);
                heroInfo.innerHTML = `<p>Error fetching homeworld</p>`;
            });

            /*
            fetch(data.films[0]) // Obtiene la URL de la primera película
            .then(response => response.json())
            .then(filmData => {
                // Construye la información de la película
                const filmInfo = `
                    <p><strong>Title:</strong> ${filmData.title}</p>
                    <p><strong>Episode:</strong> ${filmData.episode_id}</p>
                    <p><strong>Director:</strong> ${filmData.director}</p>
                    <p><strong>Producer:</strong> ${filmData.producer}</p>
                    <p><strong>Release Date:</strong> ${filmData.release_date}</p>
                `;
                
                // Inserta la información de la película en el DOM
                heroInfo.innerHTML += `
                    <p><strong><h5 style="color:blue;">First Film:</h5></strong></p>
                    ${filmInfo}
                `;
            })
            .catch(error => {
                console.error('Error fetching first film:', error);
                heroInfo.innerHTML += `<p>Error fetching first film</p>`;
            });*/

    }
}
