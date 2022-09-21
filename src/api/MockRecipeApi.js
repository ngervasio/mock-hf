const recipeCardData = [
  {
    id: 0,
    title: "Fiorelli! Pasta pockets with mushroom filling",
    sides: "in creamy mushroom sauce, with cheese crumbs",
    recipe_page_details: [
      ["total time", "30 Min"],
      ["calories", "843 calories"],
      ["difficulty level", "Easy"],
    ],
    details: "30 Min",
    buttonText: "Cook now",
    description:
      "Once again we want to bring Bella Italia into your home. The best way to do this is with dishes that are as simple as they are ingenious. Like the kitchen in Italy itself! Fresh, aromatic ingredients, uncomplicated preparation - it all comes together today. Enjoy your meal!",
    allergens: [
      "Milk (including lactose)",
      "Wheat",
      "Eggs or egg products",
      "Cereals containing gluten (wheat) or products made from them",
      "Celery or celery products",
    ],
    allerens_note:
      "Please also note the information on ingredients and allergens on the product label.",
  },
  {
    id: 1,
    title: "Pork medallions in curry cream sauce",
    sides: "with potato-broccoli-vegetables",
    recipe_page_details: [
      ["total time", "35 Min"],
      ["calories", "602 calories"],
      ["difficulty level", "Middle"],
    ],
    details: "35 Min",
    buttonText: "Cook now",
    description:
      "Today we stay down to earth. With fresh and seasonal ingredients, we were inspired by German cuisine today. Our variant will definitely brighten up your evening. Enjoy your meal!",
    allergens: [
      "Milk (including lactose)",
      "Mustard or mustard products",
      "Celery or celery products",
    ],
    allerens_note:
      "Please also note the information on ingredients and allergens on the product label.",
  },
  {
    id: 2,
    title: "Caesar Salad with marinated chicken",
    sides: "ready-to-eat dish contains max. 20% carbohydrates",
    recipe_page_details: [
      ["total time", "25 Min"],
      ["calories", "755 calories"],
      ["difficulty level", "Middle"],
    ],
    details: "40 Min",
    buttonText: "Cook now",
    description:
      "Today we stay down to earth. With fresh and seasonal ingredients, we were inspired by German cuisine today. Our variant will definitely brighten up your evening. Enjoy your meal!",
    allergens: [
      "Milk (including lactose)",
      "Mustard or mustard products",
      "Celery or celery products",
    ],
    allerens_note:
      "Please also note the information on ingredients and allergens on the product label.",
  },
  {
    id: 3,
    title: "Currywurst with homemade red sauce",
    sides: "Served with cheesy potato sticks and salad",
    recipe_page_details: [
      ["total time", "45 Min"],
      ["calories", "950 calories"],
      ["difficulty level", "Middle"],
    ],
    details: "25 Min",
    buttonText: "Cook now",
    description:
      "Today we stay down to earth. Today we were inspired by German cuisine. Our variant will definitely brighten up your evening. Enjoy your meal!",
    allergens: [
      "Mustard or mustard products ",
      "Milk (including lactose)",
      "Celery or celery products",
      "Eggs or egg products",
    ],
    allerens_note:
      "Please also note the information on ingredients and allergens on the product label.",
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
