console.log("🤜🏻🤪🤛🏻")

// ============== select button

// const secretApi = 'ENTER_YOUR_API';
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


//=============get the map api

// // 'center':[-21.586772, -44.559879],
// let myMap = L.map('map').setView([0, 0], 6);

// let marker = L.marker([0, 0]);

// const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

// const tileURL =  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

// const tiles = L.tileLayer(tileURL, { attribution });
//     // marker.bindPopup('A pretty CSS3 popup.<br> Easily customizable.').openPopup();

// // map = L.map('map').setView([lat, lon], 15);
// let myIcon = L.icon({
//     iconUrl: '/images/icon-location.svg',
//     iconSize: [38, 95],
//     iconAnchor: [22, 94],
// });

// tiles.addTo(myMap);
// // marker.addTo(myMap);
// // myIcon.addTo(myMap);

// marker.addTo(myMap,{ icon: myIcon });


// updateMarker = (update_marker = [-21.586772, -44.559879]) => {
//     myMap.setView(update_marker, 6);
//     L.marker(update_marker).addTo(map);
// }


// document.addEventListener('load', updateMarker(-33.665, 18.993))






// upDateFirstLoad()

async function ipSearch(input) {

//===================================================================== se  nao der apaga daqui ate la 


// 'center':[-21.586772, -44.559879],
// let myMap = L.map('map').setView([lat, lng], 6);

// let marker = L.marker([lat, lng]);

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileURL =  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const tiles = L.tileLayer(tileURL, { attribution });
    // marker.bindPopup('A pretty CSS3 popup.<br> Easily customizable.').openPopup();

// map = L.map('map').setView([lat, lon], 15);
let myIcon = L.icon({
    iconUrl: '/images/icon-location.svg',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
});


// marker.addTo(myMap);
// myIcon.addTo(myMap);

// marker.addTo(myMap,{ icon: myIcon });


updateMarker = (update_marker = [0, 0]) => {
       remove(myMap);
    myMap.setView(update_marker, 6);
    L.marker(update_marker).addTo(map);

}

// ========================================================================== ate aqui 

  
const myIP = await fetch('https://api.ipify.org/?format=json').then(response => response.json()).then( data => {return data.ip}
)
  if(input === undefined || input === " " || input === null ){
    url = `${apiURL}&ipAddress=${myIP}`
  } else url = `${apiURL}&ipAddress=${input}`
 fetch(url)
    .then(response => response.json())
    .then(data => {IpEl.innerHTML = `${data.ip}`, 
locationEl.innerHTML = `${data.location['city']}, ${data.location['region']}`
ipsEl.innerHTML = `${data['isp']}`
utcEl.innerHTML = `${data.location['timezone']}`
lat = data.location['lat'],
lng = data.location['lng']

let myMap = L.map('map').setView([lat, lng], 6)

let marker = L.marker([lat, lng])

tiles.addTo(myMap),
// marker.addTo(myMap);
// myIcon.addTo(myMap);

marker.addTo(myMap,{ icon: myIcon }),

myMap.invalidateSize()
console.log(data.location['lat'], data.location['lng'])
// updateMarker(data.location['lat'], data.location['lng'])
// updateMarker(data.location['lat'], data.location['lng'])
}).catch(error => {
    alert(error, '🤪something went wrong, try again with a valid IP address🤪')
    })
  }




button.addEventListener('click', e => {
    e.preventDefault()
    
    if (inputVal != '' && inputVal != null) {
        ipSearch(inputVal.value), myMap.invalidateSize()
        return 
    }
    alert("Please enter a valid IP address");
})


ipSearch('8.8.8.8')

// upDateFirstLoad = (test = [lat, lon]) => {
// myMap = L.map('map').setView(test, 1)
// marker = L.marker(test).addTo(myMap)
// }

// button.addEventListener('click', async e =>{
//   e.preventDefault();
//   console.log(myMap)
// //  let container = L.DomUtil.get('map');
// //       if(container != null){
// //         container._leaflet_id = null;
// //       }
//   upDateFirstLoad(-21.978906553176262, -44.92753744125367)
//   // inputVal = document.querySelector('input').value
//   // return ipSearch(inputVal), empty()
  
// })


