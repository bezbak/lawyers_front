// Header.tsx
import React, { useEffect, useState } from 'react';
import { Flex } from 'antd';
import classes from './Header.module.scss'
import location from '@/images/icons/Location.svg'
import calling from '@/images/icons/Calling.svg'
import clock from '@/images/icons/Time.svg'
import wh from '@/images/icons/wh.svg'
import tg from '@/images/icons/tg.svg'
import fb from '@/images/icons/fb.svg'
import inst from '@/images/icons/inst.svg'
import logo from '@/images/icons/logo.svg'
import Image from 'next/image'
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className={classes.header}>
            <Flex className={classes.dashboard}>
                <div className='container'>
                    <Flex justify='space-between'>
                        <Flex gap={122} className={classes.data}>
                            <Flex className={classes.data_item}>
                                <Image src={location} alt="icon" />
                                <p>323500, Кыргызская Республика, г.Ош Супаналиев,2/2</p>
                            </Flex>
                            <Flex className={classes.data_item}>
                                <Image src={clock} alt="icon" />
                                <p>Понелельник - Пятница 9:00 - 16:00</p>
                            </Flex>
                            <Flex className={classes.data_item}>
                                <Image src={calling} alt="icon" />
                                <Flex gap={10}>
                                    <Link href='tel:+996(880)911911'>+996 (880) 911-911</Link>
                                    <Link href='tel:+996(990)911911'>+996 (990) 911-911</Link>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex gap={20} className={classes.links}>
                            <Link href='https://wa.me:'>
                                <Image src={wh} alt="icon" />
                            </Link>
                            <Link href='https://wa.me:'>
                                <Image src={tg} alt="icon" />

                            </Link>
                            <Link href='https://wa.me:'>
                                <Image src={fb} alt="icon" />
                            </Link>
                            <Link href='https://wa.me:'>
                                <Image src={inst} alt="icon" />
                            </Link>
                        </Flex>
                    </Flex>
                </div>
            </Flex>
            <Flex className={classes.navbar}>
                <div className='container'>
                    <Flex align='center' justify='space-between' className={classes.navbar_inner}>
                        <Flex gap={14} align='center'>
                            <Image src={logo} alt="icon" />
                            <h1 className={classes.title}>
                                Юридическая Фирма <br />
                                <span>Абдувалиев и Партнеры</span>
                            </h1>
                        </Flex>
                        <Flex className={classes.navbar_links}>
                            <Link href={'/'} className={`${classes.navbar_link} ${classes.navbar_link_active}`}>
                                Главная
                            </Link>
                            <Link href={'/'} className={classes.navbar_link}>
                                О компании
                            </Link>
                            <Link href={'/'} className={classes.navbar_link}>
                                Услуги
                            </Link>
                            <Link href={'/'} className={classes.navbar_link}>
                                Команда
                            </Link>
                            <Link href={'/'} className={classes.navbar_link}>
                                Карьера
                            </Link>
                            <Link href={'/'} className={classes.navbar_link}>
                                Контакты
                            </Link>
                        </Flex>
                    </Flex>
                </div>
            </Flex>
        </header >

    );
};

export default Header;
