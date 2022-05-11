// ============== select button

const secretApi = 'ENTER_YOUR_API';
const apiURL = `https://geo.ipify.org/api/v2/country,city?apiKey=at_nKnn0NlBAFTtFBvqDWfpJpcb5UUom`;
const button = document.querySelector('button');
const inputVal = document.querySelector('input').value;
const locationEl = document.querySelector('.location');
const IpEl = document.querySelector('.IP-Address');
const utcEl = document.querySelector('.timezone');
const ipsEl = document.querySelector('.ips');



// ============== clean input field

function empty() {
  document.querySelector('input').value = '';
}


// 'center':[-21.586772, -44.559879],


const map = L.map('map', {
    'center':[0, 0],
    'zoom':3.5,
    // 'tileSize': 512,
    'layers': [
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    })
    ]
}) 

upDateFirstLoad = (upData) => {
 L.map('map').setLatLng(upData, 13)
  L.marker(upData).addTo(map)
}





// ============= get the IP
getIP = (defaultIp) => {
  if(defaultIp != undefined){
      url = `${apiURL}&ipAddress=${secretApi}`
  }   url = `${apiURL}&ipAddress=${inputVal}`

  fetch(url, /*{cache: "no-cache"}*/)
    .then(response => response.json())
    .then(data => {
  IpEl.innerHTML = 
  `<p>${data['ip']}</p>`, locationEl.innerHTML = `<p>${data.location['city']}, ${data.location['region']}</p>`, utcEl.innerHTML = `<p>UTC  /-/ ${data.location['timezone']} </p>`, ipsEl.innerHTML = `<p>${data['isp']} </p>`

console.log([data.location.lat, data.location.lng])
console.log(data)
    },
    ) .catch(error => {
    alert(error, '🤪something went wrong, try again with a valid IP address🤪')
    });
    // empty()
}



button.addEventListener('click', e =>{
  e.preventDefault();
  if(inputVal != '' && inputVal != null ){
    getIP()
  }
  alert('try again with a valid IP address')
console.log(inputVal)
});



getIP(inputVal)
console.log(inputVal)
// getIP()