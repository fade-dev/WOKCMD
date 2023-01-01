const CommandHandler = require("./CommandHandler")

class Main {
    constructor({ client, commandsDir }) {
        if (!client) {
            throw new Error('A client is required.')
        }

        if (commandsDir) {
            new CommandHandler(commandsDir)
        }
    }
}

module.exports = Main