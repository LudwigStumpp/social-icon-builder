const app = new Vue({
  el: '#app',
  data: {
    iconClass: 'fa-github',
    iconColor: '#000000',
    backgroundColor: '#f59342',
    fontSize: 150,
    borderRadius: 50,
    padding: 20,
  },
  methods: {
    printToCanvas: function (event) {
      document.body.style.overflowY = 'hidden';

      element = document.querySelector("#socialIcon");
      html2canvas(element, {
        scrollY: -window.scrollY,
        backgroundColor: "rgba(0,0,0,0)",
      }).then(canvas => {
        const image = canvas.toDataURL("image/png");
        let w = window.open('about:blank', 'image from canvas');
        w.location.href = image;
      });

      document.body.style.overflowY = 'auto';
    }
  }
})