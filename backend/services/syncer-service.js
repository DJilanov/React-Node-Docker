const { CronJob } = require('cron');

const syncerService = () => {

  const createCronJob = (syncFunction, time) => {
    // const time = { second: 1 } // every first second of each minute
    const { hour = '*', minute = '*', second = '*' } = time;

    return new CronJob({
      cronTime: `${second} ${minute} ${hour} * * *`,
      onTick: () => {
        syncFunction();
      },
      start: true,
      // timeZone: 'America/Los_Angeles',
    });
  };

  return {
    createCronJob
  };
};

module.exports = syncerService;