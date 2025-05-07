type AppConfigTypes = {
    publicId: string;
    templateId: string;
    serviceId: string;
  };
  
  const appConfig: AppConfigTypes = {
    serviceId: import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    publicId: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
  };
  
  export default appConfig;
  