"use client"
import { useParams } from "next/navigation";

export default function Loading() {
  const params = useParams<{ user: string }>()

  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
}
