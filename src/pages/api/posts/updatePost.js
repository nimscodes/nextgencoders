import Post from "../../../../models/postModel";
import dbConnect from '../../../../utils/db';

export default async function handler(req, res) {
    const { id } = req.query;
    const { title, author, content, category } = req.body;
    try {
      await dbConnect();
      const post = await Post.findByIdAndUpdate(
        id,
        { title, author, content, category },
        { new: true }
      );
      res.status(200).json({ message: 'Post updated successfully', post });
    } catch (error) {
      res.status(400).json({ message: 'Error updating post', error });
    }
  }
  