'use client'
import React, { useEffect, useState } from 'react';
import Table from '/src/components/Table';
import Card from '/src/components/ui/Card';
import MakeRequest from '/src/requests/request';

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'first_name', label: 'First Name' },
  { key: 'last_name', label: 'Last Name' },
  { key: 'email', label: 'Email' },
  { key: 'contact_no', label: 'Contact No' },
  { key: 'locality', label: 'Locality' },
  { key: 'experience', label: 'Experience' },
  { key: 'LOB', label: 'LOB' },
  { key: 'skills', label: 'Skills' },
  { key: 'resume', label: 'Resume' },
  { key: 'application_date', label: 'Application Date' },
];

export default function JobRequestPage() {
  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const data = await MakeRequest('/job-applications', 'GET');
        setApplications(data);
      } catch (error) {
        setApplications([]);
      }
    };
    fetchApplications();
  }, []);

  // Format data for table
  const formattedData = Array.isArray(applications)
    ? applications
        .slice() // copy array
        .sort((a, b) => new Date(b.application_date) - new Date(a.application_date))
        .filter(app =>
          search === '' ||
          app.first_name.toLowerCase().includes(search.toLowerCase()) ||
          app.last_name.toLowerCase().includes(search.toLowerCase()) ||
          app.email.toLowerCase().includes(search.toLowerCase()) ||
          app.contact_no.toLowerCase().includes(search.toLowerCase()) ||
          app.locality.toLowerCase().includes(search.toLowerCase()) ||
          app.LOB.toLowerCase().includes(search.toLowerCase())
        )
        .map((app, idx) => ({
          ...app,
          id: idx + 1,
          experience: `${app.experience_year} yr ${app.experience_month} mo`,
          skills: Array.isArray(app.skills) ? app.skills.join(', ') : app.skills,
          resume: app.resume ? (
            <a href={app.resume.replace('\\', '/')} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Resume</a>
          ) : 'N/A',
          application_date: new Date(app.application_date).toLocaleString(),
        }))
    : [];

  return (
    <div className="p-2 md:p-6 min-h-screen bg-gradient-to-br from-[#f8f8f8] to-[#f3e6e6] flex flex-col items-center">
      <div className="w-full">
        <Card title={
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <span className="text-2xl font-bold text-[#7a1415]">Job Applications</span>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="px-4 py-2 rounded shadow font-semibold border border-[#7a1415] focus:border-[#a81c1e] w-full md:w-64"
            />
          </div>
        } ClassName="mb-4">
          <div className="overflow-x-auto w-full">
            <Table columns={columns} data={formattedData} />
          </div>
        </Card>
      </div>
    </div>
  );
}