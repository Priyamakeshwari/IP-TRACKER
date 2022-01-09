// const loader = document.querySelector("#loading");
// let mymap = null;

// function displayLoading() 
// {
//   loader.classList.add("display");

//   setTimeout(() => {
//     loader.classList.remove("display");
//   }, 20000);
// }

// function hideLoading() 
// {
//   loader.classList.remove("display");
// }

// let ipTracker = {
//   key: "at_HrwgmSiup8VJLlwnCajVolTltcIWD",

//   domain: "",

//   fetchIp: function (ipAddress) 
//   {
//     displayLoading();

//     fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_HrwgmSiup8VJLlwnCajVolTltcIWD&ipAddress=8.8.8.8`) 
//       .then((response) => response.json())
//       .then((data) => {
//         this.displayData(data);
//         console.log(data);
//       })
//       .catch((error) => this.handleErrors(error));
//   },

//   displayData: function (data) 
//   {
//     hideLoading();
//     let { lat } = data.location;
//     let { lng } = data.location;

//     mymap = L.map("mapid").setView([lat, lng], 12);

//     L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//       attribution:
//         'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//       maxZoom: 18,
//       id: "mapbox/streets-v11",
//       tileSize: 512,
//       zoomOffset: -1,
//       accessToken: "pk.eyJ1IjoiaXRzbWlsYWQiLCJhIjoiY2twdHg4YTJ2MDc1bzJvbnpkMzM1NTNnZCJ9.ES0tgt90-43JoRJEPO9RHg",
//     }).addTo(mymap);

//     // let myIcon = L.icon({
//     //   iconUrl: "./img/icon-location.svg",
//     //   iconSize: [30, 40],
//     //   iconAnchor: [22, 94],
//     //   popupAnchor: [-3, -76],
//     //   shadowSize: [68, 95],
//     //   shadowAnchor: [22, 94],
//     // });

//     L.marker([lat, lng]).addTo(mymap);

//     let { ip, isp } = data;
//     let { city, country, region, timezone } = data.location;

//     document.querySelector("#ipaddress").innerHTML = ip;
//     document.querySelector("#location").innerHTML = `${city}, ${country}, ${region}`;
//     document.querySelector("#timezone").innerHTML = `UTC ${timezone}`;
//     document.querySelector("#isp").innerHTML = isp;
//   },

//   handleErrors: function (error) 
//   {
//     console.log(error);
//   },

//   search: function () {
//     mymap.remove();
//     this.fetchIp(document.querySelector("#ip-input").value);
//   },
// };

// document.querySelector("#search-btn").addEventListener("click", () => {
//   ipTracker.search();
// });
// ipTracker.fetchIp("2.2.2.2");

const loader = document.querySelector("#loading");
let mymap = null;

function displayLoading() {
  loader.classList.add("display");

  setTimeout(() => {
    loader.classList.remove("display");
  }, 20000);
}

function hideLoading() {
  loader.classList.remove("display");
}

let ipTracker = {
  key: "at_HrwgmSiup8VJLlwnCajVolTltcIWD",

  domain: "",

  fetchIp: function (ipAddress) {
    displayLoading();

    fetch(`https://geo.ipify.org/api/v1?apiKey=${this.key}&ipAddress=${ipAddress}`) 
      .then((response) => response.json())
      .then((data) => {
        this.displayData(data);
        console.log(data);
      })
      .catch((error) => this.handleErrors(error));
  },

  displayData: function (data) {
    hideLoading();
    let { lat } = data.location;
    let { lng } = data.location;

    mymap = L.map("mapid").setView([lat, lng], 12);

    L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken: "pk.eyJ1IjoiaXRzbWlsYWQiLCJhIjoiY2twdHg4YTJ2MDc1bzJvbnpkMzM1NTNnZCJ9.ES0tgt90-43JoRJEPO9RHg",
    }).addTo(mymap);

    let myIcon = L.icon({
      iconUrl: "./img/icon-location.svg",
      iconSize: [30, 40],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
      shadowSize: [68, 95],
      shadowAnchor: [22, 94],
    });

    L.marker([lat, lng]).addTo(mymap);

    let { ip, isp } = data;
    let { city, country, region, timezone } = data.location;

    document.querySelector("#ipaddress").innerHTML = ip;
    document.querySelector("#location").innerHTML = `${city}, ${country}, ${region}`;
    document.querySelector("#timezone").innerHTML = `UTC ${timezone}`;
    document.querySelector("#isp").innerHTML = isp;
  },

  handleErrors: function (error) {
    console.log(error);
  },

  search: function () {
    mymap.remove();
    this.fetchIp(document.querySelector("#ip-input").value);
  },
};

document.querySelector("#search-btn").addEventListener("click", () => {
  ipTracker.search();
});

// default ip
ipTracker.fetchIp("1.1.1.1");
