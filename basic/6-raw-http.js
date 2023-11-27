const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=40,-75&units=f'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()

function teste(element, index, array){
    console.log("element: " + element)
    console.log("index: " + index)
    console.log("array: " + array)
}

let a = [1,2,3];
a.forEach(teste);