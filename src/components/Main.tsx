import React from "react";

export const Main: React.FC = () => {
  return (
    <div id="home" className="flex flex-col gap-8 px-10 mb-10 md:grid md:grid-cols-2">
      <div className="flex flex-col gap-6">
        <p className="text-lg text-gray-400">Absolutely hot collection 🔥</p>
        <strong className="text-5xl sm:text-6xl">The Best Place To Find And Buy Amazing Products</strong>
        <p className="text-base text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at
          mauris ac sem pretium vulputate. Suspendisse et venenatis purus. Sed
          odio felis, fermentum et tristique nec, laoreet sed ipsum.
        </p>
        <a href="#products" className="bg-black text-white w-48 py-4 rounded font-medium text-center hover:opacity-70">Explore Now</a>
        <div className="flex gap-10">
          <strong className="flex flex-col text-3xl">
            20k+
            <p className="text-base font-normal">Collections</p>
          </strong>
          <strong className="flex flex-col text-3xl">
            16k
            <p className="text-base font-normal">Users</p>
          </strong>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        className="h-[520px] w-full object-cover"
        alt="imagem"
      />
    </div>
  );
};
