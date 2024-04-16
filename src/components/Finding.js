import {Link} from 'react-router-dom';

const Finding=()=>{
    return(
        <div className='p-5'>
            <div className='flex flex-col justify-center items-center h-screen'>
                <img className="w-1/4 h-1/3" alt="" src="https://media.istockphoto.com/id/1473759511/photo/3d-blue-refresh-icon-reload-icon-symbol-3d-rotation-arrows-on-white-background-3d-illustration.jpg?s=2048x2048&w=is&k=20&c=cnemmiiOS3FUn0qjnTTWC7Pfp3JRRBurz4apneI9EE0="/>
                <h1 className="font-bold text-3xl p-2">Finding learning path recommendations for you based on your responses</h1>
                <div className="pt-5">
                    <Link to="/learningpage"><button className='border border-gray-500 bg-black text-white p-1 px-3 rounded-lg'>Continue</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Finding;