import Post from "../models/postModel";
import mongoose from "mongoose";
import dbConnect from '../utils/db'

export async function getCategories() {
    const categories = await Post.distinct('category');
    return categories;
  }