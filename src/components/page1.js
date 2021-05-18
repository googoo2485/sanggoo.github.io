import React from 'react';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';
const page1 = () => {

   const offsetWidth =()=> {
        if (window.document.body.offsetWidth < 768) {
          return <span className="touch-guide">터치하여 계속 보기</span>
        } else {
          return <span className="touch-guide">클릭하여 계속 보기</span>
        }
      };

    const guideMsg=()=> {
        if (window.document.body.offsetWidth < 768) {
          return <span className="fa fa-exclamation-circle guide-msg" aria-hidden="true"> 상단 또는 하단 영역을 터치하여 계속 보기</span>
        } else {
          return <span className="fa fa-exclamation-circle guide-msg" aria-hidden="true"> 상단 또는 하단 영역을 클릭하여 계속 보기</span>
        }
      };

    return (
        <div className ="page-1">

          <span className="fa fa-check-circle react-msg" aria-hidden="true"> 본 사이트는 React로 제작되었습니다.</span>
             {guideMsg()}
             
                <div className="container-fluid">
                  <div className="page-1-content">
                    <p className="page-1-p">안녕하세요!</p>
                    <h1>개발자 <strong>강상구</strong>의 포트폴리오 웹사이트입니다.</h1>
                    <p><a className="btn btn-dark" href="https://github.com/googoo2485/portfolio-react" role="button" target="_blank">
                      <span className="fa fa-github" aria-hidden="true"></span>
                      &nbsp; Github</a></p>
                  </div>



            <ButtonNext className = "bottom-first">
              {offsetWidth()}
              <br />
            <span className="fa fa-angle-double-down" aria-hidden="true"></span>
            </ButtonNext>
                  </div>
        </div>
    )
}

export default page1;
