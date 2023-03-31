import Post from "../../../../models/postModel";
import dbConnect from "../../../../utils/db";


export default async function getPostsByCategory(req, res) {
    const { category } = req.query;
    try {

      await dbConnect();
      const posts = await Post.find({ category });
  
      res.status(200).json({posts});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  