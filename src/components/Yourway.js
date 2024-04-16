import {Link} from 'react-router-dom';

const YourWay=()=>{
    return(
        <div className="p-5">
            <div className="bg-gray-300 h-2 m-5">
                <div className='bg-green-800 h-2'>

                </div>
            </div>
            <div className=''>
                <div className="flex flex-col items-center md:flex-row ">
                    <img className=" w-2/3 h-2/3 md:w-1/3 md:h-1/3" alt="" src="https://media.istockphoto.com/id/1439554549/vector/3d-young-girl-student-sitting-on-pile-of-books-and-using-laptop-3d-render-illustration-of-e.jpg?s=2048x2048&w=is&k=20&c=KYe3QwDSQjdaNDfwmvGRL-51oIY7sag-ECOKCUHRKhE="/>
                    <div className=" flex flex-col items-center my-10 md:my-20 md:mx-10">
                        <h1 className="font-bold text-2xl">You're on your way</h1>
                        <img className='w-1/2 h-1/2 md:w-1/3 md:h-1/3' alt="" src="https://img.freepik.com/free-vector/five-stars-review-half-shadow-style_78370-4561.jpg?t=st=1713272644~exp=1713276244~hmac=08b66b118ca53edf61d6f82b49efff496ef72b5f108a8d1b0515eb639c89958c&w=996"/>
                        <p className="text-sm">"Through itsengaging and well-structured courses,Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations!"</p>
                        <h1 className="font-semibold text-xl pt-2">__ Jacob S.</h1>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Link to="/findingpage"><button className='border border-gray-500 bg-black text-white p-1 px-3 rounded-lg'>Continue</button></Link>
                </div>
            </div>
        </div>
    )
}
export default YourWay;