import {resize} from './../imageProcessing/proccess'
it('expects resize function outputs a resolved promise', async()=>{
  await expectAsync(resize('fjord',200,200)).toBeResolved()
})
it('expects resize function outputs a resolved promise', async()=>{
  await expectAsync(resize('fjordfdadf',200,200)).toBeRejected()
})