import Item from '../models/Item.js';

export const getItems = async (req, res) => {
  const items = await Item.find().sort({ createdAt: -1 });
  res.json(items);
};

export const createItem = async (req, res) => {
  const item = await Item.create(req.body);
  res.json(item);
};

export const updateItem = async (req, res) => {
  const updated = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteItem = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};

export const searchItem = async (req, res) => {
  const { barcode } = req.query;
  const item = await Item.findOne({ barcode });
  res.json(item);
};
