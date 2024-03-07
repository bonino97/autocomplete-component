import { ISuperHero } from '@/features/SuperHero/types/ISuperHero';
import '@/features/SuperHero/components/SuperHeroSuggestionCard/index.css';

interface SuperHeroSuggestionCardProps {
  hero: ISuperHero;
  query: string;
}

const SuperHeroSuggestionCard: React.FC<SuperHeroSuggestionCardProps> = ({
  hero,
  query,
}) => {
  // POINT: 7. Highlight the matching part of the text, in addition to showing it.
  const HighlightMatch = (text: string, query: string) => {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.split(regex).map((part, index) => {
      if (index % 2 === 1) {
        return (
          <span key={index} className='highlight'>
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className='suggestion-card'>
      <img src={hero.image} alt={hero.superhero} />
      <div className='suggestion-card-content'>
        <h3>{HighlightMatch(hero.superhero, query)}</h3>
        <p>{hero.alter_ego}</p>
        <p>
          <small>First appearance: {hero.first_appearance}</small>
        </p>
      </div>
    </div>
  );
};

export default SuperHeroSuggestionCard;
