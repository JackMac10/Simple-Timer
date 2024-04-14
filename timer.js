const args = process.argv.slice(2);

const setAlarm = (seconds) => {
  if (!isNaN(seconds) && seconds > 0) {
    setTimeout(() => {
      process.stdout.write("\x07");
      console.log(`${seconds} seconds`);
    }, seconds * 1000);
  }
};

args.forEach((arg) => {
  const seconds = parseInt(arg);
  setAlarm(seconds);
});