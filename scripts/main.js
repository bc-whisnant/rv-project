var dealersList = {
  zipcode: "28205",
  location: {
    lat: 35.2263714,
    lon: -80.7990185
  },
  dealers: [
    {
      data: {
        companyID: 401929,
        name: "Aqua Experts",
        phone1: "1-888-234-5678",
        email: "info@aquaexperts.com",
        addressLine1: "1234 Some Street",
        addressLine2: "",
        city: "Charlotte",
        state: "North Carolina",
        country: "US",
        zipcode: "28205",
        weekHours: {
          weekdays: "7:00am - 7:00pm",
          sat: "7:00am - 3:00pm",
          sun: "Closed"
        },
        certifications: ["Installation Pro", "Residential Pro", "Service Pro"]
      }
    },
    {
      data: {
        companyID: 401928,
        name: "Premium Pools & Spas of Charlotte",
        phone1: "1-888-888-8888",
        email: "info@premiumpoolscharlotte.com",
        addressLine1: "1234 Some Street",
        addressLine2: "",
        city: "Charlotte",
        state: "North Carolina",
        country: "US",
        zipcode: "28205",
        weekHours: {
          weekdays: "7:00am - 7:00pm",
          sat: "Closed",
          sun: "On Call"
        },
        certifications: [
          "Installation Pro",
          "Commercial Pro",
          "Residential Pro",
          "Service Pro"
        ]
      }
    },
    {
      data: {
        companyID: 401927,
        name: "Carolina Pool Specialists",
        phone1: "1-877-987-6543",
        email: "info@cps.com",
        addressLine1: "1234 Some Street",
        addressLine2: "",
        city: "Charlotte",
        state: "North Carolina",
        country: "US",
        zipcode: "28205",
        weekHours: {
          weekdays: "8:00am - 5:00pm",
          sat: "8:00am - 5:00pm",
          sun: "Closed"
        },
        certifications: [
          "Installation Pro",
          "Commercial Pro",
          "Residential Pro",
          "Service Pro"
        ]
      }
    },
    {
      data: {
        companyID: 401926,
        name: "Pools'r'Us",
        phone1: "1-888-346-4574",
        email: "info@poolsrus.com",
        addressLine1: "1234 Some Street",
        addressLine2: "",
        city: "Charlotte",
        state: "North Carolina",
        country: "US",
        zipcode: "28205",
        weekHours: {
          weekdays: "7:00am - 7:00pm",
          sat: "7:00am - 3:00pm",
          sun: "1:00pm - 5:00pm"
        },
        certifications: [
          "Installation Pro",
          "Commercial Pro",
          "Residential Pro"
        ]
      }
    },
    {
      data: {
        companyID: 401925,
        name: "Clean Pool Systems",
        phone1: "1-888-246-7485",
        email: "info@cleanpools.com",
        addressLine1: "1234 Some Street",
        addressLine2: "",
        city: "Charlotte",
        state: "North Carolina",
        country: "US",
        zipcode: "28205",
        weekHours: {
          weekdays: "7:00am - 7:00pm",
          sat: "7:00am - 3:00pm",
          sun: "Closed"
        },
        certifications: ["Installation Pro", "Residential Pro"]
      }
    },
    {
      data: {
        companyID: 401924,
        name: "Pool Service Pros",
        phone1: "1-888-PRO-POOL",
        email: "info@propool.com",
        addressLine1: "1234 Some Street",
        addressLine2: "",
        city: "Charlotte",
        state: "North Carolina",
        country: "US",
        zipcode: "28205",
        weekHours: {
          weekdays: "7:00am - 7:00pm",
          sat: "7:00am - 3:00pm",
          sun: ""
        },
        certifications: [
          "Installation Pro",
          "Commercial Pro",
          "Residential Pro",
          "Service Pro"
        ]
      }
    },
    {
      data: {
        companyID: 401923,
        name: "Talent Pool",
        phone1: "1-888-797-3463",
        email: "info@talentpool.com",
        addressLine1: "1234 Some Street",
        addressLine2: "",
        city: "Charlotte",
        state: "North Carolina",
        country: "US",
        zipcode: "28205",
        weekHours: {
          weekdays: "7:00am - 7:00pm",
          sat: "7:00am - 7:00pm",
          sun: "7:00am - 7:00pm"
        },
        certifications: ["Installation Pro", "Commercial Pro", "Service Pro"]
      }
    }
  ]
};

function getInstallationProList() {
  //this code returns all of the entries that have Service Pro listed
  var dealersListInstallationPros = dealersList.dealers.filter(function(dealer) {
    return dealer.data.certifications.indexOf("Installation Pro") > -1
  });

  //dynamically popular number of dealers in area
  var numberOfDealersParagraph = document.querySelector('.number-of-dealers');
  var numberOfDealers = dealersListInstallationPros.length;
  
  numberOfDealersParagraph.innerHTML = `
        ${numberOfDealers} dealers in 28226
    `;
    //create divs here
    var section0 = document.querySelector('.section0');
    var section0Heading = dealersListInstallationPros[0].data.name;
    var section0Phone = dealersListInstallationPros[0].data.phone1;
    var section0Message = 'Can\'t talk now? Click below to send an email.';
    var section0Email = dealersListInstallationPros[0].data.email;
    var section0HoursText = 'Business Hours';
    var section0Weekdays = dealersListInstallationPros[0].data.weekHours.weekdays;
    var section0Saturday = dealersListInstallationPros[0].data.weekHours.sat;
    var section0Sunday = dealersListInstallationPros[0].data.weekHours.sun;
    section0.innerHTML = `

        <div class="sectionHeading">
            <h2> ${section0Heading} </h2>
        </div>
        <div class="sectionHeadingBorder">
        </div>
        <div class="sectionPhone">
            <h2><i class="fas fa-phone-square"></i>&nbsp;${section0Phone}</h2>
        </div>
        <div class="sectionMessage">
            <p>${section0Message}</p>
        </div>
        <div class="sectionMail" onclick="showModal()">
          <p><i class="fas fa-envelope"></i>&nbsp;Contact this Pro</p>
        </div>
        <div class="sectionHours">
          <p>${section0HoursText}</p>
          <p>Weekdays: ${section0Weekdays}</p>
          <p>Saturdays: ${section0Saturday}</p>
          <p>Sundays: ${section0Sunday}</p>
        </div>
    `;
  
    //generate second div here
    var section1 = document.querySelector('.section1');
    var section1Heading = dealersListInstallationPros[1].data.name;
    var section1Phone = dealersListInstallationPros[1].data.phone1;
    var section1Message = 'Can\'t talk now? Click below to send an email.';
    var section1Email = dealersListInstallationPros[1].data.email;
    var section1HoursText = 'Business Hours';
    var section1Weekdays = dealersListInstallationPros[1].data.weekHours.weekdays;
    var section1Saturday = dealersListInstallationPros[1].data.weekHours.sat;
    var section1Sunday = dealersListInstallationPros[1].data.weekHours.sun;
    section1.innerHTML = `
          <div class="sectionHeading">
              <h2> ${section1Heading} </h2>
          </div>
          <div class="sectionHeadingBorder">
          </div>
          <div class="sectionPhone">
              <h2><i class="fas fa-phone-square"></i>&nbsp;${section1Phone}</h2>
          </div>
          <div class="sectionMessage">
              <p>${section1Message}</p>
          </div>
          <div class="sectionMail" onclick="showModal()">
            <p><i class="fas fa-envelope"></i>&nbsp;Contact this Pro</p>
          </div>
          <div class="sectionHours">
            <p>${section1HoursText}</p>
            <p>Weekdays: ${section1Weekdays}</p>
            <p>Saturdays: ${section1Saturday}</p>
            <p>Sundays: ${section1Sunday}</p>
          </div>
    `;
  
     //generate third div here
     var section2 = document.querySelector('.section2');
     var section2Heading = dealersListInstallationPros[2].data.name;
     var section2Phone = dealersListInstallationPros[2].data.phone1;
     var section2Message = 'Can\'t talk now? Click below to send an email.';
     var section2Email = dealersListInstallationPros[2].data.email;
     var section2HoursText = 'Business Hours';
     var section2Weekdays = dealersListInstallationPros[2].data.weekHours.weekdays;
     var section2Saturday = dealersListInstallationPros[2].data.weekHours.sat;
     var section2Sunday = dealersListInstallationPros[2].data.weekHours.sun;
     section2.innerHTML = `
            <div class="sectionHeading">
                <h2> ${section2Heading} </h2>
            </div>
            <div class="sectionHeadingBorder">
            </div>
            <div class="sectionPhone">
                <h2><i class="fas fa-phone-square"></i>&nbsp;${section2Phone}</h2>
            </div>
            <div class="sectionMessage">
                <p>${section2Message}</p>
            </div>
            <div class="sectionMail" onclick="showModal()">
              <p><i class="fas fa-envelope"></i>&nbsp;Contact this Pro</p>
            </div>
            <div class="sectionHours">
              <p>${section2HoursText}</p>
              <p>Weekdays: ${section2Weekdays}</p>
              <p>Saturdays: ${section2Saturday}</p>
              <p>Sundays: ${section2Sunday}</p>
            </div>
     `;
  }

  function getCommercialProList() {
    //this code returns all of the entries that have Service Pro listed
    var dealersListCommercialPros = dealersList.dealers.filter(function(dealer) {
      return dealer.data.certifications.indexOf("Commercial Pro") > -1
    });

    //dynamically popular number of dealers in area
    var numberOfDealersParagraph = document.querySelector('.number-of-dealers');
    var numberOfDealers = dealersListCommercialPros.length;
    
    numberOfDealersParagraph.innerHTML = `
          ${numberOfDealers} dealers in 28226
    `;
    
      //create divs here
      var section0 = document.querySelector('.section0');
      var section0Heading = dealersListCommercialPros[0].data.name;
      var section0Phone = dealersListCommercialPros[0].data.phone1;
      var section0Message = 'Can\'t talk now? Click below to send an email.';
      var section0Email = dealersListCommercialPros[0].data.email;
      var section0HoursText = 'Business Hours';
      var section0Weekdays = dealersListCommercialPros[0].data.weekHours.weekdays;
      var section0Saturday = dealersListCommercialPros[0].data.weekHours.sat;
      var section0Sunday = dealersListCommercialPros[0].data.weekHours.sun;
      section0.innerHTML = `
              <div class="sectionHeading">
                 <h2> ${section0Heading} </h2>
              </div>
              <div class="sectionHeadingBorder">
              </div>
              <div class="sectionPhone">
                  <h2><i class="fas fa-phone-square"></i>&nbsp;${section0Phone}</h2>
              </div>
              <div class="sectionMessage">
                  <p>${section0Message}</p>
              </div>
              <div class="sectionMail" onclick="showModal()">
                <p><i class="fas fa-envelope"></i>&nbsp;Contact this Pro</p>
              </div>
              <div class="sectionHours">
                <p>${section0HoursText}</p>
                <p>Weekdays: ${section0Weekdays}</p>
                <p>Saturdays: ${section0Saturday}</p>
                <p>Sundays: ${section0Sunday}</p>
              </div>
      `;
    
      //generate second div here
      var section1 = document.querySelector('.section1');
      var section1Heading = dealersListCommercialPros[1].data.name;
      var section1Phone = dealersListCommercialPros[1].data.phone1;
      var section1Message = 'Can\'t talk now? Click below to send an email.';
      var section1Email = dealersListCommercialPros[1].data.email;
      var section1HoursText = 'Business Hours';
      var section1Weekdays = dealersListCommercialPros[1].data.weekHours.weekdays;
      var section1Saturday = dealersListCommercialPros[1].data.weekHours.sat;
      var section1Sunday = dealersListCommercialPros[1].data.weekHours.sun;
      section1.innerHTML = `
              <div class="sectionHeading">
                  <h2> ${section1Heading} </h2>
              </div>
              <div class="sectionHeadingBorder">
              </div>
              <div class="sectionPhone">
                  <h2><i class="fas fa-phone-square"></i>&nbsp;${section1Phone}</h2>
              </div>
              <div class="sectionMessage">
                  <p>${section1Message}</p>
              </div>
              <div class="sectionMail" onclick="showModal()">
                <p><i class="fas fa-envelope"></i>&nbsp;Contact this Pro</p>
              </div>
              <div class="sectionHours">
                <p>${section1HoursText}</p>
                <p>Weekdays: ${section1Weekdays}</p>
                <p>Saturdays: ${section1Saturday}</p>
                <p>Sundays: ${section1Sunday}</p>
              </div>
      `;
    
       //generate third div here
       var section2 = document.querySelector('.section2');
       var section2Heading = dealersListCommercialPros[2].data.name;
       var section2Phone = dealersListCommercialPros[2].data.phone1;
       var section2Message = 'Can\'t talk now? Click below to send an email.';
       var section2Email = dealersListCommercialPros[2].data.email;
       var section2HoursText = 'Business Hours';
       var section2Weekdays = dealersListCommercialPros[2].data.weekHours.weekdays;
       var section2Saturday = dealersListCommercialPros[2].data.weekHours.sat;
       var section2Sunday = dealersListCommercialPros[2].data.weekHours.sun;
       section2.innerHTML = `
              <div class="sectionHeading">
                <h2> ${section2Heading} </h2>
              </div>
              <div class="sectionHeadingBorder">
              </div>
              <div class="sectionPhone">
                  <h2><i class="fas fa-phone-square"></i>&nbsp;${section2Phone}</h2>
              </div>
              <div class="sectionMessage">
                  <p>${section2Message}</p>
              </div>
              <div class="sectionMail" onclick="showModal()">
                <p><i class="fas fa-envelope"></i>&nbsp;Contact this Pro</p>
              </div>
              <div class="sectionHours">
                <p>${section2HoursText}</p>
                <p>Weekdays: ${section2Weekdays}</p>
                <p>Saturdays: ${section2Saturday}</p>
                <p>Sundays: ${section2Sunday}</p>
              </div>
       `;
    }

    function getResidentialProList() {
      //this code returns all of the entries that have Service Pro listed
      var dealersListResidentialPros = dealersList.dealers.filter(function(dealer) {
        return dealer.data.certifications.indexOf("Residential Pro") > -1
      });

      //dynamically popular number of dealers in area
      var numberOfDealersParagraph = document.querySelector('.number-of-dealers');
      var numberOfDealers = dealersListResidentialPros.length;
      
      numberOfDealersParagraph.innerHTML = `
            ${numberOfDealers} dealers in 28226
      `;

        //create divs here
        var section0 = document.querySelector('.section0');
        var section0Heading = dealersListResidentialPros[0].data.name;
        var section0Phone = dealersListResidentialPros[0].data.phone1;
        var section0Message = 'Can\'t talk now? Click below to send an email.';
        var section0Email = dealersListResidentialPros[0].data.email;
        var section0HoursText = 'Business Hours';
        var section0Weekdays = dealersListResidentialPros[0].data.weekHours.weekdays;
        var section0Saturday = dealersListResidentialPros[0].data.weekHours.sat;
        var section0Sunday = dealersListResidentialPros[0].data.weekHours.sun;
        section0.innerHTML = `
                <div class="sectionHeading">
                    <h2> ${section0Heading} </h2>
                </div>
                <div class="sectionHeadingBorder">
                </div>
                <div class="sectionPhone">
                    <h2><i class="fas fa-phone-square"></i>&nbsp;${section0Phone}</h2>
                </div>
                <div class="sectionMessage">
                    <p>${section0Message}</p>
                </div>
                <div class="sectionMail" onclick="showModal()">
                  <p><i class="fas fa-envelope"></i>&nbsp;Contact this Pro</p>
                </div>
                <div class="sectionHours">
                  <p>${section0HoursText}</p>
                  <p>Weekdays: ${section0Weekdays}</p>
                  <p>Saturdays: ${section0Saturday}</p>
                  <p>Sundays: ${section0Sunday}</p>
                </div>
        `;
      
        //generate second div here
        var section1 = document.querySelector('.section1');
        var section1Heading = dealersListResidentialPros[1].data.name;
        var section1Phone = dealersListResidentialPros[1].data.phone1;
        var section1Message = 'Can\'t talk now? Click below to send an email.';
        var section1Email = dealersListResidentialPros[1].data.email;
        var section1HoursText = 'Business Hours';
        var section1Weekdays = dealersListResidentialPros[1].data.weekHours.weekdays;
        var section1Saturday = dealersListResidentialPros[1].data.weekHours.sat;
        var section1Sunday = dealersListResidentialPros[1].data.weekHours.sun;
        section1.innerHTML = `
                <div class="sectionHeading">
                    <h2> ${section1Heading} </h2>
                </div>
                <div class="sectionHeadingBorder">
                </div>
                <div class="sectionPhone">
                    <h2><i class="fas fa-phone-square"></i>&nbsp;${section1Phone}</h2>
                </div>
                <div class="sectionMessage">
                    <p>${section1Message}</p>
                </div>
                <div class="sectionMail" onclick="showModal()">
                  <p><i class="fas fa-envelope"></i>&nbsp;Contact this Pro</p>
                </div>
                <div class="sectionHours">
                  <p>${section1HoursText}</p>
                  <p>Weekdays: ${section1Weekdays}</p>
                  <p>Saturdays: ${section1Saturday}</p>
                  <p>Sundays: ${section1Sunday}</p>
                </div>
        `;
      
         //generate third div here
         var section2 = document.querySelector('.section2');
         var section2Heading = dealersListResidentialPros[2].data.name;
         var section2Phone = dealersListResidentialPros[2].data.phone1;
         var section2Message = 'Can\'t talk now? Click below to send an email.';
         var section2Email = dealersListResidentialPros[2].data.email;
         var section2HoursText = 'Business Hours';
         var section2Weekdays = dealersListResidentialPros[2].data.weekHours.weekdays;
         var section2Saturday = dealersListResidentialPros[2].data.weekHours.sat;
         var section2Sunday = dealersListResidentialPros[2].data.weekHours.sun;
         section2.innerHTML = `
                  <div class="sectionHeading">
                      <h2> ${section2Heading} </h2>
                  </div>
                  <div class="sectionHeadingBorder">
                  </div>
                  <div class="sectionPhone">
                      <h2><i class="fas fa-phone-square"></i>&nbsp;${section2Phone}</h2>
                  </div>
                  <div class="sectionMessage">
                      <p>${section2Message}</p>
                  </div>
                  <div class="sectionMail" onclick="showModal()">
                    <p><i class="fas fa-envelope"></i>&nbsp;Contact this Pro</p>
                  </div>
                  <div class="sectionHours">
                    <p>${section2HoursText}</p>
                    <p>Weekdays: ${section2Weekdays}</p>
                    <p>Saturdays: ${section2Saturday}</p>
                    <p>Sundays: ${section2Sunday}</p>
                  </div>
      `}

  



        function getServiceProList() {
        //this code returns all of the entries that have Service Pro listed
        var dealersListServicePros = dealersList.dealers.filter(function(dealer) {
          return dealer.data.certifications.indexOf("Service Pro") > -1
        });

        //dynamically popular number of dealers in area
        var numberOfDealersParagraph = document.querySelector('.number-of-dealers');
        var numberOfDealers = dealersListServicePros.length;
        
        numberOfDealersParagraph.innerHTML = `
              ${numberOfDealers} dealers in 28226
        `;

          //create divs here
          var section0 = document.querySelector('.section0');
          var section0Heading = dealersListServicePros[0].data.name;
          var section0Phone = dealersListServicePros[0].data.phone1;
          var section0Message = 'Can\'t talk now? Click below to send an email.';
          var section0Email = dealersListServicePros[0].data.email;
          var section0HoursText = 'Business Hours';
          var section0Weekdays = dealersListServicePros[0].data.weekHours.weekdays;
          var section0Saturday = dealersListServicePros[0].data.weekHours.sat;
          var section0Sunday = dealersListServicePros[0].data.weekHours.sun;
          section0.innerHTML = `
                    <div class="sectionHeading">
                        <h2> ${section0Heading} </h2>
                    </div>
                    <div class="sectionHeadingBorder">
                    </div>
                    <div class="sectionPhone">
                        <h2><i class="fas fa-phone-square"></i>&nbsp;${section0Phone}</h2>
                    </div>
                    <div class="sectionMessage">
                        <p>${section0Message}</p>
                    </div>
                    <div class="sectionMail" onclick="showModal()">
                      <p><i class="fas fa-envelope"></i>&nbsp;Contact this Pro</p>
                    </div>
                    <div class="sectionHours">
                      <p>${section0HoursText}</p>
                      <p>Weekdays: ${section0Weekdays}</p>
                      <p>Saturdays: ${section0Saturday}</p>
                      <p>Sundays: ${section0Sunday}</p>
                    </div>
          `;

          //generate second div here
          var section1 = document.querySelector('.section1');
          var section1Heading = dealersListServicePros[1].data.name;
          var section1Phone = dealersListServicePros[1].data.phone1;
          var section1Message = 'Can\'t talk now? Click below to send an email.';
          var section1Email = dealersListServicePros[1].data.email;
          var section1HoursText = 'Business Hours';
          var section1Weekdays = dealersListServicePros[1].data.weekHours.weekdays;
          var section1Saturday = dealersListServicePros[1].data.weekHours.sat;
          var section1Sunday = dealersListServicePros[1].data.weekHours.sun;
          section1.innerHTML = `
                    <div class="sectionHeading">
                        <h2> ${section1Heading} </h2>
                    </div>
                    <div class="sectionHeadingBorder">
                    </div>
                    <div class="sectionPhone">
                        <h2><i class="fas fa-phone-square"></i>&nbsp;${section1Phone}</h2>
                    </div>
                    <div class="sectionMessage">
                        <p>${section1Message}</p>
                    </div>
                    <div class="sectionMail" onclick="showModal()">
                      <p><i class="fas fa-envelope"></i>&nbsp;Contact this Pro</p>
                    </div>
                    <div class="sectionHours">
                      <p>${section1HoursText}</p>
                      <p>Weekdays: ${section1Weekdays}</p>
                      <p>Saturdays: ${section1Saturday}</p>
                      <p>Sundays: ${section1Sunday}</p>
                    </div>
          `;

          //generate third div here
          var section2 = document.querySelector('.section2');
          var section2Heading = dealersListServicePros[2].data.name;
          var section2Phone = dealersListServicePros[2].data.phone1;
          var section2Message = 'Can\'t talk now? Click below to send an email.';
          var section2Email = dealersListServicePros[2].data.email;
          var section2HoursText = 'Business Hours';
          var section2Weekdays = dealersListServicePros[2].data.weekHours.weekdays;
          var section2Saturday = dealersListServicePros[2].data.weekHours.sat;
          var section2Sunday = dealersListServicePros[2].data.weekHours.sun;
          section2.innerHTML = `
                    <div class="sectionHeading">
                        <h2> ${section2Heading} </h2>
                    </div>
                    <div class="sectionHeadingBorder">
                    </div>
                    <div class="sectionPhone">
                        <h2><i class="fas fa-phone-square"></i>&nbsp;${section2Phone}</h2>
                    </div>
                    <div class="sectionMessage">
                        <p>${section2Message}</p>
                    </div>
                    <div class="sectionMail" onclick="showModal()">
                      <p><i class="fas fa-envelope"></i>&nbsp;Contact this Pro</p>
                    </div>
                    <div class="sectionHours">
                      <p>${section2HoursText}</p>
                      <p>Weekdays: ${section2Weekdays}</p>
                      <p>Saturdays: ${section2Saturday}</p>
                      <p>Sundays: ${section2Sunday}</p>
                    </div>
          `;
        }

// sets the default content to be loaded with service pro to be selected and populated
getServiceProList();

// the following code is for displaying and closing the modal
function showModal() {
  document.querySelector('.contact-modal').style.display = 'block';
  console.log('clicked');
}

function hideModal() {
  document.querySelector('.close-modal').addEventListener('click', function() {
    document.querySelector('.contact-modal').style.display = 'none';
    console.log('clicked')
  })
}

//the following code controls the opening and closing of mobile meny

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

