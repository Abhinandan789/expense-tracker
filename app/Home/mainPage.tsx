'use client'

import SignUpButton from './uiComponents/SignUpBtn';
import { useUser } from '@stackframe/stack';
import TrackerButton from './uiComponents/TrackerBtn';

const MainPage: React.FC = () => {
  const user = useUser();
  return (
    <div className="relative sm:w-full h-screen flex flex-col ">
      <div className='flex sm:flex-row justify-between flex-col'>

        <div className="relative flex flex-col mt-64 sm:ml-12 ml-3">
          <div className="text-black font-extrabold font-deltha ">
            <h1 className="sm:text-4xl font-bold text-left">SAVE Your <span className='text-[#1b5a12] '>Money</span> </h1>
            <h2 className="sm:text-2xl mt-4">BY TRACKING YOUR Expenses </h2>
          </div>
          {!user ?
            <div className='mt-5'>
              <SignUpButton />
            </div> :
            <div className='mt-5'>
              <TrackerButton />
            </div>
          }
        </div>
      </div>

    </div>
  );
};

export default MainPage;