# Site Institucional

Este é um site institucional básico construído com Next.js, contendo logo e imagens genéricas. Está pronto para ser versionado no Git e executado localmente.

## Tecnologias utilizadas

- [Next.js](https://nextjs.org/) (React)
- React 18+
- Node.js 16+

## Estrutura do projeto

```
nextjs-site/
│
├── public/
│   ├── images/        # Todas imagens
│
├── pages/
│   ├── _app.js        # Componente App global
│   ├── index.js       # Página inicial
│   ├── sobre.js       # Página "Sobre"
│   ├── servicos.js    # Página "Serviços"
│   └── contato.js     # Página "Contato"
│   
├── styles/
│   └── globals.css    # Estilos globais
│
├── .gitignore
├── package.json
└── README.md          # Este arquivo
```

## Como executar localmente

1. **Clone este repositório**  
   ```bash
   git clone <URL_DO_SEU_REPOSITORIO>.git
   cd nextjs-site
   ```

2. **Instale as dependências**  
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**  
   ```bash
   npm run dev
   ```

4. **Abra no navegador**  
   Acesse [http://localhost:3000](http://localhost:3000) para visualizar o site.

## Scripts disponíveis

- `npm run dev`  
  Inicia o servidor de desenvolvimento em modo Hot Reload.

- `npm run build`  
  Gera a versão de produção otimizada em `.next/`.

- `npm run start`  
  Executa o build de produção (depois de `npm run build`).

---

Qualquer dúvida ou sugestão, abra uma issue ou envie um pull request.
