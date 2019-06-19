 const request = require('request')
 const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const yargs = require('yargs')

const address = process.argv[2]
if (!address)
{
    console.log('please provide an address')
}
else
{
    geocode(address,(error,{latitude,longitude,location} )=>{
        if(error){
            return console.log(error)
        }
        
        forecast(latitude,longitude, (error, forecastdata) => {
            if(error){
               return console.log('Error', error)
    
            }
            console.log('Data:', location)
            console.log(forecastdata)
          })
    
    
    })
    
}
