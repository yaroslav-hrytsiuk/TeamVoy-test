import React, { Component } from 'react'

// Components
import PokemonInfo from '../PokemonInfo'
import PokemonDetails from '../PokemonDetails'
import api from '../../../api'

// Generate base field

class PokemonList extends Component {
    state = {
        allData: null,
        offset: 12,
        cardIsOpen: null
    }

    componentDidMount() {
        this.getPokemonList()
    }

    getPokemonList = async () => {
        const { offset } = this.state

        this.setState({ offset: offset + 12 })
        const getAll = await api.getPokemonList(offset)
        this.setState({ allData: getAll })
    }

    watchOpenCard = (val) => {
        this.setState({ cardIsOpen: val })
    }

    createCard() {
        const { allData } = this.state

        return (
            allData.results.map((el, i) =>
                <PokemonInfo
                    key={el.name}
                    url={el.url}
                    isOpen={this.watchOpenCard}
                />
            )
        )
    }

    render() {
        const { allData, cardIsOpen } = this.state

        if (allData === null) {
            return <div>Loading</div>
        }

        return (
            <div className='pokemon-list'>
                <h2>Pokedex</h2>
                {this.createCard()}
                <button
                    className='load-more-btn'
                    onClick={() => this.getPokemonList()}
                >
                    Load More
                </button>
                {cardIsOpen && <PokemonDetails data={cardIsOpen} />}
            </div>
        )
    }
}

export default PokemonList