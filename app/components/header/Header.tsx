import { Button, Container, Flex, Overlay } from '@mantine/core';
// 1. IMPORTANT : Changer l'import du Link !
import Logo from '../Logo/Logo';
import classes from './Header.module.css'
import BurgerMenu from './components/BurgerMenu';
import headerlinks from '../../const/headerLinks'; // Assurez-vous d'importer le bon fichier links
import LanguageButton from '../LanguageButton/LanguageButton';
// 2. Importer le hook de traduction
import { useTranslations } from 'next-intl';
import { Link } from '../../../i18n/routing';

export default function Header() {
  // 3. Initialiser les traductions pour la section 'Navigation'
  const t = useTranslations('Navigation');

  const items = headerlinks.map((link) => {
    if (link.label === 'contact') { 
      return (
        <Button
          key={link.label}
          component={Link}   
          href={link.link}  
          variant="light"
          size="md"
        >
          {t(link.label)} 
        </Button>
      );
    }
    
    // Pour les liens normaux
    return (
      <Link 
        key={link.label} 
        className={classes.link} 
        href={link.link} 
      >
        {/* 4. On traduit le label ici */}
        {t(link.label)}
      </Link>
    );
  });

  return (
    <Container size={'xl'}>
      <Flex align='center' justify="space-between" className={classes.container}>
        <Logo titleProps={{ order: 3 }} logoProps={{ w:'70px' }} />
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