console.log(`${cities.length} communes chargées`);

function ready(callback) {
    if (document.readyState !== 'loading') {
        callback();
    } else {
        document.addEventListener('DOMContentLoaded', callback);
    }
}

// insérer votre code ci-dessous

function main() {
// crée en mémoire une structure de données pour stocker un div
    for(let i = 0; i< cities74.length;i++){
        const el = document.createElement('div');
        el.innerHTML = cities74[i].nom;
// insère le div dans le DOM (cela l'affiche)
        document.body.appendChild(el);}

}

ready(main);

let grandeVille = cities
    .filter(city => city.population > 300000)
    .sort((a, b) => a.population - b.population)
    .map(city => city.nom + " " + city.population);

let cities74 = getCitiesByDept("74");
console.log(cities74);

function getCitiesByDept(codeDep) {
    return cities
        .filter(Dep => Dep.codeDepartement === codeDep)
}

function displayCity(city, numDepartements) {
    return getCitiesByDept(numDepartements)
        .map(city => city.codeDepartement + " - " + city.nom);
}


function getCityByName(name) {
    return cities
        .filter(city => city.nom === name)
}

function nombreHabbitantDep(numeroDepartement) {
    let total = 0;
    let departement = cities.filter(dep => dep.codeDepartement === numeroDepartement)
    departement.forEach(departement => {
        total += departement.population;
    });

    return total;
}
