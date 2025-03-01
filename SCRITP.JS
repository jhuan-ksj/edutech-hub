// Função para alternar a visibilidade do menu
function toggleMenu() {
    const sidebar = document.getElementById('menuSidebar');
    if (sidebar.style.width === '250px') {
        sidebar.style.width = '0';
    } else {
        sidebar.style.width = '250px';
    }
}

// Função para filtrar os itens do menu
function filterMenu() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toUpperCase();
    const sidebar = document.getElementById('menuSidebar');
    const links = sidebar.getElementsByTagName('a');

    for (let i = 0; i < links.length; i++) {
        let text = links[i].textContent || links[i].innerText;
        if (text.toUpperCase().indexOf(filter) > -1) {
            links[i].style.display = "";
        } else {
            links[i].style.display = "none";
        }
    }
}
