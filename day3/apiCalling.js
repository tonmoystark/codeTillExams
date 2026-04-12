// async function apiCalling() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await response.json();

//   data.forEach((element) => {
//     console.log(element.name);
//   });
// }

// apiCalling();

// let listContainer = document.getElementById("list");

// let apiCalling = async () => {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await response.json();
//     listContainer.textContent = "";
//     data.forEach((element) => {
//       let li = document.createElement("li");
//       li.textContent = element.name;
//       listContainer.append(li);
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// apiCalling();


let listContainer = document.getElementById("list");


const showUi =  async () => {
    listContainer.textContent = 'loading data'
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await response.json();
        listContainer.textContent = ""
        console.log(data);
        
        data.forEach(element => {
            let li = document.createElement('li');
            li.textContent = element.name;
            listContainer.append(li);
        });
        
    } catch (error) {
        listContainer.textContent = error.message
    }
}

showUi()