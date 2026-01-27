<script>
const searchInput = document.getElementById("search-input");
const filtroPosto = document.getElementById("filtro-posto");
const themeBtn = document.getElementById("toggle-theme");

function aplicarFiltros() {
  const termo = searchInput.value.toLowerCase();
  const posto = filtroPosto.value;

  const filtrados = policiais.filter(p => {
    const nomeOk = p.nome.toLowerCase().includes(termo) || p.matricula.includes(termo);
    const postoOk = posto === "" || p.posto.includes(posto);
    return nomeOk && postoOk;
  });

  render(filtrados);
}

searchInput.addEventListener("input", aplicarFiltros);
filtroPosto.addEventListener("change", aplicarFiltros);

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
</script>
