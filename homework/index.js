const 게시글등록페이지 = () => {
    return(
        //게시글등록을 위한 내용
        <form className="container">
            <h1 className="page-title">게시물 등록</h1>

            <div className="form-row">
                <div className="form-group">
                    <label className="label">작성자<span className="required">*</span></label>
                    <input type="text" className="input" placeholder="작성자 명을 입력해주세요."/>
                </div>
                <div className="form-group">
                    <label className="label">비밀번호<span className="required">*</span></label>
                    <input type="password" className="input" placeholder="비밀번호를 입력해 주세요."/>
                </div>
            </div>
            <div className="divider" />
            <div className="form-row">
                <div className="form-group">
                    <label className="label">제목<span className="required">*</span></label>
                    <input type="password" class="input" placeholder="제목을 입력해 주세요." />
                </div>
            </div>
            <div className="divider" />
        </form> 
    )
}