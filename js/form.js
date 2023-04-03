class FormularioComentarios {
    constructor(formulario) {
      this.formulario = formulario;
      this.resultado = document.getElementById('resultado');
      this.campos = {};
    }
  
    inicializar() {
      this.formulario.addEventListener('submit', event => {
        event.preventDefault();
        this.recopilarDatos();
        this.mostrarMensaje();
        this.limpiarCampos();
      });
    }
  
    recopilarDatos() {
      this.campos.nombre = document.getElementById('nombre').value;
      this.campos.raza = document.getElementById('raza').value;
      this.campos.edad = document.getElementById('edad').value;
    }
  
    mostrarMensaje() {
      const mensaje = `Felicidades. Hay un nuevo miembro en tu familia: ${this.campos.nombre} (${this.campos.raza}), ${this.campos.edad} años.`;
      alert(mensaje);
    }
  
    limpiarCampos() {
      document.getElementById('nombre').value = '';
      document.getElementById('raza').value = '';
      document.getElementById('edad').value = '';
    }
  }
  
  const formulario = new FormularioComentarios(document.getElementById('comentarios-form'));
  formulario.inicializar();
  