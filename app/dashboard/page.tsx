"use client";
import { useState } from "react";
import Dialogue from "@/components/Dialogue/Dialogue";
import Sidebar from "@/components/dashboard/Sidebar";
import SectionHeader from "@/components/dashboard/SectionHeader";

const Dashboard = () => {
  const [currentLink, setCurrentLink] = useState("Home");

  const handleLinkClick = (link: string) => {
    setCurrentLink(link);
  };

  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div className="flex flex-col">
        <SectionHeader />
      </div>
    </div>
  );
};

export default Dashboard;
