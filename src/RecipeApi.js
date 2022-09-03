const recipeCardData = [
  {
    id: 0,
    headline: "Caesar Salad with marinated chicken",
    description: "ready-to-eat dish contains max. 20% carbohydrates",
    details: "35M in",
    buttonText: "Cook now",
  },
  {
    id: 1,
    headline: "Caesar Salad with marinated chicken",
    description: "ready-to-eat dish contains max. 20% carbohydrates",
    details: "35M in",
    buttonText: "Cook now",
  },
  {
    id: 2,
    headline: "Caesar Salad with marinated chicken",
    description: "ready-to-eat dish contains max. 20% carbohydrates",
    details: "35M in",
    buttonText: "Cook now",
  },
  {
    id: 3,
    headline: "Caesar Salad with marinated chicken",
    description: "ready-to-eat dish contains max. 20% carbohydrates",
    details: "35M in",
    buttonText: "Cook now",
  },
];

export default function mockRecipeApi(id) {
  if (!id) {
    return recipeCardData;
  } else {
    // const result = recipeCardData.filter((recipe) => recipe.id === id);
    const result = recipeCardData[id];
    // console.log("inside mock api " + result);
    return result;
  }
}
