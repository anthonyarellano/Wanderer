import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const SearchResult = () => {
    const { searchTerm, lat, lng } = useParams();
    const dispatch = useDispatch();

    return (
        <p>{[searchTerm, lat, lng]}</p>
    )
};

export default SearchResult;
