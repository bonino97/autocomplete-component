import React from 'react';
import { SuggestionCard } from '@/components';
import '@/components/Autocomplete/SuggestionList/index.css';

interface SuggestionsListProps<T> {
  suggestions: T[];
  render: (suggestion: T) => React.ReactNode;
  onSelect: (suggestion: T) => void;
}

const NoDataFound = () => <div className='no-data-found'>No data found!</div>;

const SuggestionsList = <T,>({
  suggestions,
  render,
  onSelect,
}: SuggestionsListProps<T>) => {
  if (!suggestions.length) return <NoDataFound />;
  return suggestions.map((suggestion, index) => (
    <SuggestionCard<T>
      key={index}
      suggestion={suggestion}
      render={render}
      onSelect={() => onSelect(suggestion)}
    />
  ));
};

export default SuggestionsList;
