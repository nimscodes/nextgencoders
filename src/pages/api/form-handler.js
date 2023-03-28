import Post from '../../../models/Post';
import dbConnect from '../../../utils/db';

dbConnect();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const post = new Post(req.body);
        await post.save();
        res.status(201).json({ success: true, data: post });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}