const element = (
  <div class="congrats-card-container">
    <h1 className="main-heading">Congratulations</h1>
    <div className="person-container">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 className="person-name">Kiran V</h1>
      <p className="description">
        Vishnu Institute of Computer Education and Technology,Bhimavaram
      </p>
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
