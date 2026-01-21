import { AppShellHeader, Button, Container, Flex,  Text } from '@mantine/core';
import Logo from '../Logo/Logo';
import classes from './Header.module.css'
import BurgerMenu from './components/BurgerMenu';
import headerlinks from '../../const/headerLinks'; 
import LanguageButton from '../LanguageButton/LanguageButton';
import { useTranslations } from 'next-intl';
import { Link } from '../../../i18n/routing';
import { useWindowScroll } from '@mantine/hooks';

export default function Header() {
  const t = useTranslations('Navigation');
  const [scroll] = useWindowScroll();
  const scrolled = scroll.y > 50;

  const items = headerlinks.map((link) => {
    if (link.label === 'contact') {
      return (
        <Button
          key={link.label}
          component={Link}
          href={link.link}
          className={classes.link}
          variant={scrolled ? "filled" : "light"}
          color={scrolled ? "brandBordeux" : "white"}
          size="md"
        >
          {t(link.label)}
        </Button>
      );
    }

    return (

      <Text
        component={Link} 
        href={link.link}
        key={link.label}
        className={classes.link}
        c={scrolled ? "brandBordeux.9" : "white"}
      >
        {t(link.label)}
      </Text>
    );
  });

  return (
    <AppShellHeader
      withBorder={scrolled}
      className={classes.appshell}
      style={{
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'white' : 'transparent',
        background: scrolled
          ? 'white'
          : 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%)',
      }}
    >
       <Container size={'xl'} w="100%"  >
        <Flex align='center' justify="space-between" className={classes.container}>
          <Logo titleProps={{ order: 3 }} logoProps={{ w: '70px' }} />
          <div>
            <Flex gap={'lg'} visibleFrom="sm" align='center'>
              {items}
              <LanguageButton />
            </Flex>
            <BurgerMenu links={headerlinks} scrolled={scrolled} />
          </div>
        </Flex>
      </Container>
    </AppShellHeader>
  );
}