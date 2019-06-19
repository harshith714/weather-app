const request = require('request')

const forecast= (latitude,longitude,callback)=>{
    const link = 'https://api.darksky.net/forecast/0a1c48eb0913156b2dc24b8bd051d31b/'+latitude+','+longitude+'?units=si'
    request({url:link,json:true},(error,{body})=>{
        if (error){
                callback('Cannot connect to weather service')
                }
        else if(body.error){
                callback('unable to find location')
            
                }
        else{
            callback(undefined,'It is currently '+ body.currently.temperature+' Celsius. ' + 'The weather currently is '+body.currently.summary)
            }         

    })
}
module.exports = forecast