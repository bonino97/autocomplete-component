import { useState } from 'react';
import { Autocomplete } from '@/components';
import { FruitsSuggestionCard } from '@/features/Fruits/components';

const FRUIT_DATA = ['apple', 'banana', 'orange', 'pear', 'grape', 'pineapple'];

const FruitsAutocomplete = () => {
  const [query, setQuery] = useState<string>('');

  // IDEA: This is an example of a calling autocomplete without an API call.
  // Is just to show re-usability of the component.
  const filteredFruits = FRUIT_DATA.filter((fruit) =>
    fruit.toLowerCase().includes(query.toLowerCase())
  );

  const onSelect = (fruit: string) => {
    return fruit; // TODO: Add logic when fruit is selected.
  };

  return (
    <Autocomplete
      data={filteredFruits || []}
      render={FruitsSuggestionCard}
      onSelect={onSelect}
      onInputChange={setQuery}
    />
  );
};

export default FruitsAutocomplete;
