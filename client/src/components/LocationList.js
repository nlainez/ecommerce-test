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
import * as uuid from 'uuid';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';

class LocationList extends Component {
  // state = {
  //   items: [
  //     { id: uuid.v1(), location: '1234,5432' },
  //     { id: uuid.v1(), location: '4534,5212' },
  //     { id: uuid.v1(), location: '4321,5421' }
  //   ]
  // };

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { items } = this.props.item;

    return (
      <Container>
        <Button
          color="dark"
          style={{marginBottom: '2rem'}}
          onClick={() => {
            const location = prompt('Enter location');
            if (location) {
              this.setState(state => ({
                  items: [...state.items, { id: uuid.v1(), location: location }]
                })
              );
            }
          }}
        >
          Set Location
        </Button>

        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ id, location}) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => {
                      this.setState(state => ({
                        items: state.items.filter(item => item.id !== id)
                      }));
                    }}                   
                  >
                    &times;
                  </Button>
                  {location}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
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

export default connect(mapStateToProps, { getItems })(LocationList);