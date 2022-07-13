## CRA - Eslint + Prettier

> Configurações iniciais para a integração do Eslint e Prettier.

### Cenário:

- Ao salvar, que o Prettier formate o arquivo, deixando tudo bonitinho;
- Que o Eslint mostre warnings no terminal e no VS Code;
- Dependendo do erro, deve alertar sem quebrar a aplicação;
- Que funcione em qualquer máquina.

**Antes de salvar o arquivo**

<img alt="Exemplo: Antes de salvar o arquivo" src="https://raw.githubusercontent.com/theandersonn/cra-configs/master/eslint-prettier/src/assets/antes.png" />
<br><br>

**Depois de salvar o arquivo**

<img alt="Exemplo: Depois de salvar o arquivo" src="https://raw.githubusercontent.com/theandersonn/cra-configs/master/eslint-prettier/src/assets/depois.png" />
<br><br>

### Requisitos:

Ter instalado no VS Code as extensões:

- ESLint
- Prettier

### Recomendado:

_Deixe no settings do seu VS Code apenas configurações pessoais, como aparência etc...
As configurações lógicas devem ser isoladas na raiz do projeto, em: `.vscode/settings.json`_

### Roteiro deste exemplo:

**Criar um novo projeto com Create React App**

```bash
npx create-react-app <project-name>
```

O Create React App estende no package.json configurações para o eslint, pode remover: (serão adicionadas em .eslintrc.json)

```json
"eslintConfig": {
 "extends": ["react-app", "react-app/jest"]
}
```

**Instalar o Eslint**

```bash
yarn add -D eslint
```

**Setar as configurações do eslint**

```bash
npx eslint --init
```

Para criar o arquivo .eslintrc.json é necessário setar as questões abaixo, que variam de acordo com o projeto.

```txt
- How would you like to use ESLint?
To check syntax, find problems, and enforce code style

- What type of modules does your project use?
JavaScript modules (import/export)

- Which framework does your project use?
React

- Does your project use TypeScript?
No

- Where does your code run?
browser

How would you like to define a style for your project?
- Use a popular style guide

- Which style guide do you want to follow?
Airbnb: https://github.com/airbnb/javascript

- What format do you want your config file to be in?
JSON

- Would you like to install them now with npm?
No (porque estou utilizando yarn)
se estiver utilizando npm, confirme e o eslint instalará as dependência.
se estiver utilizando yarn, pegue as dependências que ele irá exibir e instale-as

eslint-plugin-react@^7.21.5
eslint-config-airbnb@latest
eslint@^5.16.0 || ^6.8.0 || ^7.2.0
eslint-plugin-import@^2.22.1
eslint-plugin-jsx-a11y@^6.4.1
eslint-plugin-react-hooks@^4 || ^3 || ^2.3.0 || ^1.7.0

Pode remover
eslint@^5.16.0 || ^6.8.0 || ^7.2.0
Porque já foi instalada no passo anterior
```

Será criado o arquivo .eslintrc.json na raiz do projeto

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["plugin:react/recommended", "airbnb"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": {}
}
```

### Adicionar o Prettier

```bash
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier babel-eslint
```

### Crie o arquivo .editorconfig na raiz do projeto

```txt
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

### Crie o arquivo .prettierrc na raiz do projeto

```javascript
{
  "singleQuote": true,
  "trailingComma": "none",
  "semi": false
}
```

### Configure o arquivo eslintrc

Configure o arquivo `.eslintrc.json` de acordo com o que segue na raiz desse projeto

### Comnando lint no package

Crie o comando `"lint": "eslint src --max-warnings=0"` em scripts do `package.json`

### Considerações

Ações que fazem perder tempo, esquentar a cabeça e até entrar em desespero.

- Copiar e colar indiscriminadamente as depedências e o arquivo .eslintrc.json de um projeto para outro;
- Ter as configurações de ações lógicas no VS Code da máquina.
