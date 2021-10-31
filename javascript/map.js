function initMap({
  var mymap = L.map('mapid', {editable: true});
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      accessToken: mapbox_access_token,
    }).addTo(mymap);

    options = {
        icon: 'leaf',
        iconShape: 'marker'
    };


    var marker1 = L.marker([27.174961, 78.042385], {editable: true
    }).addTo(mymap).bindPopup("<b>India's Taj Mahal.</b> <img src='images/taj.jpg'/> The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan (reigned from 1628 to 1658) to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.").openPopup();

    var marker2 = L.marker([40.334245, 116.477652], {
    }).bindPopup("<b>Great Wall of China.</b> <img src='images/greatwall.png'/> The Great Wall of China is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe. Several walls were built from as early as the 7th century BC,[2] with selective stretches later joined together by Qin Shi Huang (220–206 BC), the first emperor of China. Little of the Qin wall remains.[3] Later on, many successive dynasties built and maintained multiple stretches of border walls. The best-known sections of the wall were built by the Ming dynasty (1368–1644).", {editable: true}).addTo(mymap);

    var marker3 = L.marker([30.328611, 35.441944], {
    }).addTo(mymap).bindPopup("<b>Petra in Jordan.</b> <img src='images/petra.jpg'/> Petra, originally known to its inhabitants as Raqmu or Raqēmō[3][4] is a historic and archaeological city in southern Jordan. It is adjacent to the mountain of Jabal Al-Madbah, in a basin surrounded by mountains forming the eastern flank of the Arabah valley running from the Dead Sea to the Gulf of Aqaba.[5] The area around Petra has been inhabited from as early as 7000 BC,[6] and the Nabataeans might have settled in what would become the capital city of their kingdom, as early as the 4th century BC.[7] Archaeological work has only discovered evidence of Nabataean presence dating back to the second century BC,[8] by which time Petra had become their capital.[6] The Nabataeans were nomadic Arabs who invested in Petra's proximity to the incense trade routes by establishing it as a major regional trading hub.").openPopup();

    var marker4 = L.marker([-22.951389, -43.2108334], {
    }).addTo(mymap).bindPopup("<b>Brazil's Statue of Christ the Redeemer.</b> <img src='images/christ.jpg'/> Christ the Redeemer (Portuguese: Cristo Redentor, standard Brazilian Portuguese: [ˈkɾistu ʁedẽˈtoʁ], local pronunciation: [ˈkɾiɕtŭ̥ xe̞dẽˈtoɦ]) is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot. Romanian sculptor Gheorghe Leonida fashioned the face. Constructed between 1922 and 1931, the statue is 30 metres (98 ft) high, excluding its 8-metre (26 ft) pedestal. The arms stretch 28 metres (92 ft) wide.[1][2]").openPopup();

    var marker5 = L.marker([-13.163056, -72.545556], {
    }).addTo(mymap).bindPopup("<b>Peru's Machu Picchu.</b> <img src='images/machu.jpg'/> Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a 2,430-meter (7,970 ft) mountain ridge.[2][3] It is located in the Machupicchu District within Urubamba Province[4] above the Sacred Valley, which is 80 kilometers (50 mi) northwest of Cuzco. The Urubamba River flows past it, cutting through the Cordillera and creating a canyon with a tropical mountain climate.[5]").openPopup();

    var marker6 = L.marker([20.682778, -88.569167], {
    }).addTo(mymap).bindPopup("<b>Mexico's Chichen Itza Pyramid.</b> <img src='images/itza.jpg'/> Chichen Itza[nb 1] was a large pre-Columbian city built by the Maya people of the Terminal Classic period. The archeological site is located in Tinúm Municipality, Yucatán State, Mexico.[1]").openPopup();

    var marker7 = L.marker([41.890169, 12.492269], {
    }).addTo(mymap).bindPopup("<b>The Colosseaum in Rome.</b> <img src='images/colosseum.jpg'/> The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world today, despite its age. Construction began under the emperor Vespasian (r. 69–79 AD) in 72[1] and was completed in 80 AD under his successor and heir, Titus (r. 79–81).[2] Further modifications were made during the reign of Domitian (r. 81–96).[3] The three emperors that were patrons of the work are known as the Flavian dynasty, and the amphitheatre was named the Flavian Amphitheatre (Latin: Amphitheatrum Flavium; Italian: Anfiteatro Flavio [aɱfiteˈaːtro ˈflaːvjo]) by later classicists and archaeologists for its association with their family name (Flavius).").openPopup();

    var line = L.polyline([
        [43.1292, 1.256],
        [43.1295, 1.259],
        [43.1291, 1.261]
    ]).addTo(mymap);

    marker1.on('click', function(e){
      mymap.setView(e.latlng, 13);
    });

    marker2.on('click', function(e){
      mymap.setView(e.latlng, 13);
    });

    marker3.on('click', function(e){
      mymap.setView(e.latlng, 13);
    });

    marker4.on('click', function(e){
      mymap.setView(e.latlng, 13);
    });

    marker5.on('click', function(e){
      mymap.setView(e.latlng, 13);
    });

    marker6.on('click', function(e){
      mymap.setView(e.latlng, 13);
    });

    marker7.on('click', function(e){
      mymap.setView(e.latlng, 13);
    });

    var ZoomViewer = L.Control.extend({
      onAdd: function(){
        var gauge = L.DomUtil.create('div');
        gauge.style.width = '200px';
        gauge.style.background = 'rgba(255,255,255,0.5)';
        gauge.style.textAlign = 'left';
        mymap.on('zoomstart zoom zoomend', function(ev){
          gauge.innerHTML = 'Zoom level: ' + mymap.getZoom();
        })
        return gauge;
      }
    });

    (new ZoomViewer).addTo(mymap);
    mymap.setView([0, 0], 1);
    });
