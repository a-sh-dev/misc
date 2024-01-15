// Roll a random number between min and max with optional float flag
export const roll = (
  min: number,
  max: number,
  floatFlag: boolean = false,
): number => {
  let roll = Math.random() * (max - min) + min
  return floatFlag ? roll : Math.floor(roll)
}
