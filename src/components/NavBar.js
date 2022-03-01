//imagen de la marca

const brand = document.createElement ("img");

brand.setAttribute("src", "/imagenes/logo_elgatonegro.webp");

document.body.appendChild(brand);

// Elementos del menu

const li = document.getElementsByClassName("li");

const menu = ["Comida", "Ropa", "Salud", "Blog Gatuno"];

let i = 0;

for (let cadaLi of li){
   cadaLi.innerHTML = menu[i];
i++;
}

document.body.appendChild(menu);

//imagen antes de menú


