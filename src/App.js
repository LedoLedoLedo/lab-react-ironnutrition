import React from 'react';
import { useState } from 'react';
import foodsData from './foods.json';
import { Row, Divider, Button } from 'antd';
import FoodBox from './component/FoodBox';
import AddFoodForm from './component/AddFoodForm';
import Search from 'antd/lib/transfer/search';

function App() {
  const [food, setFood] = useState(foodsData);

  const addNewFood = (newFood) => {
    const updatedFoods = [newFood, ...food];

    setFood(updatedFoods);
  };


  return (
    <div className="App">
      <Search/>
      <AddFoodForm addNewFood={addNewFood}/>
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
      <div className="food-list">
        {food.map((eachfood) => {
          return <FoodBox key={eachfood.name} food={eachfood} />;
        })}
      </div>
      </Row>
      </div>
  )}

export default App;
