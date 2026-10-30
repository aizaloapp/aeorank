FROM node:20-alpine
WORKDIR /app
COPY package.json glama.json smithery.yaml rules-index.json ./
COPY bin ./bin
RUN chmod +x ./bin/aeorank-mcp.js
ENTRYPOINT ["node", "bin/aeorank-mcp.js"]
