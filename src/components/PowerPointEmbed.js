import React from 'react';

function PowerPointEmbed() {
  return (
    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
      <h2>Recommended Measures to Mitigate Crises</h2>
      <p>
        Below is our suggested plan. You can also{' '}
        <a href="https://onedrive.live.com/embed?resid=EXAMPLE_LINK" target="_blank" rel="noreferrer">
          open it in a new tab
        </a>.
      </p>
      <div style={{ width: '100%', height: '500px', margin: '0 auto' }}>
        <iframe
          title="Recommended Measures PPT"
          src="https://onedrive.live.com/embed?resid=EXAMPLE_LINK&authkey=EXAMPLE_KEY&em=2"
          frameBorder="0"
          width="100%"
          height="100%"
        >
        </iframe>
      </div>
    </div>
  );
}

export default PowerPointEmbed;
