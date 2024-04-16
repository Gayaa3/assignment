

const Learning=()=>{
    return(
        <div className="p-5 md:flex flex-col justify-center items-center h-screen ">
            <h1 className="font-bold text-3xl p-2">Learning paths based on your answers</h1>
            <p className="text-sm p-2">Choose one to get started. You can switch anytime.</p>
            <div className=" flex flex-col md:flex-row justify-center mx-20">
                <div className="border border-gray-300 flex flex-row p-5 m-5">
                    <div>
                        <h1 className="font-bold text-xl m-1">Foundational Math</h1>
                        <p className="text-sm m-1">Build your fiundational skills in algebra, geometry and probability</p>
                    </div>
                    <img className="w-20 h-20" alt="" src="https://media.istockphoto.com/id/1501253479/vector/artificially-intelligent-laptop-businesswoman.jpg?s=2048x2048&w=is&k=20&c=9ZT1dlHBu-czeYcCw43bp4R0_YIfRDt5p1k1-gDTgtM="/>
                </div>
                <div className="border border-gray-300 flex flex-row p-5 m-5">
                    <div>
                        <h1 className="font-bold text-xl m-1">Mathematical Thinking</h1>
                        <p className="text-sm m-1">Build your fiundational skills in algebra, geometry and probability</p>
                    </div>
                    <img className="w-20 h-20" alt="" src="https://media.istockphoto.com/id/659152366/vector/man-paying-wireless-with-smart-watch.jpg?s=2048x2048&w=is&k=20&c=X-emaiLryW7N_Lp8FhYpPYSN8xkSULOOgNsQjvF4BzI="/>
                </div>
            </div>
        </div>
    )
}

export default Learning;