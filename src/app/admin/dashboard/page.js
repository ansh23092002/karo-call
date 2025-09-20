
import Card from '/src/components/ui/Card';
import Table from '/src/components/Table';

const summaryData = [
  { label: 'Total Users', value: 1200 },
  { label: 'Total Services', value: 15 },
  { label: 'Pending Requests', value: 8 },
  { label: 'Completed Requests', value: 112 },
];

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'service', label: 'Service' },
  { key: 'name', label: 'Name' },
  { key: 'contact', label: 'Contact' },
  { key: 'status', label: 'Status' },
];

const tableData = [
  { id: 1, service: 'CCTV Camera', name: 'Kapil Vishnoi', contact: '9660818332', status: 'Pending' },
  { id: 2, service: 'Car Washer', name: 'Ketan Mehta', contact: '455646445644', status: 'Completed' },
  { id: 3, service: 'Plumber', name: 'Ravi Kumar', contact: '9876543210', status: 'Pending' },
];

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f8f8] to-[#f3e6e6] p-4">
      <h1 className="text-3xl font-bold text-[#7a1415] mb-8">Dashboard Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {summaryData.map((item, idx) => (
          <Card key={idx} title={item.label} ClassName="mb-2">
            <div className="text-2xl font-extrabold text-[#a81c1e]">{item.value}</div>
          </Card>
        ))}
      </div>
      <Card title={<span className="text-xl font-bold text-[#7a1415]">Recent Service Requests</span>}>
        <div className="overflow-x-auto w-full">
          <Table columns={columns} data={tableData} />
        </div>
      </Card>
    </div>
  );
};

export default DashboardPage;
