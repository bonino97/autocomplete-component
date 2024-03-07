import { ISuperHero } from '@/features/SuperHero/types/ISuperHero';
import marvelData from '@/features/SuperHero/mocks/marvel.json';

export const fetchSuperHeroes = async (
  query: string
): Promise<ISuperHero[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredData = marvelData.filter((hero) =>
        hero.superhero.toLowerCase().includes(query.toLowerCase())
      );
      resolve(filteredData);
    }, 300);
  });
};
