import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span>&</span>
          <br />
          education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Computer Engineering</h4>
                <h5>PCCOE, Pune</h5>
              </div>
              <h3>2024–28</h3>
            </div>
            <p>
              Pursuing a Bachelor of Technology in Computer Engineering at
              Pimpri Chinchwad College of Engineering, Pune. Building real-world
              projects across full-stack web development, AI/ML, and computer
              vision while growing as an engineer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
