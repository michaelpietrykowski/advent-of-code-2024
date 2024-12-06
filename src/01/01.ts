import { regexTransformer } from "../util";

const numerically = (a: number, b: number) => a - b;

export const getResult = (input: string[]) => {
  const first: number[] = [],
    second: number[] = [];
  let result = 0;

  input.forEach((line) =>
    regexTransformer(/(?<a>\d+)\s+(?<b>\d+)/g, ({ a, b }) => {
      first.push(parseInt(a));
      second.push(parseInt(b));
    }).transform(line)
  );

  first.sort(numerically);
  second.sort(numerically);

  for (let i = 0; i < first.length; i++) {
    result += Math.abs(first[i] - second[i]);
  }

  return result;
};
