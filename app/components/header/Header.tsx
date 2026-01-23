import { AppShellHeader, Button, Container, Flex, Text } from '@mantine/core';
import Logo from '../Logo/Logo';
import classes from './Header.module.css'
import BurgerMenu from './components/BurgerMenu';
import headerlinks from '../../const/headerLinks';
import LanguageButton from '../LanguageButton/LanguageButton';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '../../../i18n/routing';
import { useWindowScroll } from '@mantine/hooks';

export default function Header() {
  const urlPath = usePathname()
  const t = useTranslations('Navigation');
  const [scroll] = useWindowScroll();
  const isHome = urlPath === '/' || /^\/[a-zA-Z]{2}$/.test(urlPath);
  const scrolled = scroll.y > 50;
  const showSolidHeader = !isHome || scrolled;

  const items = headerlinks.map((link) => {
    if (link.label === 'contact') {
      return (
        <Button
          key={link.label}
          component={Link}
          href={link.link}
          className={classes.link}
          variant={showSolidHeader ? "filled" : "light"}
          color={showSolidHeader ? "brandBordeux" : "white"}
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
        size="md"
        c={showSolidHeader ? "brandBordeux.9" : "white"}
      >
        {t(link.label)}
      </Text>
    );
  });

  return (
    <AppShellHeader
      withBorder={false}
      className={classes.appshell}
      style={{
        transition: 'all 0.3s ease',
        backgroundColor: showSolidHeader ? 'white' : 'transparent',
        background: showSolidHeader
          ? 'white'
          : 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 90%)',
      }}
    >
      <Container size={'xl'} w="100%">
        <Flex align='center' justify="space-between" className={classes.container}>
          <Logo titleProps={{ order: 3 }} logoProps={{ w: '70px' }} />
          <div>
            <Flex gap={'lg'} visibleFrom="md" align='center'>
              {items}
              <LanguageButton />
            </Flex>
            <BurgerMenu links={headerlinks} scrolled={showSolidHeader} />
          </div>
        </Flex>
      </Container>
    </AppShellHeader>
  );
}