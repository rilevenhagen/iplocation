// ============== select button

const secretApi = 'ENTER_YOUR_API';
const apiURL = `https://geo.ipify.org/api/v2/country,city?apiKey=at_nKnn0NlBAFTtFBvqDWfpJpcb5UUom`;
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






// upDateFirstLoad = (upData) => {
//  L.map('map').setView(upData, 13)
//   L.marker(upData).addTo(map)
// }

async function ipSerach(input) {
  if(input === undefined && input === "" && input === null ){
    url = `${apiURL}&ipAddress=${secretApi}`
  } url = `${apiURL}&ipAddress=${input}`
 fetch(url, /*{cache: "no-cache"}*/)
    .then(response => response.json())
    .then(data =>  console.log(data),
    ) .catch(error => {
    alert(error, '🤪something went wrong, try again with a valid IP address🤪')
    })
  }
ipSerach()


button.addEventListener('click', e =>{
  e.preventDefault();
  inputVal = document.querySelector('input').value
  return ipSerach(inputVal)
})

// ============= get the IP
// getIP = (defaultIp) => {
//   if(defaultIp != undefined){
//       url = `${apiURL}&ipAddress=${defaultIp}`
//   }   /*url = `${apiURL}&ipAddress=76.71.116.77`*/
// console.log(url)
//   fetch(url, /*{cache: "no-cache"}*/)
//     .then(response => response.json())
//     .then(data => {
//   IpEl.innerHTML = 
//   `<p>${data['ip']}</p>`, locationEl.innerHTML = `<p>${data.location['city']}, ${data.location['region']}</p>`, utcEl.innerHTML = `<p>UTC  /-/ ${data.location['timezone']} </p>`, ipsEl.innerHTML = `<p>${data['isp']} </p>`

// console.log([data.location.lat, data.location.lng])
// console.log(data)
//     },
//     ) .catch(error => {
//     alert(error, '🤪something went wrong, try again with a valid IP address🤪')
//     });
//     // empty()
// }



// button.addEventListener('click', e =>{
//   // e.preventDefault();
//   let ipClient = inputVal
//   return console.log(ipClient)
// //   if(inputVal != '' && inputVal != null ){
// //     getIP(inputVal)
// //   }
// //   alert('try again with a valid IP address')
// // console.log(inputVal)

// });

// getIP(inputVal)

// // getIP()

