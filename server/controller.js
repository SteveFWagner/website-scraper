const cheerio = require('cheerio')
const request = require('request')

module.exports={
    websiteInput: (req,res)=>{
        const {url} = req.body //bringing in the url from front end on the request
        request(url, (error, response, html) => {
            if(!error && response.statusCode === 200){ //making sure the url we are hitting is successful before continuing
                const $ = cheerio.load(html) //loading the webpage's html into cheerio and assigning it a veriable
                const titlesArray = [] //establishing an array we will later use in our response to the front end
                $('.summary h3').each((i,el)=>{ //looping over each h3 inside of a 'summary' class
                    const title = $(el).text() //assigning the text in the h3 to a variable
                    titlesArray.push(title) //pushing the variable into the response array
                })
                res.status(200).send(titlesArray) //responding with the array
            }else{
                res.sendStatus(500)
            }
        })
    }
}