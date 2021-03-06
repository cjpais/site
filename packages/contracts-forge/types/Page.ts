/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export declare namespace Relational {
  export type RelationshipStruct = { addr: string; id: BigNumberish };

  export type RelationshipStructOutput = [string, BigNumber] & {
    addr: string;
    id: BigNumber;
  };

  export type PostStruct = {
    id: BigNumberish;
    author: string;
    createdTimestamp: BigNumberish;
    modifiedTimestamp: BigNumberish;
    data: string;
    relationships: Relational.RelationshipStruct[];
  };

  export type PostStructOutput = [
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    string,
    Relational.RelationshipStructOutput[]
  ] & {
    id: BigNumber;
    author: string;
    createdTimestamp: BigNumber;
    modifiedTimestamp: BigNumber;
    data: string;
    relationships: Relational.RelationshipStructOutput[];
  };
}

export interface PageInterface extends utils.Interface {
  functions: {
    "addRelationship(uint256,(address,uint256))": FunctionFragment;
    "create(string,(address,uint256)[])": FunctionFragment;
    "edit(uint256,string)": FunctionFragment;
    "pageID()": FunctionFragment;
    "pages(uint256)": FunctionFragment;
    "remove(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addRelationship"
      | "create"
      | "edit"
      | "pageID"
      | "pages"
      | "remove"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addRelationship",
    values: [BigNumberish, Relational.RelationshipStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "create",
    values: [string, Relational.RelationshipStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "edit",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "pageID", values?: undefined): string;
  encodeFunctionData(functionFragment: "pages", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "remove",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addRelationship",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "create", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "edit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pageID", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pages", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;

  events: {
    "PageCreated(uint256,tuple)": EventFragment;
    "PageEdited(uint256,string)": EventFragment;
    "PageRemoved(uint256)": EventFragment;
    "RelationshipAdded(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PageCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PageEdited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PageRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RelationshipAdded"): EventFragment;
}

export interface PageCreatedEventObject {
  id: BigNumber;
  data: Relational.PostStructOutput;
}
export type PageCreatedEvent = TypedEvent<
  [BigNumber, Relational.PostStructOutput],
  PageCreatedEventObject
>;

export type PageCreatedEventFilter = TypedEventFilter<PageCreatedEvent>;

export interface PageEditedEventObject {
  id: BigNumber;
  data: string;
}
export type PageEditedEvent = TypedEvent<
  [BigNumber, string],
  PageEditedEventObject
>;

export type PageEditedEventFilter = TypedEventFilter<PageEditedEvent>;

export interface PageRemovedEventObject {
  id: BigNumber;
}
export type PageRemovedEvent = TypedEvent<[BigNumber], PageRemovedEventObject>;

export type PageRemovedEventFilter = TypedEventFilter<PageRemovedEvent>;

export interface RelationshipAddedEventObject {
  id: BigNumber;
  relationshipId: BigNumber;
}
export type RelationshipAddedEvent = TypedEvent<
  [BigNumber, BigNumber],
  RelationshipAddedEventObject
>;

export type RelationshipAddedEventFilter =
  TypedEventFilter<RelationshipAddedEvent>;

export interface Page extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PageInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addRelationship(
      id: BigNumberish,
      relationship: Relational.RelationshipStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    create(
      data: string,
      relationships: Relational.RelationshipStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    edit(
      id: BigNumberish,
      data: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pageID(overrides?: CallOverrides): Promise<[BigNumber]>;

    pages(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, BigNumber, string] & {
        id: BigNumber;
        author: string;
        createdTimestamp: BigNumber;
        modifiedTimestamp: BigNumber;
        data: string;
      }
    >;

    remove(
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addRelationship(
    id: BigNumberish,
    relationship: Relational.RelationshipStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  create(
    data: string,
    relationships: Relational.RelationshipStruct[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  edit(
    id: BigNumberish,
    data: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pageID(overrides?: CallOverrides): Promise<BigNumber>;

  pages(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, BigNumber, BigNumber, string] & {
      id: BigNumber;
      author: string;
      createdTimestamp: BigNumber;
      modifiedTimestamp: BigNumber;
      data: string;
    }
  >;

  remove(
    id: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addRelationship(
      id: BigNumberish,
      relationship: Relational.RelationshipStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    create(
      data: string,
      relationships: Relational.RelationshipStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    edit(
      id: BigNumberish,
      data: string,
      overrides?: CallOverrides
    ): Promise<void>;

    pageID(overrides?: CallOverrides): Promise<BigNumber>;

    pages(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, BigNumber, string] & {
        id: BigNumber;
        author: string;
        createdTimestamp: BigNumber;
        modifiedTimestamp: BigNumber;
        data: string;
      }
    >;

    remove(id: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "PageCreated(uint256,tuple)"(
      id?: null,
      data?: null
    ): PageCreatedEventFilter;
    PageCreated(id?: null, data?: null): PageCreatedEventFilter;

    "PageEdited(uint256,string)"(id?: null, data?: null): PageEditedEventFilter;
    PageEdited(id?: null, data?: null): PageEditedEventFilter;

    "PageRemoved(uint256)"(id?: null): PageRemovedEventFilter;
    PageRemoved(id?: null): PageRemovedEventFilter;

    "RelationshipAdded(uint256,uint256)"(
      id?: null,
      relationshipId?: null
    ): RelationshipAddedEventFilter;
    RelationshipAdded(
      id?: null,
      relationshipId?: null
    ): RelationshipAddedEventFilter;
  };

  estimateGas: {
    addRelationship(
      id: BigNumberish,
      relationship: Relational.RelationshipStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    create(
      data: string,
      relationships: Relational.RelationshipStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    edit(
      id: BigNumberish,
      data: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pageID(overrides?: CallOverrides): Promise<BigNumber>;

    pages(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    remove(
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addRelationship(
      id: BigNumberish,
      relationship: Relational.RelationshipStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    create(
      data: string,
      relationships: Relational.RelationshipStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    edit(
      id: BigNumberish,
      data: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pageID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pages(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    remove(
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
