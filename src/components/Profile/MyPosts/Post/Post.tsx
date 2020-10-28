import React from 'react';
import c from './Post.module.css';

type PostPropsType={
    message:string
    likesCount:number
}
const Post = (props: PostPropsType) => {
    return <div className={c.item}>
        <img className={c.avatar} alt="ava"
             src='https://pm1.narvii.com/7171/f6f1c4463bbd9959052b699672858647f17660d3r1-264-250v2_00.jpg'/>
        {props.message}
        <div>
            <span>{props.likesCount} Like</span>
        </div>
    </div>
}
export default Post