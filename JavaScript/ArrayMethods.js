/* Opdracht 1a*/

const tvName = inventory.map((tv)=> {
    return tv.name
});

console.log(tvName);

/* Opdracht 1b*/

const soldOut = inventory.filter((tv) => {
    return tv.originalStock === tv.sold;
})

console.log(soldOut);

/* Opdracht 1c*/

const ambiLight = inventory.filter((tv) => {
    if (tv.options.ambiLight) {
        return true;
    }
    return false;
})

console.log(ambiLight);

/* Opdracht 1d*/

const orderdOnPrice = inventory.sort((a, b) => a.price - b.price);

console.log(orderdOnPrice);
