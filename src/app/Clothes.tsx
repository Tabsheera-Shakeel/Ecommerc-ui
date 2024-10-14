import Image from "next/image";

function ClothesSection() {

  const clothes = [
    {
      id: 1,
      name: "Elegant Dress",
      image: "https://i.pinimg.com/474x/b2/1e/1a/b21e1a095fd715c470ad7140f247cbc2.jpg",
      description: "A stunning dress for special occasions.",
    },
    {
      id: 2,
      name: "Casual Shirt",
      image: "https://i.pinimg.com/736x/df/0e/2d/df0e2df13cd1dcb446ed29730c0478f0.jpg",
      description: "Perfect for everyday wear.",
    },
    {
      id: 3,
      name: "Stylish Jacket",
      image: "https://i.pinimg.com/474x/64/a7/90/64a790c64e73c164b4735f7aefd33be3.jpg",
      description: "Stay warm and trendy.",
    },
    {
      id: 4,
      name: "Chic Pants",
      image: "https://i.pinimg.com/564x/32/16/8c/32168c3effddb0c7854781477f4a70d3.jpg",
      description: "Comfort meets style.",
    },
    {
      id: 5,
      name: "Trendy Skirt",
      image: "https://i.pinimg.com/474x/f1/03/07/f10307d3b60262d6a5b12d1d8c40a3e1.jpg",
      description: "A versatile skirt for any occasion.",
    },
    {
      id: 6,
      name: "Classic T-Shirt",
      image: "https://i.pinimg.com/736x/fe/f3/2e/fef32e640e39ff393cd45096eebf9ed8.jpg",
      description: "Essential for every wardrobe.",
    },
    {
      id: 7,
      name: "Fashionable Blazer",
      image: "https://i.pinimg.com/564x/8d/2c/21/8d2c2156d0a5d6146684f147306a6cf6.jpg",
      description: "Elevate your look with this blazer.",
    },
    {
      id: 8,
      name: "Comfortable Sweatpants",
      image: "https://i.pinimg.com/236x/7e/be/08/7ebe08d38d47dabd10ce31aaa87e4637.jpg",
      description: "Perfect for lounging or workouts.",
    },
  ];


  const featuredItems = [
    {
      id: 9,
      name: "Summer Dress",
      image: "https://i.pinimg.com/236x/6a/5a/7c/6a5a7c9cb00c89a7db58804275466060.jpg",
      description: "Light and breezy, perfect for summer.",
    },
    {
      id: 10,
      name: "Denim Jacket",
      image: "https://i.pinimg.com/236x/b0/e6/95/b0e69580262c5e82c32db5343fe60046.jpg",
      description: "A must-have for layering in cooler weather.",
    },
    {
      id: 11,
      name: "Maxi Skirt",
      image: "https://i.pinimg.com/564x/49/d5/b0/49d5b0db967a3a7a81abc91c298c58be.jpg",
      description: "Flowy and elegant for any occasion.",
    },
    {
      id: 12,
      name: "Graphic T-Shirt",
      image: "https://i.pinimg.com/564x/24/89/d2/2489d215be12f55ff5d44612dc4d7553.jpg",
      description: "Make a statement with bold graphics.",
    },
  ];

  return (
    <>

      <section id="Clothes" className="bg-white text-black p-10">
        <h2 className="text-3xl font-bold text-center mb-6 text-yellow-400">
          Our Collection
        </h2>
        <p className="text-center mb-8">
          Explore our curated selection of clothing that blends style and comfort.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clothes.map((item) => (
            <div key={item.id} className="border rounded-lg overflow-hidden shadow-lg">
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="FeaturedItems" className="bg-gray-100 text-black p-10">
        <h2 className="text-3xl font-bold text-center mb-6 text-yellow-400">
          Featured Items
        </h2>
        <p className="text-center mb-8">
          Discover our hand-picked items that are trending this season.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <div key={item.id} className="border rounded-lg overflow-hidden shadow-lg">
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ClothesSection;