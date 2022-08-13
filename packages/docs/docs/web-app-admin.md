# Web App - Admin

## View PaymentOrder List
Admin can see a list of PaymentOrder

### Application Flow
```mermaid
sequenceDiagram
  participant A as Admin
  participant W as Webapp
  participant DB

  W->>DB: Fetch PaymentOrders
  W->>A: Show PaymentOrders
```

## View PaymentOrder Detail
Admin can view PaymentOrder detail

### Application Flow
```mermaid
sequenceDiagram
  participant A as Admin
  participant W as Webapp
  participant DB

  A->>W: Select PaymentOrder
  W->>DB: Fetch PaymentOrder by id
  W->>A: Show PaymentOrder
```

## Update PaymentOrder status
Admin can update PaymentOrder status.  
After an Admin has fulfilled the Fiat payment, he can update the PaymentOrder status to PAID

### Application Flow
```mermaid
sequenceDiagram
  participant A as Admin
  participant W as Webapp
  participant DB
  
  A->>W: Set PaymentOrder status to PAID
  W->>DB: Update PaymentOrder status to PAID
```
