import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { fetchPlanetDetails } from "../../store/actions";
import { makeTitle } from '../../utils';
import styles from './PlanetDetails.module.css';

const keys = [
  'name',
  'population',
  'diameter',
  'gravity',
  'orbital_period',
  'rotation_period',
  'terrain',
  'climate',
  'surface_water',
]

function PlanetDetails({ match, fetchPlanetDetails, planet }) {
  useEffect(() => {
    fetchPlanetDetails(match.params.id);
  }, [fetchPlanetDetails, match]);

  return (
    <div>
      <table className={styles.gridTable}>
        <colgroup>
          <col style={{ "width": "20%" }} />
          <col style={{ "width": "80%" }} />
        </colgroup>
        <tbody>
          {keys.map(key => (
            <tr key={key}>
              <td>{makeTitle(key)}</td>
              <td>{planet ? planet[key] : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

PlanetDetails.propTypes = {
  fetchPlanetDetails: PropTypes.func.isRequired,
  planet: PropTypes.shape({
    name: PropTypes.string,
    population: PropTypes.string,
    diameter: PropTypes.string,
    gravity: PropTypes.string,
    orbital_period: PropTypes.string,
    rotation_period: PropTypes.string,
    terrain: PropTypes.string,
    climate: PropTypes.string,
    surface_water: PropTypes.string
  })
}


const mapStateToProps = ({ planets: { planet } }) => {
  return { planet }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPlanetDetails: (id) => dispatch(fetchPlanetDetails(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlanetDetails);