/**
 * Created by minhluong on 4/16/17.
 */
import express from 'express'
import request from 'request'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import App from '../common/App'
import configureStore from '../common/store/configureStore'

const app = express();
app.get('/api', (req, res) => {
    res.send({
        message: 'I am a server route and can also be hot reloaded!'
    });
});
app.get('*', (req,res) => {
    let options = {
        url: 'http://api.football-data.org/v1/competitions',
        headers: {
            "X-Auth-Token": "f732e293c8b34f54b32b6191c4eb62d3"
        }
    };

    // request(options, (error, response, body) => {
        const initialState = {
            isFetching: false,
            competitions: []
        };

        const store = configureStore(initialState);

        let html = renderToString(
            <Provider store={store}>
                <App />
            </Provider>
        );
        const finalState = store.getState();
        res.send(renderFullPage(html, finalState))
    // });
});

function renderFullPage(html, preloadedState) {
    return `
    <!doctype html>
    <html class="no-js" lang="">
        <head>
            <meta charset="utf-8">
            <meta http-equiv="x-ua-compatible" content="ie=edge">
            <title>M Football</title>
            <meta name="description" content="">
            <meta name="viewport" content="width=device-width,  initial-scale=1">
            <link rel="stylesheet" href="http://localhost:3001/styles.css">
        </head>
        <body>
            <div id="root">${html}</div>
            <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
            </script>
            <script src="http://localhost:3001/client.js"></script>
        </body>
    </html>`;
}
export default app

const COMPETITIONS = [
    {
        _links: {
            self: {
                href: "http://api.football-data.org/v1/competitions/424"
            },
            teams: {
                href: "http://api.football-data.org/v1/competitions/424/teams"
            },
            fixtures: {
                href: "http://api.football-data.org/v1/competitions/424/fixtures"
            },
            leagueTable: {
                href: "http://api.football-data.org/v1/competitions/424/leagueTable"
            }
        },
        id: 424,
        caption: "European Championships France 2016",
        league: "EC",
        year: "2016",
        currentMatchday: 7,
        numberOfMatchdays: 46,
        numberOfTeams: 24,
        numberOfGames: 51,
        lastUpdated: "2017-04-16T09:10:22Z"
    },
    {
        _links: {
            self: {
                href: "http://api.football-data.org/v1/competitions/426"
            },
            teams: {
                href: "http://api.football-data.org/v1/competitions/426/teams"
            },
            fixtures: {
                href: "http://api.football-data.org/v1/competitions/426/fixtures"
            },
            leagueTable: {
                href: "http://api.football-data.org/v1/competitions/426/leagueTable"
            }
        },
        id: 426,
        caption: "Premier League 2016/17",
        league: "PL",
        year: "2016",
        currentMatchday: 33,
        numberOfMatchdays: 38,
        numberOfTeams: 20,
        numberOfGames: 380,
        lastUpdated: "2017-04-17T20:30:10Z"
    },
    {
        _links: {
            self: {
                href: "http://api.football-data.org/v1/competitions/427"
            },
            teams: {
                href: "http://api.football-data.org/v1/competitions/427/teams"
            },
            fixtures: {
                href: "http://api.football-data.org/v1/competitions/427/fixtures"
            },
            leagueTable: {
                href: "http://api.football-data.org/v1/competitions/427/leagueTable"
            }
        },
        id: 427,
        caption: "Championship 2016/17",
        league: "ELC",
        year: "2016",
        currentMatchday: 43,
        numberOfMatchdays: 46,
        numberOfTeams: 24,
        numberOfGames: 552,
        lastUpdated: "2017-04-17T16:30:18Z"
    },
    {
        _links: {
            self: {
                href: "http://api.football-data.org/v1/competitions/428"
            },
            teams: {
                href: "http://api.football-data.org/v1/competitions/428/teams"
            },
            fixtures: {
                href: "http://api.football-data.org/v1/competitions/428/fixtures"
            },
            leagueTable: {
                href: "http://api.football-data.org/v1/competitions/428/leagueTable"
            }
        },
        id: 428,
        caption: "League One 2016/17",
        league: "EL1",
        year: "2016",
        currentMatchday: 44,
        numberOfMatchdays: 46,
        numberOfTeams: 24,
        numberOfGames: 552,
        lastUpdated: "2017-04-17T16:10:14Z"
    },
    {
        _links: {
            self: {
                href: "http://api.football-data.org/v1/competitions/429"
            },
            teams: {
                href: "http://api.football-data.org/v1/competitions/429/teams"
            },
            fixtures: {
                href: "http://api.football-data.org/v1/competitions/429/fixtures"
            },
            leagueTable: {
                href: "http://api.football-data.org/v1/competitions/429/leagueTable"
            }
        },
        id: 429,
        caption: "FA-Cup 2016/17",
        league: "FAC",
        year: "2016",
        currentMatchday: 7,
        numberOfMatchdays: 38,
        numberOfTeams: 20,
        numberOfGames: 155,
        lastUpdated: "2017-04-12T04:00:04Z"
    },
    {
        _links: {
            self: {
                href: "http://api.football-data.org/v1/competitions/430"
            },
            teams: {
                href: "http://api.football-data.org/v1/competitions/430/teams"
            },
            fixtures: {
                href: "http://api.football-data.org/v1/competitions/430/fixtures"
            },
            leagueTable: {
                href: "http://api.football-data.org/v1/competitions/430/leagueTable"
            }
        },
        id: 430,
        caption: "1. Bundesliga 2016/17",
        league: "BL1",
        year: "2016",
        currentMatchday: 29,
        numberOfMatchdays: 34,
        numberOfTeams: 18,
        numberOfGames: 306,
        lastUpdated: "2017-04-16T17:30:11Z"
    },
    {
        _links: {
            self: {
                href: "http://api.football-data.org/v1/competitions/431"
            },
            teams: {
                href: "http://api.football-data.org/v1/competitions/431/teams"
            },
            fixtures: {
                href: "http://api.football-data.org/v1/competitions/431/fixtures"
            },
            leagueTable: {
                href: "http://api.football-data.org/v1/competitions/431/leagueTable"
            }
        },
        id: 431,
        caption: "2. Bundesliga 2016/17",
        league: "BL2",
        year: "2016",
        currentMatchday: 29,
        numberOfMatchdays: 34,
        numberOfTeams: 18,
        numberOfGames: 306,
        lastUpdated: "2017-04-17T20:10:22Z"
    },
    {
        _links: {
            self: {
                href: "http://api.football-data.org/v1/competitions/432"
            },
            teams: {
                href: "http://api.football-data.org/v1/competitions/432/teams"
            },
            fixtures: {
                href: "http://api.football-data.org/v1/competitions/432/fixtures"
            },
            leagueTable: {
                href: "http://api.football-data.org/v1/competitions/432/leagueTable"
            }
        },
        id: 432,
        caption: "DFB-Pokal 2016/17",
        league: "DFB",
        year: "2016",
        currentMatchday: 5,
        numberOfMatchdays: 126,
        numberOfTeams: 64,
        numberOfGames: 62,
        lastUpdated: "2017-03-24T09:40:16Z"
    },
    {
        _links: {
            self: {
                href: "http://api.football-data.org/v1/competitions/433"
            },
            teams: {
                href: "http://api.football-data.org/v1/competitions/433/teams"
            },
            fixtures: {
                href: "http://api.football-data.org/v1/competitions/433/fixtures"
            },
            leagueTable: {
                href: "http://api.football-data.org/v1/competitions/433/leagueTable"
            }
        },
        id: 433,
        caption: "Eredivisie 2016/17",
        league: "DED",
        year: "2016",
        currentMatchday: 31,
        numberOfMatchdays: 34,
        numberOfTeams: 18,
        numberOfGames: 306,
        lastUpdated: "2017-04-16T16:40:40Z"
    },
    {
        _links: {
            self: {
                href: "http://api.football-data.org/v1/competitions/434"
            },
            teams: {
                href: "http://api.football-data.org/v1/competitions/434/teams"
            },
            fixtures: {
                href: "http://api.football-data.org/v1/competitions/434/fixtures"
            },
            leagueTable: {
                href: "http://api.football-data.org/v1/competitions/434/leagueTable"
            }
        },
        id: 434,
        caption: "Ligue 1 2016/17",
        league: "FL1",
        year: "2016",
        currentMatchday: 31,
        numberOfMatchdays: 38,
        numberOfTeams: 20,
        numberOfGames: 380,
        lastUpdated: "2017-04-17T12:58:27Z"
    },
    {
        _links: {
            self: {
                href: "http://api.football-data.org/v1/competitions/435"
            },
            teams: {
                href: "http://api.football-data.org/v1/competitions/435/teams"
            },
            fixtures: {
                href: "http://api.football-data.org/v1/competitions/435/fixtures"
            },
            leagueTable: {
                href: "http://api.football-data.org/v1/competitions/435/leagueTable"
            }
        },
        id: 435,
        caption: "Ligue 2 2016/17",
        league: "FL2",
        year: "2016",
        currentMatchday: 33,
        numberOfMatchdays: 38,
        numberOfTeams: 20,
        numberOfGames: 380,
        lastUpdated: "2017-04-17T20:30:31Z"
    },
    {
        _links: {
            self: {
                href: "http://api.football-data.org/v1/competitions/436"
            },
            teams: {
                href: "http://api.football-data.org/v1/competitions/436/teams"
            },
            fixtures: {
                href: "http://api.football-data.org/v1/competitions/436/fixtures"
            },
            leagueTable: {
                href: "http://api.football-data.org/v1/competitions/436/leagueTable"
            }
        },
        id: 436,
        caption: "Primera Division 2016/17",
        league: "PD",
        year: "2016",
        currentMatchday: 32,
        numberOfMatchdays: 38,
        numberOfTeams: 20,
        numberOfGames: 380,
        lastUpdated: "2017-04-17T20:20:26Z"
    },
    {
        _links: {
            self: {
                href: "http://api.football-data.org/v1/competitions/437"
            },
            teams: {
                href: "http://api.football-data.org/v1/competitions/437/teams"
            },
            fixtures: {
                href: "http://api.football-data.org/v1/competitions/437/fixtures"
            },
            leagueTable: {
                href: "http://api.football-data.org/v1/competitions/437/leagueTable"
            }
        },
        id: 437,
        caption: "Liga Adelante 2016/17",
        league: "SD",
        year: "2016",
        currentMatchday: 34,
        numberOfMatchdays: 42,
        numberOfTeams: 22,
        numberOfGames: 462,
        lastUpdated: "2017-04-17T18:10:26Z"
    },
    {
        _links: {
            self: {
                href: "http://api.football-data.org/v1/competitions/438"
            },
            teams: {
                href: "http://api.football-data.org/v1/competitions/438/teams"
            },
            fixtures: {
                href: "http://api.football-data.org/v1/competitions/438/fixtures"
            },
            leagueTable: {
                href: "http://api.football-data.org/v1/competitions/438/leagueTable"
            }
        },
        id: 438,
        caption: "Serie A 2016/17",
        league: "SA",
        year: "2016",
        currentMatchday: 32,
        numberOfMatchdays: 38,
        numberOfTeams: 20,
        numberOfGames: 380,
        lastUpdated: "2017-04-16T20:40:30Z"
    },
    {
        _links: {
            self: {
                href: "http://api.football-data.org/v1/competitions/439"
            },
            teams: {
                href: "http://api.football-data.org/v1/competitions/439/teams"
            },
            fixtures: {
                href: "http://api.football-data.org/v1/competitions/439/fixtures"
            },
            leagueTable: {
                href: "http://api.football-data.org/v1/competitions/439/leagueTable"
            }
        },
        id: 439,
        caption: "Primeira Liga 2016/17",
        league: "PPL",
        year: "2016",
        currentMatchday: 29,
        numberOfMatchdays: 34,
        numberOfTeams: 18,
        numberOfGames: 306,
        lastUpdated: "2017-04-16T09:11:35Z"
    },
    {
        _links: {
            self: {
                href: "http://api.football-data.org/v1/competitions/440"
            },
            teams: {
                href: "http://api.football-data.org/v1/competitions/440/teams"
            },
            fixtures: {
                href: "http://api.football-data.org/v1/competitions/440/fixtures"
            },
            leagueTable: {
                href: "http://api.football-data.org/v1/competitions/440/leagueTable"
            }
        },
        id: 440,
        caption: "Champions League 2016/17",
        league: "CL",
        year: "2016",
        currentMatchday: 8,
        numberOfMatchdays: 62,
        numberOfTeams: 32,
        numberOfGames: 120,
        lastUpdated: "2017-04-16T09:11:42Z"
    },
    {
        _links: {
            self: {
                href: "http://api.football-data.org/v1/competitions/441"
            },
            teams: {
                href: "http://api.football-data.org/v1/competitions/441/teams"
            },
            fixtures: {
                href: "http://api.football-data.org/v1/competitions/441/fixtures"
            },
            leagueTable: {
                href: "http://api.football-data.org/v1/competitions/441/leagueTable"
            }
        },
        id: 441,
        caption: "Serie B",
        league: "SB",
        year: "2016",
        currentMatchday: 36,
        numberOfMatchdays: 42,
        numberOfTeams: 22,
        numberOfGames: 462,
        lastUpdated: "2017-04-17T20:30:46Z"
    },
    {
        _links: {
            self: {
                href: "http://api.football-data.org/v1/competitions/442"
            },
            teams: {
                href: "http://api.football-data.org/v1/competitions/442/teams"
            },
            fixtures: {
                href: "http://api.football-data.org/v1/competitions/442/fixtures"
            },
            leagueTable: {
                href: "http://api.football-data.org/v1/competitions/442/leagueTable"
            }
        },
        id: 442,
        caption: "English National League",
        league: "ENL",
        year: "2016",
        currentMatchday: 44,
        numberOfMatchdays: 46,
        numberOfTeams: 24,
        numberOfGames: 552,
        lastUpdated: "2017-04-17T16:30:52Z"
    },
    {
        _links: {
            self: {
                href: "http://api.football-data.org/v1/competitions/443"
            },
            teams: {
                href: "http://api.football-data.org/v1/competitions/443/teams"
            },
            fixtures: {
                href: "http://api.football-data.org/v1/competitions/443/fixtures"
            },
            leagueTable: {
                href: "http://api.football-data.org/v1/competitions/443/leagueTable"
            }
        },
        id: 443,
        caption: "League Two",
        league: "EL2",
        year: "2016",
        currentMatchday: 43,
        numberOfMatchdays: 46,
        numberOfTeams: 24,
        numberOfGames: 552,
        lastUpdated: "2017-04-17T16:10:56Z"
    }
];