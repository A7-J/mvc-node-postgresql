# 1. Escolhe uma imagem oficial do Node.js super leve baseada em Alpine Linux
FROM node:18-alpine

# 2. Cria e define a pasta onde a aplicação vai morar dentro do contentor
WORKDIR /usr/src/app

# 3. Copia os arquivos de configuração de dependências
COPY package*.json ./

# 4. Instala apenas as dependências necessárias (express e cors)
RUN npm install

# 5. Copia todo o resto do código da pasta 'src' para dentro do contentor
COPY src/ ./src/

# 6. Informa que o contentor vai escutar na porta 3000
EXPOSE 3000

# 7. Comando padrão para ligar o servidor quando o contentor iniciar
CMD ["node", "src/app.js"]
