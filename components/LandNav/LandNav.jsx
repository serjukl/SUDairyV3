import React from 'react';
import Link from "next/link";
import styles from './LandNav.module.sass'
const LandNav = () => {

    const links = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'About',
            link: '/about'
        },
        {
            name: <svg width="50" height="43" viewBox="0 0 50 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M43.808 34.8256V0L50 4.42957V36.6585C49.1744 38.4406 46.13 42.1879 40.5573 42.9211C34.9845 43.6542 31.7337 39.1025 30.6502 36.6585V22.3006H13.7771C11.6718 23.156 11.7647 25.2028 13.3127 25.8137L19.195 26.7302C21.4138 27.0866 25.7895 29.2046 25.5418 34.8256C25.2941 40.4466 20.6914 42.5646 18.4211 42.9211H2.78638L0 36.6585C6.19195 37.1168 17.0279 38.6442 18.4211 35.4366C20.0505 31.685 13.3127 31.9235 13.3127 31.9235C7.43034 31.9235 6.19194 29.4796 6.19195 23.9808C6.19196 18.482 11.2487 16.1399 13.3127 16.0381H31.2694C35.7276 17.1379 37.0485 20.9768 37.1517 22.7588V34.8256C40.3715 38.4915 42.9309 36.3531 43.808 34.8256Z" fill="#FF0545"/>
            </svg> ,
            link: '/'
        },
        {
            name: 'Sign in',
            link: '/auth?login'
        },
        {
            name: 'Sign up',
            link: '/auth?signup'
        }
    ]

    return (
        <nav className={styles.navigation}>
            <ul>
                {
                    links.map((link, key) => {
                        return (
                            <li key={key}>
                                <Link href={link.link}>
                                    <a>{link.name}</a>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
};

export default LandNav;