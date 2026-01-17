"use client";

import { Button, Center, Container, Flex, Overlay, SimpleGrid, Text, Title } from '@mantine/core';
import classes from './Hero.module.css';
import { useTranslations } from 'next-intl';
import { Link } from '../../../../i18n/routing';

export default function Hero() {
  const t = useTranslations('HomePage.Hero');
  
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.20} zIndex={-1} />
      <Container >
        <Flex
          h="90vh"
          direction='column'
          justify='center'
          gap='lg'
        >
          <Title className={classes.title} c='white' fz={{ base: "4rem", lg: "7rem" }} ta="center"> Vins Voctor </Title>
          <Text className={classes.description} c={'white'}
            fz={{ base: "md", lg: "xl" }}
            ta="center"
          >
            {t('subtitle')}
          </Text>
          <Center>
            <SimpleGrid
              cols={{ base: 1, sm: 2 }}
              spacing="lg"
              mt={{ base: "md", lg: "lg" }}
              w={{ base: "90%", lg: "50%" }}
            >
              <Button size="sm" radius={0} component={Link} href="/vins">
                {t('buttons.discover')}
              </Button>
              
              <Button size="sm" radius={0} color='#ffffff66' autoContrast component={Link} href="/about">
                {t('buttons.history')}
              </Button>
            </SimpleGrid>
          </Center>
        </Flex>
      </Container>
    </div>
  );
}