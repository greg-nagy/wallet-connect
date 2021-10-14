import { InjectedConnector } from "./injected-connector.esm";
const __DEV__ = true;

console.log(process.env.NODE_ENV);

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});
