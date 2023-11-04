"use client";
import { useState } from "react";
import Dialogue from "@/components/Dialogue/Dialogue";
import Sidebar from "@/components/dashboard/Sidebar";

const Dashboard = () => {
  const [currentLink, setCurrentLink] = useState("Home");

  const handleLinkClick = (link: string) => {
    setCurrentLink(link);
  };

  return (
    <div>
      <Sidebar />
    </div>
  );
};

export default Dashboard;
