import React, { useEffect, useState } from 'react';
import './Loading.css';

function Loading() {

  return (
    <div className='loading-overlay' data-test-id="loading">
      Carregando...
    </div>
  )
}

export default Loading;
