import {Link} from 'react-router-dom';
import Level from './Level.js';

const MathLevel=()=>{
    const levels=[{
        id:1,
        title:"Arithmetic",
        description:"Introductory"
    },
    {
        id:2,
        title:"Basic Algebra",
        description:"Foundational"
    },
    {
        id:3,
        title:"Intermediate Algebra",
        description:"Intermediate"
    },
    {
        id:4,
        title:"Calculus",
        description:"Advanced"
    }
]
    return(
        <div className='p-5'>
            <div className="bg-gray-300 h-2 m-5">
                <div className='bg-green-800 w-4/5 h-2'>

                </div>
            </div>
            <div className="flex flex-col justify-center items-center h-screen">
                
                <div>
                    <h1 className="font-bold text-3xl p-2">What is your math comfort level ?</h1>
                    <p className="text-sm p-2">Choose the heighest level you feel confident in-you can always adjust later</p>
                </div>
                <div className='md:flex flex-row justify-center my-10'>
                    {levels.map((x) =>(<Level key={x.id} leveldata={x} /> ))}
                </div>
                <div className="pt-5 flex justify-center">
                        <Link to="/yourwaypage"><button className='border border-gray-500 bg-black text-white p-1 px-3 rounded-lg'>Continue</button></Link>
                </div>
            </div>
        </div>
        
    )
}

export default MathLevel;