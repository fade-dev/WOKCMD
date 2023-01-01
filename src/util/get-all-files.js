const fs = require('fs')

const getAllFiles = (path) => {
    const files = fs.readdirSync(path)
    console.log(files)
}

module.exports = getAllFiles