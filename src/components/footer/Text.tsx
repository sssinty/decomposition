interface IText { 
 data: Array<{text: string}>,

}
const Text = ({data} : IText) => {
  return (
    data.map((element, i) => {
      return (
        <span key={i} className="text"><a href="#">{element.text}</a></span>
      )
    })
  )
}
export default Text;