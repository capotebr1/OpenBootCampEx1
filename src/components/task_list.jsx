import React from 'react';
import PropTypes from 'prop-types';
import { Task } from "../models/task.class"
import { LEVELS } from '../models/levels.enum';
import TaskComponent from '../hooks/task';

const TaskListComponent = () => {

    const defaultTask = new Task("Example" , "DefaultDescription" , false , LEVELS.NORMAL);

    return (
        <div>
            <div>
                Your Tasks: 
            </div>
            {/*TO-DO: Aplicar un for/map para aplicar tareas*/}
            <TaskComponent task= { defaultTask }></TaskComponent>
        </div>
    );
};

export default TaskListComponent;
