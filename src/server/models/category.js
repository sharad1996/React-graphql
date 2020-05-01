import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const childrenSchema = new Schema({
  _id: Number,
  parant_id: { type: Schema.Types.ObjectId, ref: 'Category' },
  name: String,
});

const categorySchema = new Schema({
  _id: Schema.Types.ObjectId,
  children: [childrenSchema],
  image_url: String,
  name: String,
});

module.exports = mongoose.model('categories', categorySchema);
