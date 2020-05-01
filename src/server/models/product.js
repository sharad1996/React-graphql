import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const productSchema = new Schema({
  _id: Schema.Types.ObjectId,
  category_id:  { type: Schema.Types.ObjectId, ref: 'Category' },
  description: String,
  image_url: String,
  name: String,
  price: Number,
  vendor_location: String,
  vendor_name: String,
});

module.exports = mongoose.model('products', productSchema);
