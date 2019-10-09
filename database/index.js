const mongoose = require('mongoose');
// for local
mongoose.connect('mongodb://localhost/cave', { useNewUrlParser: true });
// for deployed
// mongoose.connect('mongodb://database/cave', { useNewUrlParser: true });
const cavePhotosSchema = mongoose.Schema({
  listingId: Number,
  main: String,
  photos: [String],
  description: String,
  totalPhotos: Number,
}, { collection: 'cave' });

const CavePhotos = mongoose.model('cave', cavePhotosSchema);

const getCavePhotos = (num, callback) => {
  CavePhotos.find({ listingId: num }, (err, data) => {
    callback(data);
  });
};

module.exports.getCavePhotos = getCavePhotos;
