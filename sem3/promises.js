const delay = timeMs => new Promise(
  (resolve, reject) => setTimeout(
    resolve,
    timeMs,
  )
);

console.log("noooooxxx!");
for(let i = 0; i < 100; i += 1) {
  const time = Math.floor(10000 * Math.random());
  delay(time).then(() => console.log(`\t${i}: ${time}ms despues...`));
}
console.log("la luz!");