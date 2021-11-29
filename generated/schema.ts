// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class DeviationInfo extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("created", Value.fromBigInt(BigInt.zero()));
    this.set("index", Value.fromBigInt(BigInt.zero()));
    this.set("name", Value.fromString(""));
    this.set("contractAddress", Value.fromString(""));
    this.set("extraData", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DeviationInfo entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save DeviationInfo entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("DeviationInfo", id.toString(), this);
    }
  }

  static load(id: string): DeviationInfo | null {
    return changetype<DeviationInfo | null>(store.get("DeviationInfo", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get created(): BigInt {
    let value = this.get("created");
    return value!.toBigInt();
  }

  set created(value: BigInt) {
    this.set("created", Value.fromBigInt(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    return value!.toBigInt();
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get contractAddress(): string {
    let value = this.get("contractAddress");
    return value!.toString();
  }

  set contractAddress(value: string) {
    this.set("contractAddress", Value.fromString(value));
  }

  get extraData(): BigInt {
    let value = this.get("extraData");
    return value!.toBigInt();
  }

  set extraData(value: BigInt) {
    this.set("extraData", Value.fromBigInt(value));
  }
}