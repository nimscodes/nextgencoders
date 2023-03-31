import Post from "../models/postModel";
import mongoose from "mongoose";
import dbConnect from './db'

export async function getAllCategories() {
    await dbConnect();
    const categories = await Post.distinct('category');
    return categories;
  }