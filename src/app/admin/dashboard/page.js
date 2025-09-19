import React from "react";
import Card from "/src/components/ui/Card";
import Table from "/src/components/Table";
import { data,columns } from "@/Data";
const DashboardPage = () => {
  return (

    <section className="flex-grow  ">
      
      

      {/* Services Table */}
      <Card title="Service Requests">
        <Table columns={columns} data={data} />
      </Card>
    </section>
  );
};


export default DashboardPage;
