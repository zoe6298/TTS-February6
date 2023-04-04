// Make a request for user.json
// fetch('https://raw.githubusercontent.com/zoe6298/TTS-February6/main/user.json')
//   // Load it as json
//   .then(response => response.json())
//   // Make a request to GitHub
//   .then(user => fetch(`https://api.github.com/users/zoe6298`))
//   // Load the response as json
//   .then(response => response.json())
//   // Show the avatar image (githubUser.avatar_url) for 3 seconds (maybe animate it)
//   .then(githubUser => {
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);
// });
// Make a request for user.json
// fetch('https://raw.githubusercontent.com/garzarobm/TTS-Febraury6/master/week9/lectureDay2/user2.json')
//   // Load it as json
//   .then(response => response.json())
//   // Make a request to GitHub
//   .then(user => fetch(`https://api.github.com/users/zoe6298`))
//   // Load the response as json
//   .then(response => response.json())
//   // Show the avatar image (githubUser.avatar_url) for 3 seconds (maybe animate it)
//   .then(githubUser => {
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);
// });

// async function showAvatar() {

//     // read our JSON
//     let response = await fetch('https://javascript.info/article/promise-chaining/user.json');
//     let user = await response.json();
  
//     // read github user
//     let githubResponse = await fetch(`https://api.github.com/users/zoe6298`);
//     let githubUser = await githubResponse.json();
  
//     // show the avatar
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);
//   }
  
//   showAvatar();


// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         console.log(response.status);
//         throw new Error(response.status);
//       }
//     });
// }

// let response =loadJson('https://javascript.info/article/promise-chaining/user.json')
//   .catch(alert); // Error: 500
// console.log(response);

// async function loadJson(url) { // (1)
//     let response = await fetch(url); // (2)
  
//     if (response.status == 200) {
//       let json = await response.json(); // (3)
//       return json;
//     }
  
//     throw new Error(response.status);
//   }
  
//   let text =loadJson('https://raw.githubusercontent.com/zoe6298/TTS-February6/main/user.json')
//     .catch(alert); // Error: 500 (4)
// console.log(text.name)

// async function wait() {
//     await new Promise(resolve => setTimeout(resolve, 1000));
  
//     return 10;
//   }
  
//   function f() {
//     // shows 10 after 1 second
//     wait().then(result => alert(result));
//   }

//   f();
let object = {
  myProperty: true,
  "myProperty": true,
}