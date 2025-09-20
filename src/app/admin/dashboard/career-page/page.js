'use client';
import MakeRequest from "@/requests/request";
import { useState,useEffect } from "react";
import Card from "@/components/ui/Card";

export default function CareerPage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await MakeRequest("/careers", "GET");
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  console.log("Career Page Data:", data);
  const [expanded, setExpanded] = useState({});
  const cardRefs = {};

  const handleReadMore = (jobId) => {
    setExpanded((prev) => ({ ...prev, [jobId]: !prev[jobId] }));
  };

  // Collapse all expanded descriptions when clicking outside any card
  useEffect(() => {
    const handleClickOutside = (event) => {
      const anyCardClicked = Object.values(cardRefs).some(ref => ref && ref.contains(event.target));
      if (!anyCardClicked) {
        setExpanded({});
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [cardRefs]);

  return (
    <div className="p-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card title="Career Data" ClassName="text-3xl font-bold mb-4">
        {Array.isArray(data) ? (
          data.map((item) => {
            const isExpanded = expanded[item.job_id];
            return (
              <div
                key={item.job_id}
                ref={ref => cardRefs[item.job_id] = ref}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col gap-2 relative"
                style={{ minHeight: '320px' }}
              >
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <div className="text-gray-700"><strong>Location:</strong> {item.location}</div>
                <div className="text-gray-700"><strong>Category:</strong> {item.category}</div>
                <div className="text-gray-700"><strong>Job Type:</strong> {item.jobtype}</div>
                <div>
                  <strong>Description:</strong>
                  <div
                    className="transition-all duration-300"
                    style={{ maxHeight: isExpanded ? 'none' : '60px', overflow: isExpanded ? 'visible' : 'hidden', position: 'relative' }}
                  >
                    <div dangerouslySetInnerHTML={{ __html: item.description }} />
                    {!isExpanded && (
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '30px', background: 'linear-gradient(transparent, #fff)' }} />
                    )}
                  </div>
                  <button
                    className="mt-2 text-blue-600 font-bold focus:outline-none"
                    aria-label={isExpanded ? 'Show less description' : 'Read more description'}
                    onClick={() => handleReadMore(item.job_id)}
                  >
                    {isExpanded ? 'Show Less' : 'Read More'}
                  </button>
                </div>
                <div className="text-gray-700"><strong>Key Responsibility:</strong> {item.key_responsibility}</div>
                <div className="text-gray-700"><strong>Qualification & Skills:</strong> {item.qualification_and_skill}</div>
                <div className="text-gray-700"><strong>What We Offer:</strong> {item.what_we_offer}</div>
                <div className="text-gray-500 text-sm"><strong>Posted On:</strong> {new Date(item.created_at).toLocaleDateString()}</div>
              </div>
            );
          })
        ) : (
          <div>No data available or data format is incorrect.</div>
        )}
      </Card>
    </div>
  );
}