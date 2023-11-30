/*Mellissa Fierro
CSC6304 Fall 2,2023
Project5 
*/

function setURL() {
    var city = document.getElementById("city").value;
    var type = document.getElementById("type").value;
    var url = 'https://api.openbrewerydb.org/v1/breweries?by_city=' 
    + city + '&' + 'by_type=' + type;
    return url
}

function getBreweries() {
    var url = setURL();
    fetch(url)
        .then(response => response.json())
        .then(data => {
        displayResult(data);      
    })
    .catch(error => console.error('Error:', error));
}

function getInfo() {
    var url = setURL();
    fetch(url)
        .then(response => response.json())
        .then(data => {
        displayInfo(data);
    })
    .catch(error => console.error('Error:', error));   
}


function displayResult(data) {
    var breweries_data = document.getElementById('breweries');
    breweries_data.innerHTML = '';
    var name = '';
    for (let i = 0; i < data.length; i++) {
        name += (i+1) + '. ' + data[i].name + "<br>";
        }   
    breweries_data.innerHTML = name;
}

function displayInfo(data) {
    var brewery_info = document.getElementById('myBrewery');
    var index = document.getElementById('choice').value - 1;
    brewery_info.innerHTML = '';
    var info ='';
    info = data[index].website_url;
    var address = 'Address: ' + data[index].address_1 + '. ' + data[index].city + ' '
    + data[index].state_province + ' ' + data[index].postal_code 
    
    if (info == null) {
        brewery_info.innerHTML = 'Sorry this brewery does not have a working website.'
    }
    else {
        brewery_info.innerHTML = address + '<br>' + `<a href="${info}">Link to brewery website</a>`;
    }
}



