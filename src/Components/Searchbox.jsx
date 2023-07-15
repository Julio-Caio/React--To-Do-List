import '../App.css'
import { FaSearch } from "react-icons/fa";

const Searchbox = ({search, setSearch}) => {
  return (
    <div className="search">
        <FaSearch style={{maxWidth: 30, maxHeight: 30}}/>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..."/>
    </div>
  );
}

export default Searchbox