export default function getRandomString(array: string[]): string {
    let index = Math.floor(Math.random() * array.length);

    return array[index];
}
