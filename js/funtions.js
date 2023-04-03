function dataSelect() {
	const select = document.querySelector('#pet');
	fetch('https://dog.ceo/api/breeds/list/all')
	  .then(response => response.json())
	  .then(data => {
		const breeds = data.message;
		for (const breed in breeds) {
		  const option = document.createElement('option');
		  option.value = breed;
		  option.textContent = breed;
		  select.appendChild(option);
		}
	  })
	  .catch(error => console.error(error));
  }
  
  function newTable() {
	const selectPet = document.getElementById('pet');
	const divTabla = document.getElementById('divTabla');
	const selectButton = document.getElementById('generar-tabla');
  
	selectButton.addEventListener('click', function(event) {
	  event.preventDefault();
	  const selectedValue = selectPet.value;
  
	  if (divTabla.querySelector('table')) {
		divTabla.removeChild(divTabla.querySelector('table'));
	  }
  
	  const tabla = document.createElement('table');
	  const thead = document.createElement('thead');
	  const thNombre = document.createElement('th');
	  const thImagen = document.createElement('th');
  
	  thNombre.textContent = ' ';
	  thImagen.textContent = ' ';
  
	  thead.appendChild(thNombre);
	  thead.appendChild(thImagen);
	  tabla.appendChild(thead);
  
	  const tbody = document.createElement('tbody');
  
	  for (let i = 0; i < 10; i++) {
		fetch(`https://dog.ceo/api/breed/${selectedValue}/images/random`)
		  .then(response => response.json())
		  .then(data => {
			const tr = document.createElement('tr');
			const tdNombre = document.createElement('td');
			const tdImagen = document.createElement('td');
			const imagen = document.createElement('img');
  	
			imagen.src = data.message;
			tdImagen.appendChild(imagen);
  
			tr.appendChild(tdNombre);
			tr.appendChild(tdImagen);
			tbody.appendChild(tr);
		  })
		  .catch(error => {
			console.log(error);
		  });
	  }
  
	  tabla.appendChild(tbody);
	  divTabla.appendChild(tabla);
	});
  
	selectPet.addEventListener('change', function() {
	  selectButton.disabled = false;
	});
  }
  
  dataSelect();
  newTable();
  