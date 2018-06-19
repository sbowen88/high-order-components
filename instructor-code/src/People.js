import React from 'react';
import loadingHOC from './LoadingHOC';
import CollapseRP from './CollapseRP';

function People(props) {
  let people = props.people.map((e, i) => (
    <CollapseRP title={e.name} key={i}>
      {(styles) => (
        <div style={styles}>
          <p>{ e.hair_color }</p>
          <p>{ e.eye_color }</p>
          <p>{ e.height }</p>
        </div>)
      }
    </CollapseRP>
  ))

  return (
    <div>
      { people }
    </div>
  )
}

export default loadingHOC(People)