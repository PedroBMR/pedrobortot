# API Test Cases — Postman (basic)

**Objetivo:** validar comportamento básico de endpoints REST com Postman (hands-on practice).  
**Base URL (placeholder):** `https://api.example.com`  

| ID | Endpoint | Método | Headers | Cenário | Status esperado | Observações |
| --- | --- | --- | --- | --- | --- | --- |
| API-001 | /users | GET | Accept: application/json | Listar usuários existentes | 200 | Resposta deve retornar lista (array) |
| API-002 | /users/9999 | GET | Accept: application/json | Buscar usuário inexistente | 404 | Validar mensagem de erro padrão |
| API-003 | /users | POST | Content-Type: application/json | Criar usuário válido | 201 | Validar campos obrigatórios |
| API-004 | /users | POST | Content-Type: application/json | Criar usuário sem email | 400 | Retorno deve indicar campo obrigatório |
| API-005 | /orders | GET | Accept: application/json | Listar pedidos com paginação | 200 | Validar parâmetros page/limit |
| API-006 | /orders/abc | GET | Accept: application/json | ID inválido (formato) | 400 | Mensagem clara de validação |
