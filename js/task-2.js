'use strict';

function formatMessage(message, maxLength) {
   if (message.lenght <= maxLength) {
    return message;
   } else {
    return message.slice(0, maxLength)+`...`;
   }
}
console.log(formatMessage("Curabitur ligula sapien", 16));