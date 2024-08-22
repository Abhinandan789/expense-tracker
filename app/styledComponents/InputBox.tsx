import React from 'react';
export const InputBox= () =>{
    return (
        <div className="relative w-52 mx-auto my-12">
            <input className="text-lg py-2 border-none border-b-2 border-gray-300 text-cyan-400 w-full bg-transparent transition-colors duration-300 ease-in-out focus:border-cyan-400 focus:outline-none" type="text" placeholder="Enter your text"/>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 scale-x-0 transition-transform duration-300 ease-in-out"></span>
        </div>
    )
} 

export default InputBox;

