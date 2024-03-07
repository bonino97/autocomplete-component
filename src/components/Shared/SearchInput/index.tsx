import '@/components/Shared/SearchInput/index.css';

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => (
  <input
    type='text'
    value={value}
    onChange={onChange}
    placeholder='Search...'
    className='search-input'
  />
);

export default SearchInput;
