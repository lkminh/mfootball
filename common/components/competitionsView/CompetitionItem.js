/**
 * Created by minhluong on 4/16/17.
 */
import React from 'react'
import classnames from 'classnames'
import styles from './CompetitionItem.scss'

export default class CompetitionItem extends React.Component {
    render () {
        let competition = this.props.competition;

        return (
            <div className={classnames(this.props.className, styles.competitionItem)} onClick={this.props.onClick}>
                <div className="well">
                    <p><strong>{competition.caption}</strong></p>
                    <p>Number Of Teams: {competition.numberOfTeams}</p>
                    <p>Current Match Day: {competition.currentMatchday}</p>
                </div>
            </div>
        );
    }
}