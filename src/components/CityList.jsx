import Spinner from './Spinner'
import styles from './CityList.module.css'
import CityItem from './CityItem'
import PropTypes from "prop-types"
import Message from './Message'

function CityList({cities, isLoading}) {
    if (isLoading) return <Spinner/>

    if (!cities.length) 
        return <Message message="Add your first city by clicking on a city 
    on the map" />

    return ( 
        <ul className={styles.cityList}>
             {cities.map(city => <CityItem city={city} key={city.id}/>)}
        </ul>
    )
}
// Define PropTypes
CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                .isRequired, // Validate city.id
        })
    ).isRequired, // cities must be an array of objects
    isLoading: PropTypes.bool.isRequired, // Validate isLoading as a boolean
};

export default CityList
 
// useEffect(() => {
//     const fetchCities = async () => {
//       setLoading(true);
//       const response = await fetch("http://localhost:8000/cities");
//       const data = await response.json();
//       setCities(data);
//       setLoading(false);
//     };
//     fetchCities();
//   }, []);
  