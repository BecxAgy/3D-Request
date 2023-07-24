import React from 'react';
import { FiFilePlus } from 'react-icons/fi';

function StatsCard({title, total, icon}) {
  return (
    <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white shadow-lg rounded-2xl bg-clip-border">
      <div className="flex-auto p-5">
        <div className="flex flex-wrap -mx-3">
          <div className="flex-none w-2/3 max-w-full px-3">
            <div>
              <p className="mb-0 font-sans font-semibold leading-normal text-sm">{title}</p>
              <h5 className="mb-0 mt-2 font-bold ">
                {total}
                
              </h5>
            </div>
          </div>
          <div className="w-4/12 max-w-full px-3 ml-auto text-right flex-0">
            <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl bg-orange-400 shadow-soft-2xl">
              <div className=" m-4  text-white"  >
                {icon}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsCard;
