var table;
var tbody;
function Search(){
    var queryUrl = "https://jsonplaceholder.typicode.com/users";
    var xhr = new XMLHttpRequest();
    xhr.open('GET',queryUrl)
    xhr.onload = (function(e){
        var jsonResponse = xhr.response;
        var users = JSON.parse(jsonResponse);
        console.log(users);
        DisplayTable(users);
    })
    xhr.send();
    xhr.onerror = function(err){
        console.log(err);
    }
}
function CreateTable(users){
    var tableDiv = document.querySelector("#tableDiv")
    table = document.createElement("table");
    var header = document.createElement("thead");
    var headerRow = document.createElement("tr");
    headerRow.insertCell("th").innerHTML = "Company";
    headerRow.insertCell("th").innerHTML = "Website";
    headerRow.insertCell("th").innerHTML = "PhoneCall";
    headerRow.insertCell("th").innerHTML = "Address";
    headerRow.insertCell("th").innerHTML = "Email";
    headerRow.insertCell("th").innerHTML = "Username";
    headerRow.insertCell("th").innerHTML = "Name";
    headerRow.insertCell("th").innerHTML = "Id";
    header.appendChild(headerRow);
    table.appendChild(header);
    tbody = document.createElement("tbody");
    for(currentUser in users){
        console.log(currentUser);
        var bodyRow = document.createElement("tr");     
        bodyRow.insertCell("td").innerHTML = users[currentUser].company.name;
        bodyRow.insertCell("td").innerHTML = users[currentUser].website; 
        bodyRow.insertCell("td").innerHTML = users[currentUser].phone;
        bodyRow.insertCell("td").innerHTML = users[currentUser].address.street+users[currentUser].address.suite;
        bodyRow.insertCell("td").innerHTML = users[currentUser].email;
        bodyRow.insertCell("td").innerHTML = users[currentUser].username;
        bodyRow.insertCell("td").innerHTML = users[currentUser].name;
        bodyRow.insertCell("td").innerHTML = users[currentUser].id;
        tbody.appendChild(bodyRow);
    }
    table.appendChild(tbody);
    tableDiv.appendChild(table);
    var element = document.getElementsByTagName("thead")[0].setAttribute("class","th");
    console.log(element);   
}
function DisplayTable(users){
    CreateTable(users)
    $(document).ready( function () {
        $('table').DataTable();
    } );
}
