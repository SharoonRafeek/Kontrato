import Dialogue from "@/components/Dialogue/Dialogue";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-1/5 bg-black border-r border-    -600 h-screen flex flex-col">
        <ul className="p-4">
          <li>
            <a
              href="#"
              className="block text-gray-100 hover:text-gray-200 mb-4"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-gray-100 hover:text-gray-200 mb-4"
            >
              History
            </a>
          </li>
          <li>
            <a href="#" className="block text-gray-100 hover:text-gray-200">
              Settings
            </a>
          </li>
        </ul>
      </div>
      <div className="w-4/5">
        <Dialogue />
      </div>
    </div>
  );
};

export default Dashboard;
