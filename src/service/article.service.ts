import ArticleModel, { ArticleInput } from './../model/article.model';
import log from '../utils';

export async function createArticle(input: ArticleInput) {
  try {
    const result = await ArticleModel.create(input)
    return result
  } catch(e) {
    log.error(`Error while adding article\n ${input}\n ${e}`)
    return null
  }
}

export async function findArticle(id: String) {
  try {
    const result = await ArticleModel.findById(id)
    return result
  } catch(e) {
    log.error(`Error while getting article with id ${id}\n ${e}`)
    return null
  }
}

export async function findAll() {
  try {
    const result = await ArticleModel.find()
    return result
  } catch(e) {
    log.error(`Error while getting all articles\n ${e}`)
    return null
  }
}

export async function updateArticle(id: String, input: ArticleInput) {
  try {
    const result = await ArticleModel.findByIdAndUpdate(id, input, {
      new: true,
    })
    return result
  } catch(e) {
    log.error(`Error while updating article with id ${id}\n ${input}\n ${e}`)
    return null
  }
}

export async function deleteArticle(id: String) {
  try {
    const result = await ArticleModel.findByIdAndDelete(id)
    return true
  } catch(e) {
    log.error(`Error while deleting article from db ${e}`)
    return false
  }
}