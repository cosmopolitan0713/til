const Results = (props) => {
  const { country, cityName, temperature, conditionText, icon} = props.results;
  return (
    <>
      {country && 
      <div className="results-country">{country}</div>}
      {cityName && 
      <div className="results-city">{cityName}</div>}
      {temperature && 
      <div className="results-temp">{temperature}<span>℃</span></div>}
      {conditionText && 
      <div className="results-condition">
        <img src={icon} alt="icon" />
        <span>{conditionText}</span>
      </div>
      }
    </>
  )
}

export default Results