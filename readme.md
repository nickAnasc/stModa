# Projeto Tray Commerce
[![N|Solid](https://static3.tcdn.com.br/files/841504/themes/219/img/superteia.png?53e0d03b9b7e1961be46b00aeaec3ce1)](https://superteia.com.br/)

## INSTALAÇÃO DO PROJETO
```sh
  npm install @tray-tecnologia/tray-cli --global ## (Recomendado para ter os comandos salvos no path do sistema)
```
```sh
  npm install @tray-tecnologia/tray-cli
```

## CONFIURANDO O PROJETO
```sh
  tray configure --debug [key] [password] [theme_id]
```

Para fazer o download de todo o projeto, basta executar o comando abaixo:
```sh
  tray download
```

Para assistir e subir as alterações no codigo basta executar o comando abaixo:
```sh
  tray watch
```

**INSTALANDO SASS**
```sh
  npm install -g node-sass ## (Recomendado instalar globalmente)
```

```sh
  npm install node-sass
```

**EXECUTANDO O SASS**
Para salvar e assistir as alterações do SASS, execute o comando abaixo em um terminal separado:
```sh
node-sass --watch --no-source-map css/sass/theme.min.scss css/theme.min.css --style=compressed           ## Este comando assistira as mudanças do SASS e minificará o css fianl
```

Para abrir o projeto, entre na pasta **[themes]**, abra o arquivo **"config.yml"**, copie o valor do **:preview_url:**, algo mais ou menos assim: https://www.nomeDoProjeto.com.br/loja/loja.php?loja=843679&opencode_theme=606e115c3b586
Essa é a URL de preview do projeto.

Para mais informações acessar o Help da Tray usando o comando abaixo, ou basta acessar o readme na pasta package.
```sh
  tray help
```
