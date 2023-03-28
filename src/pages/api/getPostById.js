import Post from "../../../models/postModel";
import dbConnect from "../../../utils/db";
import mongoose from "mongoose";


export default async function getPostById(req, res) {
  const { _id } = req.query;

  await dbConnect()
  try {
    const post = await Post.findById(_id);
    res.status(200).json({post});
  } catch (error) {
    res.status(400).json({ message: 'Error retrieving post', error });
  }

}
