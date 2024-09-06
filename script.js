console.log(`${cities.length} communes chargées`);
//{"code":"01001","nom":"L'Abergement-Clémenciat",
// "population":767,"codesPostaux":["01400"],
// "codeDepartement":"01"}

let grandeVille = cities
    .filter(city => city.population > 300000)
    .sort((a, b) => a.population - b.population)
    .map(city => city.nom + " " + city.population);

console.log(grandeVille);

function getCitiesByDept(codeDep) {
    return cities
        .filter(Dep => Dep.codeDepartement === codeDep)
}

// console.log(getCitiesByDept("38"))


function displayCity(city, numDepartements) {
    return getCitiesByDept(numDepartements)
        .map(city => city.codeDepartement + " - " + city.nom);
}
console.log(displayCity(cities[0], "38"))
