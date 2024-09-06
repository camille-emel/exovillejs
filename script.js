console.log(`${cities.length} communes chargées`);
//{"code":"01001","nom":"L'Abergement-Clémenciat",
// "population":767,"codesPostaux":["01400"],
// "codeDepartement":"01"}

let grandeVille = cities
    .filter(city => city.population > 300000)
    .sort((a, b) => a.population - b.population)
    .map(city => city.nom + " " + city.population);

// console.log(grandeVille);

function getCitiesByDept(codeDep) {
 return cities
     .filter(Dep => Dep.codeDepartement === codeDep)
}

function displayCity(city, numDepartements) {
 return getCitiesByDept(numDepartements)
     .map(city => city.codeDepartement + " - " + city.nom);
}
// console.log(displayCity(cities[0], "38"))

let cities74 = getCitiesByDept("74")

// console.log(cities74)

function getCityByName(name) {
 return cities
     .filter(city => city.nom === name)
}

// console.log(getCityByName("Annecy"))

function nombreHabbitantDep(numeroDepartement) {
 let total = 0;
 let departement = cities.filter(dep => dep.codeDepartement === numeroDepartement)
 departement.forEach(departement => {
  total += departement.population;
 });

 return total;
}

console.log(nombreHabbitantDep("74"))