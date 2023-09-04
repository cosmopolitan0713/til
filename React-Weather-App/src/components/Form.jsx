const Form = ({city, setCity, getWeather}) => {
  return (
    <form onSubmit={getWeather} setCity={setCity} city={city}>
      <input type="text" name="city" placeholder="都市" 
      onChange={e => setCity(e.target.value)} />
      <button type="submit">Get weather</button>
    </form>

   );
};

export default Form;