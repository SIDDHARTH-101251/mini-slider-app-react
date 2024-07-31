import './index.css'

const PlanetItem = props => {
  const {planet} = props
  const {name, imageUrl, description} = planet
  return (
    <div className="planet-container">
      <h1 className="planets-main-heading">PLANETS</h1>
      <img src={imageUrl} alt={`planet ${name}`} className="planet-image" />
      <h1 className="planet-name">{name}</h1>
      <p className="planet-description">{description}</p>
    </div>
  )
}

export default PlanetItem
