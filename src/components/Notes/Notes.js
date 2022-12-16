import Note from './Note';
const Notes = function (props) {
  const { notes, deleteNote, changePage, changeInfo } = props;
  return (
    <div className="notes">
      {notes.map((note) => {
        return (
          <Note
            changeInfo={changeInfo}
            changePage={changePage}
            deleteNote={deleteNote}
            date={note.date}
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
          />
        );
      })}
    </div>
  );
};
export default Notes;
