const Herofriends = ({ t }) => {
  return (
    <section className="herofriends">
      <div className="container">
        <div className="subtitle">
          <h2>{t.title}</h2>
          <p>{t.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Herofriends;
