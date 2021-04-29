import express from 'express'
import { images } from './api/images'
const routes = express.Router()
routes.get('/', (req, res) => {
    res.send('this is the landing page')
})
routes.use('/images', images)

export { routes }
