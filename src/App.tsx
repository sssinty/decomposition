import './App.css'
import {date, dataExchange, dataTopis, dataVisited, dataEther, dataMap, dataTV} from './db/data';
import weather from './assets/weather.png'

import Topis from './components/serchBar/Topics';
import NewsList from './components/news/NewsList'
import ExchangeList from './components/exchangeRates/ExchangeList';
import SerchForm from './components/serchBar/SerchForm';
import Weather from './components/footer/Weather';
import SpanBlock from './components/footer/SpanBlock';




function App() {
  return(
    <div className='container-head'>
        <div className='news-block'>
          <NewsList title='Сейчас в СМИ' date={date}contry='в Стране Рекомендации' time='01 месяц, д.недели 00:00'/>
          <ExchangeList data={dataExchange}/>
        </div>
        <nav className='nsvigation-block'>
          <Topis data={dataTopis} />
          <SerchForm />
        </nav>
      <div className='footer'>
          <Weather dayT='днем +20' imge={weather} morningT='Утром +17' temperature='+17' />
          <SpanBlock dataBase={dataVisited} name='Посещаемое'/>
          <SpanBlock dataBase={dataMap} name='Карта Германии'/>
          <SpanBlock dataBase={dataTV} name='Телепрограмма'/>
          <SpanBlock dataBase={dataEther} name='Эфир'/>
      </div>
    </div>
  )
}

export default App
