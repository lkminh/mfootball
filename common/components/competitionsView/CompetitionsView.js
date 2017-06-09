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
            <div className="container">
                {
                    competitions.map((competition) => {
                        return <CompetitionItem
                            className="col-lg-3 col-md-4 col-sm-6"
                            competition={competition}
                            key={competition.id}
                            onClick={() => this.onClickCompetition(competition.id)}/>
                    })
                }
            </div>
        );
    }
}