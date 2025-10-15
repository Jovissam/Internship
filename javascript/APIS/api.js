

const url = "https://jsonplaceholder.typicode.com/posts";
const statusData = document.querySelector("#status")
const display = document.querySelector("#display")
const tableData = document.querySelector("#tableData")




async function getPosts() {
    const data = await fetch(url); //for fetching the items in the api
    // console.log(data);
    if (data.status == 200) {
       const result = await data.json() 
    //    console.log(result);
       
        result.forEach(post => {
            tableData.innerHTML += `
            <tr>
                <td>${post.id}</td>
                <th>${post.title}</th>
                <td>${post.body}</td>
            </tr>`
        });

        localStorage.setItem("api", JSON.stringify(result))
        
    } else {
        
    }
}

const storedApi = localStorage.getItem("api");

const store = JSON.parse(storedApi)  ?? [];

console.log(store); 
    store.forEach(function (storedPost) {
        tableData.innerHTML += `
            <tr>
                <td>${storedPost.id}</td>
                <th>${storedPost.title}</th>
                <td>${storedPost.body}</td>
            </tr>
            `
    });


getPosts()

// localStorage.clear()