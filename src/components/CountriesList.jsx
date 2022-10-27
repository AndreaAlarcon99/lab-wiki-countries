import { Link } from 'react-router-dom';

function CountriesList({countries}) {
    return (
        <div className="container" >
            {countries.map(country => {
                return (
                    <div className="row">
                        <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
                            <div className="list-group">                                                         
                                <Link className="list-group-item list-group-item-action" to={`/${country.alpha3Code}`}>
                                    <img src={` https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="country flag"/>
                                    <h3>{country.name.common}</h3>
                                </Link>
                            </div>                       
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CountriesList