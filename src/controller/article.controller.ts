import { CreateArticleInput, DeleteArticleInput, ReadArticleInput, UpdateArticleInput } from './../schema/article.schema';
import { Request, Response } from "express"
import * as ArticleService from "../service/article.service"
import log from "../utils"

export async function createArticleHandler(
  req: Request<{}, {}, CreateArticleInput["body"]>, res: Response
) {
  const body = req.body
  const article = await ArticleService.createArticle(body)
  return res.send(article)
}

export async function getArticleHandler(
  req: Request<ReadArticleInput["params"]>,
  res: Response
) {
  const articleId = req.params.articleId
  const article = await ArticleService.findArticle(articleId)

  if (!article) {
    return res.sendStatus(404)
  }

  return res.send(article)
}

export async function getAllArticlesHandler(
  _req: Request,
  res: Response,
) {
  const articles = await ArticleService.findAll()
  return res.send(articles)
}

export async function updateArticleHandler(
  req: Request<UpdateArticleInput["params"], {}, UpdateArticleInput["body"]>,
  res: Response,
) {
  const articleId = req.params.articleId
  const body = req.body

  const article = await ArticleService.updateArticle(articleId, body)
  if (!article) {
    return res.send(400)
  }
  return res.send(article)
}

export async function deleteArticleHandler(
  req: Request<DeleteArticleInput["params"]>,
  res: Response
) {
  const articleId = req.params.articleId
  const deleteResult = await ArticleService.deleteArticle(articleId)

  if (!deleteResult) {
    return res.sendStatus(400)
  }
  return res.sendStatus(204)
}


