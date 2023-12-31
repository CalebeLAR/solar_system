import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const TitleProp = 'Planetas';
    return (
      <div data-testid="solar-system">
        <Title headline={ TitleProp } />
        {planets.map((planet) => (
          <PlanetCard
            key={ planet.name }
            planetName={ planet.name }
            planetImage={ planet.image }
          />))}
      </div>
    );
  }
}

export default SolarSystem;
