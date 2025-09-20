'use client'
import React, { useEffect, useState } from "react";
import Card from "/src/components/ui/Card";
import Table from "/src/components/Table";
import MakeRequest from '/src/requests/request';

import { FaTrashAlt } from 'react-icons/fa';

const columns = [
  { key: "id", label: "ID" },
  { key: "your_service", label: "Service" },
  { key: "full_name", label: "Full Name" },
  { key: "contact_number", label: "Contact Number" },
  { key: "address", label: "Address" },
  { key: "created_at", label: "Created At" },
  { key: "actions", label: "Actions" },
];


export default function ServiceBookingPage() {

   const [requests, setRequests] = useState([]);
    const [search, setSearch] = useState('');
  
    useEffect(() => {
      const fetchRequests = async () => {
        try {
          const data = await MakeRequest('/contact-form', 'GET');
          setRequests(data);
        } catch (error) {
          setRequests([]);
        }
      };
      fetchRequests();
    }, []);
  
    const handleDelete = async (req) => {
      // if (window.confirm('Are you sure you want to delete this request?')) {
      //   try {
      //     await MakeRequest(`/contact-form/${req.id}`, 'DELETE');
      //     const data = await MakeRequest('/contact-form', 'GET');
      //     setRequests(data);
      //   } catch (error) {
      //     alert('Failed to delete request.');
      //   }
      // }
    };
  
    const formattedData = Array.isArray(requests)
      ? requests
          .slice()
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .filter(req =>
            search === '' ||
            req.your_service?.toLowerCase().includes(search.toLowerCase()) ||
            req.full_name?.toLowerCase().includes(search.toLowerCase()) ||
            req.contact_number?.toLowerCase().includes(search.toLowerCase()) ||
            req.address?.toLowerCase().includes(search.toLowerCase())
          )
          .map((req, idx) => ({
            ...req,
            id: idx + 1,
            created_at: new Date(req.created_at).toLocaleString(),
            actions: (
              <button
                className="p-2 rounded-full bg-gray-200 text-[#7a1415]"
                onClick={() => handleDelete(req)}
                aria-label="Delete Request"
              >
                <FaTrashAlt size={20} />
              </button>
            ),
          }))
      : [];

  return (
       <section className="flex-grow min-h-screen bg-gradient-to-br from-[#f8f8f8] to-[#f3e6e6] flex flex-col items-center p-2 md:p-6">
      <div className="w-full">
            <Card title={
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                <span className="text-2xl font-bold text-[#7a1415] mb-2 md:mb-0">Service Requests</span>
                <input
                  type="text"
                  placeholder="Search..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="px-4 py-2 rounded shadow font-semibold border border-[#7a1415] focus:border-[#a81c1e] w-full md:w-64 mb-2 md:mb-0"
                />
              </div>
            }>
              <div className="overflow-x-auto w-full">
                <Table columns={columns} data={formattedData} />
              </div>
            </Card>
          </div>
        </section>
  );
}