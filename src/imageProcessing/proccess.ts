import { promises as fsPromises } from 'fs'
import fs from 'fs'
import sharp from 'sharp'

async function resize(
    imageName: string,
    width: number,
    height: number
): Promise<string> {
    try {
        const outFile = `./converted/${imageName}.jpg`
        if (fs.existsSync(outFile)) {
            return outFile
        } else {
          await fsPromises.access(`./images/${imageName}.jpg`);
          await sharp(`./images/${imageName}.jpg`).resize(Number(width),Number(height))
                                                                .toFile(outFile)
          return outFile;
        }   
        
    } catch (error) {
        throw 'file not available'
    }
}

export { resize }
