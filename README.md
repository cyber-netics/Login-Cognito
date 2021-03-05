# AWS Cognito Login with React

---

## Cognito configs

    - In `Login-Cognito/src/userPool.js` file change your `UserPoolId` and `ClientId`

- UserPoolId can be found in
  <p>
    <img src="https://github.com/cyber-netics/Login-Cognito/blob/main/.assets/images/poolid.png"/>
  </p>

- ClientId can be found in
  <p>
    <img src="https://github.com/cyber-netics/Login-Cognito/blob/main/.assets/images/app-client-settings-clientid.png"/>
  </p>

<br/>
<br/>

## AWS Cognito Setup

    - AWS Cognito User managment with signup, login, and forgot password options

- Navigate to AWS Cognito
  <p>
    <img src="https://github.com/cyber-netics/Login-Cognito/blob/main/.assets/images/goto-cognito.png"/>
  </p>

- Create User Pool
  <p>
    <img src="https://github.com/cyber-netics/Login-Cognito/blob/main/.assets/images/create-user-pool.png"/>
  </p>

- Name Your User Pool
  <p>
    <img src="https://github.com/cyber-netics/Login-Cognito/blob/main/.assets/images/name-user-pool.png"/>
  </p>

- Initial Settings that cannot be changed after creating
  <p>
    <img src="https://github.com/cyber-netics/Login-Cognito/blob/main/.assets/images/initial-settings.png"/>
  </p>

- Password Strength Settings
  <p>
    <img src="https://github.com/cyber-netics/Login-Cognito/blob/main/.assets/images/password-strength-settings.png"/>
  </p>

- Two Factor authentication settings
  <p>
    <img src="https://github.com/cyber-netics/Login-Cognito/blob/main/.assets/images/two-factor-authentication-setitngs.png"/>
  </p>

- Custom Email Address Settings
<p>
   <img src="https://github.com/cyber-netics/Login-Cognito/blob/main/.assets/images/custom-email-settings.png"/>
 </p>

- Email Verification Settings
<p>
   <img src="https://github.com/cyber-netics/Login-Cognito/blob/main/.assets/images/email-verification-settings.png"/>
 </p>

- User Invitation Settings
<p>
   <img src="https://github.com/cyber-netics/Login-Cognito/blob/main/.assets/images/user-initation-settings.png"/>
 </p>

- [Remember User Settings](https://aws.amazon.com/premiumsupport/knowledge-center/cognito-user-pool-remembered-devices/)
<p>
   <img src="https://github.com/cyber-netics/Login-Cognito/blob/main/.assets/images/remember-user-settins.png"/>
 </p>

- User Access Settings
<p>
   <img src="https://github.com/cyber-netics/Login-Cognito/blob/main/.assets/images/user-access-settings.png"/>
 </p>

- User pool access settings, give name, uncheck `Generate client secret` 
<p>
    <img src="https://github.com/cyber-netics/Login-Cognito/blob/main/.assets/images/user-pool-access-settings.png"/>
 </p>


- We can setup custom lambda triggers
<p>
    <img src="https://github.com/cyber-netics/Login-Cognito/blob/main/.assets/images/custom-triggers-settings.png"/>
 </p>

- Review and Create
<p>
    <img src="https://github.com/cyber-netics/Login-Cognito/blob/main/.assets/images/review-create.png">
 </p>
