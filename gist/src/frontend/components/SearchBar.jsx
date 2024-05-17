import { useState } from 'react';
import { addToList, addToUsers, switchFlag,editName } from '../../backend/store/editor-slice';
import { useDispatch } from 'react-redux';
function SearchBar() {
  let dispatch=useDispatch()
  const [query, setQuery] = useState('Gar'); // Initial search term

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
    
    dispatch(editName(query))
  };

  return (
    <div className="flex flex-col justify-center relative dark:text-gray-200">
      <div className="relative">
        <input
          type="text"
          className="p-2 pl-8 rounded border border-gray-200 bg-gray-100 focus:bg-blue focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="search..."
          value={query}
          onChange={handleSearchChange}
        />
      </div>
      <h3 className="mt-2 text-sm dark:text-gray-400">Gevonden:</h3>
      <ul className="bg-black-400 border border-gray-100 w-full mt-2 rounded-b-md dark:bg-gray-800 dark:border-gray-700">
        {/* Replace with your actual search results logic */}
        <li className="pl-8 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white">
          <b>Gar</b>dameer - Italië
        </li>
        {/* Add more list items here */}
      </ul>
    </div>
  );
}

export default SearchBar;
