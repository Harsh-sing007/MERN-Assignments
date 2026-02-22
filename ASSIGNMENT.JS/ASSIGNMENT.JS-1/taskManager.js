// Task Array
let tasks = [];

// Auto Increment ID
let nextId = 1;


// Add Task (Arrow Function)
const addTask = (title) => {
    const task = {
        id: nextId++,
        title: title,
        status: "pending"
    };

    tasks.push(task);
    console.log("Task Added");
};


// Get All Tasks (console.table + map)
const getAllTasks = () => {

    const displayTasks = tasks.map(task => ({
        ID: task.id,
        Title: task.title,
        Status: task.status
    }));

    console.table(displayTasks);
};


// Complete Task (find)
const completeTask = (id) => {

    const task = tasks.find(t => t.id === id);

    if(task){
        task.status = "completed";
        console.log("Task Completed");
    }
    else{
        console.log("Task Not Found");
    }
};


// Delete Task (filter)
const deleteTask = (id) => {

    tasks = tasks.filter(t => t.id !== id);

    console.log("Task Deleted");
};



// ===== Example Usage =====

addTask("Study MERN");
addTask("Complete Assignment");
addTask("Push to Github");

getAllTasks();

completeTask(2);

getAllTasks();

deleteTask(1);

getAllTasks();