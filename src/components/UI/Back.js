import { BiArrowToLeft } from 'react-icons/bi';

const Back = function (props) {
  const { changePage } = props;
  return (
    <BiArrowToLeft
      onClick={() => {
        console.log('Clicked');
        changePage();
      }}
      size="30"
    />
  );
};
export default Back;
