//synchronous


const logHello = () => {
    console.log("Hello");
}
setTimeout(logHello, 100);

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
async function asyncCall3(id) {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
   const data = await result.json();
   console.log(data.name)
}
asyncCall3(Math.floor(Math.random()*1000));