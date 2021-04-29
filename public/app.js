
            let lat, long;
            const btn = document.getElementById('btn');
            btn.addEventListener('click', async event =>{    
                const book = document.getElementById('book').value;
                const data = {lat, long, book}
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                    };
                    const response = await fetch('/api', options);
                    const json = await response.json();
                    console.log(json);
            });
        
            if('geolocation' in navigator) {
            // geolocation is available 
            const geo = navigator.geolocation;
            geo.getCurrentPosition(async position =>{
                console.log(position);
                lat = position.coords.latitude;
                long = position.coords.longitude;
                document.getElementById('latitude').textContent = lat;
                document.getElementById('longitude').textContent = long;
                //console.log(lat, long);    

            });

            } else {
                // geolocation IS NOT available 
                console.log(error);
            }
