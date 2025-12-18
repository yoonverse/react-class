const 카운터 = (훈이의props) => {
    const [카운트변수, 카운트바꿔주는함수] = React.useState(0)

    const 카운트올리는기능 = () => {
        카운트바꿔주는함수(카운트변수 + 1)
    }

    const 카운트내리는기능 = () => {
        카운트바꿔주는함수(카운트변수 - 1)
    }

    // 함수의 리턴은 1개만 할 수 있음! 
    // 따라서, JSX를 함수에서 리턴할 떄는 하나로 묶어야 함 = 프레그먼트(조각)
    return (
        <div>
            <div>{카운트변수}</div>
            <button onClick={카운트올리는기능}>카운트 올리기!!</button>
            <button onClick={카운트내리는기능}>카운트 내리기!!</button>
        </div>
    )
}