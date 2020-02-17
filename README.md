## :rocket: Sobre o desafio

O primeiro desafio realizado foi escrever uma `API REST`, usando `NodeJS` realiza operações em um banco de dados de funcionários.

### **Requisitos**

Um funcionário deve possuir como atributos: `Id`, `Idade`, `Nome` e `Cargo`. Salvar as informações necessárias em um banco de dados relacional, no caso, utilizei o `PostgresSQL`

### **Um pouco sobre as ferramentas**

- Express
- Sucrase + Nodemon;
- ESLint + Prettier + EditorConfig;
- Sequelize (Utilizando PostgreSQL);
- Yup

### **Inicializar o Projeto**

Faça o git clone do repositório e em seguida faça às configurações abaixo:

### **Imagem do Banco de Dados**

Para executar a aplicação, o primeiro passo é baixar e instalar o DOCKER.

Baixe o Docker para [Windows](https://docs.docker.com/docker-for-windows/install/), [Mac](https://docs.docker.com/docker-for-mac/install/), e faça a instalação como solicitado.

No prompt de comando, adicione a seguinte linha de código `docker run --name stoneworker -e POSTGRES_PASSWORD=stone@worker2020 -p 5432:5432 -d -t postgres`

### **Build do Projeto**

Após executar o `yarn install` nas respectivas pastas `backend` e `frontend`, e ter feito a imagem do `Postgres` no Docker, execute os comandos `yarn start` ou `yarn dev` na pasta backend e `yarn start` na pasta frontend para iniciar a aplicação.

Quando a aplicação estiver online, faça o cadastro dos funcionários onde a princípio você deverá seguir o seguinte modelo para o cadastro
Nome, Idade, Função (neste caso em específico) você deverá cadastrar o respectivo funcionário nas seguintes funções:

-Desenvolvedor Sênior
-Desenvolvedor Pleno
-Desenvolvedor FullStack
-Desenvolvedor Front-End
-Desenvolvedor Back-End

Obs: Essas opções podem ser visualizadas antes do cadastrado, na aba Filtrar Funcionários nas opções pré-cadastradas.

---

Developed by by Wander Hungerbühler :wave: