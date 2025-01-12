"use client";

import Catalog from "@/components/Catalog";
import { availableFilters } from "@/utils/endpoint";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

const Page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectGenre, setSelectGenre] = useState<string | null>(null);

  useEffect(() => {
    const genre = searchParams.get("genre") || "all";
    setSelectGenre(genre);
  }, [searchParams]);

  const handleCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const genre = event.target.value;
    setSelectGenre(genre);

    router.push(`?genre=${genre}`);
  };

  if (!selectGenre) {
    return <div>Loading...</div>;
  }

  return (
    <Suspense fallback={<div>Loading catalog...</div>}>
      <section className="flex flex-col">
        <div className="px-6 py-8 gap-8 sm:py-12 sm:px-6 lg:px-32 flex flex-col sm:gap-12 w-full">
          <p className="text-grey-medium text-4xl font-bold">Top Sellers</p>
          <div className="w-full justify-end flex gap-6 items-center">
            <label className="font-bold">Genre</label>
            <div className="h-[22px] border border-grey-medium"></div>
            <select
              name="genere"
              className="p-4 w-56 bg-white"
              value={selectGenre}
              onChange={handleCategory}
            >
              <option value="all">All</option>
              {availableFilters.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex-1">
          <Catalog genre={selectGenre} />
        </div>
      </section>
    </Suspense>

  );
};

export default Page;
