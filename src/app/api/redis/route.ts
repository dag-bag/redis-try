import axios from "axios";
import { createClient } from "redis";

export async function GET() {
  const client = await createClient()
    .on("error", (err) => console.log("Redis Client Error", err))
    .connect();
  const photos = await client.get("photos");
  if (!photos) {
    console.log("photos from api");
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    client.setEx("photos", 10000, JSON.stringify(data));
  }

  return Response.json(photos);
}
