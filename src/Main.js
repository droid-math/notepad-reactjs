function Main({activeNote}) {
    return (
        <div className="main">
            <div className="main-edit-note">
                <input type="text" id="title" value={activeNote.title} onChange={(e) => onChangeEditFields('title', e.target.value)} autoFocus/>
                <textarea  id="body" placeholder="Por favor, insira suas anotações aqui!" value={activeNote.bodyText} onChange={(e) => onChangeEditFields('body', e.target.value)}/>
            </div>
            <div className="main-preview-note">
                <div className="main-preview-title">{activeNote.title}</div>
                <div className="main-preview-text">{activeNote.bodyText}</div>
            </div>
        </div>
    )
} 

export default Main;