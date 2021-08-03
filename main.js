const app = Vue.createApp({
  data() {
    return {
      titulo: "Hola Carina",
      enlace: "https://www.youtube.com/",
      cantidad: 1000,
      estado: false,
      servicios: ["transferencias", "pagos", "servicios", "cheques"],
      desactivar: false,
    };
  },
  methods: {
    agregarSaldo() {
      this.cantidad = this.cantidad + 100;
    },
    disminuirSaldo() {
      if (this.cantidad === 0) {
        alert("saldo en cero!");
        this.desactivar = true;
        return;
      }
      this.cantidad = this.cantidad - 100;
    },
  },
});
