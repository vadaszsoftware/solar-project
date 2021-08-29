// imports

export function fetchData() {
    let data = "bull";

    fetch("https://swapi.dev/api/people/1/")
    .then(response => {
        console.log("1: ", response);
        // console.log("2: ", response.json());
        return response.json();
    })
    .then(async data => {
        await console.log(data);
    })



    return data;
}