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
                    <p>Name: ${homeworldData.name}</p>
                    <p>Rotation Period: ${homeworldData.rotation_period}</p>
                    <p>Orbital Period: ${homeworldData.orbital_period}</p>
                    <p>Diameter: ${homeworldData.diameter}</p>
                    <p>Climate: ${homeworldData.climate}</p>
                    <p>Gravity: ${homeworldData.gravity}</p>
                    <p>Terrain: ${homeworldData.terrain}</p>
                    <p>Surface Water: ${homeworldData.surface_water}</p>
                    <p>Population: ${homeworldData.population}</p>
                `;
                
                // Inserta la información del héroe y del planeta en el DOM
                heroInfo.innerHTML = `
                    <p>Name: ${data.name}</p>
                    <p>Height: ${data.height}</p>
                    <p>Mass: ${data.mass}</p>
                    <p>Hair Color: ${data.hair_color}</p>
                    <p>Skin Color: ${data.skin_color}</p>
                    <p>Eye Color: ${data.eye_color}</p>
                    <p>Birth Year: ${data.birth_year}</p>
                    <p>Gender: ${data.gender}</p>
                    <p>Home World:</p>
                    ${planetInfo}
                    <ul class="list-group">
                        <p>Films: ${filmsList}</p>
                    </ul> 
                    <br>
                    <p>Spencies: ${data.species}</p>
                    <ul class="list-group">
                        <p>Vehicles: ${vehicles}</p>
                    </ul>
                    <ul class="list-group">
                        <p>StarShips: ${starships}</p>
                    </ul>
                    <p>Created: ${data.created}</p>
                    <p>Edited: ${data.edited}</p>
                    <p>URL: ${data.url}</p>
                `;
            })
            .catch(error => {
                console.error('Error fetching homeworld:', error);
                heroInfo.innerHTML = `<p>Error fetching homeworld</p>`;
            });
    }
}
