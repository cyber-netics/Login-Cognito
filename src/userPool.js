import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-2_80FG63TKJ",
  ClientId: "7kg3bdl5h6m1q1nerakhetvjb4",
};

export default new CognitoUserPool(poolData);
