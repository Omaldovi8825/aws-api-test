import { useEffect } from "react"

const App = () => {

    useEffect(() => {

        (async () => {
            try {
                let res = await fetch('/api/productos')
                res = await res.json() 
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        })()

    }, [])

    return(
        <h1>holasss</h1>
    )
}

export default App