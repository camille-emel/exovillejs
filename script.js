console.log(`${cities.length} communes chargées`);
/***
 const cities =
 {"code":"01001","nom":"L'Abergement-Clémenciat",
 "population":767,"codesPostaux":["01400"],
 "codeDepartement":"01"}

 ***/


let largeCityPop = cities
    .filter(city => city.population > 300000)
    //sort avant car int -> string !!!
    .sort((a,b) => a.population - b.population)
    .map(city => city.nom + " " + city.population);

console.log(largeCityPop);
