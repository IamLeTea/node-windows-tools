const clipboardy = require("clipboardy");
const notifier = require("node-notifier");
const getSimpleChinese = require("@letea/functions/getSimpleChinese");

const text = clipboardy.readSync();

if (text) {
  clipboardy.writeSync(getSimpleChinese(text));
  notifier.notify({
    title: "getSimpleChinese",
    message: "Success!",
  });
}
