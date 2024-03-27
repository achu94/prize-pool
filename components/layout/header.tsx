export default function Header() {
  return (
    <div className="h-24 border-b-4 flex justify-between p-4">
      <div className="flex gap-4 items-center">
        <span>LOGO</span>
        <p>ACHUCOIN: $0.002</p>
      </div>
      <div className="flex gap-4 items-center">
        <button>Connect Wallet</button>
        <button>IMG</button>
      </div>
    </div>
  );
}
