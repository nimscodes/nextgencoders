import Post from "../../../../models/postModel";
import dbConnect from "../../../../utils/db";

export default async function handler(req, res) {


      try {
        await dbConnect();
        const post = await Post.create(
          req.body
        ) /* create a new model in the database */
        res.status(201).json({ success: true, data: post })
      } catch (error) {
        res.status(400).json({ success: false })
      }

  }
  