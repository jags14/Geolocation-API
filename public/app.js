let map;
        async function initMap() {
        const mapData = await getGeoLocation();
        map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: 28.5704192, lng: 77.1915776 },
            zoom: 8,
        });
        }

        
        async function getGeoLocation(){
                if('geolocation' in navigator) {
            // geolocation is available 
            const geo = navigator.geolocation;
            geo.getCurrentPosition((position) =>{
                console.log(position);
                const lat = position.coords.latitude;
                const long = position.coords.longitude;
                document.getElementById('latitude').textContent = lat;
                document.getElementById('longitude').textContent = long;
                //console.log(lat, long);
                return {lat, long}
            });

            } else {
                // geolocation IS NOT available 
                console.log(error);
            }
        }
        
