const Binance = require("binance-api-node").default;

const client = Binance();

const strategy = async (options, onSignal = (signal) => {}) => {
  const symbols = Object.keys(await client.futuresPrices());
  const { interval, percentage } = options;

  client.ws.futuresCandles(symbols, interval, (candle) => {
    const low = Number(candle.low);
    const high = Number(candle.high);

    const diff = Math.abs(high / low - 1) * 100;

    if (diff >= percentage && candle.isFinal) {
      onSignal(
        `${candle.symbol} ( ALERTA ) MOVIMIENTO FUERTE  🔴 SHORT se ha movido un ${
          Math.round((diff + Number.EPSILON) * 100) / 100
        }%`
      );
    }
  });
};

module.exports = strategy;
