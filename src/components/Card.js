

const Card=(props)=>{
    const {Data}=props;
    return(
        <div className="p-4 border borde-gray-300 flex flex-row gap-3 m-2">
            <img className="h-10 w-10" alt="" src={Data.image}/>
            <p className="m-2">{Data.label}</p>
        </div>
    )
}
export default Card;