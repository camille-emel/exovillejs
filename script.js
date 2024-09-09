console.log(`${cities.length} communes chargées`);
//exemple obj
//{"code":"01001","nom":"L'Abergement-Clémenciat",
// "population":767,"codesPostaux":["01400"],"codeDepartement":"01"}

function ready(callback) {
    if (document.readyState !== 'loading') {
        callback();
    } else {
        document.addEventListener('DOMContentLoaded', callback);
    }
}

function main(result) {
// crée en mémoire une structure de données pour stocker un div
    const dumpDiv = document.getElementById('dump')
    dumpDiv.innerHTML = '';
    for (let i = 0; i < result.length; i++) {
        const card = createCard(result[i]);
// insère le div dans le DOM (cela l'affiche)
        dumpDiv.appendChild(card);
    }

}

ready(main);



function sortButton() {
    let rechercheDep = document.getElementById("inputDep").value;
    let rechercheCity = document.getElementById("inputCity").value.trim().toLowerCase();
    //Useless ??
    if (rechercheCity.length > 0 && rechercheDep.length > 0) {
        result = getCity_Dep(rechercheCity, rechercheDep);
    }

    else if (rechercheDep.length > 0) {
        result = getCitiesByDept(rechercheDep);
    } else if (rechercheCity.length > 0) {
        result = getCityByName(rechercheCity);
    }
    //ne marche pas ???
    else {
        result = cities;
    }
    let sortOptionElement = document.querySelector('input[name="sortOption"]:checked');
    if (sortOptionElement) {
        sort(result, sortOptionElement.id);
    }
    console.log(result);
    main(result);
}

function getCityByName(name) {
    return cities
        .filter(city => city.nom.trim().toLowerCase() === name)
}

function getCity_Dep(cityName, codeDep) {
    return cities
        .filter(city => city.codeDepartement === codeDep)
        .filter(city => city.nom.trim().toLowerCase() === cityName)
}

function getCitiesByDept(codeDep) {
    return cities
        .filter(Dep => Dep.codeDepartement === codeDep)
}

function createCard(city) {
    const card = document.createElement('div');
    card.setAttribute('class', 'card'); // Ajout de la classe CSS 'card' pour styliser

    const cityName = document.createElement('h2');
    cityName.textContent = city.nom;
    card.appendChild(cityName);

    const cityPopulation = document.createElement('p');
    cityPopulation.textContent = `Population: ${city.population}`;
    card.appendChild(cityPopulation);

    const cityPostalCodes = document.createElement('p');
    cityPostalCodes.textContent = `Code(s) Postal(aux): ${city.codesPostaux.join(', ')}`;
    card.appendChild(cityPostalCodes);

    const cityDept = document.createElement('p');
    cityDept.textContent = `Département: ${city.codeDepartement}`;
    card.appendChild(cityDept);

    return card;
}

function displayCity(city, numDepartements) {
    return getCitiesByDept(numDepartements)
        .map(city => city.codeDepartement + " - " + city.nom);
}

function sort(liste, sortOption) {
    switch (sortOption) {
        case "habAsc":
            liste.sort((a, b) => a.population - b.population);
            break;
        case "habDesc":
            liste.sort((a, b) => b.population - a.population);
            break;
        case "alphab":
            liste.sort((a, b) => a.nom.localeCompare(b.nom));
            break;
        case "alphab2":
            liste.sort((a, b) => b.nom.localeCompare(a.nom));
            break;
    }
}


function nombreHabbitantDep(numeroDepartement) {
    let total = 0;
    let departement = cities.filter(dep => dep.codeDepartement === numeroDepartement)
    departement.forEach(departement => {
        total += departement.population;
    });

    return total;
}

let grandeVille = cities
    .filter(city => city.population > 300000)
    .sort((a, b) => a.population - b.population)
    .map(city => city.nom + " " + city.population);
