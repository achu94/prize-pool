import Image from "next/image";

// homeItem, stakeItem, wheelItem, nftItem
import { Icons } from "../../app/assets/icons";
import * as icons from "../../app/assets/icons";

export default function Sidebar() {
  return (
    <aside className="w-1/4 h-full bg-secondary">
      <div className="h-full">
        <div className="h-24 border-b-4 flex justify-center items-center">
          <span>LOGO</span>
        </div>
        <div className="h-full flex flex-col">
          <ul className="h-3/4 p-4 flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <Image
                className="w-6"
                src={icons.homeItem.icon}
                alt={icons.homeItem.alt}
              />
              <a>Nav 1</a>
            </li>
            <li className="flex items-center gap-4">
              <Image
                className="w-6"
                src={icons.stakeItem.icon}
                alt={icons.stakeItem.alt}
              />
              <a>Nav 1</a>
            </li>
            <li className="flex items-center gap-4">
              <Image
                className="w-6"
                src={icons.wheelItem.icon}
                alt={icons.wheelItem.alt}
              />
              <a>Nav 1</a>
            </li>
            <li className="flex items-center gap-4">
              <Image
                className="w-6"
                src={icons.nftItem.icon}
                alt={icons.nftItem.alt}
              />
              <a>Nav 1</a>
            </li>
          </ul>
          <ul className="h-1/4 flex justify-between p-2 border-t-4">
            <li>
              <a>IMG 1</a>
            </li>
            <li>
              <a>IMG 2</a>
            </li>
            <li>
              <a>IMG 3</a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
