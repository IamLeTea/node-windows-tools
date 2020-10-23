const clipboardy = require("clipboardy");
const notifier = require("node-notifier");
const getDuplicateValuesFromArray = require("@letea/functions/getDuplicateValuesFromArray");

const text = clipboardy.readSync();

if (text) {
  clipboardy.writeSync(
    getDuplicateValuesFromArray(text.split("\r\n")).join("\r\n")
  );
  notifier.notify({
    title: "getDuplicateLinesFromText",
    message: "Success!",
  });
}
