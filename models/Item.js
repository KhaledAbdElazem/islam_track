import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: String,
  image: String,
  quantity: Number,
  price: Number,
  barcode: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Item', itemSchema);
