async function load() {
    const poke = await fetch('https://pokeapi.co/api/v2/version/2/');
    const data = await poke.json();
    return data;
}
console.log(load());