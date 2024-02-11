/*
    ATTENTION: all exercises are to be solved with:
    map
    filter
    reduce
    sort
    unless stated you can use a for cycle for some part
*/


/*
1. User Account Management:
Given an array of user objects, each containing a username and age property, 
create a new array containing only the usernames of users who are above 18 years old. 
Then sort the usernames alphabetically.
Input:
    const users = [
        { username: "charlie", age: 17 },
        { username: "bob", age: 30 },
        { username: "diana", age: 20 }
        { username: "alice", age: 25 },
    ];
Expected output:
    ["alice", "bob", "diana"]
*/

const users = [
    { username: "charlie", age: 17 },
    { username: "bob", age: 30 },
    { username: "diana", age: 20 },
    { username: "alice", age: 25 },
  ];
  
  function accountManagement(arrayOfUsers) {
    const adultUsers = arrayOfUsers.filter((user) => {
      console.log(user);
      return user.age >= 18;
    });
  
    const adultUsernames = adultUsers.map((user) => user.username);
  
    return adultUsernames;
  }
  
  const filteredUsernames = accountManagement(users);
  
  console.log(filteredUsernames);



/*
2. Message Filtering:
   Given an array of message objects, each containing a sender, recipient, 
   and message property, filter out all messages sent by a particular user (sender). 
   Then, concatenate all the remaining messages into a single string.
Input:
    const messages = [
        { sender: "alice", recipient: "bob", message: "Hello!" },
        { sender: "bob", recipient: "alice", message: "Hi there!" },
        { sender: "bob", recipient: "alice", message: "How are you?" },
        { sender: "alice", recipient: "bob", message: "Yo, you there?" },
    ];

Expected output: 
    getMessagesFromPerson('bob') => "Hi there! How are you?"
*/

const messages = [
    { sender: "alice", recipient: "bob", message: "Hello!" },
    { sender: "bob", recipient: "alice", message: "Hi there!" },
    { sender: "bob", recipient: "alice", message: "How are you?" },
    { sender: "alice", recipient: "bob", message: "Yo, you there?" },
];

function getMessagesFromPerson(sender) {
    return messages
        .filter(message => message.sender !== sender)
        .map(message => message.message)
        .join(' ');
}

console.log(getMessagesFromPerson('bob'));

/*
3. Product Pricing:
    Given an array of product objects, each containing a name, price, and quantity property, 
    filter out products that are out of stock (quantity is 0) . 
    Then, calculate the total cost of all products (price * quantity)
    and sort the remaining products by total cost in ascending order.
Input: 
    const products = [
        { name: "apple", price: 1.5, quantity: 10 },
        { name: "banana", price: 0.75, quantity: 5 },
        { name: "orange", price: 2, quantity: 0 }
    ];
Expected output: 
    [
        { name: "apple", price: 15, quantity: 10, totalCost: 150 },
        { name: "banana", price: 3.75, quantity: 5, totalCost: 18.75 }
    ]
*/


const products = [
    { name: "apple", price: 1.5, quantity: 10 },
    { name: "banana", price: 0.75, quantity: 5 },
    { name: "orange", price: 2, quantity: 0 }
];

function getAvailableProducts(products) {
    return products
        .filter(product => product.quantity > 0)
        .map(product => ({
            ...product,
            totalCost: product.price * product.quantity
        }))
        .sort((a, b) => a.totalCost - b.totalCost);
}

console.log(getAvailableProducts(products));



/*
4. Employee Salary Calculation:
   Given an array of employee objects, each containing a name, salary, and department 
   property, calculate the total salary of all employees in a specific department. 
   Then, filter out departments whose salary is below a certain threshold, 50000, 
   and sort the remaining departments by total salary in descending order.
Input:
    const employees = [
        { name: "Alice", salary: 50000, department: "HR" },
        { name: "Bob", salary: 60000, department: "IT" },
        { name: "Charlie", salary: 45000, department: "HR" },
        { name: "Dean", salary: 80000, department: "IT" },
        { name: "Earl", salary: 70000, department: "IT" },
        { name: "Fred", salary: 40000, department: "R&D" },
    ];

Expected output:
    [ [ 'IT', 210000 ], [ 'HR', 95000 ] ]
*/

const employees = [
    { name: "Alice", salary: 50000, department: "HR" },
    { name: "Bob", salary: 60000, department: "IT" },
    { name: "Charlie", salary: 45000, department: "HR" },
    { name: "Dean", salary: 80000, department: "IT" },
    { name: "Earl", salary: 70000, department: "IT" },
    { name: "Fred", salary: 40000, department: "R&D" },
];

function calculateTotalSalaryByDepartment(employees) {
  
    const departmentSalaries = employees.reduce((acc, employee) => {
        acc[employee.department] = (acc[employee.department] || 0) + employee.salary;
        return acc;
    }, {});

    
    let departmentSalaryArray = Object.entries(departmentSalaries);

    departmentSalaryArray = departmentSalaryArray
        .filter(([department, totalSalary]) => totalSalary >= 50000)
        .sort((a, b) => b[1] - a[1]);

    return departmentSalaryArray;
}

console.log(calculateTotalSalaryByDepartment(employees));


/*
5. Event Attendance Tracking:
    Given an array of event attendance objects, each containing an event, attendees, 
    and date property, filter out all events that had less than 60 attendees (filter out small events). 
    Then, calculate the total number of attendees per event. (You can do this part with a for cycle)
Input:
    const events = [
        { event: "Conference", attendees: 100, date: "2024-02-01" },
        { event: "Workshop", attendees: 50, date: "2024-02-05" },,
        { event: "Seminar", attendees: 80, date: "2024-01-20" },
        { event: "Workshop", attendees: 70, date: "2024-02-01" },
        { event: "Seminar", attendees: 120, date: "2024-01-15" }
    ];

Expected output:
    { Conference: 100, Seminar: 200, Workshop: 70 }

*/

const events = [
    { event: "Conference", attendees: 100, date: "2024-02-01" },
    { event: "Workshop", attendees: 50, date: "2024-02-05" },
    { event: "Seminar", attendees: 80, date: "2024-01-20" },
    { event: "Workshop", attendees: 70, date: "2024-02-01" },
    { event: "Seminar", attendees: 120, date: "2024-01-15" }
];

function calculateTotalAttendeesPerEvent(events) {
    const largeEvents = events.filter(event => event.attendees >= 60);

    const totalAttendeesPerEvent = largeEvents.reduce((acc, event) => {
        acc[event.event] = (acc[event.event] || 0) + event.attendees;
        return acc;
    }, {});

    return totalAttendeesPerEvent;
}

console.log(calculateTotalAttendeesPerEvent(events));

/*
6. Task Management:
    Given an array of task objects, each containing 
    a title, priority, and completed property, filter out all completed tasks. 
    Then, sort them by priority (low to high),
    and map the remaining tasks to an array of strings containing only the titles.
Input:
    const tasks = [
        { title: "Write report", priority: "low", completed: false },
        { title: "Prepare presentation", priority: "medium", completed: true },
        { title: "Schedule meeting", priority: "high", completed: false }
    ];

Expected output:
    ["Write report", "Schedule meeting"]
*/

const tasks = [
    { title: "Write report", priority: "low", completed: false },
    { title: "Prepare presentation", priority: "medium", completed: true },
    { title: "Schedule meeting", priority: "high", completed: false }
];

function getIncompleteTasks(tasks) {
    const incompleteTasks = tasks.filter(task => !task.completed);

    incompleteTasks.sort((a, b) => {
        const priorityOrder = { low: 0, medium: 1, high: 2 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
    });

    const taskTitles = incompleteTasks.map(task => task.title);

    return taskTitles;
}

console.log(getIncompleteTasks(tasks));

console.log 