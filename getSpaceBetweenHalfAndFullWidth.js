const clipboardy = require("clipboardy");
const notifier = require("node-notifier");
const getStringWithSpaceBetweenHalfAndFullWidth = require("@letea/functions/getStringWithSpaceBetweenHalfAndFullWidth");

const text = clipboardy.readSync();

if (text) {
  clipboardy.writeSync(getStringWithSpaceBetweenHalfAndFullWidth(text));
  notifier.notify({
    title: "getStringWithSpaceBetweenHalfAndFullWidth",
    message: "Success!",
  });
}
