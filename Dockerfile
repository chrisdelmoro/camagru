# Use uma imagem Node.js oficial
FROM node:18-alpine

# Configurações básicas
WORKDIR /workspace

# Instalar dependências do sistema
RUN apk add --no-cache bash git

# Instalar dependências do projeto
COPY package*.json ./
RUN npm install

# Adiciona o restante do código do projeto
COPY . .

# Expõe a porta da aplicação
EXPOSE 3000

# Comando padrão ao iniciar o container
CMD ["npm", "run", "dev"]
