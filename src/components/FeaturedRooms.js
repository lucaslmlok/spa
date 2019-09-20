import React, { Component } from 'react'
import { RoomContext } from '../Context'
import Loading from '../components/Loading'
import Room from './Room'
import Title from '../components/Title'

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        let { loading, featuredRooms: rooms } = this.context;
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room} />;
        });

        return (
            <section className="featured-rooms">
                <Title title="Featured rooms" />
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : rooms}
                </div>
            </section>
        )
    }
}
