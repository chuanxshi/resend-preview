import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface GithubAccessTokenEmailProps {
  username?: string;
  isPreview?: boolean; // Control rendering
}

const baseUrl = process.env.VERCEL_URL || "";

export const EmailTemplate = ({
  username = 'alanturing',
  isPreview = false,
}: GithubAccessTokenEmailProps) => {
  const message = "A fine-grained personal access token has been added to your account.";
  
  const emailContent = (
    <>
      {!isPreview && (
        <Preview>
          {message}
        </Preview>
      )}
      <Container style={container}>
        <Img
          src={`${baseUrl}/static/github.png`}
          width="32"
          height="32"
          alt="Github"
        />

        <Text style={title}>
          <strong>@{username}</strong>, a personal access token was created on your account!!!!!!
        </Text>

        <Section style={section}>
          <Text style={text}>
            Hi <strong>{username}</strong>!
          </Text>
          <Text style={text}>
            {message.replace('has been', 'was recently')} {/* Use the message with a slight modification */}
          </Text>

          <Button href="https://example.com" style={button}>
            View your token
          </Button>
        </Section>
        <Text style={links}>
          <Link style={link}>Your security audit log</Link> ・{" "}
          <Link style={link}>Contact support</Link>
        </Text>

        <Text style={footer}>
          GitHub, Inc. ・88 Colin P Kelly Jr Street ・San Francisco, CA 94107
        </Text>
      </Container>
    </>
  );

  return isPreview ? (
    emailContent // Return the content without wrapping
  ) : (
    <Html>
      <Head />
      <Body style={main}>
        {emailContent} 
      </Body>
    </Html>
  );
};

export default EmailTemplate;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  maxWidth: "480px",
  margin: "0 auto",
  padding: "20px 0 48px",
};

const title = {
  fontSize: "24px",
  lineHeight: 1.25,
};

const section = {
  padding: "24px",
  border: "solid 1px #dedede",
  borderRadius: "5px",
  textAlign: "center" as const,
};

const text = {
  margin: "0 0 10px 0",
  textAlign: "left" as const,
};

const button = {
  fontSize: "14px",
  backgroundColor: "#28a745",
  color: "#fff",
  lineHeight: 1.5,
  borderRadius: "0.5em",
  padding: "12px 24px",
};

const links = {
  textAlign: "center" as const,
};

const link = {
  color: "#0366d6",
  fontSize: "12px",
};

const footer = {
  color: "#6a737d",
  fontSize: "12px",
  textAlign: "center" as const,
  marginTop: "60px",
};
