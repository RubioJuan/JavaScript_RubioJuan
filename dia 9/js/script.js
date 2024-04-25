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
            
                heroInfo.innerHTML = `
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Height:</strong> ${data.height}</p>
                <p><strong>Mass:</strong> ${data.mass}</p>
                <p><strong>Hair Color:</strong> ${data.hair_color}</p>
                <p><strong>Skin Color:</strong> ${data.skin_color}</p>
                <p><strong>Eye Color:</strong> ${data.eye_color}</p>
                <p><strong>Birth Year:</strong> ${data.birth_year}</p>
                <p><strong>Gender:</strong> ${data.gender}</p>
                <p><strong><h5 style="color:blue;">Home World:</h5></strong>${planetInfo}</p>
                <div id="filmsSection"></div>
                <div id="speciesSection"></div>
                <div id="vehiclesSection"></div>
                <div id="starshipsSection"></div>
                <p><strong  style="color:red;">Created:</strong> ${data.created}</p>
                <p><strong style="color:red;">Edited:</strong> ${data.edited}</p>
                <div id="urlSection"></div>
                `;

                fetch(data.films[0])
                    .then(response => response.json())
                    .then(filmData => {
                        const filmInfo = `
                            <p><strong>Title:</strong> ${filmData.title}</p>
                            <p><strong>Episode:</strong> ${filmData.episode_id}</p>
                            <p><strong>Director:</strong> ${filmData.director}</p>
                            <p><strong>Producer:</strong> ${filmData.producer}</p>
                            <p><strong>Release Date:</strong> ${filmData.release_date}</p>
                        `;

                        // Ingresa la información de la primera película dentro de la sección de películas
                        document.getElementById('filmsSection').innerHTML = `
                            <p><strong><h5 style="color:blue;">Film:</h5></strong></p>
                            ${filmInfo}
                        `;

                    fetch(data.vehicles[0])
                    .then(response => response.json())
                    .then(vehiclesData =>{
                        const vehiclesInfo = `
                        <p><strong>Name:</strong> ${vehiclesData.name}</p>
                        <p><strong>Model:</strong> ${vehiclesData.model}</p>
                        <p><strong>Mano Factura:</strong> ${vehiclesData.manufacturer}</p>
                        <p><strong>cost_in_credits:</strong> ${vehiclesData.cost_in_credits}</p>
                        <p><strong>length:</strong> ${vehiclesData.length}</p>
                        <p><strong>Max_atmosphering_speed:</strong> ${vehiclesData.max_atmosphering_speed}</p>
                        <p><strong>crew:</strong> ${vehiclesData.crew}</p>
                        <p><strong>passengers:</strong> ${vehiclesData.passengers}</p>
                        <p><strong>Cargo De capacidad:</strong> ${vehiclesData.cargo_capacity}</p>
                        <p><strong>consumables:</strong> ${vehiclesData.consumables}</p>
                        <p><strong>vehicle_class:</strong> ${vehiclesData.vehicle_class}</p>
                        `;

                         // Ingresa la información de la primera película dentro de la sección de películas
                        document.getElementById('vehiclesSection').innerHTML = `
                        <p><strong><h5 style="color:blue;">vehicles:</h5></strong></p>
                        ${vehiclesInfo}
                    `;
                        fetch(data.starships[0])
                        .then(response => response.json())
                        .then(starshipsData =>{
                            const starshipsInfo = `
                            <p><strong>Name:</strong> ${starshipsData.name}</p>
                            <p><strong>Model:</strong> ${starshipsData.model}</p>
                            <p><strong>Mano Factura:</strong> ${starshipsData.manufacturer}</p>
                            <p><strong>cost_in_credits:</strong> ${starshipsData.cost_in_credits}</p>
                            <p><strong>length:</strong> ${starshipsData.length}</p>
                            <p><strong>Max_atmosphering_speed:</strong> ${starshipsData.max_atmosphering_speed}</p>
                            <p><strong>crew:</strong> ${starshipsData.crew}</p>
                            <p><strong>passengers:</strong> ${starshipsData.passengers}</p>
                            <p><strong>Cargo De capacidad:</strong> ${starshipsData.cargo_capacity}</p>
                            <p><strong>consumables:</strong> ${starshipsData.consumables}</p>
                            <p><strong>hyperdrive_rating:</strong> ${starshipsData.hyperdrive_rating}</p>
                            <p><strong>MGLT:</strong> ${starshipsData.MGLT}</p>
                            <p><strong>starship_class:</strong> ${starshipsData.starship_class}</p>
                            `;
                                // Ingresa la información de la primera película dentro de la sección de películas
                                document.getElementById('starshipsSection').innerHTML = `
                                <p><strong><h5 style="color:blue;">Starships:</h5></strong></p>
                                ${starshipsInfo}
                                `;

                                fetch(data.url)
                                .then(response => response.json())
                                .then(urlData => {
                                    // Construye la información del planeta
                                    const urlInfo = `
                                    <p><strong>Name:</strong> ${urlData.name}</p>
                                    <p><strong>height:</strong> ${urlData.height}</p>
                                    <p><strong>Mass</strong> ${urlData.mass}</p>
                                    <p><strong>Hair_color:</strong> ${urlData.hair_color}</p>
                                    <p><strong>Skin_color:</strong> ${urlData.skin_color}</p>
                                    <p><strong>Eye_color:</strong> ${urlData.eye_color}</p>
                                    <p><strong>Birth_year:</strong> ${urlData.birth_year}</p>
                                    <p><strong>Gender:</strong> ${urlData.gender}</p>
                                    `;

                                    // Ingresa la información de la primera película dentro de la sección de películas
                                    document.getElementById('urlSection').innerHTML = `
                                    <p><strong><h5 style="color:blue;">URL:</h5></strong></p>
                                    ${urlInfo}
                                    `;

                                    fetch(data.species[0])
                                        .then(response => response.json())
                                        .then(speciesData =>{
                                            const speciesInfo = `
                                            <p><strong>Name:</strong> ${speciesData.name}</p>
                                            <p><strong>Classification:</strong> ${speciesData.classification}</p>
                                            <p><strong>Designation:</strong> ${speciesData.designation}</p>
                                            <p><strong>Average_height:</strong> ${speciesData.average_height}</p>
                                            <p><strong>Skin_colors:</strong> ${speciesData.skin_colors}</p>
                                            <p><strong>Hair_colors:</strong> ${speciesData.hair_colors}</p>
                                            <p><strong>Eye_colors:</strong> ${speciesData.eye_colors}</p>
                                            <p><strong>Average_lifespan:</strong> ${speciesData.average_lifespan}</p>
                                            <p><strong>Language:</strong> ${speciesData.language}</p>
                                            `;

                                            document.getElementById('speciesSection').innerHTML = `
                                            <p><strong><h5 style="color:blue;">Species:</h5></strong></p>
                                            ${speciesInfo}
                                            `;
                                    })
                                })
                            })
                        })
                    })
                    .catch(error => {
                        console.error('Error fetching  film:', error);
                        heroInfo.innerHTML += `<p>Error fetching  film</p>`;
                    });
            })
            .catch(error => {
                console.error('Error fetching homeworld:', error);
                heroInfo.innerHTML = `<p>Error fetching homeworld</p>`;
            })
            .catch(error => {
                console.error('Error fetching vehicles:', error);
                heroInfo.innerHTML = `<p>Error vehicles vehicles</p>`;
            })
            .catch(error => {
                console.error('Error fetching starships:', error);
                heroInfo.innerHTML = `<p>Error fetching starships</p>`;
            })
            .catch(error => {
                console.error('Error fetching url:', error);
                heroInfo.innerHTML = `<p>Error fetching url</p>`;
            })
            .catch(error => {
                console.error('Error fetching species:', error);
                heroInfo.innerHTML = `<p>Error fetching species</p>`;
            });
        }
    }

/*La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas.

appendChild: Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado.

DOM es una interfaz de programación para los documentos HTML y XML. Facilita una representación estructurada del documento y 
define de qué manera los programas pueden acceder, al fin de modificar, tanto su estructura, estilo y contenido. 


El método then() retorna una Promesa. Recibe dos argumentos: funciones callback para los casos de éxito y fallo de Promise.

InnerHTML devuelve o establece la sintaxis HTML describiendo los descendientes del elemento
*/
