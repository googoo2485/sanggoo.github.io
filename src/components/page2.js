import React from 'react';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';
import Aimg from '../img/recipe.png';
const page2 = () => {
    return (
        <div className="page-3">
             <ButtonBack className="to-top-project">
          <span className="fa fa-angle-double-up" aria-hidden="true"></span>
        </ButtonBack>
        <div className="container-fluid">
          <div className="title-wrapper">
            <h2 className="project-title-p3">TodayRecipe</h2>
            <h4 className="sub-title">음식 레시피 사이트</h4>
          </div>
          <div className="content-wrapper row">
            <div className="col-md-6 video-wrapper">
              <div className="embed-responsive embed-responsive-16by9 media">
                <img title="project1" className="embed-responsive-item" src={Aimg}/>
              </div>
              <div className="btn-wrapper">
                <div className="btn-group" role="group" aria-label="button group">
                  <form action="https://github.com/googoo2485/3project" target="_blank">
                    <button type="submit" className="btn btn-info-link btn-outline-secondary">
                      <span className="fa fa-github" aria-hidden="true"></span>
                      &nbsp;Github
                  </button>
                  </form>
                  <form action="sang2485.cafe24app.com" target="_blank">
                    <button type="submit" className="btn btn-info-link btn-outline-secondary">
                      <span className="fa fa-globe" aria-hidden="true"></span>
                      &nbsp;Web Site
                  </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <ul className="info">
                <li className="info-list">
                  <h5 className="content-title"><span className="fa fa-hashtag" aria-hidden="true"></span> 개요</h5>
                  <p className="content-text-summary fa fa-angle-right" aria-hidden="true"> 음식 레시피 커뮤니티 사이트
                    </p>
                </li>
                <li className="info-list">
                  <h5 className="content-title"><span className="fa fa-hashtag" aria-hidden="true"></span> 주요 역할</h5>
                  <ul className="content-text-wil">
                    <li className="fa fa-check" aria-hidden="true"> node.js를 이용하여 여러 모듈사용</li><br />
                    <li className="fa fa-check" aria-hidden="true"> 로그인,회원가입 기능구현</li><br />
                    <li className="fa fa-check" aria-hidden="true"> 게시글 작성 및 삭제,수정</li><br />
                    <li className="fa fa-check" aria-hidden="true"> 사진 업로드 및 리사이징 기능 추가</li><br />
                    <li className="fa fa-check" aria-hidden="true"> 댓글, 좋아요 기능 구현</li><br />
                  </ul>
                </li>
                <h5 className="content-title"><span className="fa fa-hashtag" aria-hidden="true"></span> 활용 기술</h5>
                <p className="content-text-stacks fa fa-angle-right" aria-hidden="true"> <code>node.js</code> <code>HeidiSql</code> <code>ejs</code> <code>css</code> 
                </p>
              </ul>
            </div>
          </div>
        </div>
        <ButtonNext className="to-bottom-project">
          <span className="fa fa-angle-double-down" aria-hidden="true"></span>
        </ButtonNext>
        </div>
    )
}

export default page2;
