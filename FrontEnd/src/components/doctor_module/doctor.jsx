import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import { FaSearch, FaPlus } from 'react-icons/fa';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import DoctorApp from './doctor_appointment';

export default function Patient() {
  const [activeTab, setActiveTab] = useState('search');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex h-screen w-full">
      <div className="bg-gray-100 border-r px-4 py-6 flex flex-col gap-4">
        <div className="flex justify-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <Button
          variant={activeTab === 'search' ? 'primary' : 'ghost'}
          onClick={() => handleTabChange('search')}
          className="justify-start"
        >
          <FaSearch />
        </Button>
        <Button
          variant={activeTab === 'add' ? 'primary' : 'ghost'}
          onClick={() => handleTabChange('add')}
          className="justify-start"
        >
          <FaPlus />
        </Button>
      </div>
      <div className="flex-1 p-6">
        {activeTab === 'search' && <DoctorApp />}
        {activeTab === 'add' && (
          <>
            <div className="flex">
              <h3>Tab 2 doc</h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
