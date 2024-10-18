const ContactMePage = () => {
  const fakeEmail = "fake@email.com"; 

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
      <h1 style={{ fontSize: "2.5rem", textAlign: "center" }}>Contact Me</h1>
      <p style={{ fontSize: "1.5rem", textAlign: "center" }}>
        If you have any questions, feedback, or inquiries, feel free to reach
        out to us via email at:
      </p>
      <a className="font-bold" href={`mailto:${fakeEmail}`}>{fakeEmail}</a>
    </div>
  );
};

export default ContactMePage;
