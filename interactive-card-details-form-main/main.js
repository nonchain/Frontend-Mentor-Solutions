const inputs = document.querySelectorAll('.input');
const buttonSubmit = document.querySelector('button#submit');

buttonSubmit.addEventListener('click', () => {
   inputs.forEach(input => {
      const value = input.value.trim();
      if (value !== '') {
         const viewForm = document.querySelector('.view-form');
         const viewDone = document.querySelector('.view-done');
         

         viewForm.classList.toggle('grid');
            viewForm.classList.toggle('hidden');
            viewDone.classList.toggle('flex');
            viewDone.classList.toggle('hidden');
            console.log('first')
      }
   })
})
