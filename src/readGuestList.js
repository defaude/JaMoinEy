import { readFileSync } from 'node:fs';

const encoding = 'utf-8';

const asArray = (str) => str.split('');

const transform = (str, splitter) =>
    str
        .split(splitter)
        .filter((x) => !!x)
        .map(asArray);

export const readGuestList = (url) => {
    const rawFile = readFileSync(url, { encoding });

    const [rawGuests, rawBuddies, rawRivals] = rawFile.split('\n');

    /** @type string[] */
    const guests = asArray(rawGuests);
    /** @type string[] */
    const buddies = transform(rawBuddies, /[\[\]]/);
    /** @type string[] */
    const rivals = transform(rawRivals, /[<>]/);

    return { guests, buddies, rivals };
};
