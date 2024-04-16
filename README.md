# Projeto Vite + Vue 3 com Vuetify 3, TypeScript e Pinia

Este é um projeto Vue 3 desenvolvido com Vite como bundler, Vuetify 3 para a interface de usuário, TypeScript para tipagem estática e Pinia para gerenciamento de estado.

## O que foi desenvolvido

Neste projeto, foi desenvolvido uma aplicação de Busca CEP usando uma Api Externa. A aplicação exibe uma lista de itens provenientes da API.

Desktop:
![Logo do Meu Projeto](https://github.com/paaulorobson/search-zipcode/blob/main/src/assets/images/image.png)



## API Externa

Para as requisições, utilizamos a API pública ViaCEP (https://viacep.com.br/ws/cep/json/) para buscar dados de endereços. Esta API fornece endpoints para recursos como get de endereços baseado no cep passando como parametro de url.

## Instruções para execução local

### Pré-requisitos

- Node.js (v18 ou superior)
- npm (ou yarn)

### Passos

1. Clone este repositório para sua máquina local.
2. Navegue até o diretório do projeto no terminal.
3. Instale as dependências do projeto executando o comando:

   npm
    ```bash
    npm install
   ```

   yarn
   ```bash
    yarn install
   ```

5. Após a instalação, inicie o servidor de desenvolvimento com o comando:

   npm
   ```bash
    npm run dev
   ```

   yarn
   ```bash
    yarn dev
   ```

   Iniciará um servidor local, geralmente na porta Local: http://localhost:5173.
   

## Instruções para produção

### Para criar uma versão otimizada para produção, siga os seguintes passos:

1. Certifique-se de ter concluído os passos de instalação local.
2. Execute o comando de construção para gerar os arquivos otimizados:

   npm
   ```bash
     npm run build
   ```
   
   yarn
   ```bash
     yarn build
   ```


3. Após a conclusão da construção, os arquivos otimizados estarão no diretório dist.
4. Para testar a versão de produção localmente, você pode usar um servidor HTTP simples. Por exemplo, usando o pacote serve do npm:

   ```bash
     npm install -g serve
   ```

5. Em seguida execute o servidor:

   ```bash
     serve dist
   ```

Isso iniciará um servidor na porta padrão (geralmente 5000). Você pode acessar a aplicação em http://localhost:5000.
