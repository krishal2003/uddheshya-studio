import Link from "next/link";
import React from "react";

const NotFound: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
    backgroundColor: "#f4f4f4",
    color: "#333",
    padding: "20px",
  };

  const headingStyle: React.CSSProperties = {
    fontSize: "6rem",
    color: "#26295C",
    marginBottom: "10px",
  };

  const textStyle: React.CSSProperties = {
    fontSize: "1.5rem",
    marginBottom: "30px",
  };

  const buttonStyle: React.CSSProperties = {
    padding: "12px 24px",
    backgroundColor: "#26295C",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "4px",
    transition: "background-color 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>404</h1>
      <p style={textStyle}>Oops! The page you're looking for doesn't exist.</p>
      <Link href="mailto:business@uddheshyagroup.com" style={buttonStyle}>
        Contact Us
      </Link>
    </div>
  );
};

export default NotFound;
