const clipboardy = require("clipboardy");
const notifier = require("node-notifier");

const text = clipboardy.readSync();

if (text) {
  clipboardy.writeSync(text.trim());
  notifier.notify({
    title: "getTrimmed",
    message: "Success!",
  });
}
