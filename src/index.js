Order.propTypes = {
  cone: PropTypes.bool,
  size: PropTypes.string,
  scoops: PropTypes.arrayOf(PropTypes.string).isRequired
};

Order.propTypes = {
  cone: PropTypes.bool,
  size: PropTypes.string,
  scoops: PropTypes.arrayOf(PropTypes.string).isRequired,
  orderInfo: PropTypes.object.isRequired
};