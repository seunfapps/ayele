const config = require("../config.json")
const sounds = require("../data/sounds.json")
const XString = require("../prototypes/string.prototype")
let BotResponse = function (text, img, sound) {
    return {
        response_type: 'in_channel',
        text: (text || 'Hello from Ayele!') + " " + ((sound && sound != '') ? config.repoRootUrl + sound : ""),
        attachments: [
            {
                image_url: config.repoRootUrl + (img || 'img/cryinglaugh.png')
            }
        ]
    }
}

exports.get = function (req, res) {
    console.log(req.body);
    res.json(new BotResponse());
};

exports.post = function (req, res) {
    let sound = sounds.sort((soundA, soundB) => soundB.name._looksLikeItContains(req.body.text) - soundA.name._looksLikeItContains(req.body.text))[0];
    if (sound) {
        return res.json(new BotResponse(sound.name, sound.img, sound.url));
    }
    else return res.send(null);
};

const slackRequest = {
    token: 'wvhekUH6Rn0acaJgFbtnfMr8',
    team_id: 'T5V2PUMAA',
    team_domain: 'ayele',
    channel_id: 'D5V3V6SQ7',
    channel_name: 'directmessage',
    user_id: 'U5TMUDJBT',
    user_name: 'seunsaber',
    command: '/ayele',
    text: 'chai',
    response_url: 'https://hooks.slack.com/commands/T5V2PUMAA/199131950055/6WfHBHYFAAUq60ZPDlemdP9W'
}