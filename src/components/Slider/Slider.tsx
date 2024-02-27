// Slider.tsx
"use client"; 
import React, { useEffect, useState } from 'react';
import { Flex } from 'antd';
import classes from './Slider.module.scss'
import Slide from './Slide/Slide';
import { SliderData } from '@/data/locals';

const Slider: React.FC = () => {
    const [active, setActive] = useState(1)
    return (
        <section className={classes.slider}>
            <div className={classes.wrapper}>
                <div className="container">
                    <Flex gap={15}>
                        {
                            SliderData.map((slide)=>(
                                <Slide key={slide.id} slide={slide} active={active} setActive={setActive}/>
                            ))
                        }
                    </Flex>
                </div>
            </div>
        </section >

    );
};

export default Slider;
