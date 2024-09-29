"use client";
import { useEffect } from "react";
import { connectClient } from "./connector";

export default function Home() {
  useEffect(() => {
    connectClient();
  });
  return <div className=""></div>;
}
