/**
 * Created by minhluong on 4/16/17.
 */
import React from 'react'
import CompetitionItem from './CompetitionItem.js'

export default class CompetitionsView extends React.Component {
    constructor(props) {
        super(props);
        this.onClickCompetition = this.onClickCompetition.bind(this);
    }
    onClickCompetition(competitionId) {
        // alert(`Clicked ${competitionId}`);
    }
    render() {
        let competitions = this.props.competitions;
        return (
            <div>
                {
                    competitions.map((competition) => {
                        return <CompetitionItem
                            competition={competition}
                            key={competition.id}
                            onClick={() => this.onClickCompetition(competition.id)}/>
                    })
                }
            </div>
        );
    }
}