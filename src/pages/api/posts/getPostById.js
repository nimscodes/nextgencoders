import Post from '../../../../models/postModel'
import dbConnect from '../../../../utils/db';


export default async function handler(req, res) {
  const postId = req.query.id;

  try {
    await dbConnect();

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json({ post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}