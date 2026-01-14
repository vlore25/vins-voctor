import {Button, Container, Flex } from '@mantine/core';
import Link from 'next/link';
import Logo from '../Logo/Logo';
import links from '../../const/links';
import classes from './Header.module.css'
import BurgerMenu from './components/BurgerMenu';


export default function Header() {

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
    <Container size={'xl'}>
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
          <BurgerMenu links={links} />
        </div>
        
      </Flex>
      
    </Container>
  );
}