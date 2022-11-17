const addCarFormHandler = async (event) => {
    event.preventDefault();
  
    const make = document.querySelector('#add-make').value.trim();
    const model = document.querySelector('#add-model').value.trim();
    const year = document.querySelector('#add-year').value.trim();
    const user_id = document.querySelector('#add-user_id').value.trim();
  
    if (make && model && year && user_id) {
      const response = await fetch('/api/cars/car', {
        method: 'POST',
        body: JSON.stringify({ make, model, year, user_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to add car.');
      }
    }
  };
  
  document
    .querySelector('.car-form')
    .addEventListener('submit', addCarFormHandler);