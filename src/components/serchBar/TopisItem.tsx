//  Элементы для списка Topis
 interface ITopisItem {
  name: string,
 }
 const TopisItem = ({name} : ITopisItem) => {
  return <li className="topis-item"><a href="#">{name}</a></li>
  
 }
 export default TopisItem;