// ==========================================
// 1. Declareer een variabele en sla daar een array met vier jaartallen (zoals 2021) in op. Log dit in de terminal.
// ==========================================
const yearStamp = {
    year: [1987,1988,1989,1990],
}
console.log(yearStamp.year);

// ==========================================
// 2. Declareer een variabele en sla daar een array met drie van jouw hobbies (zoals muziek luisteren en koekjes eten) in op. Log dit in de terminal.
// ==========================================
const collectionHobbys = {
    hobby: ["muziek luisteren", "gamen", "klussen"],
}
console.log(collectionHobbys.hobby);

// ==========================================
// 3a. Declareer een variabele met daarin een array met de waardes 3, 4, 5, 7 en 2
// 3b. Zorg er nu voor dat je de eerste waarde uit die array in de terminal logt             // geeft 3
// ==========================================
const numbers = {
    randomNumbers: [3, 4, 5, 7, 2],
}
console.log(numbers.randomNumbers[0]);

// ==========================================
// 4a. Declareer een variabele met daarin een array met de waardes groen, geel, rood, paars, blauw en oranje.
// Nu gaan we de waardes weer aanspreken!
// 4b. Zorg ervoor dat je de vijfde waarde uit bovenstaande array in de terminal logt       // geeft blauw
// 4c. Zorg ervoor dat je de tweede waarde uit bovenstaande array in de terminal logt       // geeft geel
// ==========================================
const rainbow = {
    colors: ["groen", "geel", "rood", "aars", "blauw", "oranje"],
}
console.log(rainbow.colors[4]);
console.log(rainbow.colors[1]);

// ==========================================
// 5a. Declareer een variabele met daarin een array met de waardes 21, 22, 23, 25, 25 en log dit in de terminal
// 5b. Overschrijf één van de items in de array dusdanig dat de cijferreeks netjes doorloopt (je mag de declaratie op de vorige regel niet aanpassen).
// 5c. Log de array in de terminal                                                          // geeft [ 21, 22, 23, 24, 25 ]
// ==========================================
const values = {
    randomValues: [ 21, 22, 23, 25, 25],
}
values.randomValues[3] = 24;
console.log(values.randomValues);

// ==========================================
// 6a. Declareer een variabele met daarin een array met de waardes bladerdeeg, knoflook, spinazie
// 6b. Overschrijf daarna de waarde bladerdeeg met lasagne bladen (je mag de declaratie op de vorige regel niet aanpassen).
// 6c. Log de de array in de terminal                                                       // geeft [ 'lasagne bladen', 'knoflook', 'spinazie' ]
// 6d. Log de lengte van de array in de terminal                                            // geeft 3
// ==========================================
const recipe = {
    ingredients: ["bladerdeeg", "knoflook", "spinazie"],
}
recipe.ingredients[0] = "lasagna bladen";
console.log(recipe.ingredients);
console.log(recipe.ingredients.length);