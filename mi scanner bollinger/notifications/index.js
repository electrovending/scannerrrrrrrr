const telegramNotification = require("./telegram");

const notifyAll = (signal) => {
  telegramNotification(signal);
};

module.exports = notifyAll;
