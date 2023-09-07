import './index.css'

const LanguageItem = props => {
  const {LanguageDetails} = props
  const {imageUrl, imageAltText} = LanguageDetails
  return (
    <>
      <l1 className="item-container">
        <img className="item-image" src={imageUrl} alt={`${imageAltText}`} />
      </l1>
    </>
  )
}
export default LanguageItem
