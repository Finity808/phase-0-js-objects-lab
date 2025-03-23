// Declare and Initialize an Attendee Object
const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
};

// Create a Function to Log Attendee Name
function logAttendeeName(attendee) {
  console.log(attendee.name);
}

// Create a Function to Log Ticket Price
function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice);
}

// Create a Function to Update Ticket Type
function updateTicketType(attendee, newTicketType) {
  attendee.ticketType = newTicketType;
}

// Create a Function to Update Ticket Price
function updateTicketPrice(attendee, newTicketPrice) {
  attendee.ticketPrice = newTicketPrice;
}

// Create a Function to Remove the Event Property
function removeEventProperty(attendee) {
  delete attendee.event;
}

// Create a Function to Add a Checked-in Property
function addCheckedInProperty(attendee) {
  attendee.checkedIn = true;
}

//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};
