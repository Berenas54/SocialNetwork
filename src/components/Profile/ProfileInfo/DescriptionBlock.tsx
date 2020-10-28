import React from 'react';
import style from './DescriptionBlock.module.css';


const DescriptionBlock = () => {
    return <div>
        <div>
            <img className={style.background} alt='cats'
                 src='https://icatcare.org/app/uploads/2018/06/Layer-1704-1920x840.jpg'/>
        </div>
        <div>
            <img className={style.avatar} alt="ava"
                 src='https://pm1.narvii.com/7171/f6f1c4463bbd9959052b699672858647f17660d3r1-264-250v2_00.jpg'/>
        </div>
        <div className={style.description}>
            Description
        </div>
    </div>
}

export default DescriptionBlock