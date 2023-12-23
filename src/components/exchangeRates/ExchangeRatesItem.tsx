// Элементый списка торогов на бирже

interface IExchangeItem {
  currency: string,
  price: number,
  changePrice: string
}

const ExchangeItem = ({changePrice, currency, price} : IExchangeItem) => {
  return (
    <li className="bargaining">
      <h4 className="currency"><a href="#">{currency}</a></h4>
      <span className="price">{price}</span>
      <span className="change">{changePrice}</span>
    </li>
  )
}
export default ExchangeItem;