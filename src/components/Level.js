
const level=(props)=>{
    const {leveldata}=props;
    return(
        <div>
            <div className="border border-gray-500 hover:border-yellow-200 m-2">
                    <h1 className="font-bold text-xl p-2">{leveldata.title}</h1>
                    <p className="text-sm p-2">{leveldata.description}</p>
                </div>
        </div>
    )
}
export default level;