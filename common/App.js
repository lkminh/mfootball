/**
 * Created by minhluong on 4/16/17.
 */
import React from 'react'
import {connect} from 'react-redux'
import CompetitionsView from "./components/competitionsView/CompetitionsView"
import Loader from './components/loader/Loader'
import {fetchCompetitions} from './store/competition'



class App extends React.Component {

    // componentDidMount() {
    //     this.props.dispatch(fetchCompetitions());
    // }

    render() {
        let content = this.props.isFetching ? <Loader/> : <CompetitionsView competitions={this.props.competitions}/>;
        return (
            <div>
                {content}
            </div>
        );
    }
}

const mapStateToProps = (state)=> {
    return state;
};
// const mapDispatchToProps = (dispatch) => {
//     return {dispatch};
// };

export default connect(mapStateToProps)(App);

