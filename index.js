const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat (name) {
    cats.pop();
}
function destructivelyRemoveFirstCat (name) {
    cats.shift();
}

function appendCat(name) {
    const newCats = [...cats];
    newCats.push(name)
    return newCats;
}

function prependCat(name) {
    const newCats = [...cats];
    newCats.unshift(name)
    return newCats;
}

function removeLastCat(name) {
    const newCats = [...cats];
    newCats.pop(name)
    return newCats;
}

function removeFirstCat(name) {
    const newCats = [...cats];
    newCats.shift(name)
    return newCats;
}
