// getting json data from dealers.json

var dealerSection = document.querySelector('dealers-section')

var requestURL =
  'https://github.com/bc-whisnant/rv-json-file/blob/master/dealers.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';

request.send();

request.onload = function() {
    var dealers = request.response;
    populateDealerSection(dealers);
    showDealers(dealers);
}

function populateDealerSection(jsonObj) {
    var dealersH1 = document.createElement('h1');
    dealersH1.textContent = jsonObj(dealers.name);
    dealerSection.appendChild(dealersH1);
}
