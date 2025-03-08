import React from 'react';

function CreativeBtn2() {
  return (
    <>
      <div className='group relative cursor-pointer py-2 px-6 w-44 border bg-white rounded-full overflow-hidden text-black text-center font-semibold'>
        <span className='translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block'>
          Download Now
        </span>
        <div className='flex gap-2 text-black bg-[#F1B729] z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none '>
          <span>Download Now</span>
        </div>
      </div>
    </>
  );
}

export default CreativeBtn2;
