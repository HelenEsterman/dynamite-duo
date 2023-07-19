const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        {
            id: 1,
            name: "Ursula",
            power: "Sea witch"
        },
        {
            id: 2,
            name: "Hades",
            power: "God of underworld"
        },
        {
            id: 3,
            name: "Jigsaw",
            power: "Super genius intelligence"
        }
    ]
}


export const getHeroes = () => {
    return database.heroes.map(hero => ({...hero}))
}

export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}