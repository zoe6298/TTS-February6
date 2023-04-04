//synchronous
setTimeout(logHello, 100);

const logHello = () => {
    console.log("Hello");
}

const names = ["james", "jess", "lily","sevy"];
names.forEach((name) => console.log(name))

//asynchronous
const loadPokemon = (id, cb) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res=>res.json())
    .then(data=> {
        cb(data)
    })
}
loadPokemon(56, (pokemon)=>{
    console.log(pokemon);
})