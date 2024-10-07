import React, { useState } from 'react'
import SearchForm from './components/SearchForm'
import RepositoryList from './components/RepositoryList'
import { SearchRepositories } from './services/github'
import { Repository } from './types/github'


const App: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleSearch = async (query: string) => {
    setLoading(true);
    setError(null);
    try {
      const result = await SearchRepositories(query);
      setRepositories(result.items);
    }catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Um erro desconhecido ocorreu'
      setError('Erro ao buscar repositorios: ${errorMessage}. por favor tente novamente');
      setRepositories([]);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div>
      <h1>Pesquisa de repositorios github</h1>
      <SearchForm onSearch={handleSearch} />
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <RepositoryList repositories={repositories}/>}
    </div>
  )
}
export default App;

