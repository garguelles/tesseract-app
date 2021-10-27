import { JsonRpcProvider, JsonRpcSigner } from "@ethersproject/providers";
import { EChainId } from "../types/web3.types";
import { REGISTRY_ADDRESS_POLYGON_MAINNET } from "../constants/config.constants";
import { AllKeysRequired, DynamicObject } from "../types/util.types";
import ContractFactory from "./contract.factory";
import { EContractType } from "../types/contract.types";

class RegistryContractFactory {
  private readonly _provider: JsonRpcSigner | JsonRpcProvider;
  private _factory = new ContractFactory(EContractType.REGISTRY);

  private _addressByChain: DynamicObject<string, EChainId, AllKeysRequired> = {
    [EChainId.POLYGON_MAINNET]: REGISTRY_ADDRESS_POLYGON_MAINNET
  };

  constructor(provider: JsonRpcSigner | JsonRpcProvider) {
    this._provider = provider;
  }

  public async getInstance(chainId: EChainId) {
    const registryAddress = this._addressByChain[chainId];

    return this._factory.createContract(registryAddress, this._provider);
  }
}

export default RegistryContractFactory;
