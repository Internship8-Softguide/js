const getData = async () => {

    await fetch("https://jsonplaceholder.typicode.com/photos").then((val) => val.json()
    ).then((jsonValue) => console.log(jsonValue))
}
getData();
console.log("latest")