
const simpleTimer = (args) => {
  let delay = 0;
  const beep = '\x07';
  args = process.argv.slice(2);
  if (args === []) {
    return;
  }

  for (const arg of args) {
    if (isNaN(arg) || arg < 0) {
      continue;
    }
    delay = arg * 1000;
    setTimeout(() => {
      process.stdout.write(beep);
    }, delay);
  }
};

simpleTimer();