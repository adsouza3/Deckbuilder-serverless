import cardData from './card_data';

export const parseDeck = (text) => {
  let cards = [];
  text.split('\n').forEach((line) => {
    console.log(line);
    const format = /(\d+) (.+) \(Set(\d+) #(\d+)\)/
    const parsed = line.match(format);

    // TODO market
    if (parsed) {
      console.log(parsed);
      const [_garb, copies, cardName] = parsed;

      const card = cardData.find(card => card.name === cardName);
      for (let i = 0; i < copies; i++) {
        cards.push(card);
      }
    }
  });

  console.log(cards);
  return cards;
};