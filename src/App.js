/** @jsxImportSource @emotion/react */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipePage from "./recipe-page/RecipePage";
import MealchoicePage from "./MealchoicePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MealchoicePage />} />
        <Route path="recipe/:id" element={<RecipePage />} />
      </Routes>
    </BrowserRouter>
  );
}

// reusable containers/wrappers in React-do you make dynamic ones? are ther any other common dynamic componenets in react?
// do you recommend firefox over chrome?
