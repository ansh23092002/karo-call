
'use client';
import React, { useEffect, useState } from 'react';
import Table from '/src/components/Table';
import Card from '/src/components/ui/Card';
import MakeRequest from '/src/requests/request';
import { FaTrashAlt } from 'react-icons/fa';

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'full_name', label: 'Full Name' },
  { key: 'email', label: 'Email' },
  { key: 'mobile_no', label: 'Mobile No' },
  { key: 'subject', label: 'Subject' },
  { key: 'created_at', label: 'Created At' },
  { key: 'actions', label: 'Actions' },
];

export default function GeneralenquiryPage() {
  const [enquiries, setEnquiries] = useState([]);
  const [search, setSearch] = useState('');
  const [rowLimit, setRowLimit] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const data = await MakeRequest('/contact-us', 'GET');
        setEnquiries(data);
      } catch (error) {
        setEnquiries([]);
      }
    };
    fetchEnquiries();
  }, []);

  const handleDelete = async (enquiry) => {
    // if (window.confirm('Are you sure you want to delete this enquiry?')) {
    //   try {
    //     await MakeRequest(`/contact-us/${enquiry.id}`, 'DELETE');
    //     const data = await MakeRequest('/contact-us', 'GET');
    //     setEnquiries(data);
    //   } catch (error) {
    //     alert('Failed to delete enquiry.');
    //   }
    // }
  };

  // Format data for table
  const filteredEnquiries = Array.isArray(enquiries)
    ? enquiries
        .slice() // copy array
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .filter(e =>
          search === '' ||
          e.full_name.toLowerCase().includes(search.toLowerCase()) ||
          e.email.toLowerCase().includes(search.toLowerCase()) ||
          e.mobile_no.toLowerCase().includes(search.toLowerCase()) ||
          e.subject.toLowerCase().includes(search.toLowerCase())
        )
    : [];

  const totalPages = Math.ceil(filteredEnquiries.length / rowLimit) || 1;
  const paginatedEnquiries = filteredEnquiries.slice((page - 1) * rowLimit, page * rowLimit);

  const formattedData = paginatedEnquiries.map((enquiry, idx) => ({
    ...enquiry,
    id: (page - 1) * rowLimit + idx + 1,
    created_at: new Date(enquiry.created_at).toLocaleString(),
    actions: (
      <button
        className="p-2 rounded-full bg-gray-200 text-[#7a1415]"
        onClick={() => handleDelete(enquiry)}
        aria-label="Delete Enquiry"
      >
        <FaTrashAlt size={20} />
      </button>
    ),
  }));

  return (
    <div className="p-2 md:p-6 min-h-screen bg-gradient-to-br from-[#f8f8f8] to-[#f3e6e6] flex flex-col items-center">
      <div className="w-full">
        <Card title={
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <span className="text-2xl font-bold text-[#7a1415]">General Enquiry List</span>
            <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={e => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                className="px-4 py-2 rounded shadow font-semibold border border-[#7a1415] focus:border-[#a81c1e] w-full md:w-64"
              />
              <select
                value={rowLimit}
                onChange={e => {
                  setRowLimit(Number(e.target.value));
                  setPage(1);
                }}
                className="px-4 py-2 rounded shadow font-semibold border border-[#7a1415] focus:border-[#a81c1e] w-full md:w-32"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </div>
          </div>
        } ClassName="mb-4">
          <div className="overflow-x-auto w-full">
            <Table columns={columns} data={formattedData} />
          </div>
          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-2 mt-4">
            <button
              className="px-3 py-1 rounded bg-gray-200 text-[#7a1415] font-bold disabled:opacity-50"
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              Prev
            </button>
            <span className="font-semibold">Page {page} of {totalPages}</span>
            <button
              className="px-3 py-1 rounded bg-gray-200 text-[#7a1415] font-bold disabled:opacity-50"
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}