import './index.css'

const ImagesList = props => {
  const {imageItem} = props
  const {thumbnailUrl} = imageItem

  return (
    <li>
      <img src={thumbnailUrl} alt="thumbnail" />
    </li>
  )
}

export default ImagesList
