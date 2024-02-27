// Footer.tsx 
"use client";
import React, { useEffect,  } from 'react';
import { Flex,Button, Space, Form, Input } from 'antd';
import classes from './Footer.module.scss'
import Image from 'next/image';
import location from '@/images/icons/Location.svg'
import calling from '@/images/icons/Calling.svg'
import email from '@/images/icons/email.svg'
import wh from '@/images/icons/wh.svg'
import tg from '@/images/icons/tg.svg'
import fb from '@/images/icons/fb.svg'
import inst from '@/images/icons/inst.svg'
import logo from '@/images/icons/logo.svg'
import tt from '@/images/icons/tt.png'
import Link from 'next/link';

type FieldType = {
    email?: string;
};

const Footer: React.FC = () => {
    return (
        <section className={classes.footer}>
            <div className="container">
                <Flex justify='space-between' className={classes.footer_inner}>
                    <Flex gap={25} vertical className={classes.footer_block}>
                        <Flex gap={15} align='center' className={classes.logo}>
                            <Image src={logo} alt="icon" />
                            <h1 className={classes.title}>
                                Юридическая Фирма <br />
                                <span>Абдувалиев и Партнеры</span>
                            </h1>
                        </Flex>
                        <p>Подписавшись на нашу рассылку, вы всегда будете в курсе последних новостей от нас</p>
                        <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} style={{ maxWidth: 320 }} initialValues={{ remember: true }} autoComplete="off"  >
                           <Space.Compact style={{ width: '100%' }}>
                                <Input placeholder='Введите свой E-mail' />
                                <Button htmlType='submit' type="primary">Отправить</Button>
                            </Space.Compact>
                        </Form>
                    </Flex>
                    <Flex gap={25} vertical className={classes.footer_block}>
                        <h2>Контакты</h2>
                        <Flex align='center' gap={15}>
                            <Image src={location} alt="icon"/>
                            <p>323500, Кыргызская Республика, г.Ош Супаналиев,2/2</p>
                        </Flex>
                        <Flex align='center' gap={15}>
                            <Image src={calling} alt="icon"/>
                            <p>
                                <Link href={"tel:+996880911911"}>
                                     +996 (880) 911-911 
                                </Link>
                                <br />
                                <Link href={"tel:+996990911911"}>
                                     +996 (990) 911-911 
                                </Link>
                            </p>
                        </Flex>
                        <Flex align='center' gap={15}>
                            <Image src={email} alt="icon"/>
                            <p>
                                <Link href={'mailto:abduvalievandpartners@gmail.com'}>abduvalievandpartners@gmail.com</Link>
                            </p>
                        </Flex>
                    </Flex>
                    <Flex  gap={14}  vertical className={classes.footer_block}>
                        <h2>мы в Соцсетях</h2>
                        <Flex align='center' gap={15}>
                            <Image src={wh} alt="icon"/>
                            <Link href={'/'}>WhatsApp</Link>
                        </Flex>
                        <Flex align='center' gap={15}>
                            <Image src={tg} alt="icon"/>
                            <Link href={'/'}>Telegram</Link>
                        </Flex>
                        <Flex align='center' gap={15}>
                            <Image src={fb} alt="icon"/>
                            <Link href={'/'}>Facebook</Link>
                        </Flex>
                        <Flex align='center' gap={15}>
                            <Image src={inst} alt="icon"/>
                            <Link href={'/'}>Instagram</Link>
                        </Flex>
                    </Flex>
                    <Flex gap={22} vertical className={classes.footer_block}>
                        <Link href={'/'} className={`${classes.active}`}>Главная</Link>
                        <Link href={'/'}>О компании</Link>
                        <Link href={'/'}>Услуги</Link>
                        <Link href={'/'}>Команда</Link>
                        <Link href={'/'}>Карьера</Link>
                        <Link href={'/'}>Контакты</Link>
                    </Flex>
                </Flex>
                <Flex vertical align='center' className={classes.footer_bottom}>
                    <p>© 2024 Юридическая фирма “Абдувалиев и Партнеры”. Все права защищены️</p>
                    <Link href={'/'}>Политика конфидициальности</Link>
                    <Flex gap={10} className={classes.tt}>
                        <Image src={tt} alt='Реклама'/>
                        <p>Разработано компанией Tommorow-Techs✨</p>
                    </Flex>
                </Flex>
            </div>
        </section >

    );
};

export default Footer;
