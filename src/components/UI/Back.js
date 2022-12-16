import { BiArrowToLeft } from 'react-icons/bi';

const Back = function (props) {
  const { changePage, addNote } = props;
  return (
    <BiArrowToLeft
      onClick={() => {
        changePage();
        addNote?.(
          JSON.parse(localStorage.getItem('data'))[0],
          JSON.parse(localStorage.getItem('data'))[1]
        );
      }}
      size="30"
    />
  );
};
export default Back;
