$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);
    console.log(JSON.stringify(data));
    
    // Put your code here. Don't change any other code in this file. You will be sad.
    var markup = "Current Temperature is: " + data.currently.apparentTemperature + ", Today's Max. Temperature is: " + data.daily.data[0].apparentTemperatureMax + ", Today's Min. Temperature is: " + data.daily.data[0].apparentTemperatureMin + ", Today's Humidity is: " + data.daily.data[0].humidity + ", Today's windspeed is: " + data.daily.data[0].windSpeed
     + ", Tomorrow's Max. Temperature is: " + data.daily.data[1].apparentTemperatureMax + ", Tomorrow's Min. Temperature is: " + data.daily.data[1].apparentTemperatureMin + ", Tomorrow's Humidity is: " + data.daily.data[1].humidity + ", Tomorrow's windspeed is: " + data.daily.data[1].windSpeed
     + ", Day after tomorrow's Max. Temperature is: " + data.daily.data[2].apparentTemperatureMax + ", Day after tomorrow's Min. Temperature is: " + data.daily.data[2].apparentTemperatureMin + ", Day after tomorrow's Humidity is: " + data.daily.data[2].humidity + ", Day after tomorrow's windspeed is: " + data.daily.data[2].windSpeed
     
    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});