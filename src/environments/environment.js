const env = process.env.NODE_ENV;
const app_mode = env ? env.trim() : "development";
console.log("env", env, process.env);

const environment = {
  development: {
    api_base_url: "http://localhost:9000",
  },
  production: {
    api_base_url: "https://localhost:9000",
  },
};

export const APP_ENVIRONMENT = environment[app_mode];

