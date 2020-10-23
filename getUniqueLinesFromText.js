const clipboardy = require("clipboardy");
const notifier = require("node-notifier");
const getUniqueValuesFromArray = require("@letea/functions/getUniqueValuesFromArray");

const text = clipboardy.readSync();

if (text) {
  clipboardy.writeSync(
    getUniqueValuesFromArray(text.split("\r\n")).join("\r\n")
  );
  notifier.notify({
    title: "getUniqueLinesFromText",
    message: "Success!",
  });
}
