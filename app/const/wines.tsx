//Bottle images import

interface wineInterface {
    id: string;
    name: string,
    description: string,
    type: string,
    img: string,
    badgeColor: string,
    variety: string,
    location: string,
    tags: string[],
    accords: string[]
}

const winesData: wineInterface[] = [
    {
        id: 'anne-marie',
        name: 'Anne-Marie',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        type: 'Rouge',
        img: '/bottles/products/anne-marie.png',
        badgeColor: '#8B0000',
        variety: 'Grenache noir',
        location: 'Drôme',
        tags: ['Juteux', 'Réglisé', 'Solaire'],
        accords: ['Magret de cannard, pommes de terres sautées', 'Steak de thon grillé, salade de fenuoil àa l\u2019orange', 'Daube provençal aux olives noires']

    },
    {
        id: 'blanca',
        name: 'Blanca',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        type: 'Blanc',
        img: '/bottles/products/blanca.png',
        badgeColor: '#F8E5AB',
        variety: 'Grenache blanc',
        location: 'Drôme',
        tags: ['frais', 'floral', 'subtil'],
        accords: ['Ceviche de dorade au citron vert', 'Risotto aux asperges vertes', 'Poulet fermier rôti aux herbes']
    },
    {
        id: 'saint-joseph',
        name: 'Saint-Joseph',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        type: 'Blanc',
        img: '/bottles/products/saint-joseph.png',
        badgeColor: '#F8E5AB',
        variety: 'Saint-Joseph',
        location: 'Syrah',
        tags: ['Violette/Myrtille', 'Poivré', 'Minéral', 'Complexe'],
        accords: ['Côte de bœf grillé', 'Agneau rôti', 'Civet de lièvre', 'Chocolat noir']

    },
    {
        id: 'doucement-cowboy',
        name: 'Doucement cowboy',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        type: 'Rouge',
        img: '/bottles/products/doucement-cowboy.png',
        badgeColor: '#8B0000',
        variety: 'Syrah',
        location: 'Ardèche',
        tags: ['Fruité', 'Soyeux', 'Frais'],
        accords: ['Bavette à l\u2019echalote', 'Couscous aux légumes et pois chiches', 'Terrine de campagne & cornichons']

    },
    {
        id: 'one-night',
        name: 'One night',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        type: 'Rosé',
        img: '/bottles/products/one-night.png',
        badgeColor: '#faaca4ff',
        variety: 'Rosé de Syrah',
        location: 'Drôme',
        tags: ['Fruité (Groseille)', 'Léger', 'Convivial'],
        accords: ['Planche de charcuterie', 'Salade de tomates & mozarella', 'Crevettes sautés à l\u2019ail']
    },
    {
        id: 'simulacre',
        name: 'Simulacre',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        type: 'Maceration',
        img: '/bottles/products/simulacre.png',
        badgeColor: '#E67E22',
        variety: 'Bouroulenc de maceration',
        location: 'Drôme',
        tags: ['Abricot/Nectarine', 'Acidulé', 'Exotique'],
        accords: ['Gratin de courge butternut', 'Curry vert thaï au poulet', 'Fromages: Langres']
    },
];

export default winesData;