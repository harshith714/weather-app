const request = require('request')

const geocode= (address,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoic2FpaGFyc2giLCJhIjoiY2p2ZjJ0OWtuMXkybTQ0dGQ4ZWxqZnFsOSJ9.MtvB5EPUXKevIs3os3_0KQ'
    request({url: url,json:true},(error,{body})=>{
        if(error){
            callback('Cannot connect to geospace service',undefined)
        }
        else if(body.features.length===0){
            console.log('unable to find location')
        }
        else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude:body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })

}

module.exports=geocode 