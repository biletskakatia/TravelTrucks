import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/сampers/operations.js";
import { selectCampers, selectLoading, selectError } from "../../redux/сampers/selectors.js";
import CamperCard from "../../components/CamperCard/CamperCard.jsx";
import Filters from "../../components/Filters/Filters.jsx";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import Error from "../../components/Error/Error.jsx";

export default function CatalogPage() {
    const dispatch = useDispatch();
    const campers = useSelector(selectCampers);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    
    useEffect(() => {
        dispatch(fetchCampers());
    }, [dispatch]);
    console.log("Campers:", campers); 

    const handleLoadMore = () => {
        dispatch(fetchCampers());
        console.log("After fetchCampers dispatch:", campers);
    };
    console.log("Selected campers from state:", campers);
    return (
        <div>
            <Filters />
            {loading && <Loader />}
            {error && <Error />}
            <div>
                {campers.items.map((camper) => {
                    console.log("Rendering Camper:", camper); 
                    return <CamperCard key={camper.id} camper={camper} />;
                })}
            </div>
            {!loading &&<LoadMoreButton onClick ={handleLoadMore}/>}
        </div>
    );
}