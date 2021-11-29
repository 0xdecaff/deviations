import { SetValueCall } from "../generated/CorruptionsDeviationRegistry/CorruptionsDeviationRegistry"
import { DeviationInfo } from "../generated/schema"

export function handleSetValueCall(call: SetValueCall): void {
  let entity = new DeviationInfo(call.transaction.hash.toHexString());
  entity.created = call.block.timestamp;
  entity.index = call.inputs.index;
  entity.name = call.inputs.name;
  entity.contractAddress = call.inputs.contractAddress.toHexString();
  entity.extraData = call.inputs.extraData;
  entity.save();
}