const clipboardy = require("clipboardy");
const notifier = require("node-notifier");
const getTraditionalChinese = require("@letea/functions/getTraditionalChinese");

const text = clipboardy.readSync();

if (text) {
  clipboardy.writeSync(getTraditionalChinese(text));
  notifier.notify({
    title: "getTraditionalChinese",
    message: "Success!",
  });
}
