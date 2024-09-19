# Resend with Preview 

This project demonstrates how to integrate **Resend SDK** with **React Email** to build dynamic email templates. It also showcases a custom **VS Code preview feature** to make the email development experience smoother.

![Resend Preview Feature](https://github.com/chuanxshi/resend-preview/blob/master/public/static/resend.gif?raw=true)

## Key Features

### 1. Resend SDK Integration
- **Resend SDK** allows for the simple and effective sending of emails using a React-based component.
- The SDK is used to send emails by calling `resend.emails.send()` with a fully customized email template built using React.
- Example usage of Resend SDK in the project:

  ```typescript
  const { data, error } = await resend.emails.send({
    from: 'Your Name <your.email@example.com>',
    to: ['recipient@example.com'],
    subject: 'Hello world',
    react: EmailTemplate({ username: 'alanturing' }),
  });

The SDK provides a clean interface to handle errors and responses, simplifying the process of sending emails programmatically.

### 2. React Email for Email Templates

This project uses **React Email**, a React-based library designed to create responsive and structured email templates.

**Key benefits of React Email:**

- You can reuse React components for modular email templates.
- Conditional rendering and dynamic content (e.g., passing in username as a prop to customize emails).

**Example Email Template:**

  ```typescript
  export const EmailTemplate = ({ username = 'alanturing' }) => (
  <Container>
      <Text>@{username}, a personal access token was created on your account.</Text>
      <Button href="https://example.com">View your token</Button>
  </Container>
  );
```
### 3. VS Code Preview Feature

One of the unique additions to this project is the VS Code live preview feature. It allows developers to see the rendered email template within the IDE without having to send an actual email.

By using this feature, developers can:

- Quickly preview changes in real-time while editing the email template.
- Test different values (such as username) in the preview before sending the email.

**How it works:** The `isPreview` prop in the `EmailTemplate` component allows the same component to be rendered directly in the VS Code preview window. You can instantly update the username or other dynamic parts of the template and see the effect in real time.

## How to Run the Project

### 1. Installation
To install the dependencies, run the following command:
  ```typescript
  pnpm install
  ```

### 2. Setup Environment Variables

You need to add your Resend API Key to a `.env.local` file in the root directory:
  ```typescript
  RESEND_API_KEY=your_resend_api_key
  ```

### 3. Run the Project

To start the project locally, run:

  ```typescript
  pnpm dev
  ```

  You can now view the email template in your browser and use the VS Code preview for real-time updates. 
  
  Feel free to modify any part as needed!





