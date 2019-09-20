import React, { Component } from 'react'
import Client from './Contentful'

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  //get data from contentful cms
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "beachResort",
        order: "fields.capacity,fields.price",
      });
      let rooms = this.formatData(response.items);
      let featuredRooms = rooms.filter(room => room.featured === true);
      let maxPrice = Math.max(...rooms.map(item => item.price));
      let minPrice = Math.min(...rooms.map(item => item.price));
      let maxSize = Math.max(...rooms.map(item => item.size));
      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        minPrice,
        maxSize
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getData();
  }

  //transfer data from the fromat of contentful
  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image =>
        image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  //get room object by url slug
  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  }

  //handle change from search event
  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    }, this.filterRooms);
  }

  //filter rooms after change event happens
  filterRooms = () => {
    let { rooms, type, capacity, price, maxPrice, minSize, maxSize, breakfast, pets } = this.state;
    let tempRooms = [...rooms];

    capacity = parseInt(capacity);
    price = parseInt(price);
    minSize = parseInt(minSize);
    maxSize = parseInt(maxSize);

    if (type !== 'all') {
      tempRooms = tempRooms.filter(room => room.type === type);
    }
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }
    if (price !== maxPrice) {
      tempRooms = tempRooms.filter(room => room.price <= price);
    }
    tempRooms = tempRooms.filter(room => minSize <= room.size && room.size <= maxSize);
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }

    this.setState({
      sortedRooms: tempRooms
    });
  }

  render() {
    return (
      <RoomContext.Provider value={{
        ...this.state,
        getRoom: this.getRoom,
        handleChange: this.handleChange
      }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

//higher-order component function
export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  }
}

export { RoomProvider, RoomConsumer, RoomContext };