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

AyeleBot.prototype._onMessage = function (message) {
    if (this._isChatMessage(message) && 
        this._isChannelConversation(message) && 
        !this._isFromAyeleBot(message) && 
        this._mentionsAyeleBot(message)) {
            
        }
}

AyeleBot.prototype._isChatMessage = (message) => (message && message.type === 'message' && Boolean(message.text))
AyeleBot.prototype._isChannelConversation = (message) => (message && typeof(message.channel) === 'string' && message.channel[0] === 'C')
AyeleBot.prototype._isFromAyeleBot = function (message) { return (message && message.user == this.user.id); }
AyeleBot.prototype._mentionsAyeleBot = function (message) { return (message && message.text.toLowerCase().) }

AyeleBot.prototype.run = function () {
    AyeleBot.super_.call(this, this.settings)
    this.on("start", this._onStart)
    this.on("message", this._onMessage)
}
module.exports = AyeleBot