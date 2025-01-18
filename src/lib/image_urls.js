import md5 from 'md5';

const urls = {};
export const getImageUrl = (card) => {
  // TODO uncomment if Eternal Warcry becomes usable again for images
  // return card.imageUrl

  if (urls[card.name]) {
    return urls[card.name];
  }

  const sanitizedFilename = `${card.name.replace(/\s/g, '_')}.png`;
  const hash = md5(sanitizedFilename);
  const urlPrefix = 'https://static.wikia.nocookie.net/eternalcardgame/images';
  const url = `${urlPrefix}/${hash.charAt(0)}/${hash.charAt(0)}${hash.charAt(1)}/${sanitizedFilename}`;

  urls[card.name] = url;

  return url;
};