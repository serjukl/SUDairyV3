import React from 'react';
import Head from "next/head";
import styles from '../styles/home.module.sass'
import Link from "next/link";
import LandNav from "../components/LandNav/LandNav";

const Index = () => {
    return (
        <div>
            <Head>
                <title>SUDiary | HOME</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                <LandNav />
            </header>
        </div>
    )
};

export default Index;
