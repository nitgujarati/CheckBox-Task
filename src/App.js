import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [menu, setMenu] = useState(false);
  const [input, setInput] = useState('');
  const [leftList, setLeftList] = useState([]);
  const [rightList, setRightList] = useState([]);

  const openpage = () => {
    setMenu(!menu);
  };

  const cancel = () => {
    setMenu(!menu);
  };

  const AddValue = () => {
    const obj = {
      name: input,
      chBox: false,
    };
    setLeftList([...leftList, obj]);
    setMenu(!menu);
    setInput('');
  };

  const leftHandleChange = (e, id) => {
    if (e.target.checked) {
      const leftListFilter = leftList.map((ele, index) =>
        index === id ? { ...ele, chBox: true } : ele
      );
      setLeftList(leftListFilter);
    }
  };

  const rightHandleChange = (e, id) => {
    if (e.target.checked) {
      const rightListFilter = rightList.map((ele, index) =>
        index === id ? { ...ele, chBox: true } : ele
      );
      setRightList(rightListFilter);
    }
  };

  const goToRight = () => {
    const selectedTasks = leftList.filter((ele) => ele.chBox === true);
    setRightList([...rightList, ...selectedTasks]);
    setLeftList(leftList.filter((ele) => ele.chBox === false));
  };

  const goToLeft = () => {
    const selectedTasks = rightList.filter((ele) => ele.chBox === true);
    setLeftList([...leftList, ...selectedTasks]);
    setRightList(rightList.filter((ele) => ele.chBox === false));
  };

  return (
    <>
      <div className="Main">
        { menu && (
          <div className="popup">
            <div className="menuset">
              <input type="text" value={ input } onChange={ (e) => setInput(e.target.value) } />
              <div className="setbtn">
                <button onClick={ AddValue }>Add</button>
                <button onClick={ cancel }>cancel</button>
              </div>
            </div>
          </div>
        )
        }
        <div className="btn1">
          <button onClick={ openpage }>Add</button>
        </div>
        <div className="Main1">
          <div className="box1">
            { leftList.map((ele, index) => (
              <div key={ index }>
                <label htmlFor="">
                  <input
                    type="checkbox"

                    onChange={ (e) => leftHandleChange(e, index) }
                  />
                  { ele.name }
                </label>
              </div>

            )
            ) }
          </div>
          <div className="btn">
            <button onClick={ goToRight }>Right</button>
            <button onClick={ goToLeft }>Left</button>
          </div>
          <div className="box2">
            { rightList.map((ele, index) => (
              <div key={ index }>
                <label htmlFor="">
                  <input
                    type="checkbox"
                    onChange={ (e) => rightHandleChange(e, index) }
                  />
                  { ele.name }
                </label>
              </div>
            )
            ) }
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
