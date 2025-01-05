require("dotenv").config();

module.exports = {
  telegramBotKey: process.env.TELEGRAM_BOT_KEY,
  telegramChannelId: process.env.TELEGRAM_CHANNEL_ID,
  discordWebhookUrl: process.env.DISCORD_WEBHOOK_URL,
  obsWebhookUrl: process.env.OBS_WEBHOOK_URL,
};
