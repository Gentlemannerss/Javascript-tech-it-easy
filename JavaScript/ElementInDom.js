/* Opdracht 2a*/
let tvSold = 0;
inventory.map((tv) => { //Hier mag geen let tvSold = inventory.map((tv) => { Staan. Waarom weet ik niet.
    tvSold += tv.sold;
});

console.log(tvSold);

/* Opdracht 2b*/
/*tvSold = document.getElementById("tvSold");  Dit werkt niet, volgens mij omdat je iets in tvSold wil doen..*/
document.getElementById("tvSold").textContent = tvSold;

/* Opdracht 2c*/
let tvInventory = 0;
inventory.map((tv) => {
    tvInventory += tv.originalStock;
});

console.log(tvInventory);

/* Opdracht 2d*/
document.getElementById("tvInventory").textContent = tvInventory;

/* Opdracht 2e*/
let tvLeftToSell = 0;

inventory.map((tv) => {
    tvLeftToSell = tv.originalStock - tv.sold;
})

/*tvLeftToSell = inventory.originalStock - inventory.sold;*/

console.log(tvLeftToSell);

document.getElementById("tvLeftToSell").textContent = tvLeftToSell;