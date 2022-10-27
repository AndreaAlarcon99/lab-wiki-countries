import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


function CountryDetail({countries}) {
    const { id } = useParams();   
    
    const country = countries.find(country => country.alpha3Code === id)
    
    return (     
        <div className="col-7">
            <img src={` https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="country"/>
            <h2>{country.name.common}</h2>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {country.area}
                            <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        {country.borders.map(country => {
                            console.log("COUNTRY BORDERS: ", country)
                            return (
                                <Link to={`/${country}`}><li>{country}</li> </Link>            
                            )
                        })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
             
    )
}

export default CountryDetail