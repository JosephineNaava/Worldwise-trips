import styles from './CityItem.module.css'

const formDate = (date)=>
    new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "long",
        year : "numeric"

    }).format(new Date(date))


function CityItem({city}) {
    const 
    return(
        <li>
            ItEM
        </li>
    )
}

export default CityItem
