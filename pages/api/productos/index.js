const getAll = (req, res) => {
    res.json([
        {
            id: 1,
            nombre: "cascara",
            precio: 23
        },
        {
            id: 1,
            nombre: "platano",
            precio: 46
        }
    ])
}

export default getAll