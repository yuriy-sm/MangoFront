//contact us form sublission
function contactUs() {
    //save data from the form fields in the JS object
    let data1 = {
        name: document.getElementById("Name").value,
        email: document.getElementById("Email").value,
        message: document.getElementById("Message").value
    }
    console.log(data1);
    document.getElementById("answer").innerHTML = (data1.name + ", Thank you for submittin our form");

    //convert data to the JSON file
    myJSON = JSON.stringify(data1);
    console.log(myJSON);
    //save data to local storage
    localStorage.setItem("testJSON", myJSON);
}
//attempt to retrive data from the local storage - IT IS NOT WORKING
        // text = localStorage.getItem("testJSON");
        // obj = JSON.parse(text);
        // console.log(obj);
        // document.getElementById("demo").innerHTML = obj.name;

//testing GET method to retrive data from server
const Http = new XMLHttpRequest();
const url='https://jsonplaceholder.typicode.com/posts';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}