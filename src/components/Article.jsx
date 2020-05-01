import React from 'react';

export default function Article( props ){

  return (
    <div className="article">
      <p>Language: { props.data } { props.data === "JavaScript" ? " Rocks!" : "" }</p>
    </div>
  );

}

