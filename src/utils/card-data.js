const CARD_DATA = [
  { value: 1, isOpen: false, id: "", isMatched: false },
  { value: 2, isOpen: false, id: "", isMatched: false },
  { value: 3, isOpen: false, id: "", isMatched: false },
  { value: 4, isOpen: false, id: "", isMatched: false },
  { value: 5, isOpen: false, id: "", isMatched: false },
];

export const gameData = CARD_DATA.concat(CARD_DATA);

export const shuffleCard = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return JSON.parse(JSON.stringify(arr)).map((el, ind) => {
    el.id = ind;
    return el;
  });
};
