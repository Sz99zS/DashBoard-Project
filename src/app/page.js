'use client';
import { useState } from 'react';
import Sidebar from "@/views/main/Sidebar/Sidebar";
import Header from "@/views/main/Header/Header";
import Maininfo from "@/views/main/MainInfo/Maininfo";

export default function Home() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div style={{ flexGrow: 1, width: '100%' }}>
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <Maininfo />
      </div>
    </div>
  );
}
