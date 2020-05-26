import React, { Component } from 'react'

// Generate detail Pokemon card after click

class PokemonDetails extends Component {

    render() {
        const { data } = this.props

        if (this.props === null) {
            return (
                <div className='detail-card'>Loading</div>
            )
        }

        return (
            <div className='detail-card'>
                <div className='img-container'>
                    <img
                        src={data.sprites.front_default}
                        alt='Pokemon'
                    />
                </div>
                <p className='detail-name'>
                    {data.name} #{data.id}
                </p>
                <table border='1' >
                    <tbody>
                        <tr className='first-row'>
                            <td>Type</td>
                            <td>Fire</td>
                        </tr>
                        {data.stats.map(el =>
                            <tr key={el.stat.url}>
                                <td>{el.stat.name}</td>
                                <td>{el.base_stat}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PokemonDetails