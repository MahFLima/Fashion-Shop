import React from "react";

export const Main: React.FC = () => {
  return (
    <div className="flex flex-col lg:grid grid-cols-2 px-10 sm:px-16 h-60 gap-8">
      <div className="flex flex-col gap-6">
        <p className="text-lg text-gray-400">Absolutely hot collection 🔥</p>
        <strong className="text-5xl sm:text-6xl">The Best Place To Find And Buy Amazing Products</strong>
        <p className="text-base text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at
          mauris ac sem pretium vulputate. Suspendisse et venenatis purus. Sed
          odio felis, fermentum et tristique nec, laoreet sed ipsum.
        </p>
        <button className="bg-black text-white w-48 py-4 rounded font-medium hover:opacity-70">Explore Now</button>
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
        className="h-[500px] w-full object-cover"
        alt="imagem"
      />
    </div>
  );
};
