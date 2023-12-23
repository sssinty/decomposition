//  Отвечает за формирование списка торгов на бирже
 import ExchangeItem from "./ExchangeRatesItem";
 
 interface IExchangeList {
  data: Array<{  currency: string, price: number, changePrice: string}>
 }
 
 const ExchangeList = ({data} : IExchangeList) => {
  return(
    <div className="exchange">
      <ul className="exchange-list">
          {
            data.map((element, i) => {
            return <ExchangeItem key={i} changePrice={'+'+element.changePrice} currency={element.currency} price={element.price} />
            })
          }
      </ul>
    </div>
  )
 }  
 export default ExchangeList;