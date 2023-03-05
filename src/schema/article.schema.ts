import { object, string, TypeOf } from "zod"; 

const payload = {
  body: object({
    title: string({
      required_error: "Title is required"
    }),
    text: string({
      required_error: "Text is required"
    }),
    author: string({}),
  })
}

const params = {
  params: object({
    articleId: string({
      required_error: "ArticleId is required"
    })
  })
}

export const createArticleSchema = object({
  ...payload,
});

export const updateArticleSchema = object({
  ...payload,
  ...params,
});

export const deleteArticleSchema = object({
  ...params,
});

export const getArticleSchema = object({
  ...params,
});

export type CreateArticleInput = TypeOf<typeof createArticleSchema>;
export type UpdateArticleInput = TypeOf<typeof updateArticleSchema>;
export type ReadArticleInput = TypeOf<typeof getArticleSchema>;
export type DeleteArticleInput = TypeOf<typeof deleteArticleSchema>;