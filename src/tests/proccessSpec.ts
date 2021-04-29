import {resize} from './../imageProcessing/proccess'
it('expects resize function outputs a resolved promise', async()=>{
  await expectAsync(resize('fjord.jpg',200,200)).toBeResolved()
})