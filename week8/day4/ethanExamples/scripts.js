// Promises in Javascript
let URL = "https://jsonplaceholder.typicode.com/posts/50000000"

function getData() {
    fetch(URL)
    .then((res) => {
        console.log(res)
        if (res.status !== 200) throw new Error("Bad Request")
        return res.json()
    }).then((data) => {
        let h1 = document.querySelector('h1');
        h1.innerText = `Id: ${data.id}\nTitle: ${data.title}\nBody: ${data.body}`;
    })
    .catch((error) => {
        console.log(error)
    })
    .finally((data) => {
        console.log("finally")
    })
}
async function myAsyncFunction() {

try{
        const response = await fetch(URL); //return a promise
        if(response.status !== 200) {
            throw new Error("Ruh roh raggy server go bonk");
        }
        let data = await response.json(); 
        let h1 = document.querySelector("h1")
        h1.innerText = `id: ${data.id}\n
        title: ${data.title}\n
        body: ${data.body}\n`;
} catch(error) {
    console.error(error)
} finally {
    console.log("Runs no matter what")
}
}
console.log(myAsyncFunction());