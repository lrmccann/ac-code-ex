import React, { useEffect, useState } from "react";
import jsonPhotos from "../../prodPhotos";
import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./scrollPhotos.css";
// import {LazyImg} from '../LazyLoadImg/index';

const ScrollPhotos = (props, ) => {
  const data = props.data;
  const dataLimit = props.photoLimit;
  const pageLimit = props.pageLimit;
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  

  const [disabled, setDisabled] = useState();
  const [disabledTwo, setDisabledTwo] = useState();

  useEffect(() => {
    if (currentPage === 1) {
      setDisabled(true);
    } else if (currentPage === 3) {
      setDisabledTwo(true);
    } else {
      setDisabled(false);
      setDisabledTwo(false);
    }
  }, [currentPage]);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return jsonPhotos.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <main className="scroll-photo-cont container fixed">
      <button
        className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        onClick={goToPreviousPage}
        disabled={disabled}
      >
        <FontAwesomeIcon
          className="font-aws-icon"
          icon={faArrowAltCircleLeft}
        ></FontAwesomeIcon>
      </button>
      <div className="photo-cont container-fixed">
        {getPaginatedData().map((d, k) => (
          <div className="img-cont" key={k}>
            <Fade direction="right" delay={4} damping={4}>
                <img 
                  className="prod-photo"
                  src={d.imgSrc}
                  alt={d.imgAlt}
                  id={d.id}
                  key={d.id}
                ></img> 
            </Fade>
          </div>
        ))}
        <div className="page-numb-cont container-fixed">
          {getPaginationGroup().map((item, index) => (
            <span key={index}>
              <button
                disabled={true}
                onClick={changePage}
                className={`paginationItem ${
                  currentPage === item ? "active" : null
                }`}
              >
                <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
              </button>
            </span>
          ))}
        </div>
      </div>
      <button
        className={`next ${currentPage === pages ? "disabled" : ""}`}
        onClick={goToNextPage}
        disabled={disabledTwo}
      >
        <FontAwesomeIcon
          className="font-aws-icon"
          icon={faArrowAltCircleRight}
        ></FontAwesomeIcon>
      </button>
    </main>
  );
}

export default ScrollPhotos;
