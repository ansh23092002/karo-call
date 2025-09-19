'use client';
import MakeRequest from "@/requests/request";
import { useState,useEffect } from "react";

export default function CareerPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
   const api = async () => {
      try {
        const res = await MakeRequest('/contact-us', 'GET');
        setData(res.pagedata || []);
      } catch (err) {
        setError('Failed to fetch data');
      }
    }

  }, []);

  console.log("Career Page Data:", data);
  return (
    <div>
      <h1>Hello Page</h1>
      
    </div>
  );
}