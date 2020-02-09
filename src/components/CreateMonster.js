import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createMonster, selectElement } from '../actions';

class CreateMonster extends Component {
    constructor(props) {
        super(props)
        this.state = { selectedElementId: 0 }
        this.props.selectElement(this.state.selectedElementId)
    }

    // Rotates back and forth through Elements
    changeElement = (direction) => {
        var currentElementId = this.state.selectedElementId
        if (direction === 'next') {
            if (currentElementId < 3) {
                this.setElement(currentElementId + 1)
            } else {
                this.setElement(0)
            }
        }
        if (direction === 'prev') {
            if (currentElementId === 0) {
                this.setElement(3)
            } else {
                this.setElement(currentElementId - 1)
            }
        }
    }
    setElement = id => {
        this.props.selectElement(id)
        this.setState({ selectedElementId: id })
    }

    // Creates new monster object and adds it to the 
    // existing array through Redux
    createNewMonster = () => {
        var monster = {}
        var element = this.props.selectedElement.id
        var name = document.getElementById('new_name_input').value;
        var atk = document.getElementById('atk_input').value;
        var def = document.getElementById('def_input').value;
        var id = 0;
        if (!this.props.monsters.length === 0) {
            id = this.props.monsters[this.props.monsters.length - 1].id + 1;
        }
        if (name.length === 0 || atk.length === 0 || def.length === 0) {
            if (name.length === 0) {
                alert('You must provide a name!')
            }
            if (atk.length === 0) {
                alert('You must provide an attack value!')
            }
            if (def.length === 0) {
                alert('You must provide a defense value!')
            }
        } else {
            monster = { element, name, atk, def, id }
            this.props.createMonster(monster)
        }
    }

    render() {
        return (
            <div className='createMonster-main'>
                <p className="create-title">Create Monster</p>
                <div className='newMonster-wrapper'>
                    <div className="elem_select">
                        <img alt="Previous element" className="select_arrow left" onClick={() => this.changeElement('prev')} src="icons/arrow-left.svg"></img>
                        <div className="elemInfo">
                            <p>{this.props.selectedElement.name}</p>
                            <img alt="Element" className="elem" src={this.props.selectedElement.icon}></img>
                        </div>
                        <img alt="Next element" className="select_arrow right" onClick={() => this.changeElement('next')} src="icons/arrow-right.svg"></img>
                    </div>
                    <input type="text" placeholder="Monster name..." className="newmonster-name" id='new_name_input' />
                    <div className="atk-def-select">
                        <div className='atk-wrapper'>
                            <img alt="Attack" src="icons/atk.svg"></img>
                            <input type="number" id="atk_input" min={1} max={20} />
                        </div>
                        <div className='def-wrapper'>
                            <img alt="Defense" src="icons/def.svg"></img>
                            <input type="number" id="def_input" min={1} max={20} />
                        </div>
                    </div>
                    <button onClick={() => this.createNewMonster()}>Create</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        monsters: state.monsters,
        selectedElement: state.selectedElement
    }
}

export default connect(mapStateToProps, { createMonster, selectElement })(CreateMonster)
