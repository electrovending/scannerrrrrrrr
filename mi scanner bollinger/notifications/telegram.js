const TelegramBot = require("node-telegram-bot-api");
const config = require("../config");

const notify = (signal) => {
  if (config.telegramBotKey && config.telegramChannelId) {
    const bot = new TelegramBot(config.telegramBotKey);
    bot.sendMessage(config.telegramChannelId, signal);
  }
};

module.exports = notify;
