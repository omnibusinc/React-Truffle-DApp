import { default as contract } from 'truffle-contract';
// Import our contract artifacts (compiled by truffle) and turn them into usable abstractions.
import examplecoin_artifacts from '../../../build/contracts/ExampleCoin.json';
//Our usable abstraction
const ExampleCoin = contract(examplecoin_artifacts);

export default ExampleCoin;
