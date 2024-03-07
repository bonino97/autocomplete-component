import '@/features/Fruits/components/FruitsSuggestionCard/index.css';

const FruitSuggestionCard = (fruit: string) => (
  <div className='fruit-suggestion-card'>
    <h3>{fruit}</h3>
  </div>
);

export default FruitSuggestionCard;
