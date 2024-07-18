const { CronJob } = require("cron");

const job = new CronJob("* * * * *", () => {
  console.log("Running a task every minute");
});

exports.startJob = () => {
  if (job != null) {
    try {
      job.start();
      console.log("job started");
    } catch (e) {
      console.log("error", e);
    }
  }
};
