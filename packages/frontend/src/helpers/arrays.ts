export function getRandomItems(arr: any[], numItems: number) {
  if (numItems > arr.length) {
    return arr;
  }

  const shuffledArray = arr.sort(() => Math.random() - 0.5);
  return shuffledArray.slice(0, numItems);
}
