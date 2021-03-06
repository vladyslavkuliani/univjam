var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Song = require('./song');

var PlaylistSchema = new Schema({
  name: String,
  songs: [Song.schema]
});

var Playlist = mongoose.model('Playlist', PlaylistSchema);

module.exports = Playlist;
