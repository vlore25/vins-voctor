import { Flex, Image, Title, ImageProps, TitleProps } from '@mantine/core';
import classe from './logo.module.css';
import Link from 'next/link';


export default function Logo({ imageProps, titleProps }: any) {
  return (
    <Link className={classe.link} href="/" style={{ textDecoration: 'none' }}>
      <Flex align="center" gap="sm">
        <Image 
          src="/logo/voctor-logo.png" 
          alt="Vins Victor Logo"
          width={40} 
          {...imageProps} 
        />
        <Title 
          order={1} 
          className={classe.brandName} 
          c="#ac8749"
          {...titleProps}
        >
          Vins Victor
        </Title>
      </Flex>
    </Link>
  );
}