// Элементы списка
import ListItem from "./ListItem";

// Компонент формирует список новостей
interface NewsList {
  date: Array<{img: string, title: string}>,
  title: string
  contry: string,
  time: string
}

const NewsList = ({date, title, contry, time} : NewsList) => {
  console.log(date)
  return (
    <div className='news'>
      <span className="title">
        <h3 className="title-news"><a href="#" className="href-title">{title}</a></h3>
        <p className="contry-recommendation">{contry}</p>
        <time className="time-title">{time}</time>
      </span>
      <ul className="list-news">
        {date.map((element, i) => {
           return <ListItem key={i} img={element.img} title={element.title} />  
        })}
      </ul>
    </div>  

  )
}

export default NewsList;