import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = (props) => {
  // const [complete, setComplete] = useState(props.isComplete);
  // const buttonClass = complete ? 'tasks__item__toggle--completed' : '';
  // // const [color, setColor] = useState('black');

  // const completeActions = (complete) => {
  //   setComplete(!complete);
  //   // setColor('limegreen');
  // };

  const onCompleteButtonClick = () => {
    const updateTaskEntry = {
      id: props.id,
      title: props.title,
      isComplete: !props.isComplete
    };
    props.onUpdate(updateTaskEntry);

    console.log("We are updating state")  };
  const buttonClass = props.isComplete ? 'tasks__item__toggle--completed' : '';

  const color = props.isComplete ? 'limegreen': 'black';

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={onCompleteButtonClick}
        // onClick={() => setColor("limegreen")}
      >
        {props.title}
      </button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired
};

export default Task;
