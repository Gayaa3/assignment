import React from 'react';
import Card from './Card.js'
import {Link} from 'react-router-dom';



const Describe=()=>{
    const ListOfProfession=[
        {
            id:1,
            image:"https://media.istockphoto.com/id/1426554288/photo/3d-illustration-of-smiling-african-american-woman-coco-standing-with-test-exam-results.jpg?s=2048x2048&w=is&k=20&c=WWCVMEfTmoBRWz1jRDMO0eBeilEGD3Foawb__hWF3HA=",
            label:"Student or soon to be enrolled"
        },
        {
            id:2,
            image:"https://media.istockphoto.com/id/1298958274/photo/3d-illustration-of-meditating-man-sitting-on-the-floor-cartoon-smiling-businessman-in-yoga.jpg?s=2048x2048&w=is&k=20&c=4SM8GaS4WHXuN466BoZalqWi0U2k7YW4ZMSuXosaN94=",
            label:"Professional pursuing a career"
        },
        {
            id:3,
            image:"https://media.istockphoto.com/id/1398921572/photo/3d-illustration-of-smiling-businesswoman-ellen-holding-tablet-and-pointing-finger-at.jpg?s=2048x2048&w=is&k=20&c=1_hBitRgpCFEHgqLAZIdeJBVUOGyBWoizo9ZFyZ90t4=",
            label:"Parent of a school-age child"
        },
        {
            id:4,
            image:"https://media.istockphoto.com/id/1449737748/photo/3d-render-cute-girl-student.jpg?s=2048x2048&w=is&k=20&c=uBS0lTNIr9KLa9Mru-x_OsMb4L0auDNk-ZTemy5Ldqo=",
            label:"Lifelong learner"
        },
        {
            id:5,
            image:"https://media.istockphoto.com/id/479328629/photo/businesswoman-lecturing.jpg?s=2048x2048&w=is&k=20&c=5o2VX3SOenlBfVS5O6rPFR4eIghyKxFzoaBZOs3h26I=",
            label:"Teacher"
        },
        {
            id:6,
            image:"https://media.istockphoto.com/id/1154324707/photo/a-girl-her-hand-and-looking-over-the-distance-she-is-curious-white-background-3d-illustration.jpg?s=2048x2048&w=is&k=20&c=JlveO5yaNmPYjdna3pSxAemA2no9ZY0aca_fDvY-9jk=",
            label:"Other"
        }
    ]

    return(
    <div className="p-5">
        <div className="bg-gray-300 h-2 m-5">
            <div className='bg-green-800 w-1/5 h-2'>

            </div>
        </div>
        <div>
            <div>
                <h1 className="font-bold text-3xl p-2">Which describes you best ?</h1>
                <p className="text-sm p-2">This will help us personalize your experience.</p>
            </div>
            <div className='pt-10'>
                {ListOfProfession.map((x)=>(<Card key={x.id} Data={x}/>))}
            </div>
            <div className='pt-5 flex justify-center'>
                <Link to="/intrestpage"><button className='border border-gray-500 bg-black text-white p-1 px-3 rounded-lg'>Continue</button></Link>
            </div>
        </div>
    </div>
        
    
    )
}

export default Describe;