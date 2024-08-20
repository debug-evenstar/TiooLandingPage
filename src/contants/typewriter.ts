export const heroInit = (typewriter: any) => {
  typewriter.typeString('Hello World!')
    .callFunction(() => {
      console.log('String typed out!');
    })
    .pauseFor(2500)
    .deleteAll()
    .callFunction(() => {
      console.log('All strings were deleted');
    })
    .start();
}