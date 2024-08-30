function pokemonList() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
        .then(response => response.json())
        .then(data => {
            data.results.forEach(pokemon => {
                const formattedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
                console.log(formattedName);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function fetchPD(pokemonName) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
        .then(response => response.json())
        .then(data => {
            const formattedName = data.name.charAt(0).toUpperCase() + data.name.slice(1);
            const types = data.types.map(typeInfo => typeInfo.type.name).join(', ');
            const abilities = data.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ');
            const stats = data.stats.map(statInfo => `${statInfo.stat.name}: ${statInfo.base_stat}`).join(', ');

            console.log(`Nombre: ${formattedName}`);
            console.log(`Tipo(s): ${types}`);
            console.log(`Habilidades: ${abilities}`);
            console.log(`Stats: ${stats}`);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

pokemonList();
fetchPD('kabuto'); 

