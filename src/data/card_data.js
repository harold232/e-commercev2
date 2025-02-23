const cardData = [
    {
        id: 1,
        title: "Camisa",
        description: "This is the description for card 1",
        price: 19.99,
        discountedPrice: 15.99,
        discountPercent: 20,
        brand: "Zara",
        sizes: [
            { size: "S", quantity: 10 },
            { size: "M", quantity: 15 },
            { size: "L", quantity: 5 }
        ],
        imageUrl: "https://static.zara.net/assets/public/2753/829c/83bc4f578ea3/efc48b52f556/03665407800-e1/03665407800-e1.jpg?ts=1738321087692&w=447"
    },
    {
        id: 2,
        title: "Pantalón",
        description: "This is the description for card 2",
        price: 29.99,
        discountedPrice: 23.99,
        discountPercent: 20,
        brand: "Zara",
        sizes: [
            { size: "S", quantity: 8 },
            { size: "M", quantity: 12 },
            { size: "L", quantity: 6 }
        ],
        imageUrl: "https://static.zara.net/assets/public/cb76/4328/fddb4a438a3c/715d49d07aff/03665407251-e1/03665407251-e1.jpg?ts=1738321079118&w=447"
    },
    {
        id: 3,
        title: "Chaqueta",
        description: "This is the description for card 3",
        price: 39.99,
        discountedPrice: 31.99,
        discountPercent: 20,
        brand: "Zara",
        sizes: [
            { size: "S", quantity: 7 },
            { size: "M", quantity: 10 },
            { size: "L", quantity: 8 }
        ],
        imageUrl: "https://static.zara.net/assets/public/bbdf/00f9/14444bdcbbad/038cbe8a17f8/00962370611-e1/00962370611-e1.jpg?ts=1725551221320&w=447"
    },
    {
        id: 4,
        title: "Vestido",
        description: "This is the description for card 4",
        price: 49.99,
        discountedPrice: 39.99,
        discountPercent: 20,
        brand: "Zara",
        sizes: [
            { size: "S", quantity: 5 },
            { size: "M", quantity: 10 },
            { size: "L", quantity: 5 }
        ],
        imageUrl: "https://static.zara.net/assets/public/962b/1b46/c97e4a4b8209/e1efaa7604d8/03665407401-e1/03665407401-e1.jpg?ts=1738321084469&w=447"
    },
    {
        id: 5,
        title: "Falda",
        description: "This is the description for card 5",
        price: 59.99,
        discountedPrice: 47.99,
        discountPercent: 20,
        brand: "Zara",
        sizes: [
            { size: "S", quantity: 6 },
            { size: "M", quantity: 9 },
            { size: "L", quantity: 4 }
        ],
        imageUrl: "https://static.zara.net/assets/public/1b66/217f/9d52442abaaa/20d77e300198/01887310251-e1/01887310251-e1.jpg?ts=1733741884960&w=447"
    },
    {
        id: 6,
        title: "Blusa",
        description: "This is the description for card 6",
        price: 69.99,
        discountedPrice: 55.99,
        discountPercent: 20,
        brand: "Zara",
        sizes: [
            { size: "S", quantity: 4 },
            { size: "M", quantity: 8 },
            { size: "L", quantity: 6 }
        ],
        imageUrl: "https://static.zara.net/assets/public/4d6c/4d01/d26049d2a6f8/c57c15c28641/01887310752-e1/01887310752-e1.jpg?ts=1733741886305&w=447"
    },
    {
        id: 7,
        title: "Abrigo",
        description: "This is the description for card 7",
        price: 79.99,
        discountedPrice: 63.99,
        discountPercent: 20,
        brand: "Zara",
        sizes: [
            { size: "S", quantity: 3 },
            { size: "M", quantity: 7 },
            { size: "L", quantity: 5 }
        ],
        imageUrl: "https://static.zara.net/assets/public/ef25/94d2/55654171ac4f/dbd3ef1c7bd2/01887310441-e1/01887310441-e1.jpg?ts=1733741884940&w=447"
    },
    {
        id: 8,
        title: "Suéter",
        description: "This is the description for card 8",
        price: 89.99,
        discountedPrice: 71.99,
        discountPercent: 20,
        brand: "Zara",
        sizes: [
            { size: "S", quantity: 5 },
            { size: "M", quantity: 10 },
            { size: "L", quantity: 5 }
        ],
        imageUrl: "https://static.zara.net/assets/public/1f01/195a/61e544cd805a/812f7058d657/01887310800-e1/01887310800-e1.jpg?ts=1733741886165&w=447"
    },
    {
        id: 9,
        title: "Chaleco",
        description: "This is the description for card 9",
        price: 99.99,
        discountedPrice: 79.99,
        discountPercent: 20,
        brand: "Zara",
        sizes: [
            { size: "S", quantity: 4 },
            { size: "M", quantity: 6 },
            { size: "L", quantity: 8 }
        ],
        imageUrl: "https://static.zara.net/assets/public/b0d4/9d15/44c64f2a9e1a/66d3987475af/00962370800-e1/00962370800-e1.jpg?ts=1725551229147&w=447"
    },
    {
        id: 10,
        title: "Traje",
        description: "This is the description for card 10",
        price: 109.99,
        discountedPrice: 87.99,
        discountPercent: 20,
        brand: "Zara",
        sizes: [
            { size: "S", quantity: 2 },
            { size: "M", quantity: 5 },
            { size: "L", quantity: 3 }
        ],
        imageUrl: "https://static.zara.net/assets/public/4dcb/a2d3/a40b4b2e811a/3f4286010abd/00962370712-e1/00962370712-e1.jpg?ts=1725551217503&w=447"
    },
    {
        id: 11,
        title: "Camiseta",
        description: "This is the description for card 11",
        price: 119.99,
        discountedPrice: 95.99,
        discountPercent: 20,
        brand: "Zara",
        sizes: [
            { size: "S", quantity: 6 },
            { size: "M", quantity: 8 },
            { size: "L", quantity: 4 }
        ],
        imageUrl: "https://static.zara.net/assets/public/bbdf/00f9/14444bdcbbad/038cbe8a17f8/00962370611-e1/00962370611-e1.jpg?ts=1725551221320&w=447"
    },
    {
        id: 12,
        title: "Sudadera",
        description: "This is the description for card 12",
        price: 129.99,
        discountedPrice: 103.99,
        discountPercent: 20,
        brand: "Zara",
        sizes: [
            { size: "S", quantity: 3 },
            { size: "M", quantity: 7 },
            { size: "L", quantity: 5 }
        ],
        imageUrl: "https://static.zara.net/assets/public/4734/dd9f/7a2042d480c9/6def2b2fce58/00962370506-e1/00962370506-e1.jpg?ts=1725551257641&w=447"
    },
    {
        id: 13,
        title: "Polo",
        description: "This is the description for card 13",
        price: 139.99,
        discountedPrice: 111.99,
        discountPercent: 20,
        brand: "Zara",
        sizes: [
            { size: "S", quantity: 4 },
            { size: "M", quantity: 6 },
            { size: "L", quantity: 8 }
        ],
        imageUrl: "https://static.zara.net/assets/public/bbdf/00f9/14444bdcbbad/038cbe8a17f8/00962370611-e1/00962370611-e1.jpg?ts=1725551221320&w=447"
    }
];

export default cardData;
