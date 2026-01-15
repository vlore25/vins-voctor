interface wineInterface {
    id: string;
    name: string;
    description: string;
    type: string;
    mention: string; // Nouvelle propriété pour la dénomination (AOC, VDF)
    img: string;
    badgeColor: string;
    variety: string;
    location: string;
    tags: string[];
    accords: string[];
}

const winesData: wineInterface[] = [
    {
        id: 'ma-carriere',
        name: 'Ma carrière',
        description: 'Un Saint-Joseph de caractère, expression pure de la Syrah sur son terroir d\'origine.',
        type: 'Rouge',
        mention: 'AOC Saint-Joseph',
        img: '/bottles/products/saint-joseph.png',
        badgeColor: '#8B0000',
        variety: '100% Syrah',
        location: 'Châteaubourg',
        tags: ['Violette', 'Poivré', 'Complexe'],
        accords: ['Côte de bœuf grillée', 'Agneau rôti', 'Civet de lièvre']
    },
    {
        id: 'anne-marie',
        name: 'Anne-Marie',
        description: 'Un vin solaire et généreux, reflet fidèle du Grenache Noir de la Drôme.',
        type: 'Rouge',
        mention: 'Vin de France (VDF)',
        img: '/bottles/products/anne-marie.png',
        badgeColor: '#8B0000',
        variety: '100% Grenache Noir',
        location: 'Roussas',
        tags: ['Juteux', 'Réglisé', 'Solaire'],
        accords: ['Magret de canard', 'Steak de thon grillé', 'Daube provençale']
    },
    {
        id: 'doucement-cowboy',
        name: 'Doucement cowboy',
        description: 'Une Syrah ardéchoise tout en finesse, privilégiant le fruit et la fluidité.',
        type: 'Rouge',
        mention: 'Vin de France (VDF)',
        img: '/bottles/products/doucement-cowboy.png',
        badgeColor: '#8B0000',
        variety: '100% Syrah',
        location: 'Ardèche',
        tags: ['Fruité', 'Soyeux', 'Frais'],
        accords: ['Bavette à l’échalote', 'Couscous aux légumes', 'Terrine de campagne']
    },
    {
        id: 'one-night',
        name: 'One night',
        description: 'Le compagnon idéal des moments improvisés, un vin de soif léger et croquant.',
        type: 'Rouge léger',
        mention: 'Vin de France (VDF)',
        img: '/bottles/products/one-night.png',
        badgeColor: '#D05353',
        variety: '50% Grenache Noir / 50% Rosé de Syrah',
        location: 'Roussas',
        tags: ['Groseille', 'Léger', 'Convivial'],
        accords: ['Planche de charcuterie', 'Salade tomate-mozza', 'Crevettes à l’ail']
    },
    {
        id: 'blanca',
        name: 'Blanca',
        description: 'Un blanc tout en dentelle, porté par des notes florales et une grande fraîcheur.',
        type: 'Blanc',
        mention: 'Vin de France (VDF)',
        img: '/bottles/products/blanca.png',
        badgeColor: '#FAFAD2',
        variety: '100% Grenache blanc',
        location: 'Allan',
        tags: ['Frais', 'Floral', 'Subtil'],
        accords: ['Ceviche de dorade', 'Risotto aux asperges', 'Poulet aux herbes']
    },
    {
        id: 'simulacre',
        name: 'Simulacre',
        description: 'Un vin de macération (orange) surprenant, aux notes de fruits exotiques et d\'abricot.',
        type: 'Orange',
        mention: 'Vin de France (VDF)',
        img: '/bottles/products/simulacre.png',
        badgeColor: '#E67E22',
        variety: '100% Bourboulenc',
        location: 'Allan',
        tags: ['Abricot', 'Acidulé', 'Exotique'],
        accords: ['Gratin de courge butternut', 'Curry vert thaï', 'Fromage de Langres']
    }
];

export default winesData;