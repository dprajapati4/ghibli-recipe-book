import styled from "styled-components";

const Food = styled.div`
  background: #fff;
  border: 2px dashed #e5d8a4;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 10px;
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24);
  }
`;

const FoodName = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  color: #444;
`;

const FoodDescription = styled.p`
  margin: 5px 0;
  color: #666;
`;

const FoodIngredients = styled.ul`
  margin: 5px 0;
  padding-left: 20px;
  font-size: 0.9rem;
  color: #555;
`;
const RecipeLink = styled.a`
  display: inline-block;
  margin-top: 8px;
  color: #a97442;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const FoodItem = ({ food, index }) => {
  return (
    <Food>
      <RecipeLink
        href={food.recipeLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FoodName>{food.name}↗</FoodName>
      </RecipeLink>
      <FoodDescription>{food.description}</FoodDescription>
      <FoodIngredients>
        {food.ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient}</li>
        ))}
      </FoodIngredients>
    </Food>
  );
};
