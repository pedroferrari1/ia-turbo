# Premium AI Dashboard

Interface moderna para interações com IA e gerenciamento de assinaturas, oferecendo uma experiência profissional com autenticação segura e navegação protegida.

## Sobre o Projeto

O Premium AI Dashboard é uma aplicação web que permite aos usuários interagir com diferentes modelos de IA através de uma interface intuitiva, com sistema de assinaturas integrado e autenticação segura.

### Principais Funcionalidades

- Autenticação segura com JWT
- Chat com diferentes modelos de IA
- Sistema de assinaturas via Stripe
- Interface responsiva e moderna
- Proteção de rotas
- Formatação automática de respostas

## Tecnologias Utilizadas

- React 18.3.1
- TypeScript 5.5.3
- Vite 5.4.2
- TailwindCSS 3.4.1
- React Router DOM
- Axios
- Lucide React 0.344.0

## Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Layout.tsx      # Layout principal com sidebar
│   ├── ProtectedRoute.tsx  # Componente de proteção de rotas
│   ├── ResponseDisplay.tsx # Exibição formatada das respostas
│   └── Sidebar.tsx     # Navegação lateral
├── contexts/
│   └── AuthContext.tsx # Contexto de autenticação
├── pages/
│   ├── DashboardPage.tsx    # Página principal do chat
│   ├── LoginPage.tsx        # Página de login
│   └── SubscriptionPage.tsx # Página de assinatura
├── services/
│   ├── aiService.ts         # Serviço de integração com IA
│   ├── apiClient.ts         # Cliente Axios configurado
│   ├── authService.ts       # Serviço de autenticação
│   └── subscriptionService.ts # Serviço de assinatura
└── main.tsx            # Ponto de entrada da aplicação
```

## Configuração do Ambiente

### Pré-requisitos

- Node.js 18.x ou superior
- npm 9.x ou superior

### Instalação

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
cd premium-ai-dashboard
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz do projeto:
```env
VITE_API_URL=https://premiumdash.site/api
```

### Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Gera build de produção
- `npm run preview`: Visualiza a build localmente
- `npm run lint`: Executa verificação de código

## Desenvolvimento

### Padrões de Código

- Componentes funcionais com TypeScript
- Hooks do React para gerenciamento de estado
- Context API para estado global
- Tailwind CSS para estilização
- Axios para requisições HTTP
- Lucide React para ícones

### Fluxo de Autenticação

1. Usuário acessa a página de login
2. Após autenticação bem-sucedida:
   - Token JWT é armazenado no localStorage
   - Usuário é redirecionado para o dashboard
   - Todas as requisições subsequentes incluem o token

### Integração com IA

O sistema suporta múltiplos modelos de IA:
- GPT-3.5 Turbo
- Hermes
- Dolphin Mixtral

### Sistema de Assinaturas

Integração com Stripe para processamento de pagamentos:
1. Usuário seleciona plano
2. É redirecionado para checkout do Stripe
3. Após confirmação, retorna à plataforma com acesso premium

## Deploy

### Build de Produção

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`

### Considerações de Deploy

- Configurar variáveis de ambiente no servidor
- Garantir redirecionamento correto para SPA
- Configurar CORS adequadamente no backend
- Verificar configurações de cache

## Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## Suporte

Para suporte, envie um email para support@premiumdash.site ou abra uma issue no repositório.