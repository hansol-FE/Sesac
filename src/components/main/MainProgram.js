import React from 'react';
import { useState } from 'react';
import $ from 'jquery';

import './main.css';

export default function MainProgram() {
  /* 프로그램 더보기 Btn  */
  const [programMore,setProgramMore] = useState(false);
  const programMoreFn = () => {
   setProgramMore(true);
   $('#programMoreBtn').hide();
 }
  return (
    <>
      <div className="inner-box program-category">
        <div className="main-text-box">
          <span className="eyebrow">과정 카테고리</span>
          <span className="p-title">엑스퍼트 전문적인 강사진과 차별화된 교육 프로그램을 제공 합니다.</span>
          <ul className="p-list">
            <li className="active"><a href="#">개강순</a></li>
            <li><a href="#">계층교육</a></li>
            <li><a href="#">직무역량</a></li>
            <li><a href="#">DX</a></li>
            <li><a href="#">진단</a></li>
            <li><a href="#">일반</a></li>
            <li><a href="#">취업</a></li>
          </ul>
        </div>
        <div className="main-program-img">
          <ul className="inner-box program-list">
              <li className="program-item">
                <div className="item-img">
                  <img src="	http://www.excacademy.co.kr/images/title_img/09ZPMCVO20201020084210UKSFGH79.gif" alt="강의" />
                  <div className="item-img-desc">
                    <p>사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개</p>
                  </div>
                </div>
                <div className="item-text">
                  <p className="item-title">사내강사 양성과정</p>
                  <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                  <p className="item-days">2DAY 16시간</p>
                </div>
              </li>
              <li className="program-item">
                <div className="item-img">
                  <img src="	http://www.excacademy.co.kr/images/title_img/2POFPAL120211027181346X1I5JFVL.png" alt="강의" />
                  <div className="item-img-desc">
                    <p>사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개</p>
                  </div>
                </div>
                <div className="item-text">
                  <p className="item-title">사내강사 양성과정</p>
                  <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                  <p className="item-days">2DAY 16시간</p>
                </div>
              </li>
              <li className="program-item">
                <div className="item-img">
                  <img src="	http://www.excacademy.co.kr/images/title_img/2POFPAL120211027181346X1I5JFVL.png" alt="강의" />
                  <div className="item-img-desc">
                    <p>사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개</p>
                  </div>
                </div>
                <div className="item-text">
                  <p className="item-title">사내강사 양성과정</p>
                  <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                  <p className="item-days">2DAY 16시간</p>
                </div>
              </li>
              <li className="program-item">
                <div className="item-img">
                  <img src="	http://www.excacademy.co.kr/images/title_img/2POFPAL120211027181346X1I5JFVL.png" alt="강의" />
                  <div className="item-img-desc">
                    <p>사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개</p>
                  </div>
                </div>
                <div className="item-text">
                  <p className="item-title">사내강사 양성과정</p>
                  <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                  <p className="item-days">2DAY 16시간</p>
                </div>
              </li>
              <li className="program-item">
                <div className="item-img">
                  <img src="	http://www.excacademy.co.kr/images/title_img/2POFPAL120211027181346X1I5JFVL.png" alt="강의" />
                  <div className="item-img-desc">
                    <p>사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개</p>
                  </div>
                </div>
                <div className="item-text">
                  <p className="item-title">사내강사 양성과정</p>
                  <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                  <p className="item-days">2DAY 16시간</p>
                </div>
              </li>
              <li className="program-item">
                <div className="item-img">
                  <img src="	http://www.excacademy.co.kr/images/title_img/2POFPAL120211027181346X1I5JFVL.png" alt="강의" />
                  <div className="item-img-desc">
                    <p>사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개</p>
                  </div>
                </div>
                <div className="item-text">
                  <p className="item-title">사내강사 양성과정</p>
                  <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                  <p className="item-days">2DAY 16시간</p>
                </div>
              </li>
              <li className="program-item">
                <div className="item-img">
                  <img src="	http://www.excacademy.co.kr/images/title_img/2POFPAL120211027181346X1I5JFVL.png" alt="강의" />
                  <div className="item-img-desc">
                    <p>사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개</p>
                  </div>
                </div>
                <div className="item-text">
                  <p className="item-title">사내강사 양성과정</p>
                  <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                  <p className="item-days">2DAY 16시간</p>
                </div>
              </li>
              <li className="program-item">
                <div className="item-img">
                  <img src="	http://www.excacademy.co.kr/images/title_img/2POFPAL120211027181346X1I5JFVL.png" alt="강의" />
                  <div className="item-img-desc">
                    <p>사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개</p>
                  </div>
                </div>
                <div className="item-text">
                  <p className="item-title">사내강사 양성과정</p>
                  <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                  <p className="item-days">2DAY 16시간</p>
                </div>
              </li>
              {
                programMore &&
                <>
                  <li className="program-item">
                    <div className="item-img">
                      <img src="	http://www.excacademy.co.kr/images/title_img/09ZPMCVO20201020084210UKSFGH79.gif" alt="강의" />
                      <div className="item-img-desc">
                        <p>사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개</p>
                      </div>
                    </div>
                    <div className="item-text">
                      <p className="item-title">사내강사 양성과정</p>
                      <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                      <p className="item-days">2DAY 16시간</p>
                    </div>
                  </li>
                  <li className="program-item">
                    <div className="item-img">
                      <img src="	http://www.excacademy.co.kr/images/title_img/2POFPAL120211027181346X1I5JFVL.png" alt="강의" />
                      <div className="item-img-desc">
                        <p>사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개</p>
                      </div>
                    </div>
                    <div className="item-text" >
                      <p className="item-title">사내강사 양성과정</p>
                      <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                      <p className="item-days">2DAY 16시간</p>
                    </div>
                  </li>
                  <li className="program-item">
                    <div className="item-img">
                      <img src="	http://www.excacademy.co.kr/images/title_img/2POFPAL120211027181346X1I5JFVL.png" alt="강의" />
                      <div className="item-img-desc">
                        <p>사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개</p>
                      </div>
                    </div>
                    <div className="item-text">
                      <p className="item-title">사내강사 양성과정</p>
                      <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                      <p className="item-days">2DAY 16시간</p>
                    </div>
                  </li>
                  <li className="program-item">
                    <div className="item-img">
                      <img src="	http://www.excacademy.co.kr/images/title_img/2POFPAL120211027181346X1I5JFVL.png" alt="강의" />
                      <div className="item-img-desc">
                        <p>사내강사 경험이 부족한 학습자에게 꼭 필요한 교수설계와 설득력을 높일 수 있는 스토리 텔링 기법 소개</p>
                      </div>
                    </div>
                    <div className="item-text">
                      <p className="item-title">사내강사 양성과정</p>
                      <p className="item-date">2022.02.22 ~ 2022.02.23</p>
                      <p className="item-days">2DAY 16시간</p>
                    </div>
                  </li>
                </>
              }
          </ul>
        </div>
        <div class="btn-box more">
          <button class="btn-more" id="programMoreBtn" onClick={programMoreFn}><span>더보기</span></button>
        </div>
      </div>
    </>
  )
}