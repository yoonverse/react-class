const 게시글등록페이지 = () => {
    const [name, setName] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [title, setTitle] = React.useState("")
    const [contents, setContents] = React.useState("")

    const [nameError, setNameError] = React.useState("")
    const [passwordError, setPasswordError] = React.useState("")
    const [titleError, setTitleError] = React.useState("")
    const [contentsError, setContentsError] = React.useState("")



    // 이벤트핸들러
    const onChangeName = (event) => {
        setName(event.target.value)
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }
    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }
    const onChangeContents = (event) => {
        setContents(event.target.value)
    }
    const onClickRegister = (event) => {
        let isValid = true

        if(name === "") {
            setNameError("필수입력 사항 입니다.")
            isValid = false;
        } else {
            setNameError("")
        }
        if(password === "") {
            setPasswordError("필수입력 사항 입니다.")
            isValid = false;
        } else {
            setPasswordError("")
        }
        if(title === "") {
            setTitleError("필수입력 사항 입니다.")
            isValid = false;
        } else {
            setTitleError("")
        }
        if(contents === "") {
            setContentsError("필수입력 사항 입니다.")
            isValid = false;
        } else {
            setContentsError("")
        }

        if(isValid) {
            alert("게시글 등록이 가능한 상태입니다.")
        }
    }

    return(
        //게시글등록을 위한 내용
        <form className="container">
            <h1 className="page-title">게시물 등록</h1>

            <div className="form-row">
                <div className="form-group">
                    <label className="label">작성자<span className="required">*</span></label>
                    <input type="text" className="input" placeholder="작성자 명을 입력해주세요." onChange={onChangeName}/><div className="error-text">{nameError}</div>
                </div>
                <div className="form-group">
                    <label className="label">비밀번호<span className="required">*</span></label>
                    <input type="password" className="input" placeholder="비밀번호를 입력해 주세요." onChange={onChangePassword}/><div className="error-text">{passwordError}</div>
                </div>
            </div>
            <div className="divider" />
            <div className="form-row">
                <div className="form-group">
                    <label className="label">제목<span className="required">*</span></label>
                    <input type="text" className="input" placeholder="제목을 입력해 주세요." onChange={onChangeTitle}/><div className="error-text">{titleError}</div>
                </div>
            </div>
            <div className="divider" />
            <div className="form-row">
                <div className="form-group">
                    <label className="label">내용<span className="required">*</span></label>
                    <textarea type="textarea" className="textarea" placeholder="내용을 입력해 주세요." onChange={onChangeContents}></textarea><div className="error-text">{contentsError}</div>
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
                    <button type="button" className="btn fill" onClick={onClickRegister}>등록하기</button>
                </div>
            </div>
        </form> 
    )
}