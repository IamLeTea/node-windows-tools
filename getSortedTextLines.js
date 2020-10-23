const clipboardy = require("clipboardy");
const notifier = require("node-notifier");
const getSortedArray = require("@letea/functions/getSortedArray");

const text = clipboardy.readSync();

if (text) {
  clipboardy.writeSync(getSortedArray(text.split("\r\n")).join("\r\n"));
  notifier.notify({
    title: "getSortedTextLines",
    message: "Success!",
  });
}
