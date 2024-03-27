import home from "../assets/home.svg";
import stake from "../assets/dollar.svg";
import wheel from "../assets/pinwheel.svg";
import nft from "../assets/nft.svg";

const homeItem = {
  alt: "Home",
  icon: home,
};

const stakeItem = {
  alt: "Stake",
  icon: stake,
};

const wheelItem = {
  alt: "Wheel",
  icon: wheel,
};

const nftItem = {
  alt: "Nft",
  icon: nft,
};

export { homeItem, stakeItem, wheelItem, nftItem };
export type Icons = typeof homeItem | typeof stakeItem | typeof wheelItem | typeof nftItem;
