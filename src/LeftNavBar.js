
function LeftNavBar({notes, onAdd, onDelete, activeNote, setActiveNote}) {
    return (
        <div className='leftnav'>
            <div className='leftnav-header'>
                <p>Suas anotações</p>
                <button onClick={onAdd} className="leftnav-add"><i className="fa-solid fa-circle-plus"></i></button>
            </div>
            <div className='leftnav-notes'>
                {notes.map((note) => (
                    <div className={`leftnav-notes-card ${note.noteId === activeNote ? 'note-active' : ''}`} onClick={() => setActiveNote(note.noteId)}>
                    <div className="leftnav-notes-title">
                        <p>{note.title} - {note.noteId}</p>
                        <button onClick={() => onDelete(note.noteId)} className="leftnav-delete">Deletar</button>
                    </div>
                    <div className="leftnav-notes-preview">
                        <p>{note.bodyText && note.body.substr(0, 100 + '...')}</p>
                    </div>
                    <div className="leftnav-notes-data">
                        Criado em {note.createDate}
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default LeftNavBar;