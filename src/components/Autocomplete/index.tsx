import React, { useState } from 'react';
import { SearchInput, SuggestionsList } from '@/components';

interface AutocompleteProps<T> {
  data: T[];
  render: (suggestion: T) => React.ReactNode;
  onSelect: (suggestion: T) => void;
  onInputChange: (query: string) => void;
}

const Autocomplete = <T,>({
  data,
  render,
  onSelect,
  onInputChange,
}: AutocompleteProps<T>) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setInputValue(query);
    onInputChange(query);
  };

  return (
    <section>
      <SearchInput value={inputValue} onChange={handleInputChange} />
      <SuggestionsList<T>
        suggestions={data}
        render={render}
        onSelect={onSelect}
      />
    </section>
  );
};

export default Autocomplete;
