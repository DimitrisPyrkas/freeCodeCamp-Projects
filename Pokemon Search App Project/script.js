const searchInpt = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonImg = document.getElementById("pokemon-image");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonTypes = document.getElementById("types");
const pokemonHp = document.getElementById("hp");
const pokemonAttack = document.getElementById("attack");
const pokemonDefense = document.getElementById("defense");
const pkmSpecAttack = document.getElementById("special-attack");
const pmkSpecDefense = document.getElementById("special-defense");
const pokemonSpeed = document.getElementById("speed");


   
const pokedex = async () => {
    if(searchInpt.value === "") {
        alert("Please fill out this field")
        return;
    }
    try {
        const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchInpt.value.toLowerCase()}`);
        const data = await res.json();
        const {name, id, height, weight, types, stats, sprites} = data;

        pokemonImg.innerHTML = `<img src="${sprites.front_default}" id="sprite">`
        pokemonName.innerHTML = name.toUpperCase();
        pokemonId.innerHTML = `#${id}`
        pokemonHeight.innerHTML = `Height: ${height}`;
        pokemonWeight.innerHTML = `Weight: ${weight}`;
        pokemonTypes.innerHTML = types.map(type => `<span class="${type.type.name.toLowerCase()}">${type.type.name.toUpperCase()}</span>`).join(" ");

        pokemonHp.innerHTML = stats[0].base_stat;
        pokemonAttack.innerHTML = stats[1].base_stat;
        pokemonDefense.innerHTML = stats[2].base_stat;
        pkmSpecAttack.innerHTML = stats[3].base_stat;
        pmkSpecDefense.innerHTML = stats[4].base_stat;
        pokemonSpeed.innerHTML = stats[5].base_stat;
    } catch (err) {
          console.log(err);
          alert("Pokemon not found");
        }
};

searchBtn.addEventListener("click", pokedex);
searchInpt.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
       pokedex();
    }
})

 