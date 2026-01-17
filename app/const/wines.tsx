// app/const/wines.tsx

// On ne garde que les infos techniques non traduisibles
export interface wineInterface {
    id: string;
    img: string;
    badgeColor: string;
}

const winesData: wineInterface[] = [
    {
        id: 'ma-carriere',
        img: '/bottles/products/saint-joseph.png',
        badgeColor: '#8B0000',
    },
    {
        id: 'anne-marie',
        img: '/bottles/products/anne-marie.png',
        badgeColor: '#8B0000',
    },
    {
        id: 'doucement-cowboy',
        img: '/bottles/products/doucement-cowboy.png',
        badgeColor: '#8B0000',
    },
    {
        id: 'one-night',
        img: '/bottles/products/one-night.png',
        badgeColor: '#D05353',
    },
    {
        id: 'blanca',
        img: '/bottles/products/blanca.png',
        badgeColor: '#FAFAD2',
    },
    {
        id: 'simulacre',
        img: '/bottles/products/simulacre.png',
        badgeColor: '#E67E22',
    }
];

export default winesData;