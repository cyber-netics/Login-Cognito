import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-2_zyHYW5tRJ",
  ClientId: "svd8p9s9op8jiqou4nek651nb",
};

export default new CognitoUserPool(poolData);
