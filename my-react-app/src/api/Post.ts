import { z } from "zod";

export const PostSchema = z.object({
  id: z.number(),
  title: z.string(),
  excerpt: z.string(),
  photo: z.string(),
});

export type Post = z.infer<typeof PostSchema>;

export const PostList = z.array(PostSchema);

export type PostList = z.infer<typeof PostList>;

export const FetchPostListSchema = z.object({
  list: PostList,
});

export type FetchPostListResponse = z.infer<typeof FetchPostListSchema>;

export function fetchPostList(): Promise<FetchPostListResponse> {
  return fetch("/api/posts")
    .then((response) => response.json())
    .then((data) => FetchPostListSchema.parse(data));
}
