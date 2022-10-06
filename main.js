const prompt = require('prompt-sync')({sigint: true});




console.log('Hello! Welcome to the To-Do List Manager Application!!\n');

console.log('~ Select an action ~');
console.log("[1] Create a to-do item");
console.log("[2] Complete a to-do item");
console.log("[3] Un-Complete a to-do item");
console.log("[4] Edit an to-do item");
console.log("[5] Exit to-do list Application");;



let option = Number(prompt('>'));
let toDoList = [];
let status = [];




while (option !== 5) { //Loop includes all options except exit
    if (option === 1) { //add/ creating the to do item
        console.log('\n~ Creating a new to-do item ~');
        console.log('Hi! What is the new to-do item called?');

        let addItem = prompt ('> ');

        while(addItem.length === 0){ // this checks  the input for empty string
            console.log(" Invalid: Please input a valid item. Try Again. ");
            addItem = prompt ('> ');
        }

        toDoList.push(addItem); //adds the task to the array that was created
        status.push("Not Complete"); //sets the initial status at incomplete
        displayList(); //displays the current list
        selectOption(); //re-prompts the user

     }else if (option === 2) { //complete an item
        if(toDoList.length > 0){ //verifies there are items in the list
        console.log('\n~ Completeing a to-do item ~');
        console.log('Howdy! Which to-do item would you like to complete?');
        displayList();
        selectOption();

        let newStatus = Number(prompt ('> '));

        while (isNaN(newStatus) ||  newStatus  > statusArray.length || newStatus < 1){ //verfies they entered a valid number
            console.log('Please enter a valid numbered item from the list: ');
            newStatus = Number(prompt ('> '));

            statusArray[newStatus-1]= true;
            displayList();
            selectOption();
            }
        }
        else { //reminds user they must enter an item before they can modify it
            console.log("Please enter a item before you try to modify it!");
            displayList();
            selectOption();
        }
    } else if (option === 3) {  //un-complete an item
        console.log('\n~ Un-completeing a to-do item ~');
        console.log('Aloha! Which to-do item would you like to  un-complete?');

        let newStatus = prompt ('> ');

        status[newStatus-1]="Not Complete";
        displayList();
        selectOption(); //reprompt the user

    
    } else if (option === 4) { //edit an item
        console.log('\n ~ Editing a to-do item ~');
        console.log('Wassup! Which to-do item would you like to edit?');
       
        let edit = prompt ('> ');
        console.log(`Please verify you want to edit ${toDoList[edit-1]}.  Note this will automatically reset the status to Not Complete.`);//confirm edit request
       
       
        let challenge = prompt ('yes or no > ');

        if (challenge === "yes") {
            let revision = prompt ('Enter the new desired task please: > ');
            toDoList[edit-1] = revision;
            status[edit-1]=" Not Complete";
            displayList();
            selectOption();

        } else{
            displayList();
            selectOption();
        }
    }
    else {
        console.log("Invalid Operation. Please try again.");
    }
}
// Exiting Application
console.log("~ Exiting To-Do List Application");



//Global Functions for the program
function selectOption(){
    console.log("\n~ Select an Action ~\n");
    console.log("[1] Create a to-do item");
    console.log("[2] Complete a to-do item");
    console.log("[3] Un-Complete a to-do item");
    console.log("[4] Edit an to-do item");
    console.log("[5] Exit to-do list Application");
    option = Number(prompt("> "));
}

function displayList(){
    if(toDoList.length === 0){
        console.log("Your to-do list is empty. \n");
    }else {
        console.log(`\n You have ${toDoList.length} to-do item(s) \n`);
    }
    for(let i = 0; i < toDoList.length; i++){
     let status = " ";
     
     if(statusArray[i] === false){
        status = "[incomplete]";
     } else if (statusArray[i] === true){
        status = '[complete]';
     }
    
    console.log(`${i + 1}. ${status} ${toDoList[i]}`);
    }
}



/* create a series of options with an input.
use the input to pick from options in a while loop.
prompts:
    numbers to decide which option using ifs
    1. adding a task/create an item - prompt user for item to create
    2. 
While Loop:  program has no known ending, so we want to be able to prompt them indefinitetly/ until they decide to exit
display the to-do list to the user
include: 
  completion status
  name of the item
  number associated with the item
  loop to display each item in the ToDo list
2.  add to do items (choice === 1)
 - prompt for the to-do item
 - save the item by storing it in an array - .push()
 - an array to keep track of toDo items - global variable
 2.5 How do we set items to be incomplete
  - Any item on the list is incomplete until we mark it complete
  - All new items are incomplete by default
  an array of booleans?
[true,   false,   true]  status array
["task1, task2,  task3"] To Do list array
   0       1       2     Shared index locations
3.  complete to do items
*/
