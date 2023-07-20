
import React from 'react';



import { useStateContext } from '../contexts/ContextProvider';


const Home = () => {

  return (
    <div className="mx-20 my-10">
      <div class="grid grid-cols-3 gap-3">
        <div class="block rounded-lg bg-white p-6 shadow-xl dark:bg-gray-700">
            <h5
              class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Card title
            </h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button
              type="button"
              class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-xl transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-ripple-init
              data-te-ripple-color="light">
              Button
            </button>
        </div>



        
      </div>
    </div>
  );
};

export default Home;

