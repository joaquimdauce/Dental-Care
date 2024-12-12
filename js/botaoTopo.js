
<script>
  const botaoTopo = document.querySelector(".botao-topo");
  window.addEventListener("scroll", function(event){
    if (window.scrollY >= 100) {
      botaoTopo.classList.add("botao-topo-mostrar");
      botaoTopo.classList.remove("botao-topo-esconder");
    } else {
      botaoTopo.classList.add("botao-topo-esconder");
    }
  });
</script>