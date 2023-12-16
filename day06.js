const exampleData = 
`Time:      7  15   30
Distance:  9  40  200`;

const data =
`Time:        52     94     75     94
Distance:   426   1374   1279   1216`;

const parse = (data) => {
  const lines = data.split('\n');
  const [time, distance] = lines.map(line => line.split(/\s+/).slice(1).map(Number));
  return { time, distance };
};

const zip = (arr1, arr2) => arr1.map((el, idx) => [el, arr2[idx]]);

const range = (n, m) => Array.from({ length: m - n + 1 }, (_, index) => n + index);

const calculateDistance = (held, total) => held * (total - held);

const part1 = (data) => {
  const { time, distance } = parse(data);
  const result = zip(time, distance).map(([t, d]) => {
    const distances = range(0, t).map(n => calculateDistance(n, t)).filter(n => n > d);
    return distances.length;
  });
  return result.reduce((acc, el) => acc * el, 1);
};

const part2 = (data) => {
  const { time, distance } = parse(data);
  const correctedTime = parseInt(time.reduce((acc, el) => acc + el, ""));
  const correctedDistance = parseInt(distance.reduce((acc, el) => acc + el, ""));

  const distances = range(0, correctedTime).map(n => calculateDistance(n, correctedTime)).filter(n => n > correctedDistance)
  return distances.length;
}

console.log(part2(data));


