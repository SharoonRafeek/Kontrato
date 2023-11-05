"use client";
import { useState } from "react";
import Dialogue from "@/components/Dialogue/Dialogue";
import Sidebar from "@/components/dashboard/Sidebar";
import SectionHeader from "@/components/dashboard/SectionHeader";
import Form from "@/components/Form";

const Dashboard = () => {
  const [currentLink, setCurrentLink] = useState("overview");

  const handleLinkClick = (link: string) => {
    setCurrentLink(link);
  };
  const [contractForm, setContractForm] = useState(false);

  return (
    <div className="flex w-screen h-screen">
      <Sidebar handleLinkClick={handleLinkClick} />
      <div className="flex flex-grow flex-col">
        {!contractForm ? (
          <SectionHeader setContractForm={setContractForm} />
        ) : (
          <Form />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
