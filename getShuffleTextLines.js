const clipboardy = require("clipboardy");
const notifier = require("node-notifier");
const getShuffleArray = require("@letea/functions/getShuffleArray");

const text = clipboardy.readSync();

if (text) {
  clipboardy.writeSync(getShuffleArray(text.split("\r\n")).join("\r\n"));
  notifier.notify({
    title: "getShuffleTextLines",
    message: "Success!",
  });
}
