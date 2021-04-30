import express from 'express'
import { images } from './api/images'
const routes = express.Router()
routes.get('/', (req:express.Request, res:express.Response) => {
    res.send('this is the landing page')
})
routes.use('/images', images)

export { routes }
