import Post from "../../../../models/postModel";
import dbConnect from '../../../../utils/db';


export default async function handler(req, res) {

  

  try {
    await dbConnect();
    const posts = await Post.find();
    res.status(200).json({ message: 'Posts retrieved successfully', posts });
  } catch (error) {
    res.status(400).json({ message: 'Error retrieving posts', error });
  }
}
