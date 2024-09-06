import React from 'react';
import Link from 'next/link';
import { TrendingFlat } from '@mui/icons-material';

const SignUpButton: React.FC = () => {
  return (
    <button 
      type="button" 
      className="
        relative w-[150px] h-[40px] cursor-pointer
        flex items-center
        border-2 border-[#323232]
        shadow-[4px_4px_#323232]
        bg-[#ffff]
        rounded-[10px]
        overflow-hidden
        transition-all duration-300
        hover:bg-[#eee]
        active:translate-x-[3px] active:translate-y-[3px] active:shadow-[0px_0px_#323232]
        group
      "
    >
      <Link 
      //dapat mag error
        href="/auth/signUp"
        className="
          w-full h-full flex items-center justify-start
          transform translate-x-[30px]
          text-[#323232] font-semibold
          transition-all duration-300
          group-hover:text-transparent
          z-10 relative
        "
      >
        Sign Up
      </Link>
        <span className="
        absolute inset-0
        bg-[#dedede]
        flex items-center justify-center
        transition-all duration-300
        w-[39px] group-hover:w-full
        translate-x-[109px] group-hover:translate-x-0
        pointer-events-none
      ">
        <TrendingFlat />
        </span>
    </button>
  );
};

export default SignUpButton;