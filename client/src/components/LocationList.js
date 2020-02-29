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

class LocationList extends Component {
  state = {
    items: [
      { id: uuid.v1(), location: '1234,5432' },
      { id: uuid.v1(), location: '4534,5212' },
      { id: uuid.v1(), location: '4321,5421' }
    ]
  };

  render() {
    const { items } = this.state;
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

export default LocationList;