# Coffee Delivery

Aplicação de uma cafeteria fictícia para escolher cafés, montar um carrinho e simular um pedido. Projeto de estudo da trilha Ignite da Rocketseat.

## O que a aplicação mostra

- Catálogo de cafés com seleção de quantidade.
- Carrinho com resumo dos itens e valor de entrega.
- Checkout com endereço, forma de pagamento e validação do formulário.
- Tela de confirmação com os dados do pedido.

**Escopo:** é uma demonstração frontend. O pedido fica no estado da aplicação; não há API, persistência ou cobrança real.

## Tecnologias

React, TypeScript, Vite, React Router, Styled Components, React Hook Form e Zod.

## Executar localmente

Requer Node.js 24 e npm.

```bash
npm ci
npm run dev
```

Abra o endereço exibido pelo Vite no terminal. Para verificar o projeto:

```bash
npm run lint
npm run build
```

## Estrutura

- `src/pages/Home`: catálogo.
- `src/pages/Checkout`: formulário e resumo do pedido.
- `src/pages/Success`: confirmação.
- `src/context`: estado do carrinho e do pedido.

## Autor

[Bruno S Velho](https://github.com/vbruno)
