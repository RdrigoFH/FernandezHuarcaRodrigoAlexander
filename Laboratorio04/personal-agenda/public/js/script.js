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

               document.querySelectorAll('.deleteForm').forEach(form => {
                   form.addEventListener('submit', function (e) {
                       e.preventDefault();
                       const id = this.getAttribute('data-id');
                       fetch(`/api/events/${id}`, {
                           method: 'DELETE'
                       }).then(() => location.reload());
                   });
               });
           });
   }

   const addEventForm = document.getElementById('addEventForm');
   if (addEventForm) {
       addEventForm.addEventListener('submit', function (e) {
           e.preventDefault();
           const formData = new FormData(this);
           const data = Object.fromEntries(formData.entries());
           fetch('/api/events', {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(data)
           }).then(() => location.href = '/');
       });
   }

   const editEventForm = document.getElementById('editEventForm');
   if (editEventForm) {
       const urlParams = new URLSearchParams(window.location.search);
       const id = urlParams.get('id');
       fetch(`/api/events`)
           .then(response => response.json())
           .then(events => {
               const event = events.find(e => e.id == id);
               editEventForm.elements['id'].value = event.id;
               editEventForm.elements['date'].value = event.date;
               editEventForm.elements['time'].value = event.time;
               editEventForm.elements['title'].value = event.title;
               editEventForm.elements['description'].value = event.description;
           });

       editEventForm.addEventListener('submit', function (e) {
           e.preventDefault();
           const formData = new FormData(this);
           const data = Object.fromEntries(formData.entries());
           fetch(`/api/events/${data.id}`, {
               method: 'PUT',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(data)
           }).then(() => location.href = '/');
       });
   }
});
