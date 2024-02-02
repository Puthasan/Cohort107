import Header from './Header';
import SearchBar from './SearchBar';
import EmployeeList from './EmployeeList';

function HomePage() {
  return (
    <div>
      <h2>HomePage</h2>
      <Header />
      <SearchBar />
      <EmployeeList />
    </div>
    
  );
}

export default HomePage