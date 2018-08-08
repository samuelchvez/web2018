export const fetchItems = () => fetch(
  'https://raw.githubusercontent.com/samuelchvez/todos-fake-json-api/master/db.json',
).then(
  resultado => resultado.json(),
);

const getRandomInt = (min, max) => Math.floor(
  Math.random() * (max - min) + min,
);

export const getRandomText = (length = 10) => {
  const letters = [];
  for (let i = 0; i < length; i += 1) {
    letters.push(
      String.fromCharCode(
        getRandomInt(65, 90),
      ),
    );
  }

  return letters.join('');
}

