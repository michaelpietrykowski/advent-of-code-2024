import * as part1 from "../01";
import * as part2 from "../02";
import { loadInputFromFile } from "../../util";
import path from "path";

describe("Day 1", () => {
  describe("Part 1", () => {
    test("should return correct result for example input", () => {
      expect(
        part1.getResult(
          loadInputFromFile(path.resolve(__dirname, "exampleInput.txt"))
        )
      ).toBe(11);
    });

    test("should return correct result for input", () => {
      expect(
        part1.getResult(loadInputFromFile(path.resolve(__dirname, "input.txt")))
      ).toBe(1151792);
    });
  });

  describe("Part 2", () => {
    test("should return correct result for example input", () => {
      expect(
        part2.getResult(
          loadInputFromFile(path.resolve(__dirname, "exampleInput.txt"))
        )
      ).toBe(31);
    });

    test("should return correct result for input", () => {
      expect(
        part2.getResult(loadInputFromFile(path.resolve(__dirname, "input.txt")))
      ).toBe(21790168);
    });
  });
});
