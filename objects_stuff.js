var dog = {
"name": "name1",
"type" : "typ1"
}

var cats = {
"name": "name2",
"type" : "typ3"
}

console.log(dog);
console.log(cats);

var petNames = ["pe1", "pe2"];
console.log(petNames);
var pets = [dog, cats];
console.log(pets);

pets.push({"name": "some", "type": "dog"});
console.log(pets);

cats.age = 2;
console.log(cats);

pets[0].age = 14