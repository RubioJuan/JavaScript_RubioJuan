/*Se desea visualizar la siguiente informacion de un usuario aleatorio,

1- Nombre
2- Email
3- Cumpleaños
4- Ubicacion o Direccion
5- Telefono
6- Contraseña

Ademas se tiene que visualizar la imagen de la persona

*/  


async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        throw new Error('Fetch failed: ' + error.message);
    }
}

async function getPerson() {
    try {
        const response = await fetchData('https://randomuser.me/api/?results=1');
        return response.results[0];
    } catch (error) {
        console.error(error);
    }
}

function createHeader(firstName, lastName) {
    return `<h2>${firstName} ${lastName}</h2>`;
}

function createImage(imageUrl) {
    return `<img src="${imageUrl}"><br><br>`;
}

function createEmail(email) {
    return `<p><strong>Email:</strong> ${email}</p>`;
}

function createBirthday(birthday) {
    return `<p><strong>Birthday:</strong> ${new Date(birthday).toLocaleDateString()}</p>`;
}

function createAddress(postcode, country) {
    return `<p><strong>Address:</strong> ${postcode} ${country}</p>`;
}

function createPhone(phone) {
    return `<p><strong>Phone:</strong> ${phone}</p>`;
}

function createPassword(password) {
    return `<p><strong>Password:</strong> ${password}</p>`;
}

function renderPerson(data) {
    const infoRandom = [
        createHeader(data.name.first, data.name.last),
        createImage(data.picture.large),
        createEmail(data.email),
        createBirthday(data.dob.date),
        createAddress(data.location.postcode, data.location.country),
        createPhone(data.phone),
        createPassword(data.login.password)
    ].join('');

    document.getElementById('contenedor').innerHTML = infoRandom;
}

async function init() {
    document.getElementById('randomButton').addEventListener('click', async () => {
        const person = await getPerson();
        renderPerson(person);
    });
}

window.onload = init;