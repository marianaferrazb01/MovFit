# GymPlan — Planos de treino de ginásio

Aplicação multimédia interativa desenvolvida com React, JavaScript, Vite e CSS.

## Funcionalidades
- Consultar planos de treino pré-definidos.
- Pesquisar planos pelo nome.
- Filtrar planos por grupo muscular.
- Consultar exercícios, séries, repetições, duração e nível.
- Adicionar e remover planos dos favoritos.
- Criar planos personalizados através de um formulário.
- Adicionar vários exercícios a cada plano.
- Consultar os planos criados pelo utilizador.
- Atualizar listas sem recarregar a página.

## Tecnologias
- React
- JavaScript
- HTML / JSX
- CSS
- Vite
- Lucide React (ícones)

## Como executar
1. Instalar [Node.js](https://nodejs.org/).
2. Abrir a pasta GymPlan no terminal.
3. Executar `npm install`.
4. Executar `npm run dev`.
5. Abrir o endereço indicado pelo Vite, normalmente `http://localhost:5173`.

## Estrutura do projeto
```text
GymPlan/
├── index.html
├── package.json
├── README.md
└── src/
    ├── App.jsx
    ├── App.css
    ├── main.jsx
    ├── components/
    │   ├── Header.jsx
    │   ├── Footer.jsx
    │   ├── PlanCard.jsx
    │   ├── PlanDetails.jsx
    │   ├── PlanForm.jsx
    │   └── ExerciseCard.jsx
    ├── data/
    │   └── plans.js
    └── pages/
        ├── Home.jsx
        ├── Plans.jsx
        ├── Favorites.jsx
        └── MyPlans.jsx
```

## Conceitos React utilizados
- Componentes reutilizáveis.
- Props para transmitir dados entre componentes.
- Arrays e objetos JavaScript.
- `map()` e `key` para apresentar listas.
- Eventos `onClick`, `onChange` e `onSubmit`.
- `useState` para gerir os dados e atualizar a interface.
- Renderização condicional para apresentar páginas e detalhes.
- Formulário controlado para criar planos e exercícios.

## Limitações desta versão
Os planos iniciais estão guardados em `src/data/plans.js`. Os planos criados e os favoritos ficam guardados no estado React, pelo que são reiniciados quando a página é atualizada. Esta versão não utiliza base de dados nem autenticação.

## Nota
Os planos são exemplos para fins demonstrativos e não substituem aconselhamento de um profissional de exercício físico. A escolha de exercícios, cargas e frequência deve ser adaptada à condição e experiência de cada pessoa.
