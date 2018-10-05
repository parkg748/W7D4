import {connect} from 'react-redux';
import ItemDetail from './item_detail';
import selectPokemonItem from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    item: selectAllPokemon(state, ownProps.match.params.itemId)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  
});
