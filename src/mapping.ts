import { NFT } from '../generated/schema'
import {Transfer} from "../generated/NFT/NFT";

export function handleTransfer(event: Transfer): void {
  let token = new NFT(event.params.tokenId.toString())
  token.owner = event.params.to.toHex();
  token.save();
}
