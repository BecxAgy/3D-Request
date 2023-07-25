import React from 'react';

function CardMain() {
  return (
    <div className="my-2 relative flex flex-col min-w-0 break-words bg-white shadow-xl rounded-2xl bg-clip-border">
      <div className="flex justify-center p-4">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full lg:w-1/2 px-3">
            <div className="flex flex-col h-full">
              <p className="pt-2 mb-6 font-semibold">3D Request</p>
              <h5 className="font-bold">Solicitações </h5>
              <p className="mb-12">From colors, cards, typography to complex elements, you will find the full documentation.</p>
              <a className="mt-auto mb-0 font-semibold leading-normal text-sm group text-slate-500" href="javascript:;">
                Adiconar
                
              </a>
            </div>
          </div>
          <div className="w-full lg:w-5/12 px-3 mt-3 lg:mt-0 lg:text-center">
            <div className="h-full bg-gradient-to-tl from-orange-500 to-yellow-400 rounded-xl">
              <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/shapes/waves-white.svg" className="absolute top-0 hidden w-1/2 h-full lg:block" alt="waves" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardMain;
