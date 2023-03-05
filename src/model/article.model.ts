import mongoose from 'mongoose';
import nanoid from 'nanoid';

export interface ArticleInput {
  title: String,
  text: String,
  author: String,
}

export interface ArticleDocument extends ArticleInput, mongoose.Document {
  createdAt: Date,
  updatedAt: Date,
}

const articleSchema = new mongoose.Schema({
  articleId: {
    type: String,
    required: true,
    unique: true,
    default: () => `article_${nanoid.nanoid()}`
  },
  title: { type: String, required: true},
  text: {type: String, required: true},
  author: String
}, {
  timestamps: true
})

const ArticleModel = mongoose.model("User", articleSchema)
export default ArticleModel