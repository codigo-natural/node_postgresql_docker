import umzug from "./database/umzug.mjs";

const command = process.argv[2];

async function run() {
  if (command === 'up') {
    await umzug.up();
  } else if (command === 'down') {
    await umzug.down();
  } else {
    console.log(`Unknown command: ${command}`);
    process.exit(1);
  }
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});