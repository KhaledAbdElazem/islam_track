import connectToDatabase from '../lib/mongodb';
import Item from '../models/Item';

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'GET') {
    const items = await Item.find();
    res.status(200).json(items);
  } else if (req.method === 'POST') {
    const item = await Item.create(req.body);
    res.status(201).json(item);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
