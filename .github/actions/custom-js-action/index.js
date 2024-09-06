const core = require('@actions/core');

try {
  const name = core.getInput('name');
  console.log(`Hello, ${name}!`);
} catch (error) {
  core.setFailed(error.message);
}