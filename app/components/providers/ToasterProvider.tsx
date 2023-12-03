'use client';

// Toaster needs to be in a provider because it is not native to Next13 and needs to be rendered on the client

import { Toaster } from 'react-hot-toast';

const ToasterProvider = () => {
  return <Toaster />;
};

export default ToasterProvider;
