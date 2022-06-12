## To Run Locally:

`npm install`
`npm start`

Note: Change the url of aca-py in routes/control.js
This need to be hosted in a server to be used for webhook, change the web-hook parameter when starting aca-py

## Connect to BPA

https://indy-test.bosch-digital.de
Note: Add seed here

## Command to provision aca-py

aca-py provision \
--wallet-type indy \
--endpoint http://18.219.146.82 \
--seed 100F40010300000c00000000010000A0 \
--wallet-name WalletTest4 \
--wallet-key MASTER_KEY_SECRET \
--genesis-url https://indy-test.bosch-digital.de/genesis \

## Command to start aca-py

aca-py start \
--inbound-transport http 0.0.0.0 8000 \
--endpoint http://18.219.146.82 \
--outbound-transport http \
--admin 0.0.0.0 8080 \
--genesis-url https://indy-test.bosch-digital.de/genesis \
--wallet-type indy \
--wallet-name WalletTest4 \
--wallet-key MASTER_KEY_SECRET \
--seed 100F40010300000c00000000010000A0 \
--admin-insecure-mode \
--label MY_SSI_AGENT \
--log-level debug \
--storage-type indy \
--auto-ping-connection \
--webhook-url http://18.219.146.82:3000
--max-message-size 10485760
