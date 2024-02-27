// Slide.tsx
"use client";
import React, { useEffect, useState } from 'react';
import { Button, Flex } from 'antd';
import classes from './Slide.module.scss'

import { slideType } from '@/store/models/sliderType';

type Props = {
    slide:slideType,
    active:number,
    setActive:any
}

const Slide: React.FC<Props> = ({slide,active,setActive}:Props) => {
    return (
        <div onMouseOver={()=>{setActive(slide.id)}} className={`${classes.slide} ${active == slide.id ?classes.slide_active:''}`} style={{backgroundImage:`url('${slide.image}')`}}>
            <div className={classes.wrapper}></div>
            <h2>{slide.title}</h2>
            <Flex gap={10} className={classes.content} vertical align='start' justify='end'>
                <span>0{slide.id}</span>
                <p>{slide.sub_title}</p>
                <Button>Подробнее</Button>
            </Flex>
        </div>

    );
};

export default Slide;
