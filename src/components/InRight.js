import React from 'react';
import {Link} from 'react-router-dom';

const InRight=()=>{
    return(
        <div className='p-5'>
            <div className="bg-gray-300 h-2 m-5">
                <div className='bg-green-800 w-3/5git h-2'>

                </div>
            </div>
            <div>
                <div className="flex flex-col md:flex-row m-20">
                    <img className=" w-2/3 h-2/3 md:w-1/3 md:h-1/3" alt="" src="https://media.istockphoto.com/id/950892318/photo/win-win.jpg?s=2048x2048&w=is&k=20&c=9RB-MXC1UGuPaB0YuquTuTPqkv6mMGO8MJjL_VVnlCI="/>
                    <div className="my-10 md:my-40 md:mx-20">
                        <h1 className="font-bold text-3xl">You're in the right place</h1>
                        <p className="text-sm">Brilliant gets you hand-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.</p>
                    </div>
                </div>
                <div className="pt-5 flex justify-center">
                    <Link to="/mathlevelpage"><button className='border border-gray-500 bg-black text-white p-1 px-3 rounded-lg'>Continue</button></Link>
                </div>
            </div>
        </div>
    )
}
export default InRight;