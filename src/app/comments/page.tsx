import React from "react";
import { redis } from "../libs/redis";

export default async function Page() {
  const commentsIds = await redis.lrange("comments", 0, 3);
  const comments = await Promise.all(
    commentsIds.map((id) => {
      const comment = redis.hgetall(`comment_details:${id}`);
      const tags = redis.smembers(`tags:${id}`);
      return { details: comment, tags, id: id };
    })
  );
  return <div>{JSON.stringify(comments)}</div>;
}
