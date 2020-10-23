const clipboardy = require("clipboardy");
const notifier = require("node-notifier");
const getUniqueArray = require("@letea/functions/getUniqueArray");

const text = clipboardy.readSync();

if (text) {
  clipboardy.writeSync(getUniqueArray(text.split("\r\n")).join("\r\n"));
  notifier.notify({
    title: text.split("\r\n").toString(),
    message: "Success!",
  });
}
