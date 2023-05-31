import Image from "next/image";

export default function Navbar() {
  return (
    <div className="bg-white h-auto m-2 w-16 rounded-lg flex flex-col justify-between items-center">
      <div className="h-64 flex flex-col justify-evenly items-center">
        <Image src="/logo.png" width={25} height={30} alt="logo" />
        <Image
          src="/menu_burguer.png"
          width={25}
          height={30}
          alt="menu_burguer"
        />
        <Image src="/store.png" width={25} height={30} alt="store" />
        <Image src="/bag.png" width={25} height={30} alt="bag" />
      </div>
      <Image src="/log_out.png" width={25} height={30} alt="log out" />
    </div>
  );
}
