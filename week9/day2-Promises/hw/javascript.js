//async and await
function getRandomNumber() { 
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve(Math.random());
    }, 500)
})
}
async function asyncCall() {
    const result = await getRandomNumber();
    console.log(result);
}

asyncCall();
//fetch
async function asyncCall2(city) {
    const result = await fetch(`https://geocode.xyz/${city}?json=1`)
    const data = await result.json()
    console.log(data.latt);
    console.log(data.longt);
}
asyncCall2("Seattle");
asyncCall2("Austin");