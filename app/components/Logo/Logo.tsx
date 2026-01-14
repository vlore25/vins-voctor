import { Flex, Image, Title } from '@mantine/core';
import classe from './logo.module.css'
import Link from 'next/link';


export default function Logo({logoProps, titleProps}: any){
    return(
        <Link className={classe.link} href={"/"}>
        <Flex align='center'>
        <Image src="/logo/voctor-logo.png" {...logoProps} alt='Vins Victor Logo'/>
        <Title className={classe.brandName} {...titleProps} c="#ac8749">Vins Voctor</Title>
        </Flex>
        </Link>
    );
}