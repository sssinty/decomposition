// Раздел с погодой
interface IWeather {
  imge: string,
  temperature: string,
  morningT: string,
  dayT: string
}
const Weather = ({dayT, imge, morningT, temperature} : IWeather) => {
return (
  <div className="weather">
    <h4>Погода</h4>
    <section className="temperature">
      <img src={imge} alt="иконка погоды"/>
      <span className="numb-temper"><a href="#">{temperature}</a></span>
      <span className="day-weather">
        <a href="#"><h6>{morningT}</h6></a>
        <a href="#"><h6>{dayT}</h6></a>
      </span>
    </section>
  </div>
)
}

export default Weather;