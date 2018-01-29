import React from 'react';
import Link from 'gatsby-link';
import marked from 'marked';

import { parseDate } from '../utils/date';

const NextMeetup = ({ data: { allAirtable: { edges: [ { node }] }} }) => {
  const parsedDate = parseDate(node.Date);
  return (
    <div>
      <h1>Next Meetup: {parsedDate.month}</h1>
      <small>{parsedDate.date} {parsedDate.time} - <a href={node.URL}>RSVP</a></small>

      {node.Notes && <div dangerouslySetInnerHTML={{__html: marked(node.Notes)}} />}

      {node.TalkNames.length > 0 && <div>
        <h2>Talks</h2>
        <ul>
          {node.TalkNames.map((talk, index) => (
            <li key={talk}>{talk} ({node.Speakers[index]})</li>
          ))}
        </ul>
      </div>}
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
}

export const query = graphql`
  query NextMeetup {
    allAirtable(limit: 1) {
      edges {
        node {
          id,
          Date,
          Notes,
          Location,
          City,
          TalkNames,
          Speakers,
          URL
        }
      }
    }
  }
`;

export default NextMeetup
