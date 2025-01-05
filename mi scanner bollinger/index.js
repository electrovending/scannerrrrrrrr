#!/usr/bin/env node

const { program } = require("commander");
const strategies = require("./strategies").default;
const notify = require("./notifications");

program
  .description("Get signals for scalping according to a strategy")
  .name("screener")
  .option("-s, --strategy <strategy>", "simple, bollinger", "simple")
  .option("-i, --interval <interval>", "1m, 3m, 5m, 15m, 30m, 1h", "1m")
  .option("-p, --percentage <percentage>", "price movement amount in %", "1")
  .action((options, command) => {
    const strategy = strategies[options.strategy];

    console.log("ESPERANDO ALERTA...");
    notify("test");

    strategy(
      { interval: options.interval, percentage: options.percentage },
      (signal) => {
        console.log(signal);
        notify(signal);
      }
    );
  });

program.parse(process.argv);
