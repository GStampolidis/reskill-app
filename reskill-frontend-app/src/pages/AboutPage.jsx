const AboutPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "60vh",
      }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-20"
    >
      <h1 style={{ fontSize: "3rem", textAlign: "center" }}>
        About Our Posts Site
      </h1>
      <p style={{ fontSize: "2rem", textAlign: "center" }}>
        Our Posts Site is a platform for sharing and discovering a wide range of
        posts on various topics. Whether you are interested in technology,
        travel, food, or any other subject, you will find a vibrant community of
        contributors and readers here. At Our Posts Site, we believe in
        fostering meaningful discussions and providing a space for individuals
        to express their thoughts and ideas. Our goal is to create an inclusive
        and engaging environment for everyone to connect and learn from each
        other. Join us in exploring the diverse collection of posts, sharing
        your own experiences, and connecting with like-minded individuals from
        around the world.
      </p>
    </div>
  );
};

export default AboutPage;
