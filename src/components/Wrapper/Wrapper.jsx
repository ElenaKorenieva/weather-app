import PropTypes from "prop-types";

const Wrapper = ({ children, background }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
        position: "fixed",
      }}
    >
      {children}
    </div>
  );
};

export default Wrapper;

Wrapper.propTypes = {
  children: PropTypes.any,
  background: PropTypes.string,
};
