import styles from './CityList.module.css'

function CityList() {
    return (
        <div className={styles.cityList}>
            cities
        </div>
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
  