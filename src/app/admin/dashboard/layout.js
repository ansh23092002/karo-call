
import Sidebar from "/src/components/Sidebar";
import Header from "/src/components/Header";

export default function DashboardLayout({ children }) {


  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <Sidebar  />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6 ">
          {children}
        </main>
      </div>
    </div>
  );
}
