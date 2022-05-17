## 3-Body
An esoteric web app exploring novel NFT use.
Stack: A React/Redux webpacked SPA that utilizes three.js for graphics, python's FastAPI for a backend (see my other repo) and ethers.js for web3 integration (on Arbitrum network).
## Post-mortum
I had two main goals with this project
### 1) Learn full stack web3 development
This was quite successful as I went from minimal js/node knowledge to a fully fledged React SPA with 3D graphics. While I would have loved a more node native backend the differential equation solver was written and worked much better in python. Thus creating an entirely separate python based backend was the way to go.
### 2) Create a novel use for NFTs
This was less successful as while I love the idea of the token being a primitive (in this case a hash) then deriving value from it; this approach is very simple and does not leverage the unique abilities of smart contracts. If I were to revisit this project and create another era this would be a focus of improvement. I'd first look at adding mechanisms to increase the simulation time then extracting stable time from the tokens. It would be an interesting challenge to verify this "stable time" on-chain.