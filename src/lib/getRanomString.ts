export default function getRandomString(array: string[]): string {
  const index = Math.floor(Math.random() * array.length);

  return array[index];
}
