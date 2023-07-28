import './index.css'

const TabsList = props => {
  const {tabItem} = props
  const {displayText} = tabItem

  return (
    <button type="button" className="button">
      {displayText}
    </button>
  )
}

export default TabsList
