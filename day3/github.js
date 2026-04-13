let container = document.getElementById("container");
async function github() {
  container.textContent = "fetching data";
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    container.textContent = "";
    console.log(data);
    data.forEach((element) => {
      let subContainer = document.createElement("div");
      let username = document.createElement("h1");
      let email = document.createElement("h3");
      let company = document.createElement("h3");
      let phone = document.createElement("h4");
      let website = document.createElement("h4");
      username.textContent = element.name;
      email.textContent = element.email;
      company.textContent = element.company.name;
      phone.textContent = element.phone;
      website.textContent = element.website;
      subContainer.append(username);
      subContainer.append(email);
      subContainer.append(company);
      subContainer.append(phone);
      subContainer.append(website);
      container.append(subContainer);
    });
  } catch (error) {
    container.textContent = error.message;
  }
}

github();
