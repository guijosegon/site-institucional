# Site Institucional — Next.js

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
│   ├── logo.png           # Logo genérica
│   ├── images/
│   │   ├── banner.jpg     # Imagem genérica de banner
│   │   ├── servico1.jpg   # Exemplo de imagem para seção de serviços
│   │   └── servico2.jpg
│   └── favicon.ico
│
├── src/
│   ├── pages/
│   │   ├── _app.js        # Componente App global
│   │   ├── index.js       # Página inicial
│   │   ├── sobre.js       # Página "Sobre"
│   │   ├── servicos.js    # Página "Serviços"
│   │   └── contato.js     # Página "Contato"
│   │
│   ├── components/
│   │   ├── Header.js      # Cabeçalho/navegação
│   │   ├── Footer.js      # Rodapé
│   │   └── Layout.js      # Layout principal
│   │
│   └── styles/
│       ├── globals.css    # Estilos globais
│       └── Home.module.css# Estilos específicos da home
│
├── .gitignore
├── next.config.js
├── package.json
└── README.md              # Este arquivo
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

## Estrutura das Páginas

- **Home (`/`)**  
  Página inicial com banner, breve apresentação da empresa e destaque dos principais serviços.

- **Sobre (`/sobre`)**  
  Informações institucionais, missão, visão e valores.

- **Serviços (`/servicos`)**  
  Lista de serviços oferecidos, com imagens genéricas e descrições.

- **Contato (`/contato`)**  
  Formulário de contato básico (título e campos de nome/e-mail/mensagem) e informações de localização.

---

Qualquer dúvida ou sugestão, abra uma issue ou envie um pull request.
