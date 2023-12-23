import Text from "./Text";

interface ISpanBlock {
  dataBase: Array<{text: string}>
  name: string,
}
const SpanBlock = ({name, dataBase} : ISpanBlock) => {
  return (
    <span className='visited-container'>
      <h4>{name}</h4>
      <Text data={dataBase} />
    </span>
  )
}
export default SpanBlock;