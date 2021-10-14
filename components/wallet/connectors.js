import { InjectedConnector } from "@web3-react/injected-connector";
const __DEV__ = true;

console.log(process.env.NODE_ENV);
debugger;

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});
