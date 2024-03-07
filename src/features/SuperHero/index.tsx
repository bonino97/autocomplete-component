import { useState } from 'react';
import { Autocomplete, Error, Loading } from '@/components';
import { SuperHeroSuggestionCard } from '@/features/SuperHero/components';
import { ISuperHero } from '@/features/SuperHero/types/ISuperHero';
import { useFetch } from '@/hooks/useFetch';
import { fetchSuperHeroes } from '@/features/SuperHero/services/superheroService';

const SuperHeroesAutocomplete: React.FC = () => {
  const [query, setQuery] = useState<string>('');

  // POINT: 12. Load data using a real API call to some resource.
  const {
    data: superheroes,
    isLoading,
    error,
  } = useFetch<ISuperHero[]>(fetchSuperHeroes, query);

  const onSelect = (hero: ISuperHero) => {
    return hero; // TODO: Add logic when superhero is selected.
  };

  return (
    <section>
      {/* POINT: 6. You need to handle all non-standard/edge use-cases - it should have a perfect user-experience. */}
      {isLoading && <Loading message='Loading Superheroes...' />}
      {error && <Error message={error} />}
      <Autocomplete
        render={(hero: ISuperHero) => (
          <SuperHeroSuggestionCard hero={hero} query={query} />
        )}
        data={superheroes || []}
        onSelect={onSelect}
        onInputChange={setQuery}
      />
    </section>
  );
};

export default SuperHeroesAutocomplete;
