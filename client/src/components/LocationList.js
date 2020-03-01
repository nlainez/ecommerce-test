import React, {Component} from 'react';
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  ListGroupItemHeading
} from 'reactstrap';
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';
import { connect } from 'react-redux';
import {
  getItems,
  deleteItem
} from '../actions/itemActions';
import PropTypes from 'prop-types';

class LocationList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  }

  render() {
    const { items } = this.props.item;

    return (
      <div>
        <br />
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ id, location}) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, id)}                   
                  >
                    &times;
                  </Button>
                  {location}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </div>
    );
  }
}

LocationList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps, {
  getItems,
  deleteItem
})(LocationList);