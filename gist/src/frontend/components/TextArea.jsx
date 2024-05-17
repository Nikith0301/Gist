

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addToList, switchFlag } from '../../backend/store/editor-slice';

export default function TextArea() {
  const dispatch = useDispatch();
  //const textArr = useSelector((state) => state.editor); // Access items from editor slice
  const textObj = useSelector((state) => state.user);
const name=useSelector((state)=>state.name);
  const [text, setText] = useState(['a','g','b']);

 

  const handleFlag = () => {
    console.log(textObj)
    dispatch(switchFlag());
  };

  return (
    <>
      {textObj[name]  ? (
        textObj[name].map((item, idx) => (

          <> <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
          <label htmlFor="comment" className="sr-only">Your comment</label>
          <textarea
              id="comment"
              key={idx}
              rows="4"
              className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              readOnly
              value={item}
          />
      </div>
      <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
          <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
              Edit code
          </button>
          <div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
              <button type="button" className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6 2a1 1 0 0 0-1 1v1H2.5a1 1 0 1 0 0 2H3v11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h.5a1 1 0 1 0 0-2H15V3a1 1 0 0 0-1-1H6Zm1 4v10a1 1 0 1 1-2 0V6a1 1 0 1 1 2 0Zm6 0v10a1 1 0 1 1-2 0V6a1 1 0 1 1 2 0Zm-4 0v10a1 1 0 1 1-2 0V6a1 1 0 1 1 2 0Z"/>
                  </svg>
                  <span className="sr-only">Delete</span>
              </button>
          </div>
      </div></>


          
        ))
      ) : (
        textObj.length // Display textArr length if text is empty
      )}
      <button onClick={handleFlag}>Switch Back</button>
    </>
  );
}
