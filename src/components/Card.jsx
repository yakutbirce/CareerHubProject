import React from "react";

const Card = () => {
  return (
    <div className="card">
      {/*üst kısım */}
      <div className="head">
        <div className="letter">
          <p>U</p>
        </div>

        <div className="info">
          <p>Front End Developer</p>
          <p>CodeCraft Studios</p>
        </div>
      </div>

      {/*Alt Kısım */}

      <div className="body">
        <div className="field">
          <img src="/images/bag.png" alt="" />
          <p>İzmir Bayraklı</p>
        </div>
        <div className="field">
          <img src="/images/bag.png" alt="" />
          <p>İzmir Bayraklı</p>
        </div>
        <div className="field">
          <img src="/images/bag.png" alt="" />
          <p>İzmir Bayraklı</p>
        </div>
        <div className="status">
          <span>Devam Ediyor</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
