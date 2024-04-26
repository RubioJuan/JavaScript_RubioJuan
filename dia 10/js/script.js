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
                <table>
                    <tr>
                        <td><strong>Name:</strong></td>
                        <td>${homeworldData.name}</td>
                    </tr>
                    <tr>
                        <td><strong>Rotation Period:</strong></td>
                        <td>${homeworldData.rotation_period}</td>
                    </tr>
                    <tr>
                        <td><strong>Orbital Period:</strong></td>
                        <td>${homeworldData.orbital_period}</td>
                    </tr>
                    <tr>
                        <td><strong>Diameter:</strong></td>
                        <td>${homeworldData.diameter}</td>
                    </tr>
                    <tr>
                        <td><strong>Climate:</strong></td>
                        <td>${homeworldData.climate}</td>
                    </tr>
                    <tr>
                        <td><strong>Gravity:</strong></td>
                        <td>${homeworldData.gravity}</td>
                    </tr>
                    <tr>
                        <td><strong>Terrain:</strong></td>
                        <td>${homeworldData.terrain}</td>
                    </tr>
                    <tr>
                        <td><strong>Surface Water:</strong></td>
                        <td>${homeworldData.surface_water}</td>
                    </tr>
                    <tr>
                        <td><strong>Population:</strong></td>
                        <td>${homeworldData.population}</td>
                    </tr>
                </table>
                `;
            
                heroInfo.innerHTML = `
                <table>
                <tr>
                    <td><strong>Name:</strong></td>
                    <td>${data.name}</td>
                </tr>
                <tr>
                    <td><strong>Height:</strong></td>
                    <td>${data.height}</td>
                </tr>
                <tr>
                    <td><strong>Mass:</strong></td>
                    <td>${data.mass}</td>
                </tr>
                <tr>
                    <td><strong>Hair Color:</strong></td>
                    <td>${data.hair_color}</td>
                </tr>
                <tr>
                    <td><strong>Skin Color:</strong></td>
                    <td>${data.skin_color}</td>
                </tr>
                <tr>
                    <td><strong>Eye Color:</strong></td>
                    <td>${data.eye_color}</td>
                </tr>
                <tr>
                    <td><strong>Birth Year:</strong></td>
                    <td>${data.birth_year}</td>
                </tr>
                <tr>
                    <td><strong>Gender:</strong></td>
                    <td>${data.gender}</td>
                </tr>
                <tr>
                    <td><strong>Home World:</strong></td>
                    <td>${planetInfo}</td>
                </tr>
                <tr>
                    <td colspan="2">
                        <div id="filmsSection"></div>
                        <div id="speciesSection"></div>
                        <div id="vehiclesSection"></div>
                        <div id="starshipsSection"></div>
                    </td>
                </tr>
                <tr>
                    <td><strong>Created:</strong></td>
                    <td>${data.created}</td>
                </tr>
                <tr>
                    <td><strong>Edited:</strong></td>
                    <td>${data.edited}</td>
                </tr>
                <tr>
                    <td colspan="2">
                        <div id="urlSection"></div>
                    </td>
                </tr>
            </table>
                `;
                /* .map llama a la función callback provista una vez por
                elemento de un array, en orden, y construye un nuevo array con los resultados.


                .map =  se utiliza principalmente para iterar sobre todos los elementos de un array y ejecutar
                una función en cada uno de ellos, devolviendo un nuevo array con los resultados de esa función aplicada
                a cada elemento. Es una forma muy útil de transformar los elementos de un array sin modificar el array original.
                
                
                Una función de callback es una función que se pasa a otra función como un argumento,
                que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.
                 */

                // Fetch de Peliculas
                const filmPromises = data.films.map(filmUrl =>
                    fetch(filmUrl)
                        .then(response => response.json())
                        .then(filmData => {
                            const filmInfo = `<table>
                            <tr>
                                <td><strong>Title:</strong></td>
                                <td>${filmData.title}</td>
                            </tr>
                            <tr>
                                <td><strong>Episode:</strong></td>
                                <td>${filmData.episode_id}</td>
                            </tr>
                            <tr>
                                <td><strong>Director:</strong></td>
                                <td>${filmData.director}</td>
                            </tr>
                            <tr>
                                <td><strong>Producer:</strong></td>
                                <td>${filmData.producer}</td>
                            </tr>
                            <tr>
                                <td><strong>Release Date:</strong></td>
                                <td>${filmData.release_date}</td>
                            </tr>
                        </table>
                            `;
                            return filmInfo;
                        })
                );

                    // Fetch de Vehiculos
                    const vehiclePromises = data.vehicles.map(vehicleUrl =>
                        fetch(vehicleUrl)
                        .then(response => response.json())
                        .then(vehicleData => {
                            const vehicleInfo = `
                            <table>
                            <tr>
                                <td><strong>Name:</strong></td>
                                <td>${vehicleData.name}</td>
                            </tr>
                            <tr>
                                <td><strong>Model:</strong></td>
                                <td>${vehicleData.model}</td>
                            </tr>
                            <tr>
                                <td><strong>Manufacturer:</strong></td>
                                <td>${vehicleData.manufacturer}</td>
                            </tr>
                            <tr>
                                <td><strong>Cost in credits:</strong></td>
                                <td>${vehicleData.cost_in_credits}</td>
                            </tr>
                            <tr>
                                <td><strong>Length:</strong></td>
                                <td>${vehicleData.length}</td>
                            </tr>
                            <tr>
                                <td><strong>Max Atmosphering Speed:</strong></td>
                                <td>${vehicleData.max_atmosphering_speed}</td>
                            </tr>
                            <tr>
                                <td><strong>Crew:</strong></td>
                                <td>${vehicleData.crew}</td>
                            </tr>
                            <tr>
                                <td><strong>Passengers:</strong></td>
                                <td>${vehicleData.passengers}</td>
                            </tr>
                            <tr>
                                <td><strong>Cargo Capacity:</strong></td>
                                <td>${vehicleData.cargo_capacity}</td>
                            </tr>
                            <tr>
                                <td><strong>Consumables:</strong></td>
                                <td>${vehicleData.consumables}</td>
                            </tr>
                            <tr>
                                <td><strong>Vehicle Class:</strong></td>
                                <td>${vehicleData.vehicle_class}</td>
                            </tr>
                        </table>
                        `;
                        return vehicleInfo;
                    })
            );
            
                // Fetch de Nave Estelar
                const starshipPromises = data.starships.map(starshipUrl =>
                    fetch(starshipUrl)
                        .then(response => response.json())
                        .then(starshipData => {
                            const starshipInfo = `
                            <table>
                            <tr>
                                <td><strong>Name:</strong></td>
                                <td>${starshipData.name}</td>
                            </tr>
                            <tr>
                                <td><strong>Model:</strong></td>
                                <td>${starshipData.model}</td>
                            </tr>
                            <tr>
                                <td><strong>Manufacturer:</strong></td>
                                <td>${starshipData.manufacturer}</td>
                            </tr>
                            <tr>
                                <td><strong>Cost in credits:</strong></td>
                                <td>${starshipData.cost_in_credits}</td>
                            </tr>
                            <tr>
                                <td><strong>Length:</strong></td>
                                <td>${starshipData.length}</td>
                            </tr>
                            <tr>
                                <td><strong>Max Atmosphering Speed:</strong></td>
                                <td>${starshipData.max_atmosphering_speed}</td>
                            </tr>
                            <tr>
                                <td><strong>Crew:</strong></td>
                                <td>${starshipData.crew}</td>
                            </tr>
                            <tr>
                                <td><strong>Passengers:</strong></td>
                                <td>${starshipData.passengers}</td>
                            </tr>
                            <tr>
                                <td><strong>Cargo Capacity:</strong></td>
                                <td>${starshipData.cargo_capacity}</td>
                            </tr>
                            <tr>
                                <td><strong>Consumables:</strong></td>
                                <td>${starshipData.consumables}</td>
                            </tr>
                            <tr>
                                <td><strong>Hyperdrive Rating:</strong></td>
                                <td>${starshipData.hyperdrive_rating}</td>
                            </tr>
                            <tr>
                                <td><strong>MGLT:</strong></td>
                                <td>${starshipData.MGLT}</td>
                            </tr>
                            <tr>
                                <td><strong>Starship Class:</strong></td>
                                <td>${starshipData.starship_class}</td>
                            </tr>
                        </table>
                            `;
                            return starshipInfo;
                        })
                );

                // Fetch de la URL
                const urlPromise = fetch(data.url)
                    .then(response => response.json())
                    .then(urlData => {
                        const urlInfo = `
                        <table>
                        <tr>
                            <td><strong>Name:</strong></td>
                            <td>${urlData.name}</td>
                        </tr>
                        <tr>
                            <td><strong>Height:</strong></td>
                            <td>${urlData.height}</td>
                        </tr>
                        <tr>
                            <td><strong>Mass:</strong></td>
                            <td>${urlData.mass}</td>
                        </tr>
                        <tr>
                            <td><strong>Hair Color:</strong></td>
                            <td>${urlData.hair_color}</td>
                        </tr>
                        <tr>
                            <td><strong>Skin Color:</strong></td>
                            <td>${urlData.skin_color}</td>
                        </tr>
                        <tr>
                            <td><strong>Eye Color:</strong></td>
                            <td>${urlData.eye_color}</td>
                        </tr>
                        <tr>
                            <td><strong>Birth Year:</strong></td>
                            <td>${urlData.birth_year}</td>
                        </tr>
                        <tr>
                            <td><strong>Gender:</strong></td>
                            <td>${urlData.gender}</td>
                        </tr>
                    </table>
                        `;
                        return urlInfo;
                    });

                 // Fetch de la especie
                const speciesPromise = fetch(data.species)
                .then(response => response.json())
                .then(speciesData => {
                    const speciesInfo = `
                    <table>
                    <tr>
                        <td><strong>Name:</strong></td>
                        <td>${speciesData.name}</td>
                    </tr>
                    <tr>
                        <td><strong>Classification:</strong></td>
                        <td>${speciesData.classification}</td>
                    </tr>
                    <tr>
                        <td><strong>Designation:</strong></td>
                        <td>${speciesData.designation}</td>
                    </tr>
                    <tr>
                        <td><strong>Average Height:</strong></td>
                        <td>${speciesData.average_height}</td>
                    </tr>
                    <tr>
                        <td><strong>Skin Colors:</strong></td>
                        <td>${speciesData.skin_colors}</td>
                    </tr>
                    <tr>
                        <td><strong>Hair Colors:</strong></td>
                        <td>${speciesData.hair_colors}</td>
                    </tr>
                    <tr>
                        <td><strong>Eye Colors:</strong></td>
                        <td>${speciesData.eye_colors}</td>
                    </tr>
                    <tr>
                        <td><strong>Average Lifespan:</strong></td>
                        <td>${speciesData.average_lifespan}</td>
                    </tr>
                    <tr>
                        <td><strong>Language:</strong></td>
                        <td>${speciesData.language}</td>
                    </tr>
                </table>
                    `;
                    return speciesInfo;
                });

                // Espera a que todas las promesas se completen
                Promise.all([Promise.all(filmPromises), Promise.all(vehiclePromises), Promise.all(starshipPromises),urlPromise, speciesPromise])
                // No se le pone el Promise.all a urlPromise y a speciesPromise, porque son promesas individuales
                .then(([filmInfos, vehicleInfos, starshipInfos, urlInfo, speciesInfo]) => {
                    // Construye el HTML para las películas
                        const filmsHtml = filmInfos.map(filmInfo => `
                            <p><strong><h5 style="color:blue;">Film:</h5></strong></p>
                            ${filmInfo}
                        `).join('');
                        document.getElementById('filmsSection').innerHTML = filmsHtml;

                        // Construye el HTML para los vehículos
                        const vehiclesHtml = vehicleInfos.map(vehicleInfo => `
                            <p><strong><h5 style="color:blue;">Vehicle:</h5></strong></p>
                            ${vehicleInfo}
                        `).join('');
                        document.getElementById('vehiclesSection').innerHTML = vehiclesHtml;

                        // Construye el HTML para las naves estelares
                        const starshipsHtml = starshipInfos.map(starshipInfo => `
                            <p><strong><h5 style="color:blue;">Starship:</h5></strong></p>
                            ${starshipInfo}
                        `).join('');
                        document.getElementById('starshipsSection').innerHTML = starshipsHtml;

                        // Agrega el HTML para la URL
                        document.getElementById('urlSection').innerHTML = `
                            <p><strong><h5 style="color:blue;">URL:</h5></strong></p>
                            ${urlInfo}
                        `;
                           // Agrega el HTML para la especie
                        document.getElementById('speciesSection').innerHTML = `
                        <p><strong><h5 style="color:blue;">Species:</h5></strong></p>
                        ${speciesInfo}
                    `;
                    })
                    .catch(error => {
                        console.error('Error fetching URL:', error);
                        return '<p>Error fetching URL</p>';
                    })
                    .catch(error => {
                        console.error('Error fetching data:', error);
                        heroInfo.innerHTML += '<p>Error fetching data</p>';
                    })
                    .catch(error => {
                        console.error('Error fetching species:', error);
                        return '<p>Error fetching species</p>';
                    })
                    .catch(error => {
                        console.error('Error fetching vehicles:', error);
                        heroInfo.innerHTML = '<p>Error fetching vehicles</p>';
                    })
                    .catch(error => {
                        console.error('Error fetching homeworld:', error);
                        heroInfo.innerHTML = '<p>Error fetching homeworld</p>';
                    })
                    .catch(error => {
                        console.error('Error fetching starships:', error);
                        heroInfo.innerHTML = '<p>Error fetching starships</p>';
                    });
                })
            }
        }

/*La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas.

appendChild: Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado.

DOM es una interfaz de programación para los documentos HTML y XML. Facilita una representación estructurada del documento y
define de qué manera los programas pueden acceder, al fin de modificar, tanto su estructura, estilo y contenido.


El método then() retorna una Promesa. Recibe dos argumentos: funciones callback para los casos de éxito y fallo de Promise.

InnerHTML devuelve o establece la sintaxis HTML describiendo los descendientes del elemento
*/