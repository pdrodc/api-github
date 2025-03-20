async function buscarUsuario() {
    let username = document.getElementById("username").value;
    let url = `https://api.github.com/users/${username}`;

    try {
        let resposta = await fetch(url);
        let dados = await resposta.json();

        if(dados.message) {
            alert("Usuário não encontrado!");
            return;
        }

        document.getElementById("avatar").src = dados.avatar_url;
        document.getElementById("nome").innerText = dados.name || "Sem nome";
        document.getElementById("repos").innerText = dados.public_repos;
        document.getElementById("seguidores").innerText = dados.followers;
        document.getElementById("profile").style.display = "block";
    }catch (error) {
        alert("Erro ao buscar usuário!");
    }
}