import { Express, Request, Response } from "express";
import * as ArticleController from "./controller/article.controller"
import validate from "./middleware/validateResource";
import {
  createArticleSchema,
  getArticleSchema,
  updateArticleSchema,
  deleteArticleSchema
} from "./schema/article.schema"

function routes(app: Express) {
  app.get("/health", (req: Request, res: Response) => res.status(200).send("health")),
  app.get("/article", ArticleController.getAllArticlesHandler),
  app.get("/article/:articleId", [validate(getArticleSchema)], ArticleController.getArticleHandler),
  app.post("/article", [validate(createArticleSchema)], ArticleController.createArticleHandler),
  app.put("/article/:articleId", [validate(updateArticleSchema)], ArticleController.updateArticleHandler),
  app.delete("/article/:articleId", [validate(deleteArticleSchema)], ArticleController.deleteArticleHandler)
}

export default routes