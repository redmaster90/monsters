import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteMonster } from '../actions';


class Monster extends Component {
    // Returns the element logo path bsaed on its ID
    getElementLogo = (elemId) => {
        switch (elemId) {
            case 0:
                return 'icons/air.svg';
            case 1:
                return 'icons/fire.svg';
            case 2:
                return 'icons/earth.svg';
            case 3:
                return 'icons/water.svg';
            default: return 'icons/air.svg';
        }
    }

    // Deletes monster object from monsters array
    // through Redux
    deleteMonster = event => {
        this.props.deleteMonster(event.target.id)
    }

    render() {
        return (
            <div className="monster-wrapper">
                <div className="first-group">
                    <div className="elem">
                        <img alt="Element" src={this.getElementLogo(this.props.elem)}></img>
                    </div>
                    <div className="info-wrapper">
                        <div className="monster-name">{this.props.name}</div>
                        <div className="attr-wrapper">
                            <div className="monster-atk">
                                <img alt="Attack" src="icons/atk.svg"></img>
                                <i className="attr-atk-value">{this.props.atk}</i>
                            </div>
                            <div className="monster-def">
                                <img alt="Defense" src="icons/def.svg"></img>
                                <i className="attr-def-value">{this.props.def}</i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="delete-monster">
                    <img alt="Delete" src="icons/trash-can.svg" id={this.props.monsterId} onClick={(e) => this.deleteMonster(e)}></img>
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

export default connect(mapStateToProps, { deleteMonster })(Monster)
