import type { CollectionEntry } from "astro:content";

export type YearGroupedEntries = {
  year: String;
  tils: Array<CollectionEntry<"til">>;
};

export function groupedByYear(
  til: Array<CollectionEntry<"til">>
): Array<YearGroupedEntries> {
  const sortedTilEntries = til.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  const bin: Record<number, Array<CollectionEntry<"til">>> = {};
  sortedTilEntries.forEach((entry) => {
    const year = entry.data.date.getFullYear();
    console.log(year);
    console.log(year in bin);
    if (year in bin) bin[year].push(entry);
    else bin[year] = [entry];
  });

  const returnVal = Object.entries(bin).map(([key, value]) => {
    return {
      year: key,
      tils: value,
    };
  });
  returnVal.sort((a, b) => parseInt(b.year) - parseInt(a.year));
  return returnVal;
}
