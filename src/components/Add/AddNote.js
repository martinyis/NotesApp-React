import { useState } from 'react';
import Button from '../UI/Button';
const AddNote = function (props) {
  const { page, changePage, addNote, info } = props;
  const [title, setTitle] = useState(info[0] !== undefined ? info[0] : '');
  const [content, setContent] = useState(info[1] !== undefined ? info[1] : '');
  const data = [title, content];
  return (
    <>
      <form action="" className="AddNote">
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Untitled"
          type="text"
          className="AddNote__Input"
        />
        <textarea
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          placeholder="Content"
          name=""
          id=""
          className="AddNote__textarea"
        ></textarea>
      </form>
      <Button
        addNote={addNote}
        data={data}
        changePage={changePage}
        page={page}
      />
    </>
  );
};
export default AddNote;
