// Компонент формирующий элемент списка

interface IlistItemProps {
  title: string,
  img: string,

}

const ListItem = ({img, title} : IlistItemProps) => {
  return (
    <li className="item-list">
      <img className="list-icon" src={img} alt="иконка новости" />
      <a href="#" className="pargraph-list">{title}</a>
    </li>
  )
}
export default ListItem;