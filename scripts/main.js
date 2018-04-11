// https://api.myjson.com/bins/t5syz

var request = new XMLHttpRequest();
request.open('GET', 'https://api.myjson.com/bins/t5syz', true);

request.onload = function() {
  // acces json data here
  var dataList = JSON.parse(this.response);
  //this code returns all of the entries that have Service Pro listed - this should be the initial value
  var dealers = dataList.dealers.filter(function(dealer) {
    return dealer.data.certifications.indexOf("Service Pro") > -1;
  });;

  if (request.status >=200 && request.status < 400) {
    
    for(let i = 0; i <=2 ; i++) {
      var dealer = dealers[i];
      console.log(dealers);
      // console.log(dealer.data.certifications);

      const dealersList = document.querySelector('.dealers-list');
      const dealerSection= document.createElement('section');
      dealerSection.setAttribute('class', 'dealer-section');

      const sectionHeading = document.createElement('div');
      sectionHeading.setAttribute('class', 'sectionHeading');
      sectionHeading.innerHTML = `<h2>${dealer.data.name}</h2>`;

      const sectionPhone = document.createElement('div');
      sectionPhone.setAttribute('class', 'sectionPhone')
      sectionPhone.innerHTML = `<h2>${dealer.data.phone1}</h2>`;

      const sectionMessage = document.createElement('div');
      sectionMessage.setAttribute('class', 'sectionMessage');
      sectionMessage.innerHTML = `<p>Can\'t talk now? Click below to send an email.</p>`;

      const sectionMail = document.createElement('div');
      sectionMail.setAttribute('class', 'sectionMail');
      sectionMail.innerHTML = `<p><i class="fas fa-envelope"></i>&nbsp;Contact this Pro</p>`;

      const sectionHours = document.createElement('div');
      sectionHours.setAttribute('class', 'sectionHours');
      sectionHours.innerHTML = `
          <p>Business Hours</p>
          <p>Weekdays: ${dealer.data.weekHours.weekdays}</p>
          <p>Saturdays: ${dealer.data.weekHours.sat}</p>
          <p>Sundays: ${dealer.data.weekHours.sun}</p>
          `

      dealersList.appendChild(dealerSection);
      dealerSection.appendChild(sectionHeading);
      dealerSection.appendChild(sectionPhone);
      dealerSection.appendChild(sectionMessage);
      dealerSection.appendChild(sectionMail);
      dealerSection.appendChild(sectionHours);

      var numberOfDealersParagraph = document.querySelector('.number-of-dealers');
      var numberOfDealers = dealers.length;
      numberOfDealersParagraph.innerHTML = `${numberOfDealers} dealers in 28226`;

      sectionMail.onclick = function() {
        document.querySelector('.contact-modal').style.display = 'block';
      }
    }
  } else {
    console.log('error');
  }

}
//send request
request.send();


function getInstallationProList() {
    var dealers = dataList.dealers.filter(function(dealer) {
      return dealer.data.certifications.indexOf("Residential Pro") > -1
    });

  }

function getCommercialProList() {
  var dealers = dataList.dealers.filter(function(dealer) {
    return dealer.data.certifications.indexOf("Commercial Pro") > -1
 });
}

function getResidentialProList() {
  var dealers = dataList.dealers.filter(function(dealer) {
    return dealer.data.certifications.indexOf("Residential Pro") > -1
  });
}

function getServiceProList() {
  var dealers = dataList.dealers.filter(function(dealer) {
    return dealer.data.certifications.indexOf("Service Pros") > -1
  });
}


function hideModal() {
  document.querySelector('.close-modal').addEventListener('click', function() {
    document.querySelector('.contact-modal').style.display = 'none';
    console.log('clicked')
  })
}

// the following code controls the opening and closing of mobile menu

function openMobileMenu() {
  document.querySelector('.mobile-menu-icon').addEventListener('click', function() {
    document.querySelector('.mobile-nav-dropdown').style.display = 'block';
    console.log('clicked');
  })
}

function closeMobileMenu() {
  document.querySelector('.menu-close').addEventListener('click', function() {
    document.querySelector('.mobile-nav-dropdown').style.display = 'none';
  })
}

