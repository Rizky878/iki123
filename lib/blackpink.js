const axios = require("axios")
const imageToBase64 = require('image-to-base64');

const blackpink = (teks) => {
    return new Promise((resolve, reject) => {
        if (typeof teks === 'undefined') { reject('masukan teks') }
        var url = 'https://docs-jojo.herokuapp.com/api/blackpink?text=' + teks
        axios.get(url)
            .then(res => {
                imageToBase64(res.data.result)
                    .then(data => {
                        var buf = Buffer.from(ress, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}

module.exports = blackpink
