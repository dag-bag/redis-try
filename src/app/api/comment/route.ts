"use server";
import { redis } from "@/app/libs/redis";
import { nanoid } from "nanoid";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  const userId = await req.cookies.get("id")?.value;
  console.log(userId);
  if (!userId) return Response.json({ error: "Unauthorized" });
  const { tags, text } = await req.json();
  const id = nanoid();
  const res = await redis.rpush("comments", id);
  await redis.sadd(`tags:${id}`, tags);
  const comment = {
    text,
    author: userId,
  };
  await redis.hset(`comment_details:${id}`, comment);

  return Response.json(res);
}
