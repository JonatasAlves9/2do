"use client";
import React, { useState } from "react";
import Sidebar from "./components/sidebar";

const ProtectedLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar collapsed={collapsed} toggleCollapse={toggleCollapse} />
      <main className="flex-grow p-4">{children}</main>
    </div>
  );
};

export default ProtectedLayout;
