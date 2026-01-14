"use client"; 

import { Burger, Button, Container, Drawer, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import Logo from '../Logo/Logo';
import links from '../../const/links';
import classes from './Header.module.css'


export default function Header() {
  // Ce hook est interactif, donc "use client" est nécessaire
  const [opened, { toggle, close }] = useDisclosure(false);

  const items = links.map((link) => {
    if (link.label === 'Contact') {
      return (
        <Button
          key={link.label}
          component={Link}   
          href={link.link}  
          variant="light"
          radius={0}
          size="md"
        >
          {link.label}
        </Button>
      );
    }
    
    return (
      <Link 
        key={link.label} 
        className={classes.link} 
        href={link.link} 
      >
        {link.label}
      </Link>
    );
  });

  return (
    <Container size={'full'}>
      <Flex align='center' justify="space-between" className={classes.container}>
        <Logo 
          titleProps={{
              order: 3
          }}
          logoProps={{
              w:'70px'
          }}
        />
        <div>
          <Flex gap={'lg'} visibleFrom="sm" align='center'>
            {items}
          </Flex>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </div>
      </Flex>
      <Drawer opened={opened} onClose={close} />
    </Container>
  );
}