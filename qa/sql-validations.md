# SQL Validations — Basic checks

Este arquivo explica o objetivo de cada query do `sql-checks.sql`, de forma clara e rastreável.

## 1) Lista simples de usuários
**Query:** seleciona `id`, `name`, `email` de `users`.  
**Validação:** garante que dados básicos estão acessíveis para inspeção inicial.  
**Importância para QA:** permite identificar registros inconsistentes e iniciar validações manuais.

## 2) Usuários sem email (campo obrigatório)
**Query:** filtra usuários com `email` nulo ou vazio.  
**Regra de negócio simples:** email é obrigatório para cadastro.  
**Importância para QA:** identifica dados inválidos que podem causar falhas em login e comunicação.

## 3) Contagem de pedidos por status
**Query:** agrupa pedidos por `status` e conta o total.  
**Regra de negócio simples:** cada pedido deve ter um status válido.  
**Importância para QA:** ajuda a validar distribuição e detectar status inesperados.

## 4) Pedidos sem usuário associado
**Query:** `LEFT JOIN` entre `orders` e `users` para encontrar `user_id` sem vínculo.  
**Regra de negócio simples:** todo pedido deve pertencer a um usuário.  
**Importância para QA:** detecta problemas de integridade referencial.

## 5) Produtos sem preço definido
**Query:** filtra produtos com `price` nulo.  
**Regra de negócio simples:** todo produto precisa de preço.  
**Importância para QA:** evita falhas em checkout e relatórios financeiros.

## 6) Pedidos com valor total inconsistente
**Query:** compara `total_amount` com a soma dos itens do pedido.  
**Regra de negócio simples:** total do pedido deve refletir soma dos itens.  
**Importância para QA:** valida cálculo e evita divergências de cobrança.
