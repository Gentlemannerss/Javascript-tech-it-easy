/* Opdracht 3a*/
const brandsList = document.getElementById("tvBrands");

const output = inventory.map((tv) => {
    brandsList.innerHTML += `<li>${tv.brand}</li>`;
});

/* Opdracht 3b*/

function displayTvBrands(tvArray) {
    const brandsList = document.getElementById("unUsed");

    tvArray.forEach((tv) => {
        brandsList.innerHTML += `<li>${tv.brand}</li>`;
    });
}

displayTvBrands(inventory);