# Steps

## Step 1:

### Divide the components by responsibilities

-App
   -WeatherCard
       -CurrentCity
           -Date
           -Name
           -Temperature
           -TemperatureRange
           -WeatherIcon
           -Meta
               -Humidity
               -Wind
               -AirQuality
               -Somatosensory
       -Forecast
           -DayOfWeek
              -Name
              -Date
              -WeatherIcon
              -TemperatureRange
       -SearchBar
           -Input
           -Button
       -OtherCities
           -CityArray
               -WeatherIcon
               -TemperatureRange

### The component with identical name could be reused

-WeatherIcon
-TemperatureRange
-Name
-Date
-BackgroundImage

### Global Assets

-fonts
-backgroundImage

#### VS CODE Extension
-Image Preview
-Code Spell Check