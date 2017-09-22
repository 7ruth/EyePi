/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import { makeSelectEpisodes, makeSelectLoading, makeSelectError, makeSelectMaxNumVotes } from 'containers/App/selectors';
import H2 from 'components/H2';
import IndicatorList from 'components/IndicatorList';
import CenteredSection from './CenteredSection';
import Section from './Section';
import messages from './messages';
import { loadEpisodes } from '../App/actions';
import P from './P';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    // Load episodes when this component mounts
    this.props.onPageLoadGetEpisodes();
  }

  render() {
    const { loading, error, episodes, maxNumVotes } = this.props;
    const IndicatorListProps = {
      loading,
      error,
      episodes,
    };
    const episodeTableProps = episodes;

    const columns = [{
      Header: 'Title',
      accessor: 'originalTitle',
      width: 200,
    }, {
      Header: 'Season',
      accessor: 'seasonNumber',
      width: 100,
      Cell: ({ value }) => (
        <div
          style={{
            textAlign: 'center',
          }}
        >
          {value}
        </div>
      ),
      filterMethod: (filter, row) => {
        if (filter.value === 'all') {
          return true;
        }
        if (Number.parseInt(filter.value, 10) === row[filter.id]) {
          return row;
        }
        return false;
      },
      Filter: ({ filter, onChange }) =>
        <select
          onChange={(event) => onChange(event.target.value)}
          style={{ width: '100%' }}
          value={filter ? filter.value : 'all'}
        >
          <option value="all">All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </select>,
    }, {
      Header: 'Episode #',
      accessor: 'episodeNumber',
      width: 100,
      Cell: ({ value }) => (
        <div
          style={{
            textAlign: 'center',
          }}
        >
          {value}
        </div>
      ),
    }, {
      Header: 'Rating',
      accessor: 'averageRating',
      width: 200,
      Cell: (row) => { // eslint-disable-line
        return (
          <div>
            {[...Array(Math.round(row.original.averageRating / 2))].map((_, i) => { // eslint-disable-line
              return <img key={i} alt="Picard" height={34} src="https://www.disruptorbeam.com/assets/uploaded/news-thumbnails/crew_icon_enterprise_d_picard.png" />;
            })}
          </div>
        );
      },
    }, {
      Header: 'Number of Votes',
      accessor: 'numVotes',
      width: 200,
      Cell: (row) => (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#dadada',
            borderRadius: '2px',
          }}
        >
          <div
            style={{
              width: `${(row.value / maxNumVotes) * 100}%`,
              height: '100%',
              backgroundColor: row.value > (maxNumVotes * 0.66) ? '#85cc00' //eslint-disable-line
                : row.value > (maxNumVotes * 0.33) ? '#ffbf00'
                : '#ff2e00',
              borderRadius: '2px',
              transition: 'all .2s ease-out',
            }}
          />
        </div>
      ),
    }, {
      Header: 'Runtime (Sort Disabled)',
      accessor: 'runtimeMinutes',
      width: 100,
      sortable: false,
      Cell: ({ value }) => (
        <div
          style={{
            textAlign: 'center',
          }}
        >
          {value}
        </div>
      ),
    }, {
      Header: 'Year',
      accessor: 'startYear',
      width: 80,
      Cell: ({ value }) => (
        <div
          style={{
            textAlign: 'center',
          }}
        >
          {value}
        </div>
      ),
    }];

    return (
      <article>
        <Helmet
          title="Star Trek: The Next Generation"
          meta={[
            { name: 'description', content: 'Star Trek: The Next Generation Episode Guide' },
          ]}
        />
        <div>
          <CenteredSection>
            <H2>
              <FormattedMessage {...messages.projectHeader} />
            </H2>
            <P>
              <FormattedMessage {...messages.projectMessage} />
            </P>
          </CenteredSection>
          <Section>
            { episodes &&
              <ReactTable
                filterable
                data={episodeTableProps}
                columns={columns}
                style={{ height: '550px' }}
                defaultPageSize={30}
                className="-striped -highlight"
              />
            }
            <IndicatorList {...IndicatorListProps} />
          </Section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  episodes: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  maxNumVotes: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.bool,
  ]),
  onPageLoadGetEpisodes: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onPageLoadGetEpisodes: () => {
      dispatch(loadEpisodes());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  episodes: makeSelectEpisodes(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  maxNumVotes: makeSelectMaxNumVotes(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
