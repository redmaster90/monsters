import React, { Component } from 'react'
import { connect } from 'react-redux' 
import Monster from './Monster';
class Monsters extends Component {

    constructor(props) {
        super(props) 
        this.state = {searchTerm: ''}
    }

// Fires on every search input change then sets its value 
// to state
searchTermChange = (event) => {
    this.setState({searchTerm: event.target.value})
}
    render() {
        return (
            <div className="monsters-wrapper">
                <p>Monsters</p>
                <input type="text" className="monster-search-input" value={this.state.searchTerm} onChange={(e) => this.searchTermChange(e)} placeholder="Search..."></input>
                <div className="searchMonster-wrapper">
                   
                    {/* Creates a new array of monsters whose name matches the search term and maps each result to a <Monster /> Component */}
                    {this.props.monsters.filter(m => m.name.includes(this.state.searchTerm)).map((ms, index) => {
                         return( <Monster key={index} name={ms.name} atk={parseInt(ms.atk)} def={parseInt(ms.def)} monsterId={ms.id} elem={ms.element}/>  )
                    })}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        monsters: state.monsters
    }
}

export default connect(mapStateToProps)(Monsters)
