import express from 'express'
import { routes } from './routes/index'
const app = express()

const port = 8080
app.use('/api', routes)

app.listen(port, () => {
    console.log(`This app listening at http://localhost:${port}/api`)
})
export {app}