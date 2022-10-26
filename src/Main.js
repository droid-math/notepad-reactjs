function Main() {
    return (
        <div className="main">
            <div className="main-edit-note">
                <input type="text" id="title" autoFocus/>
                <textarea  id="body" placeholder="Por favor, insira suas anotações aqui!"/>
            </div>
            <div className="main-preview-note">
                <div className="main-preview-title">Title</div>
                <div className="main-preview-text">Conteúdo</div>
            </div>
        </div>
    )
} 

export default Main;