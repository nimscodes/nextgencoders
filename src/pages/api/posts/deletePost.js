import Post from "../../../../models/postModel";
import dbConnect from '../../../../utils/db';

export default async function handler(req, res) {
    const { id } = req.query;
    try {
      await dbConnect();
      await Post.findByIdAndDelete(id);
      res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
      res.status(400).json({ message: 'Error deleting post', error });
    }
  }
  