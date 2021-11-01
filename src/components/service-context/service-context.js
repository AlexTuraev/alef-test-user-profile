import React from 'react';

const ServiceContext = React.createContext();
const ServiceProvider = ServiceContext.Provider;

export{
    ServiceContext,
    ServiceProvider
}