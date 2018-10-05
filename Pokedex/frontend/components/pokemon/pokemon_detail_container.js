import {connect} from 'react-redux';
import {requestPoke} from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    poke: state.entities.pokemon[ownProps.match.params.pokemonId]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestPoke: (id) => dispatch(requestPoke(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
