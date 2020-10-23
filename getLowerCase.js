const clipboardy = require("clipboardy");
const notifier = require("node-notifier");

const text = clipboardy.readSync();

if (text) {
  clipboardy.writeSync(text.toLowerCase());
  notifier.notify({
    title: "getLowerCase",
    message: "Success!",
  });
}
