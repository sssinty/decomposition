//  Компонент формирует спсок разделов над строкой поиска
 import TopisItem from "./TopisItem";

 interface ITopis {
  data: Array<{name: string}>,
 }

 const Topis = ({data}: ITopis) => {
  console.log(data)
  return (
    <div  className="topis">
      <ul className="topis-list">
        {data.map((element, i) => {
          return <TopisItem key={i} name={element.name} />
        })}
      </ul>
      <button><a href="#">еще</a></button>
    </div>
  )
 }
 export default Topis;