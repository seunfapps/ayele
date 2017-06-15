const util = require("util")
const path = require("path")
const Bot = require("slackbots")
const config = require("./config")
const BotSettings = {
    token: config.token || "",
    name: "Ayele"
}
const AyeleBot = function Constructor(settings) {
    this.settings = settings || BotSettings
    this.settings.name = this.settings.name || 'Ayele'
    this.user = null
}
util.inherits(AyeleBot, Bot)
module.exports = AyeleBot