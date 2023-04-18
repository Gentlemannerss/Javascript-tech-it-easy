/* Opdracht 4a*/
function nameTv(arrayTV) {
    return arrayTV.map((tv) => {
        return `${tv.brand} ${tv.type} - ${tv.name}`;
    });
}
nameTv(inventory);

function name(banaanName){
    return `${banaanName.brand} ${banaanName.type} - ${banaanName.name}`
}

function price(banaanPrice){
    return `${banaanPrice.price}`
}

function sizes(banaanSizes){
    return banaanSizes.map((screensize) => {
        return `${screensize} inch (${screensize * 2.54} cm)}`
    });
}

function All(AllTv){
    const container = document.getElementById('test')
    const tvList = AllTv.map((tv) => {
        return `
        <li>
            <h3>${name(tv)}</h3>
            <h4>${price(tv)}</h4> 
            <h4>${sizes(tv.availableSizes)}</h4>
        </li>
`
    })
    container.innerHTML = `${tvList.join('')}`
}
All(inventory);

/*const tvNames = nameTv(inventory);
document.getElementById("nameTV").textContent = tvNames.join(", ");*/


/* Opdracht 4b*/
/* optie 1:
function priceTV(arrayTV) {
    arrayTV.find((tv) => {
        return `€${tv.price},-`
    })
}*/

function priceTV(arrayTV) {
    return arrayTV.map((tv) => {
        return `€${tv.price},-`;
    });
}

priceTV(inventory);
/*document.getElementById("priceTV").textContent = priceTV;*/


/* Opdracht 4c*/
/*Optie 1, werkt niet.
function screenSize(arrayTV) {
    arrayTV.map((tv) => {
        let result ="";
        if (tv.length === 1) {
            result += `${tv.sizes[0]} inch (${tv.sizes[0] * 2.54} cm)`;
        } else {
            for (let i = 0; i < tv.length; i++) {
                result += `${tv[i]} inch (${tv[i] * 2.54} cm)`;
                if (i < tv.length - 1) {
                    result += " | ";
                }
            }
        }
        return result;
    });
}*/


function generateScreenSizes(tvList) {
    return tvList.map((screenSize) => {
        return screenSize.availableSizes.map((tvSize) => {return `${tvSize} inch (${tvSize * 2.54} cm)`}
    )});
}

/* opdracht 4d*/

function showInfo(tv) {
    return `${nameTv(tv)}<br />${priceTV(tv)}<br />${generateScreenSizes(tv)}<br /><br \>`
}


document.getElementById("allInfo").textContent = showInfo(inventory);

/* Opdracht 4e*/
function generateProductList(inventory) {
    return inventory.map(tv => `${nameTv(tv)}<br />${priceTV(tv)}<br />${generateScreenSizes(tv)}<br /><br />`)
}