import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>add your list here ✌️</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="add it✍️"
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            ></i>
          </div>
          <div>
            {list.map((elem) => {
              return (
                <div key={elem.id}>
                  <h3>{elem.data}</h3>
                  <i
                    className="fa fa-plus trash-btn"
                    title="deleteItem"
                    onClick={() => dispatch(deleteTodo(elem.id))}
                  ></i>
                </div>
              );
            })}

            <div>
              <button onClick={() => dispatch(removeTodo())}>
                <span>check list</span>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
