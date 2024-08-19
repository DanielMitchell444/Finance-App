/* eslint-disable no-undef */
import React, { useCallback, useState } from 'react';

import { usePlaidLink, PlaidLinkOnSuccess } from 'react-plaid-link';

const App = () => {
  const [token, setToken] = useState(null);

  // get link_token from your server when component mounts
  React.useEffect(() => {
    const createLinkToken = async () => {
      const response = await fetch('/api/create_link_token', { method: 'POST' });
      const { link_token } = await JSON.stringify(response)
      setToken(link_token);
    };
    createLinkToken();
  }, []);

  const onSuccess = useCallback<PlaidLinkOnSuccess>((publicToken, metadata) => {
    // send public_token to your server
    // https://plaid.com/docs/api/tokens/#token-exchange-flow
    console.log(publicToken, metadata);
  }, []);

  const { open, ready } = usePlaidLink({
    token,
    onSuccess,
    // onEvent
    // onExit
  });

  return (
    <div>
    <button onClick={() => open()} >
      Connect a bank account
    </button>
    <h1>Hi</h1>
  </div>
  );
};

export default App;