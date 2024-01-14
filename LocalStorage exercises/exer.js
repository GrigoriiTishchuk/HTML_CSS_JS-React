// 1-3 exercises

let personObject = {name: "Juha", age: 38};

function serializer(obj){
    return JSON.stringify(obj)
}

function deserializer(obj){
    return JSON.parse(obj)
}

console.log(serializer(personObject));
console.log(deserializer(serializer(personObject)));


let berryArray = ["blueberry", "strawberry", "redberry"];

console.log(serializer(berryArray));
console.log(deserializer(serializer(berryArray)));

let nestedObject = {type: "car", 
                    features: {
                        make: "Volvo", 
                        model: "V70", 
                        powerSource: "gasoline", 
                        drivenKm: 90000}
                      };

console.log(serializer(nestedObject));
console.log(deserializer(serializer(nestedObject)));

// 4-6 exercises

function parseValue(obj) {
    try
    {
        return JSON.parse(obj);
    }
    catch (err)
    {
        console.error("YOU MADE A MISTAKE!!!");
    }

    return obj
}


let json_string_valid = '{"name":"John", "age":30, "car":null}'; // valid
let json_string_invalid = '{"name:"John", "age":30, "car":null}'; // invalid

console.log(parseValue(json_string_valid));
console.log(parseValue(json_string_invalid));



function saveName(name) {
    localStorage.setItem("name", name);
}

function getName() {
    return localStorage.getItem("name");
}

saveName("Grigorii");
console.log(getName());

// 6. Create a counter that is used to increment a number that is stored in localStorage every time a function is called.

let createCounter = function(n) {

    return function() {
        return n++;
    };
};
const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12




function incrementCounter() {
    let currentCounter = localStorage.getItem('counter');

    // If the counter doesn't exist in localStorage, set it to 0
    if (currentCounter === null) {
      currentCounter = 0;
    } else {
      currentCounter = parseInt(currentCounter);
    }
    localStorage.setItem('counter', currentCounter+=1);
    console.log('Counter:', currentCounter);
  }

  incrementCounter();
  incrementCounter();
  incrementCounter();

// 7. Write a function that takes an array, converts it to a JSON string, and stores it in localStorage. Write another function
// to retrieve this JSON string, convert it back to and array, and return it.

function array_converter(array) {
    return JSON.stringify(array);
}

function array_retriever() {
    return JSON.parse(localStorage.getItem('array'));
}

let arr = ["asda", "asfgfgf", 12, true];

stringed_array = localStorage.setItem('array', array_converter(arr));
console.log(array_retriever());

//8. Simulate a theme preference ("dark", "light") saving function. Save the user's choice in localStorage, and write a function to retrieve it.


// Function to save the theme preference to localStorage
function saveThemePreference(theme) {
    localStorage.setItem('theme', theme);
  }
// Function to retrieve the theme preference from localStorage
function getThemePreference() {
    // Retrieve the theme preference from localStorage
    const savedTheme = localStorage.getItem('theme');
    // If the theme preference doesn't exist in localStorage, return a default value (e.g., "light")
    return savedTheme || 'light';
}

// Function to apply the theme preference to the page
function applyTheme(theme) {
    const body = document.body;
    if (theme === 'dark') {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
}

// Function to toggle between "dark" and "light" themes
function toggleTheme() {
    const currentTheme = getThemePreference();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    // Save the updated theme preference
    saveThemePreference(newTheme);
    // Apply the new theme to the page
    applyTheme(newTheme);
  }

// Apply the theme preference on page load
window.onload = function () {
    const currentTheme = getThemePreference();
    applyTheme(currentTheme);
  };

// 9. Create a simple to-do list where you can add items. Store the items in localStorage. Write functions to add items and retrieve all items.
// The tasks should automatically reload when you refresh the page.
function addTask() {
    // Get the input value
    const newTaskInput = document.getElementById('newTask');
    const newTask = newTaskInput.value.trim();

    if (newTask !== '') {
      // Retrieve the current tasks from localStorage
      let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      // Add the new task to the array
      tasks.push(newTask);
      // Save the updated tasks back to localStorage
      localStorage.setItem('tasks', JSON.stringify(tasks));
      // Clear the input field
      newTaskInput.value = '';
      // Reload the tasks
      loadTasks();
    }
}

// Function to retrieve all tasks from localStorage and display them
function loadTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear the existing list
    // Retrieve the tasks from localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    // Display each task in the list
    tasks.forEach(task => {
      const listItem = document.createElement('li');
      listItem.textContent = task;
      taskList.appendChild(listItem);
    });
}

// Function to clear all tasks from localStorage and display an empty list
function clearTasks() {
    // Clear the tasks in localStorage
    localStorage.removeItem('tasks');
    // Clear the task list on the page
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
}

// Load tasks when the page loads
window.onload = loadTasks;