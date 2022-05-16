// ============== select button

const secretApi = 'ENTER_YOUR_API';
//  const apiURL = `https://geo.ipify.org/api/v2/country,city?apiKey=at_ID7CHZ9xEawE7MUsyUHYHzFcZ3QqJ&`;
const button = document.querySelector('button');
let inputVal = document.querySelector('input');
const locationEl = document.querySelector('.location');
const IpEl = document.querySelector('.IP-Address');
const utcEl = document.querySelector('.timezone');
const ipsEl = document.querySelector('.ips');

let myMap = L.map('map').setView([-21.586772, -44.559879], 3);

let marker = L.marker([-21.586772, -44.559879]);

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const tiles = L.tileLayer(tileURL, { attribution });


updateMarker = (update_marker = [-33.665, 18.993]) => {
    map.setView(update_marker, 13);
    L.marker(update_marker).addTo(map);
}

// getIPDetails = (default_ip) => {
//     if(default_ip == undefined){
//         var ip_url = `${bypass_cors_url}${api_uri}${current_verion}?apiKey=${secret_api}`
//     }
//     else {
//         var ip_url = `${bypass_cors_url}${api_uri}${current_verion}?apiKey=${secret_api}&ipAddress=${default_ip}`
//     }
//     fetch(ip_url, headers_option)
//     .then( results => results.json())
//     .then( data => {
//         IpEl.innerHTML = data.ip
//         locationEl.innerHTML = `${data.location.city} ${data.location.country} ${data.location.postalCode}`
//         utcEl.innerHTML = data.location.timezone
//         ipsEl.innerHTML = data.isp

//         // update map marker 
//         updateMarker([data.location.lat, data.location.lng])
//     })
//     .catch(error => {
//         alert("Unable to get IP details")
//         console.log(error)
//     })
// }

document.addEventListener('load', updateMarker())

button.addEventListener('click', e => {
    e.preventDefault()
    if (inputVal != '' && inputVal != null) {
        getIPDetails(inputVal)
        return
    }
    alert("Please enter a valid IP address");
})