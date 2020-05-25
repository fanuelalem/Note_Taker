var path = require("path");

module.exports = {
getNotesHtml: function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  },
getIndexHtml: function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  }

}