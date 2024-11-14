import dynamic from 'next/dynamic';

const Search = dynamic(() => import('./_components/Search'));

function SearchPage() {
  return <Search />;
}

export default SearchPage;
