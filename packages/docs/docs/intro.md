---
---

# Crypto Payment Service (CPS)
CPS is a crypto to fiat bridge, connecting crypto paying users to fiat receiving merchants.  
Through CPS, users can pay merchants in Crypto, while merchants still receive their payment in Fiat.  

```mermaid
flowchart LR
  User(User)-- Crypto -->CPS(CPS)-- Fiat -->Merchant(Merchant)
```

## Virtual Account Payment
Imagine a scenario where Bob is purchasing a book sold by Alice at an ecommerce site called Tokopedia.  
Bob wishes to pay using crypto. Alice wishes to receive the payment at her bank account in Fiat money.  
Tokopedia supports payment of bank transfer using a virtual account.  

In order for Bob to Pay Alice, Bob can use CPS.  
Bob will give to CPS the following:
- bank account number
- the fiat value of the order
- and Crypto coins to pay for the order

CPS will receive Crypto from Bob.  
CPS will pay Alice in Fiat by bank transfer.  

```mermaid
flowchart LR
  Bob(Bob)-- Crypto -->CPS(CPS)-- Fiat -->VirtualAccount(Virtual Account)-- Fiat -->Alice(Alice)  
```

## Prototype
CPS Prototype will consist of
- Web App
  - User Facing
  - Administrator Dashboard
- Database

The prototype will support only a few e-commerce sites, and will incrementally add support to others in the future.  
The prototype will support only a few Fiat and Crypto currencies, and will incrementally add support to others in the future.  

### Web App

#### User Facing
In this web app, a User will be able to submit a [PaymentOrder](./data-types#paymentorder).  

A user adds the following information to the form:
- destBankAccount
- fiatAmount
- cryptoCurrency

The Web app automatically calculate the cryptoAmount based on current conversion rate 
On Submit, the web app prompts the User to send the required cryptoAmount in the selected cryptoCurrency to CPS's crypto wallet.  
Once the transfer is complete, the PaymentOrder is sent to Backend to be recorded to CPS's Database


#### Administrator Dashboard
The administrator dashboard is used to fulfill PaymentOrders

The dashboard will have a list of unprocessed PaymentOrders.  
For each PaymentOrder, an administrator checks:  
- if CPS received a transfer of crypto currency in the correct amount and correct currency  

If checks passes for a PaymentOrder, the administrator will transfer the fiatAmount to the destBankAccount  

### Supported Fiat Currencies
- IDR

### Supported Crypto Currencies
- USDC
- USDT

### Supported e-commerce sites
- Tokopedia

