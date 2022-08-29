// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { useState } from 'react';
// import { Divider, input } from 'antd';

// Iteration 5
function Search(props) {
    const { searchResults } = props;
    const [query, setQuery] = useState('');
  
    const handleQuery = (e) => {
      setQuery(e.target.value);
      searchResults(e.target.value);
    };
    return (
      <div>
        <label htmlFor="search">Search</label>
        <input type="text" name="search" value={query} onChange={handleQuery} />
      </div>
    );
  }

export default Search;
