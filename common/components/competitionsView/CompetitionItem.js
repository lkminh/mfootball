/**
 * Created by minhluong on 4/16/17.
 */
import React from 'react'

export default class CompetitionItem extends React.Component {
    render () {
        let competition = this.props.competition;

        return (
            <div onClick={this.props.onClick}>
                <p><strong>{competition.caption}</strong></p>
                <p>Number Of Teams: {competition.numberOfTeams}</p>
                <p>Current Match Day: {competition.currentMatchday}</p>
            </div>
        );
    }
}