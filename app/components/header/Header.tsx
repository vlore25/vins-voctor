import {Button, Container, Flex } from '@mantine/core';
import Link from 'next/link';
import Logo from '../Logo/Logo';
import classes from './Header.module.css'
import BurgerMenu from './components/BurgerMenu';
import headerlinks from '../../const/headerLinks';
import LanguageButton from '../LanguageButton/LanguageButton';


export default function Header() {

  const items = headerlinks.map((link) => {
    if (link.label === 'Contact') {
      return (
        <Button
          key={link.label}
          component={Link}   
          href={link.link}  
          variant="light"
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
            <LanguageButton />
          </Flex>
          
          <BurgerMenu links={headerlinks} />
        </div>
        
      </Flex>
      
    </Container>
  );
}