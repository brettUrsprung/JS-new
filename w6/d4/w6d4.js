const promiseA = new Promise((resolve, reject) => {
  let statusCode = 404;

  if (statusCode == 200) {
    resolve(statusCode);
  } else {
    reject(statusCode);
  }
});

promiseA
  .then(
    (val) => console.log("Async logging has value: " + val)
    // (err) => console.log("Error: " + err)
  )
  .catch((err) => {
    console.log("promise rejected! Status Code: " + err);
  });

console.log("this is the immediate log!");

async function myFunc() {
  return 1;
}

// myFunc().then(alert);

async function timedAction() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 2000);
  });

  let result = await promise;

  alert(result);
}

timedAction();

let url = "https://www.google.com";
let opions = "GET";

// async function getStuffFromWeb() {



// await fetch("http://javascript.info/article/promise-chaining/user.json")
//   .then(async function (response) {
//     await setTimeout(() => {}, 2000);
//     return response.text();
//   })
//   .then(function(text) {
//     alert(text);
//   });

// }
//   getStuffFromWeb();


// fetch("http://javascript.info/article/promise-chaining/user.json")
//   .then(response => response.json())
//     .then(user => fetch(`https://api.github.com/users/${user.name}`))
//     .then(response => response.json())
//     .then(githubUser => {
//       let img = document.createElement("img");
//       img.src = githubUser.avatar_url;
//       img.className = "promis-avatar-example";
//       document.body.append(img);
//   });


//  a better way to hamdle with async/await
async function showAvatar(){

  // read our json
  let response = await fetch("http://javascript.info/article/promise-chaining/user.json")
  let user = await response.json();

//  read github user
let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
let githubUser = await githubResponse.json();

// show the avatar
let img = document.createElement("img")
img.src = githubUser.avatar_url;
// console.log("avatar url: " + githubUser.avatar_url);
  img.className = "primuse-avatar-example";
  document.body.append(img);


}

showAvatar();