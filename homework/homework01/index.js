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
            <div className="form-row">
                <div className="form-group">
                    <label className="label">내용<span className="required">*</span></label>
                    <textarea type="textarea" className="textarea" placeholder="내용을 입력해 주세요."></textarea>
                </div>
            </div>
            <div clasName="form-row">
                <div className="form-group">
                    <label className="label">주소</label>
                    <div className="zipcode-row">
                        <input type="text" className="input zipcode" placeholder="01234" readonly/>
                        <button input="button" className="btn outline">우편번호 검색</button>
                    </div>
                    <input type="text" className="input" placeholder="주소를 입력해 주세요." readonly/>
                    <input type="text" className="input" placeholder="상세주소"></input>
                </div>
            </div>
            <div className="divider" />
            <div className="form-row">
                <div className="form-group">
                    <label className="label">유튜브 링크</label>
                    <input type="url" className="input" placeholder="링크를 입력해 주세요." />
                </div>
            </div>
            <div className="divider" />
            <div className="form-row">
                <div className="form-group">
                    <label className="label">사진 첨부</label>
                    <div className="img-upload-group">
                        <div className="img-upload">
                            <span className="icon"></span>
                            <span className="text">클릭해서 사진 업로드</span>
                        </div>
                        <div className="img-upload">
                            <span className="icon"></span>
                            <span className="text">클릭해서 사진 업로드</span>
                        </div>
                        <div className="img-upload">
                            <span className="icon"></span>
                            <span className="text">클릭해서 사진 업로드</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="button-row">
                <div className="button-group">
                    <button type="button" className="btn outline">취소</button>
                    <button type="submit" className="btn fill">등록하기</button>
                </div>
            </div>
        </form> 
    )
}