const getAllFiles = require("./util/get-all-files")

class CommandHandler {
    constructor(commandsDir) {
        this.commandsDir = commandsDir
        this.readFiles()
    }

    readFiles() {
        const files = getAllFiles(this.commandsDir)
    }
}

module.exports = CommandHandler