import { UserButton } from '@clerk/nextjs';
import React from 'react';

const Home = () => {
  return (
    <div className='h-screen'>
      <p>This is the home page.</p>
      <UserButton afterSignOutUrl='/' />
    </div>
  );
};

export default Home;
