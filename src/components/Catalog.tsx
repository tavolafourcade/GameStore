"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Game } from "@/types";

interface CatalogProps {
  genre: string;
}

const Catalog = ({ genre }: CatalogProps) => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  console.log(games);

  const fetchGames = async (genre = "all", page = currentPage) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/games?genre=${genre}&page${page}`);
      const data = await response.json();
      console.log(data.games);
      setGames(data.games || []);
    } catch (error) {
      console.log("Error trying to fetch the games", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(genre);
    fetchGames(genre);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genre]);

  const handleSeeMore = async () => {
    try {
      const nextPage = currentPage + 1;
      setLoading(true);
      const response = await fetch(`/api/games?genre=${genre}&page=${nextPage}`);
      const data = await response.json();
  
      setGames((prevGames) => [...prevGames, ...data.games]);
      setCurrentPage(nextPage);
    } catch (error) {
      console.error("Error fetching more games:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-12 px-6 py-8 sm:py-12 sm:px-6 lg:px-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 h-full">
        {loading ? (
          <div className="col-span-full flex justify-center items-center h-64">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-lg font-medium text-gray-600">Loading...</p>
            </div>
          </div>
        ) : (
          <ProductCard games={games} />
        )}
      </div>
      <button
        className={`uppercase w-full bg-grey-subtext text-white py-5 px-6 rounded-lg sm:w-[137px] disabled:bg-disabled ${
          loading ? "hidden" : ""
        }`}
        onClick={handleSeeMore}
        disabled={games.length < 12}
      >
        See more
      </button>
    </div>
  );
};

export default Catalog;
