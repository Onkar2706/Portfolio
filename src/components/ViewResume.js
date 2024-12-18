import React from "react";

function ViewResume() {
  const styles = {
    button: {
      fontFamily: 'Poppins',
      padding: "10px 20px",
      backgroundColor: "#5a43cb",
      color: 'white',
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
    },
  };

  const path =
    "https://drive.google.com/file/d/1osuiNQxPBSCUij3xpt5DqpPMkfc0L0ZV/view?usp=drive_link";
  return (
    <a href={path} target="_blank" rel="noopener noreferrer">
      <button style={styles.button}>View Resume</button>
    </a>
  );
}

export default ViewResume;