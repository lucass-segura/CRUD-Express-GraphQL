import express from "express"

const app = express()

export default app

function start() {
    app.listen(3000, () => {
        console.log("Server is running on port", 3000)
    })
}

start()