function LeftNavBar({}) {
    return (
        <div className='leftnav'>
            <div className='leftnav-header'>
                <p>Suas anotações</p>
                <button className="leftnav-add"><i className="fa-solid fa-circle-plus"></i></button>
            </div>
            <div className='leftnav-notes'>
                <div className="leftnav-notes-card">
                    <div className="leftnav-notes-title">
                        <p>Title</p>
                        <button className="leftnav-delete">Deletar</button>
                    </div>
                    <div className="leftnav-notes-preview">
                        <p>Preview</p>
                    </div>
                    <div className="leftnav-notes-data">
                        Last Modifed [date]
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftNavBar;