import Spinner from './Spinner'
import styles from './CityList.module.css'
import CityItem from './CityItem'


function CityList({cities, isLoading}) {
    if (isLoading) return <Spinner/>

    return ( 
        <ul className={styles.cityList}>
             {cities.map((city) => (
                <CityItem city={city} key={city.id}/>
             ))}
        </ul>
    )
}

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
  