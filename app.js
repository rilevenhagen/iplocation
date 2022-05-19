console.log("🤜🏻🤪🤛🏻")

// ============== select button


 const apiURL = `https://geo.ipify.org/api/v2/country,city?apiKey=at_ID7CHZ9xEawE7MUsyUHYHzFcZ3QqJ&`;
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


// function==========================


async function ipSearch(input) {

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileURL =  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileURL, { attribution });

let myIcon = L.icon({
    iconUrl: 'https://ip-address-tracker-rico.netlify.app/images/icon-location.svg',
    iconSize: [32, 38],
    iconAnchor: [22, 94],
});

// ==========up data the marker 
updateMarker = (update_marker = [0, 0] ) => {
    myMap.setView(update_marker, 6);
    L.marker(update_marker).addTo(map);
}

// ==============================user API 

const myIP = await fetch('https://api.ipify.org/?format=json').then(response => response.json()).then( data => {return data.ip}
)
// =============IP search API
if(input === undefined || input === " " || input === null ){
url = `${apiURL}&ipAddress=${myIP}`
} else url = `${apiURL}&ipAddress=${input}`
fetch(url)
.then(response => response.json())
.then(data => {IpEl.innerHTML = `${data.ip}`, 
locationEl.innerHTML = `${data.location['city']}, ${data.location['region']}`
ipsEl.innerHTML = `${data['isp']}`
utcEl.innerHTML = `UTC ${data.location['timezone']}`
lat = data.location['lat'],
lng = data.location['lng']
console.log(data)

//==================load the map

let myMap = L.map('map').setView([lat, lng], 6)

let marker = L.marker([lat, lng],{ icon:myIcon } )

tiles.addTo(myMap),

marker.addTo(myMap),
myMap.scrollWheelZoom.disable()
myMap.invalidateSize()
empty()
}).catch(error => {
    alert(error, '🤪something went wrong, try again with a valid IP address🤪')
})
}

let container = L.DomUtil.get('map');

if(container != null){

container._leaflet_id = null;

}

button.addEventListener('click', e => {
    e.preventDefault()
    if (container != null){
container._leaflet_id = null;
};
    if (inputVal != '' && inputVal != null) {
        ipSearch(inputVal.value), map.invalidateSize()
        return 
    }
    alert("Please enter a valid IP address");

}

)

ipSearch()