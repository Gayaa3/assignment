import React from 'react';
import Card from './Card.js'
import {Link} from 'react-router-dom';

const Intrest=()=>{
    const ListOfProfession=[
        {
            id:1,
            image:"https://media.istockphoto.com/id/117247268/photo/growth-chart.jpg?s=2048x2048&w=is&k=20&c=EXKxHzOSVP_EnX9AWPoKAN5wXjGndppLYV3eJRZfaMs=",
            label:"Learning specific skills to advance my career"
        },
        {
            id:2,
            image:"https://media.istockphoto.com/id/492648692/photo/southeast-asia-on-earth.jpg?s=2048x2048&w=is&k=20&c=HG24kWMMZeOFLqtNDYgvAXW9_bbwBU6fx40UKUVcd8w=",
            label:"Exploring new topics I'm intrested in"
        },
        {
            id:3,
            image:"https://media.istockphoto.com/id/1819899536/vector/link-building-concept-seo-search-engine-optimization-man-holding-magnifying-glass-above.jpg?s=2048x2048&w=is&k=20&c=bpTvO81HFQSSFLFQsfaWLWtmz4TmZXQBjjxHOPOu4B0=",
            label:"Refreshing my math foundations"
        },
        {
            id:4,
            image:"https://media.istockphoto.com/id/1127626339/photo/arrows-hit-the-target-3d-rendering.jpg?s=2048x2048&w=is&k=20&c=aWw6oZzVWXYveMe4dOXGIdN7AE-KMAy_P1KBrzwD6G8=",
            label:"Exercising my brain to stay sharp"
        },
        {
            id:5,
            image:"https://media.istockphoto.com/id/813044910/photo/people-communication-social-media-puzzle.jpg?s=2048x2048&w=is&k=20&c=UJbOqmVb3dW0k8v6akF148VFAVf2slRnY-fMsLOXNME=",
            label:"Something else"
        }
    ]

    return(
        <div className="p-5">
            <div className="bg-gray-300 h-2 m-5">
                <div className='bg-green-800 w-2/5 h-2'>

                </div>
        </div>
        <div>
            <div>
                <h1 className="font-bold text-3xl p-2">Which are you most intrested in ?</h1>
                <p className="text-sm p-2">Choose just one.This will help us get you started.</p>
            </div>
            <div className='pt-10'>
                {ListOfProfession.map((x)=>(<Card key={x.id} Data={x}/>))}
            </div>
            <div className='pt-5'>
                <Link to="/inrightpage"><button className='border border-gray-500 bg-black text-white p-1 px-3 rounded-lg'>Continue</button></Link>
            </div>
        </div>
    </div>
    )
}
export default Intrest;