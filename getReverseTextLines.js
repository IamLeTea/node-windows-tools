const clipboardy = require("clipboardy");
const notifier = require("node-notifier");
const getReverseArray = require("@letea/functions/getReverseArray");

const text = clipboardy.readSync();

if (text) {
  clipboardy.writeSync(getReverseArray(text.split("\r\n")).join("\r\n"));
  notifier.notify({
    title: "getReverseTextLines",
    message: "Success!",
  });
}
