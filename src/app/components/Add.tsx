"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Add() {
  const router = useRouter();
  const [text, setText] = useState("");
  const add = async () => {
    const { data } = await axios.post("/api/comment", {
      text: text,
      tags: ["bla"],
    });
    router.push("/comments");
    console.log(data);
  };
  return (
    <div className="flex space-x-4">
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
      <button className="btn" onClick={add}>
        Add
      </button>
    </div>
  );
}
