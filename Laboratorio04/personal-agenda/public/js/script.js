document.addEventListener('DOMContentLoaded', () => {
   const eventsList = document.getElementById('eventsList');

   if (eventsList) {
       fetch('/api/events')
           .then(response => response.json())
           .then(events => {
               events.forEach(event => {
                   const li = document.createElement('li');
                   li.innerHTML = `
                       <strong>${event.date} ${event.time} - ${event.title}</strong><br>
                       ${event.description}
                       <form action="#" method="POST" class="deleteForm" data-id="${event.id}">
                           <button type="submit">Delete</button>
                       </form>
                       <a href="edit.html?id=${event.id}">Edit</a>
                   `;
                   eventsList.appendChild(li);
               });





   }
});
