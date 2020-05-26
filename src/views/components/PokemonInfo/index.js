import React, { Component } from 'react'

// Components
import api from '../../../api'

// Generate every item

class PokemonInfo extends Component {
    state = {
        data: null,
    }

    componentDidMount() {
        this.getPokemonInfo()
    }

    getPokemonInfo = async () => {
        const iden = this.props.url
        const pokUs = await api.getPokemonInfo(iden)
        this.setState({ data: pokUs })
    }

    getActiveCard = () => {
        const { data } = this.state

        this.setState({ isVisible: true })
        this.props.isOpen(data)
    }

    render() {
        const { data } = this.state

        if (data === null) {
            return (
                <div>Loading</div>
            )
        }

        return (
            <div
                className='card'
                onClick={() => { this.getActiveCard() }}
            >
                <div className='img-container'>
                    <img
                        src={data.sprites.front_default}
                        alt='Pokemon'
                    />
                </div>
                <p className='pok-name'>{data.name}</p>
                <div className='pok-types'>
                    {data.types.map((el, i) => {
                        return (
                            <p
                                key={el.slot}
                                className={`type ${el.type.name}`}
                            >
                                {el.type.name}
                            </p>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default PokemonInfo