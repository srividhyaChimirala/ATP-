
// TODO: Import task functions

import { addTask,getAllTasks ,completeTask} from './task.js';

addTask('read','high','23-03-2026')
addTask('write','medium','23-03-2026')
addTask('eat','high','23-03-2026')

getAllTasks();

completeTask('write');