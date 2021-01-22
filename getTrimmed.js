const clipboardy = require("clipboardy");
const notifier = require("node-notifier");

const text = clipboardy.readSync();

if (text) {
  clipboardy.writeSync(
    text
      .split("\n")
      .map(line => line.trim())
      .join("\n")
  );
  notifier.notify({
    title: "getTrimmed",
    message: "Success!",
  });
}
