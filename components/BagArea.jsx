import Image from "next/image";

export default function BagArea() {
  const products = [
    {
      id: 1,
      image: "/appleWatch.png",
    },
    {
      id: 2,
      image: "/sonyHeadphones.png",
    },
    {
      id: 3,
      image: "/iPhone11_Black.png",
    },
    {
      id: 4,
      image: "/iPhone11_Blue.png",
    },
  ];

  return (
    <div className="w-3/12 p-5 flex flex-row">
      <div class="left-1/2 -ml-0.5 w-0.5 h-auto bg-black"></div>
      <div>
        <h1 className="text-center text-2xl mt-10">Bag</h1>
        <div className="grid grid-cols-3 gap-4 p-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-md flex justify-center w-20"
            >
              <Image
                src={product.image}
                alt={product.id}
                width={40}
                height={160}
                className="mx-2"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <div className="bg-black text-white rounded-xl flex justify-between w-max px-3 items-center py-1">
            <Image
              src="/bag.png"
              width={20}
              height={30}
              alt="bag"
              style={{ filter: "invert(100)" }}
            />
            <p className="text-sm pl-2">View Bag</p>
          </div>
        </div>
      </div>
    </div>
  );
}
