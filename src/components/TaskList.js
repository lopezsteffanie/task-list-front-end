import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';

const TaskList = (props) => {
  // const getTaskListJSX = (props) => {
    const tasks = props.tasks.map((task,i) => {
      return (
        <Task
          key={i}
          id={task.id}
          title={task.title}
          isComplete={task.isComplete}
          onUpdate = {props.onUpdateTask}
          onDelete = {props.onDelete}
        />
      );
    });
    return (<div>
      {tasks}
    </div>);
  // };
  // return <ul className="tasks__list no-bullet">{getTaskListJSX(props.tasks)}</ul>;
};


TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
      isDelete: PropTypes.bool.isRequired
    })
  ),onUpdateTask: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default TaskList;
