type AppConfigTypes = {
    apiUrl: string;
  };
  
  const appConfig: AppConfigTypes = {
    apiUrl: import.meta.env.VITE_URL,
  };
  
  export default appConfig;
  