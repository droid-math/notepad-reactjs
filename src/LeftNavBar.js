
function LeftNavBar({notes, onAdd, onDelete}) {
    return (
        <div className='leftnav'>
            <div className='leftnav-header'>
                <p>Suas anotações</p>
                <button onClick={onAdd} className="leftnav-add"><i className="fa-solid fa-circle-plus"></i></button>
            </div>
            <div className='leftnav-notes'>
                {notes.map((note) => (
                    <div className="leftnav-notes-card">
                    <div className="leftnav-notes-title">
                        <p>{note.title}</p>
                        <button onClick={() => onDelete(note.id)} className="leftnav-delete">Deletar</button>
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