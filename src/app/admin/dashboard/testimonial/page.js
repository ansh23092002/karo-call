
"use client";
import { useState,useEffect } from "react";

export default function TestimonialPage() {
  const [data, setData] = useState(null);

useEffect(() => {

}, []);

  return (
    <div>
      <h1>Hello Page</h1>
      <button >Click Me</button>
      <div>
        {/* Render testimonial data here */}
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </div>
    </div>
  );
}