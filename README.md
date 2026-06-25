# 🎓 Painel do Aluno - Sistema Web CRUD (MVC)

Um sistema completo de gestão de estudantes desenvolvido com a arquitetura **MVC** (Model-View-Controller). A aplicação interage com um banco de dados relacional **PostgreSQL** isolado e gerido através de um contêiner **Docker**, utilizando o **Sequelize** como ORM para mapeamento das tabelas.

## 🚀 Tecnologias Utilizadas
* **Backend:** Node.js & Express
* **Banco de Dados:** PostgreSQL (via Docker)
* **ORM:** Sequelize
* **View Engine:** EJS (HTML Dinâmico)
* **Estilização:** CSS3 incorporado

## 🏗️ Arquitetura do Projeto
O projeto segue estritamente o padrão **MVC**, garantindo a separação de responsabilidades:
* `src/models/` -> Definição da estrutura de dados e comunicação direta com o banco.
* `src/controllers/` -> Lógica de negócio (regras para listar, criar e apagar).
* `src/views/` -> Interface de utilizador renderizada dinamicamente com EJS.
* `src/routes/` -> Definição dos endpoints da aplicação.

---

## 💻 Como Executar o Projeto Localmente

### Pré-requisitos
Antes de começar, precisas de ter instalado na tua máquina:
* [Node.js](https://nodejs.org/)
* [Docker & Docker Compose](https://www.docker.com/)

### 1. Clonar o Repositório
```bash
git clone [https://github.com/A7-J/mvc-node-postgresql.git](https://github.com/A7-J/mvc-node-postgresql.git)
cd mvc-project
