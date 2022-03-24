# Projeto Tray Commerce
## _Rodando projetos via Docker_
[![N|Solid](https://static3.tcdn.com.br/files/841504/themes/219/img/superteia.png?53e0d03b9b7e1961be46b00aeaec3ce1)](https://superteia.com.br/)

## Docker
- [MAC e Windows] - MAC e Windows possuem um instalador.
- [Engine Docker Linux] - Link para escolher qual engine do docker instalar para cada distribuição do Linux. Ao escolher, abrirá uma documentação daquela distribuição.

[MAC e Windows]: https://www.docker.com/products/docker-desktop
[Engine Docker Linux]: https://hub.docker.com/search?q=&type=edition&offering=community&operating_system=linux

## Estrutura do projeto :
Crie uma pasta com o nome do projeto, e **extraia** o zip dentro dela:
  - **[pasta-do-projeto]**
    - **[themes]** // pasta onde ficara os arquivos do tema;
    - **docker-compose.yml** // arquivo de configurações do container;
    - **Dockerfile** // Dependências ruby do container. 

## Comandos
Dentro da pasta **[docker-compose]**, abra o terminal e digite os seguintes comandos:

```sh
docker-compose up -d            ## Instalando as dependências, o Opencode da tray e subindo o Container no Docker
```

```sh
docker exec -it opencode /bin/bash            ## Habilitará a execução dos comandos do Opencode
```

Para rodar no Git Bash:

```sh
docker exec -it opencode ../bin/bash            ## Habilitará a execução dos comandos do Opencode
```

**Para Testar os comandos do Opencode:**
```sh
opencode help            ## Exibirá todos os comandos do Opencode.
```

```sh
opencode configure [Key] [password] [id-theme]            ## Configurando acesso ao tema.
```
Para acessar a **Key** e o **Password** basta acessar no painel: **"Minha loja / Design da Loja"** e clicar na seta ao lado do botão "**Explorar loja de temas**", "**Lista de desenvolvedores**". Ao adicionar um desenvolvedor, será gerado a **Key** e o **Password**, credenciais necessárias para baixar o projeto localmente.

Após rodar o comando **opencode configure**, um arquivo chamado **config.yml** será gerado na pasta **[themes]**, através desse arquivo teremos acesso ao projeto. 

**Agora é só baixar o projeto:**
Esse processo pode demorar um pouco. Todo o projeto será baixado na pasta **[themes]**.
```sh
opencode download
```
**Após baixar o projeto:**
```sh
opencode watch            ## Este comando nos permitirá assistir todas as mudanças ao dar ctrl + S no código.
```

**Após o comando opencode watch, abra um novo terminal, e execute o sass:**
```sh
sass --watch --no-source-map css/sass/theme.min.scss css/theme.min.css --style=compressed           ## Este comando assistira as mudanças do SASS e minificará o css fianl
```

**Subir um arquivo**
```sh
opencode upload [pasta]/[nome-arquivo.extensão]            ## Este comando nos permitirá subir um arquivo.
```
**Exemplos de upload de arquivos**
```sh
opencode upload img/logo.png

opencode upload css/style.css

opencode upload js/main.min.js
```

**Subir um Projeto**
```sh
opencode upload            ## Este comando, sem especificar um arquivo, irá subir o projeto inteiro.
```


Para abrir o projeto, entre na pasta **[themes]**, abra o arquivo **"config.yml"**, copie o valor do **:preview_url:**, algo mais ou menos assim: https://www.nomeDoProjeto.com.br/loja/loja.php?loja=843679&opencode_theme=606e115c3b586
Essa é a URL de preview do projeto.