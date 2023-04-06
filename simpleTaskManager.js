let taskManager = (function(){
    let tasks = [];
    function addTask(a){
        return tasks.push(a);
    };
    function displayTasks(){
        console.log(tasks);
    };
    return {
        addTask, displayTasks
    };
})();

taskManager.addTask('Brush HampterBampter');
taskManager.addTask('Feed HampterBampter');
taskManager.addTask('Spoil HampterBampter');
taskManager.displayTasks();