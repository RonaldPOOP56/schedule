// Load the saved to-do list items from local storage
function loadList() {
  var savedList = localStorage.getItem('todoList');
  
  if (savedList) {
    var list = JSON.parse(savedList);
    list.forEach(function(item) {
      createElement(item);
    });
  }
}

// Save the to-do list items to local storage
function saveList() {
  var listItems = document.querySelectorAll('#list li');
  var list = [];

  listItems.forEach(function(item) {
    var taskText = item.firstChild.textContent;
    list.push(taskText);
  });

  localStorage.setItem('todoList', JSON.stringify(list));
}

// Create a new list item
function createElement(task) {
  if (task === '') {
    console.error('Nothing');
    return;
  }
  
  var listItem = document.createElement('li');
  var taskText = document.createTextNode(task);
  listItem.appendChild(taskText);

  var deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', function() {
    listItem.remove();
    saveList(); // Update local storage after deletion
  });

  listItem.appendChild(deleteButton);

  var list = document.getElementById('list');
  list.appendChild(listItem);
}

function a() {
  var inputValue = document.getElementById('inp').value;
  createElement(inputValue);
  document.getElementById('inp').value = '';
  saveList(); // Update local storage after creation
}

// Call loadList() when the page loads to populate the list from local storage
window.addEventListener('load', function() {
  loadList();
});