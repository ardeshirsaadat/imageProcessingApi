import express from 'express'
import { resize } from '../../imageProcessing/proccess'
import path from 'path'
const images = express.Router()

images.get('/', (req, res) => {
    const filename = req.query.filename as string
    const width = (req.query.width as unknown) as number
    const height = (req.query.height as unknown) as number
    
    resize(filename, width, height).then((file) => {
        res.sendFile(path.resolve(file))
    }).catch(e=>res.send(e))
})

export { images }
