let container = document.getElementById("dataShower");
let searchBar = document.getElementById("searchBar");
let allUsers = [];
async function dataFetch() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    allUsers = data;
    return allUsers;
  } catch (error) {
    container.textContent = error.message;
    console.log(error.message);
  }
}

function searcedUser(user) {
  let h1 = document.createElement("h1");
  let subContainer = document.createElement("div");
  h1.textContent = user.name;
  subContainer.append(h1);
  return subContainer;
}

dataFetch().then(() => {
  container.textContent = "";
  searchBar.addEventListener("input", () => {
    if (searchBar.value !== "") {
      let findUser = allUsers.filter((el) => {
        return el.name.toLowerCase().includes(searchBar.value.toLowerCase());
      });
      if (findUser.length !== 0) {
        container.textContent = "";
        findUser.forEach((el) => {
          let subContainer = searcedUser(el);
          container.append(subContainer);
        });
      } else {
        container.textContent = "No user found";
      }
    } else {
      container.textContent = "Search bar  is empty";
    }
  });
});
