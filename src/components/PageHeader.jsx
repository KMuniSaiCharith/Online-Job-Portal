import React from 'react';

const PageHeader = ({ title, path }) => {
  return (
    <div className='py-24 mt-3 bg-[#FAFAFA] rounded flex flex-col items-center justify-center'>
      <h2 className='text-3xl text-blue font-medium mb-1 text-center'>{title}</h2>
      <div className='text-sm text-center'>
        <a href="/">Home</a> / {path}
      </div>
    </div>
  );
};

export default PageHeader;
