export const color = [
    "white",
    "black",
    "blue",
    "green",
    "yellow",
    "red",
    "pink",
    "purple",
    "orange",
    "brown",
    "grey",
    "silver",
]

export const filters = [
    {
        id: "color",
        name: "Color",
        options: [
            { value: "white", label: "White" },
            { value: "black", label: "Black" },
            { value: "blue", label: "Blue" },
            { value: "green", label: "Green" },
            { value: "yellow", label: "Yellow" },
            { value: "red", label: "Red" },
            { value: "pink", label: "Pink" },
            { value: "purple", label: "Purple" },
            { value: "orange", label: "Orange" },
            { value: "brown", label: "Brown" },
            { value: "grey", label: "Grey" },
            { value: "silver", label: "Silver" },
        ]
    },

    {
        id: "size",
        name: "Size",
        options: [
            { value: "S", label: "S" },
            { value: "M", label: "M" },
            { value: "L", label: "L" },
            { value: "XL", label: "XL" },
            { value: "XXL", label: "XXL" },
        ]

    }
]

export const singleFilter = [
    {
        id: "price",
        name: "Price",
        options: [
            { value: "0-50", label: "Below $50" },
            { value: "50-100", label: "$50 - $100" },
            { value: "100-200", label: "$100 - $200" },
            { value: "200-500", label: "$200 - $500" },
            { value: "500-1000", label: "$500 - $1000" },
            { value: "1000-5000", label: "$1000 - $5000" }
        ],
    },
    {
        id: "discount",
        name: "Discount Range",
        options: [
            { value: "0-10", label: "0% - 10%" },
            { value: "10-20", label: "10% - 20%" },
            { value: "20-30", label: "20% - 30%" },
            { value: "30-40", label: "30% - 40%" },
            { value: "40-50", label: "40% - 50%" },
            { value: "50-100", label: "50% - 100%" }
        ]
    },
    {
        id: "stock",
        name: "Availability",
        options: [
            { value: "in-stock", label: "In Stock" },
            { value: "out-of-stock", label: "Out of Stock" }
        ],
    },
]
