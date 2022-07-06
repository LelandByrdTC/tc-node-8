import { useState, useEffect } from "react";

export const useTypesAndWeaknesses = (list) => {
  const [values, setValues] = useState({});

  useEffect(() => {
    let result = list.reduce(
      (acc, pokemon) => {
        acc.types = acc.types.concat(pokemon.type);
        acc.weaknesses = acc.weaknesses.concat(pokemon.weaknesses);
        return acc;
      },
      { types: [], weaknesses: [] }
    );

    setValues({
      types: ["", ...new Set(result.types)],
      weaknesses: ["", ...new Set(result.weaknesses)],
    });
  }, [list]);

  return values;
};

const compareMatch = (refName, searchName) => {
  let res = 0;
  let tempRefName = refName.toLowerCase();

  for (let char of searchName) {
    if (tempRefName.toLowerCase().includes(char)) {
      res += tempRefName.indexOf(char) == searchName.indexOf(char) ? 3 : 1;
      tempRefName = tempRefName.replace(char, " ");
    }
  }

  return res;
};

export const filterPokemon = (list, searchName, searchType, searchWeakness) => {
  let filteredList = list.filter((pokemon) => {
    let compareScore = compareMatch(pokemon.name, searchName);

    if (
      (compareScore > 0 || searchName == "") &&
      (pokemon.type.includes(searchType) || searchType == "") &&
      (pokemon.weaknesses.includes(searchWeakness) || searchWeakness == "")
    ) {
      pokemon.match = compareScore;
      return true;
    }
  });

  filteredList.sort((a, b) => {
    if (a.match == b.match) {
      return a.name.length > b.name.length ? 1 : -1;
    } else {
      return b.match - a.match;
    }
  });

  return filteredList;
};
