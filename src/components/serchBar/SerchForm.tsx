// Форма с строкой поиска
//  interface IserchForm {

//  }
const SerchForm = () => {
  return(
    <div className="serch-bar">
      <form action="serch">
        <label htmlFor="">Браузер</label>
        <input type="text"/>
        <button className="btn-find">Найти</button>
      </form>
      <p>Найдется все. Например,<span>фаза луны сегодгя</span></p>
    </div>
  )
}

export default SerchForm;