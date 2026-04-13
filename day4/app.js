let containerList = document.getElementById("list");

async function fetchDataURL(url) {
  
    let response = await fetch(url);
    let data = await response.json();
    return data;
  
}

function card(user) {
  let subContainer = document.createElement("div");
  let nameC = document.createElement("h1");
  let emailC = document.createElement("h2");
  let phoneC = document.createElement("h2");
  let companyC = document.createElement("h2");
  let websiteC = document.createElement("h2");

  nameC.textContent = user.name;
  emailC.textContent = user.email;
  phoneC.textContent = user.phone;
  companyC.textContent = user.company.name;
  websiteC.textContent = user.website;

  subContainer.append(nameC);
  subContainer.append(emailC);
  subContainer.append(phoneC);
  subContainer.append(companyC);
  subContainer.append(websiteC);
  return subContainer;
}

function showError(err) {
    containerList.textContent = err
}


async function main(){
    containerList.textContent = 'loading Data'
    try {
        let data = await fetchDataURL('https://jsonplaceholder.typicode.com/users');
        containerList.textContent = ''
        data.forEach(element => {
            let subContainer= card(element)
            containerList.append(subContainer)
        })
    } catch (error) {
        showError('Something went wrong')
    }
    
}

main()