import React from 'react';
import '@/components/Autocomplete/SuggestionCard/index.css';

interface SuggestionCardProps<T> {
  suggestion: T;
  onSelect: () => void;
  render: (suggestion: T) => React.ReactNode;
}

function SuggestionCard<T>({
  suggestion,
  onSelect,
  render,
}: SuggestionCardProps<T>) {
  return (
    <div className='suggestion-card' onClick={onSelect}>
      {render(suggestion)}
    </div>
  );
}

export default SuggestionCard;
