import React from 'react';
import { useHistory } from 'react-router-dom';

function GoBack() {
  const history = useHistory();
  return (
    <button
      onClick={() => {
        history.goBack();
      }}
      className='btn btn-primary '
    >
      Go back
    </button>
  );
}

export default GoBack;
