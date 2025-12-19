//index.js
const 게시글등록페이지 = () => {
		return(
		// 게시글등록을 위한 내용
				<form className="container">
					<h1 className="page-title">게시물 등록</h1>	

					<div className="form-group">
						<label className="label">작성자<span className="required">*</span></label>
						<input className="input" type="text" />
					</div>

					<div className="form-group">
						<label className="label">비밀번호<span className="required">*</span></label>
						<input className="input" type="password" />
					</div>

					<div className="divider"/>

				    <div className="form-group">
						<label>제목<span className="required">*</span></label>
						<input className="input" type="text"></input>
					</div>

					<div className="divider"/>

					<div className="form-group">
						<label>내용<span className="required">*</span></label>
						<textarea className="textarea"></textarea>
					</div>

					<div className="form-group">
						<label>주소</label>
						<div className="address-row">
							<input className="input" type="text"></input>
							<button className="button" type="button">우편번호 검색</button>
						</div>
						<input className="input" type="text"></input>
						<input className="input" type="text"></input>
					</div>

					<div className="divider"/>

					<div className="form-group">
						<label>유튜브 링크</label>
						<input className="input" type="text"></input>
					</div>

					<div className="divider"/>

					<div className="form-group">
						<label>사진 첨부</label>
						<div className="upload-grid">
							<div className="upload-card">
								<div className="upload-plus">+</div>
								<p className="upload-text">클릭해서 사진 업로드</p>
							</div>
							<div className="upload-card">
								<div className="upload-plus">+</div>
								<p className="upload-text">클릭해서 사진 업로드</p>
							</div>
							<div className="upload-card">
								<div className="upload-plus">+</div>
								<p className="upload-text">클릭해서 사진 업로드</p>
							</div>
						</div>
					</div>
				</form>
			)
		}