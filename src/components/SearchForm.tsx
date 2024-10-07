import React, { useState } from "react";

interface SearchFromProps {
  onSearch: (query: string) => void;
}

const SearchForm: React.FC<SearchFromProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="vite-project"
      />
      <button type="submit">Pesquisar</button>
    </form>
  )
}

export default SearchForm;