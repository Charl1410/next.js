// import React, { useState } from "react";
// import styles from "../styles/carousel.module.css"; // Import the CSS module

// const Carousel = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToNextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const goToPrevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className={styles["carousel-container"]}>
//       <button onClick={goToPrevSlide}>Previous</button>
//       <div className={styles.carousel}>
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`${styles["carousel-slide"]} ${
//               index === currentIndex ? styles.active : ""
//             }`}
//           >
//             <img src={image} alt={`Slide ${index}`} />
//           </div>
//         ))}
//       </div>
//       <button onClick={goToNextSlide}>Next</button>
//     </div>
//   );
// };

// export default Carousel;
