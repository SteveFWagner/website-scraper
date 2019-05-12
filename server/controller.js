const cheerio = require('cheerio')
const request = require('request')

module.exports={
    websiteInput: (req,res)=>{
        console.log(req.body)
        const {url} = req.body
        request(url, (error, response, html) => {
            // console.log(111,response.statusCode)
            // console.log(222,typeof response.statusCode)
            if(!error && response.statusCode === 200){
                // console.log(html)
                const $ = cheerio.load(html)
                // console.log($)
                // const container = $('.summary')
                // const title = container.children('h3').text()
                // console.log(title)
                const titlesArray = []
                $('.summary h3').each((i,el)=>{
                    const title = $(el).text()
                    titlesArray.push(title)
                    // console.log(title)
                })
                // console.log(titlesArray)
                res.status(200).send(titlesArray)
            }else{
                res.sendStatus(500)
            }
        })
    }
}