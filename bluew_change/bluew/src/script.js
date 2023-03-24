
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    if (screenHeight < 600 && screenWidth <= 640){
        const waterImg = document.querySelector('.water-images');
        waterImg.classList.add('hidden');
    }

    const closeIcon = document.querySelector('.closeIcon');
    const subMenu = document.querySelector('.subMenu');
    const hamMenu = document.querySelector('.hamMenu');
    closeIcon.addEventListener('click',() =>{
        subMenu.classList.toggle('active');
    })

    hamMenu.addEventListener('click',() =>{
        subMenu.classList.toggle('active');
    })

    var messageArray = ["* There is the same amount of water on Earth as there was when the Earth was formed.","* Water covers about 71% of the Earth's surface.", "* Water expands when it freezes, which is why ice floats on water.", "* Water can exist in different colors, such as pink, black, and blue, depending on the conditions and the presence of certain substances."]

    var textPosition = 0;
    var speed = 100;
    var idx = 0;

    var typewrite = () => {
        document.querySelector("#facts").innerHTML = messageArray[idx].substring(0,textPosition) + "<span>\u25ae</span>"

        if (textPosition ++ != messageArray[idx].length){
            setTimeout(typewrite,speed)
        }
        else{
            idx += 1;
            if (idx == messageArray.length) {
                idx = 0;
            }
            textPosition = 0;
            setTimeout(typewrite, 3000);
        
        }

        

    }

    typewrite();

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            
            if (entry.isIntersecting){
                entry.target.classList.add('show');
                
            }

        });
    });

    const heroImg = document.querySelectorAll('.heroImg');
    const heroText = document.querySelectorAll('.main-title , .subtitle');
    const heroBtns = document.querySelectorAll('.find-locations');
    heroText.forEach((text) => observer.observe(text));
    heroImg.forEach((el) => observer.observe(el));
    heroBtns.forEach((btn)=> observer.observe(btn))


    const findMyState = () => {
        const success = (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`

            // fetch(geoApiUrl).then(res => res.json()).then(data => console.log(data))
            const exactLocation = new Promise((resolve, reject) => {
                fetch(geoApiUrl).then(
                    (response) => {
                        if (!response.ok){
                            throw new Error("API request couldn't be made");
                        }
                        return response.json();
                    }).then((loc) => {
                        console.log(loc);
                        resolve(loc);
                    }).catch((err) => {
                        console.log(err);
                        reject(err);
                    })  
            }) 

            exactLocation.then((loc) => {
                console.log(loc); 
              });
            
        }

        const error = () => console.log("An error occured");

        navigator.geolocation.getCurrentPosition(success,error)
    }
    findMyState()   

    window.initMap = function () {
        var options = {
          zoom: 14,
          center: { lat: 45.42178, lng: -75.69119 },
        };
        var map = new google.maps.Map(document.getElementById("map"), options);
      
        var marker = new google.maps.Marker({
          position: { lat: 42.4668, lng: -70.9495 },
          map: map,
        });
      }
      
      function loadGoogleMapsScript(callback) {
        const script = document.createElement("script");
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBFBQV845lfzUCXEHkQO4BT_iIT3fAKDtw&callback=" + callback + "&v=weekly";
        script.defer = true;
        document.body.appendChild(script);
      }

      loadGoogleMapsScript('initMap');

