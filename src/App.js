import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './component/FoodBox';
import AddFoodForm from './component/AddFoodForm';
import { Row, Divider, Button } from 'antd';
import Search from 'antd/lib/transfer/search';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [displayFoods, setDisplayFoods] = useState(foods);
  const [showFoods, setShowFoods] = useState(true);

  const createFood = (food) => {
    const updatedFoods = [food, ...foodList];
    setFoodList(updatedFoods);
    setDisplayFoods(updatedFoods);
    /* console.log(displayFoods); */
  };

  const searchResults = (searchStr) => {
    let filteredFoods = foodList.filter((food) =>
      food.name.toLowerCase().includes(searchStr.toLowerCase())
    );
    setDisplayFoods(filteredFoods);
  };

  const deleteFood = (foodId) => {
    let filteredFoods = foodList.filter((food) => food.name !== foodId);
    setFoodList(filteredFoods);
    setDisplayFoods(filteredFoods);
  };

  const toggleFoods = () => {
    setShowFoods(!showFoods);
  };

  return (
    <div className="App">
      <Search searchResults={searchResults} />
      <AddFoodForm createFood={createFood} />
      <Button onClick={toggleFoods}>
        {showFoods ? 'Hide List' : 'Show List'}
      </Button>
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'flex-start' }}>
        {showFoods &&
          displayFoods.map((foods, index) => {
            return (
              <div key={index}>
                <FoodBox food={foods} deleteFoodBtn={deleteFood} />
              </div>
            );
          })}
      </Row>
      {foodList.length === 0 ? (
        <div>
          <h2>Oops! Nothing to see here</h2>
          <img
            src="https://www.melcarson.com/wp-content/uploads/2012/11/image.png"
            width={'400'}
          />
        </div>
      ) : null}
    </div>
  );
}


export default App