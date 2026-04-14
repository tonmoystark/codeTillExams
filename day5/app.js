let allUsers = [];
let searcBar = document.getElementById("searchBar");
let searcBtn = document.getElementById("searchBtn");
let container = document.getElementById("dataShower");
async function fetchData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();
  allUsers = data;
  return allUsers;
}

function searchedUser(user) {
  let div = document.createElement("div");
  let h1 = document.createElement("h1");
  let userNameH2 = document.createElement('h2');
  let emailH2 = document.createElement('h2');
  let websiteH2 = document.createElement('h2');

  h1.textContent = user.name;
  userNameH2.textContent = user.username
  emailH2.textContent = user.email;
  websiteH2.textContent = user.website
  div.append(h1, userNameH2, emailH2, websiteH2);
  return div;
}

fetchData().then(() => {
  console.log(allUsers);
  container.textContent = "";
  
  searcBtn.addEventListener("click", () => {
    if (searcBar.value !== "") {
      let findUser = allUsers.find((el) => {
        let validate = el.name
          .toLowerCase()
          .includes(searcBar.value.toLowerCase());
        return validate;
      });
      if (findUser) {
        container.textContent = "";
        let userData = searchedUser(findUser);
        container.append(userData);
      } else {
        container.textContent = "User not found";
      }
    } else {
      container.textContent = "Search bar is empty";
    }
  });

});
