const clipboardy = require("clipboardy");
const notifier = require("node-notifier");

const text = clipboardy.readSync();

if (text) {
  clipboardy.writeSync(text.toUpperCase());
  notifier.notify({
    title: "getUpperCase",
    message: "Success!",
  });
}
