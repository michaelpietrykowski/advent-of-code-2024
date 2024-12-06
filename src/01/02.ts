import { regexTransformer } from "../util";

export const getResult = (input: string[]) => {
  const first: number[] = [],
    second: Map<number, number> = new Map();

  let result = 0;

  input.forEach((line) =>
    regexTransformer(/(?<a>\d+)\s+(?<b>\d+)/g, ({ a, b }) => {
      first.push(parseInt(a));
      second.set(parseInt(b), (second.get(parseInt(b)) || 0) + 1);
    }).transform(line)
  );

  for (let i = 0; i < first.length; i++) {
    result += first[i] * (second.get(first[i]) || 0);
  }

  return result;
};
