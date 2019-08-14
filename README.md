WeatherToBike
=============
###### Welcome to WeatherToBike, the application that helps you get started cycling in Melbourne.
---
## What is our application all about?
Our application is targeted at Melbournians who wish to begin their cycling journey. Whether choosing to cycle for convenience, excercise or reducing our carbon footprint. Our application will make it easier for you to get started by providing turn-by-turn cycling directions to your destination, current and predicted weather conditions, available bicycle parking and overall expected travel time. 

Our application's main features include:
* Turn-by-turn directions to your destination
  * The user can enter a destination to search for a cycling route (N/B: autocomplete for destination may take a while to search, please return to the homepage to refresh if difficulty is experienced)
  * This will return turn-by-turn directions via Google Maps API, including expected travel times
* Weather
  * In addition to the above routing, predicted weather is shown to the user based on the input destination via the DarkSky API
  * The weather page will also display a forecast for the week
  * The background is dynamically updated based on the current weather conditions
* Bicycle parking locations
  * Parking locations will be displayed with routing information via Map markers, this is retrieved through the Melbourne Open Data portal (Bike parking API)
* Record previous trips
  * All trips made through the 'Map my ride' feature is recorded if the logged-in user decides 'Yes' to ride their bike.

## Want to clone our repository?
[GitHub repository](https://github.com/akelms/info30005-2019-pf.git)

## Frequently asked questions
* How does this application retrieve its weather data?
  * **We utilise publically available API's such as Google Maps and DarkSky to retrieve directions, travel times and weather data**
* Can you guarantee bicycle parking at my destination?
  * **We utilise the Melbourne Open Data portal to retrieve suggested bicycle parking availability, however this does not guarantee availability. The good news is; as you are choosing to cycle, you can park your bicycle almost anywhere e.g. The nearest street parking pole (and for free!)**
