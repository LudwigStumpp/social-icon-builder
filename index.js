const app = new Vue({
  el: '#app',
  data: {
    iconClass: 'github',
    iconColor: '#000000',
    backgroundColor: '#f59342',
    fontSize: 150,
    borderRadius: 50,
    padding: 20,
  },
  methods: {
    printToCanvas: function (event) {
      html2canvas(document.querySelector("#socialIcon")).then(canvas => {
        const image = canvas.toDataURL("image/png");
        let w = window.open('about:blank', 'image from canvas');
        w.location.href = image;
      });
    }
  }
})