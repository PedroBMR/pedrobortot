-- SQL checks (basic validation) — hands-on practice

-- 1) Lista simples de usuários
SELECT id, name, email
FROM users
LIMIT 20;

-- 2) Usuários sem email (campo obrigatório)
SELECT id, name
FROM users
WHERE email IS NULL OR email = '';

-- 3) Contagem de pedidos por status
SELECT status, COUNT(*) AS total
FROM orders
GROUP BY status;

-- 4) Pedidos sem usuário associado (integridade básica)
SELECT o.id, o.user_id
FROM orders o
LEFT JOIN users u ON u.id = o.user_id
WHERE u.id IS NULL;

-- 5) Produtos sem preço definido
SELECT id, name
FROM products
WHERE price IS NULL;

-- 6) Pedidos com valor total inconsistente (exemplo simples)
SELECT o.id, o.total_amount, SUM(p.price) AS calculated_total
FROM orders o
JOIN order_items oi ON oi.order_id = o.id
JOIN products p ON p.id = oi.product_id
GROUP BY o.id, o.total_amount
HAVING SUM(p.price) <> o.total_amount;
