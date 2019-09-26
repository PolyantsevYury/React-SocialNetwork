import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
            <div className={s.item}>
                <img src="https://i.guim.co.uk/img/media/8d95b7512b4caa62332b33a7836485f89b03ac18/0_345_2736_2588/master/2736.jpg?width=300&quality=85&auto=format&fit=max&s=0610ae9801c7e5f708ed99d9786c9106" alt=""/>
                { props.message }
                <div className={s.like}>
                <span>likes { props.likes }</span>
                </div>
            </div>
)
};

export default Post;