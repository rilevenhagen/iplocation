// ============== select button

const secretApi = 'ENTER_YOUR_API';
// const apiURL = `https://geo.ipify.org/api/v2/country,city?apiKey=at_ID7CHZ9xEawE7MUsyUHYHzFcZ3QqJ&`;
const button = document.querySelector('button');
let inputVal = document.querySelector('input');
const locationEl = document.querySelector('.location');
const IpEl = document.querySelector('.IP-Address');
const utcEl = document.querySelector('.timezone');
const ipsEl = document.querySelector('.ips');

// ============== clean input field

function empty() {
  document.querySelector('input').value = '';
}


//=============get the map api

// 'center':[-21.586772, -44.559879],
const myMap = L.map('map').setView([-21.586772, -44.559879], 6);

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const tiles = L.tileLayer(tileURL, { attribution });

tiles.addTo(myMap)




upDateFirstLoad = (upData = [-21.586772, -44.559879]) => {

tiles.addTo(myMap)
 L.map('map').setView(upData, 13)
  L.marker(upData).addTo(map)
}

upDateFirstLoad()

// async function ipSearch(input) {
  
// const myIP = await fetch('https://api.ipify.org/?format=json').then(response => response.json()).then( data => {return data.ip}
// )

//   if(input === undefined || input === " " || input === null ){
//     url = `${apiURL}&ipAddress=${myIP}`
//   } else url = `${apiURL}&ipAddress=${input}`
//  fetch(url)
//     .then(response => response.json())
//     .then(data => {IpEl.innerHTML = `${data.ip}`, 
// locationEl.innerHTML = `${data.location['city']}, ${data.location['region']}`
// ipsEl.innerHTML = `${data['isp']}`
// utcEl.innerHTML = `${data.location['timezone']}`
// console.log(data)
// // upDateFirstLoad(data.location['lat'], data.location['lng'])
// }).catch(error => {
//     alert(error, '🤪something went wrong, try again with a valid IP address🤪')
//     })
//   }
// ipSearch()



button.addEventListener('click', e =>{
  e.preventDefault();
  inputVal = document.querySelector('input').value
  return ipSearch(inputVal), empty()
})


