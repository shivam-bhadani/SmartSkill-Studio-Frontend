enum eEnvironment {
  DEV,
  PROD
}

const environment: eEnvironment = eEnvironment.DEV;

const DEV_ROOT_URL = "http://localhost:8000/api";
const PROD_ROOT_URL = "";

export const rootUrl = environment == eEnvironment.DEV ? DEV_ROOT_URL : PROD_ROOT_URL;