import styles from './NotesContainer.module.css';
import FindNoteForm from './FindNoteForm';
import Notes from './Notes';
import Button from '../UI/Button';
const NotesContainer = function (props) {
  const { page, changePage, notes, deleteNote, changeInfo } = props;
  return (
    <div className={styles.notes__container}>
      <h1 className="notes__title">Notes</h1>
      <FindNoteForm />
      <Notes
        changeInfo={changeInfo}
        changePage={changePage}
        deleteNote={deleteNote}
        notes={notes}
      />
      <Button changePage={changePage} page={page} />
    </div>
  );
};

export default NotesContainer;
