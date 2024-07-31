import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container" data-testid="planets">
      <Slider {...settings} className="slider">
        {planetsList.map(eachItem => (
          <PlanetItem key={eachItem.id} planet={eachItem} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
