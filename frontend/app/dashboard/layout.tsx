"use client";
import React, { useState, useEffect } from "react";
import SidebarDemo from "../../components/dash/dashcomponets"
import Navbar from "../../components/navbar";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen overflow-y-scroll" >
      {/* Sidebar */}
      <div className="h-100vh">
        <SidebarDemo />
      </div>
      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        {children}
      </div>
    </div>
  );
}