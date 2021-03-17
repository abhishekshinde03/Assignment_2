/*Name: Abhishek Shinde
  Student- Id: 200449413
*/


//onclick event is generated in which the function calling is occured.
document.getElementById("add").onclick = function(){
    //getting the value of get_task into new_task.
    let new_task = document.getElementById("get_task").value;
    //using the goal list we are creating new division element.
    let goal_list = document.createElement('div');
    //here, we are setting the id of the div element
    goal_list.setAttribute("id","recent_task");
    //Aplying some css to the element
    goal_list.style.border = "3px black solid";
     //Aplying some css to the element
    goal_list.innerHTML = new_task;
    //Fetching the id of div element using the get_task_list.
    let get_task_list = document.getElementById("task_list");
    //Appending the data of goal_list into the get_task_list.
    get_task_list.appendChild(goal_list);
    //Creating a completed button element .
    let completed_btn = document.createElement('button');
     //Aplying some css to the element
    completed_btn.innerHTML = "<i class=\"fas fa-check\"></i>";
    //The completed button is appended to the div element beside the goal_list
    goal_list.appendChild(completed_btn);
    // Creating a delete Button
    let delete_btn = document.createElement('button');
     //Aplying some css to the element
    delete_btn.innerHTML = "<i class=\"fas fa-trash-alt\"> </i>";
    //The Delete button is appended to the div element beside the goal_list
    goal_list.appendChild(delete_btn);
    //Delete Button onclick event is performed here
    delete_btn.onclick = function () {
        //alert message is generated before deleting the value.
        alert('Your goal is deleted');
        goal_list.remove();
   
    }
     //Completed Button onclick event is performed here
    completed_btn.onclick = function(thisType){

        //This is used to show the completed task of the user
        //here the div element is created.
        let goal_fin = document.createElement('div');
        //Fetching the id of div element
        let final_task = document.getElementById("task_completed");
        //Alert box showing that user Task is finished.
        alert('Your task is completed');
        //getting the value of new_task into the goal_fin.
        goal_fin.innerText = new_task;
        //Aplying some css to the element
        goal_fin.style.textDecoration="line-through";
         //Aplying some css to the element
        goal_fin.style.opacity="0.5";
        //Aplying some css to the element
        goal_fin.style.width="100%";
        //Aplying some css to the element
        goal_fin.style.border = "3px black solid";
        //Appending the value of goal_fin with the final_task
        final_task.appendChild(goal_fin);
        //Atlast the Value is removed.
        goal_list.remove();

    }
}