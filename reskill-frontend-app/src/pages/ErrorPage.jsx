const ErrorPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "60vh",
      }}
    >
      <h1 style={{ textAlign: "center" }}>404 Error: Page Not Found</h1>
      <p style={{ textAlign: "center" }}>
        The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default ErrorPage;
