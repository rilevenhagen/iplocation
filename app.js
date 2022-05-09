// ============== select button

const bypassCorsUrl = 'https://cors-anywhere.herokuapp.com/'
let apiURL = `https://geo.ipify.org/api/v2/country,city?apiKey=at_nKnn0NlBAFTtFBvqDWfpJpcb5UUom`;
const button = document.querySelector('button');
const inputVal = document.querySelector('input').value;
const locationEl = document.querySelector('.location');
const IpEl = document.querySelector('.IP-Address');
const utcEl = document.querySelector('.timezone');
const ipsEl = document.querySelector('.ips')


// ============== clean input field

function empty() {
  document.querySelector('input').value = '';
}



// load the map on the site ================================

let map = L.map('map', {
  'center':[0,0],
  'zoom':8,
  'tileSize': 512,
    'zoomOffset': -1,
  'layers': [
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
})
  ]
});


// ============add a pop up on map click====================

// const popup = L.popup();

// function onMapClick(e) {
//   popup
//     .setLatLng(e.latlng)
//     .setContent('You clicked the map at ' + e.latlng.toString())
//     .openOn(map);
// }
// map.on('click', onMapClick);


// -----------update first load

upDateFirstLoad = (upData = [51.505, -0.09]) => {
  L.map('map').setVew(upData, 13)
  L.marker(upData).addTo(map)
}

// ============= get the IP
getIP = (defaultIp) => {
  if(defaultIp == undefined){
      url = `${bypassCorsUrl}${apiURL}&ipAddress=8.8.8.8`
  }   url = `${apiURL}&ipAddress=${inputVal}`

  fetch(url, {cache: "no-cache"})
    .then(response => response.json())
    .then(data => {
  IpEl.innerHTML = `<p>${data['ip']}</p>`, locationEl.innerHTML = `<p>${data.location['city']}, ${data.location['region']}</p>`, utcEl.innerHTML = `<p>UTC  /-/ ${data.location['timezone']} </p>`, ipsEl.innerHTML = `<p>${data['isp']} </p>`
upDateFirstLoad([data.location.lat, data.location.lng])
    },
    ) .catch(error => {
    alert(error, '🤪something went wrong, try again with a valid IP address🤪')
    });
    // empty(result)
}

getIP()


button.addEventListener('click', e =>{
  e.preventDefault();
  if(inputVal != '' && inputVal != null ){
getIP(inputVal)
    return
  }
  alert('try again with a valid IP address')
});

// document.addEventListener('load', upDateFirstLoad())
// 
// /\
// 
// 
// // 
// /\
// 
// 
// // 
// /\
// 
// 
// // 
// /\
// 
// 
// // 
// /\
// 
// 
// // 
// /\
// 
// 
// 
// 
// 
// 
// 

// ============== function to get input data and prevent defoult

// function getVal(e) {
//   e.preventDefault();
//   const urlIP = apiURL;

//   let result = fetch(urlIP, {cache: "no-cache"})
//     .then(response => response.json())
//     .then(
//       data => (IpEl.innerHTML = `<p>${data['ip']}</p>`, locationEl.innerHTML = `<p>${data.location['city']}, ${data.location['region']}</p>`, utcEl.innerHTML = `<p>UTC  /-/ ${data.location['timezone']} </p>`, ipsEl.innerHTML = `<p>${data['isp']} </p>`),
//     ) .catch(error => {
//     alert(error, 'something went wrong try again')
//     });
//     empty(result)
// }
// ================ get the IP location ================