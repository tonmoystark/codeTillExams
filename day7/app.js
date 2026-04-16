let container = document.getElementById("dataShower");
let searchBar = document.getElementById("searchBar");
let allUsers = [];
let timer = null;
async function fetchData() {
  try {
    container.textContent = "Search to see";
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    allUsers = data;
    return allUsers;
  } catch (error) {
    console.log("something went wrong");
    container.textContent = error.message;
  }
}

function card(user) {
  let div = document.createElement("div");
  let h1 = document.createElement("h1");
  h1.textContent = user.name;
  div.append(h1);
  return div;
}

fetchData().then(() => {
  searchBar.addEventListener("input", () => {
    if (searchBar.value !== "") {
      clearTimeout(timer);
      timer = setTimeout(() => {
        container.textContent = "";
        let filterUser = allUsers.filter((user) => {
          return user.name
            .toLowerCase()
            .includes(searchBar.value.toLowerCase());
        });
        if (filterUser.length !== 0) {
          filterUser.forEach((user) => {
            let data = card(user);
            container.append(data);
          });
        } else {
          container.textContent = "no user found";
        }
      }, 300);
    }
  });
});
