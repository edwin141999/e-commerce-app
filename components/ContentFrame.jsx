import Image from "next/image";

export default function ContentFrame() {
  const products = [
    {
      id: 1,
      name: "Apple Watch",
      price: 529.99,
      image: "/appleWatch.png",
      description: "Series 5 SE",
    },
    {
      id: 2,
      name: "Sony ZX33OBT",
      price: 39.99,
      image: "/sonyHeadphones.png",
      description: "Light Grey",
    },
    {
      id: 3,
      name: "IPhone 11",
      price: 619.99,
      image: "/iPhone11_Black.png",
      description: "Serious Black",
    },
    {
      id: 4,
      name: "IPhone 11",
      price: 619.99,
      image: "/iPhone11_Blue.png",
      description: "Subway Blue",
    },
  ];
  
  return (
    <div className="w-9/12">
      {/* SEARCH BAR */}
      <div className="flex flex-col items-center mt-6">
        <div>
          <p className="font-medium text-sm text-gray-400 mb-1">Search item</p>
          <input
            type="text"
            placeholder="Apple Watch, Samsung S21, Macbook Pro,..."
            className="w-96 h-10 rounded-xl px-5"
          />
        </div>
      </div>
      {/* CONTENT */}
      <div className="grid grid-cols-4 gap-4 mt-8">
        {products.map((product) => (
          <div key={product.id}>
            <div className="bg-white w-full rounded-xl h-52 flex justify-center items-center">
              <Image
                src={product.image}
                alt={product.name}
                width={160}
                height={160}
                className="mx-2"
              />
            </div>
            <p className="font-medium text-xl mt-2">{product.name}</p>
            <p className="text-gray-400">{product.description}</p>
            <div className="flex flex-row justify-between mx-1">
              <p className="font-medium text-xl">$ {product.price}</p>
              <Image src="/bag_add.png" alt="bag add" width={25} height={10} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
