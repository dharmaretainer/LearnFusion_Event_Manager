// Select DOM elements
const createEventBtn = document.getElementById('create-event-btn');
const eventList = document.getElementById('event-list');

// Event listener for Create Event button
createEventBtn.addEventListener('click', createEvent);

// Function to create and display the event
function createEvent() {
    // Get event data from input fields
    const title = document.getElementById('event-title').value;
    const date = document.getElementById('event-date').value;
    const time = document.getElementById('event-time').value;
    const description = document.getElementById('event-description').value;

    // Validate inputs
    if (!title || !date || !time || !description) {
        alert('Please fill out all fields.');
        return;
    }

    // Create a new list item for the event
    const eventItem = document.createElement('li');
    eventItem.innerHTML = `
        <h3>${title}</h3>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p>${description}</p>
    `;

    // Append the event to the event list
    eventList.appendChild(eventItem);

    // Clear the form fields after event creation
    document.getElementById('event-title').value = '';
    document.getElementById('event-date').value = '';
    document.getElementById('event-time').value = '';
    document.getElementById('event-description').value = '';
}
