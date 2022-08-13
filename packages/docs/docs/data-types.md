# Data Types

## PaymentOrder

| Property            |  Type               | Description                                                               |
| ---------------     |  -------            | ------------------------------------------------------------------------- |
| destBankAccount     | string              | Destination Bank Account                                                  |
| fiatAmount          | number              | Amount to Pay in Fiat                                                     |
| cryptoAmount        | string              | Amount to Pay Crypto                                                      |
| cryptoCurrency      | string              | Currency of cryptoAmount                                                  |
| txHash              | string              | Transaction Hash Receipt of successful crypto transfer in the blockchain  |
| cryptoPaymentStatus | CryptoPaymentStatus | CryptoPaymentStatus enum                                                  |
| fiatPaymentStatus   | FiatPaymentStatus   | FiatPaymentStatus enum                                                    |


## CryptoPaymentStatus

| values          |
| --------------- |
| UNPAID          |
| PAID            |
| INVALID_TX_HASH |


## FiatPaymentStatus

| values          |
| --------------- |
| UNPAID          |
| PAID            |
| FAILED          |
