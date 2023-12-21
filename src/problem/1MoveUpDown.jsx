import React, { useState } from 'react'

const MoveUpDown = () => {
    const [data, setData] = useState([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
      ]);
    
    //   method 1
      const moveUp = (index) => {
        if (index > 0) {
          const updatedData = [...data];
          [updatedData[index - 1], updatedData[index]] = [updatedData[index], updatedData[index - 1]];
          setData(updatedData);
        }
      };
    
      const moveDown = (index) => {
        if (index < data.length - 1) {
          const updatedData = [...data];
          [updatedData[index], updatedData[index + 1]] = [updatedData[index + 1], updatedData[index]];
          setData(updatedData);
        }
      };

    //   method 2
    const moveUp2 = (index) => {
        if (index > 0) {
          const updatedData = [...data];
          updatedData[index - 1] = data[index];
          updatedData[index] = data[index - 1];
          setData(updatedData);
        }
      };
      
      const moveDown2 = (index) => {
        if (index < data.length - 1) {
          const updatedData = [...data];
          updatedData[index + 1] = data[index];
          updatedData[index] = data[index + 1];
          setData(updatedData);
        }
      };

    // method 3
    const moveUp3 = (index) => {
        if (index > 0) {
          setData((prevData) => {
            return prevData.map((item, i) => {
              if (i === index - 1) return data[index];
              if (i === index) return data[index - 1];
              return item;
            });
          });
        }
      };
      
      const moveDown3 = (index) => {
        if (index < data.length - 1) {
          setData((prevData) => {
            return prevData.map((item, i) => {
              if (i === index + 1) return data[index];
              if (i === index) return data[index + 1];
              return item;
            });
          });
        }
      };
      
      
  return (
    <div>
    <ul>
      {data.map((item, index) => (
        <li key={item.id}>
          {item.name}
          <button onClick={() => moveUp(index)}>Move Up</button>
          <button onClick={() => moveDown(index)}>Move Down</button>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default MoveUpDown