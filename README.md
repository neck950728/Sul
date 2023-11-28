<br>

---

<div align="center">
   <img src="https://github.com/neck950728/Sul/assets/151998896/9289a5cd-f05a-40aa-b070-e017e3722f0d" width="18%">
</div>

---

<br><br>

><p><strong>분류</strong> - 팀 프로젝트</p>
><p><strong>제목</strong> - 술담아</p>
><p><strong>주제</strong> - 전통주 쇼핑몰 사이트</p>
><p><strong>기획 및 제작</strong> - 김호진, 김민진(나), 김동찬, 김세은, 박채연</p>
><p><strong>제작 기간</strong> - 2023.08.16 ~ 2023.09.10</p>

<br><br>

## :open_file_folder: 목차
<ul>
   <li><a href="#project-introduction">프로젝트 소개</a></li>
   <li><a href="#development-configuration">개발 환경</a></li>
   <li><a href="#team-role">팀원 역할</a></li>
   <li><a href="#screen-configuration">화면 구성</a></li>
   <li id="function"><a href="#function">기능</a></li>
   <details>
      <summary>접기/펼치기</summary>
      
      1. 접속
         1.1. 회원가입
         1.2. 로그인
         1.3. 메인
      2. 상품
         2.1. 목록
         2.2. 장바구니
         2.3. 주문(결제)/취소
      3. 마이페이지
         3.1. 주문 내역
         3.2. 리뷰
         3.3. 정보 수정
         3.4. 회원탈퇴
      4. 고객센터
         4.1. 공지사항
         4.2. FAQ & QnA
      5. 관리자
         5.1. 회원 관리
         5.2. 상품 관리
         5.3. 매출 현황
   </details>
</ul>

<br><br>

## :clap: <a id="project-introduction">프로젝트 소개</a>

<br>
<img src="https://github.com/neck950728/Sul/assets/151998896/0ace2619-f563-4309-833c-8602c392679f" width="35%">
<br><br>

:astonished: 코로나-19로 인해 주류 소비 트렌트가 변화하였다!
- 집에서 술을 즐기는 '홈술족' 증가!
- 집에서 다양한 주류를 접할 수 있다면 좋지 않을까?
- 전통주는 다른 주류와 달리, 온라인에서 구매 후 바로 배송받을 수 있다는 점도 매력 포인트로 꼽힌다.
- 코로나-19의 영향은 점차 약해지고 있지만, 트렌드는 꾸준히 유지되고 있다. <br>

홈술족들을 위한 전통주 쇼핑몰 사이트 ```'술담아'```입니다! :clinking_glasses:

<br><br>

## :gear: <a id="development-configuration">개발 환경</a>
<img src="https://img.shields.io/badge/Framework-000000?style=for-the-badge"> <img alt="Spring" src ="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=Spring&logoColor=white"> <img src="https://img.shields.io/badge/mybatis-004088?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMCIgd2lkdGg9IjEwOC4wMDAwMDBwdCIgaGVpZ2h0PSI4OC4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDEwOC4wMDAwMDAgODguMDAwMDAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij4KCjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLDg4LjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKSIgZmlsbD0id2hpdGUiIHN0cm9rZT0ibm9uZSI+CjxwYXRoIGQ9Ik0zNTQgNzk1IGMtOSAtMjMgMTUgLTQ1IDQ3IC00NSAxNSAwIDMxIC01IDM1IC0xMSA1IC05IC0xIC0xMCAtMjEgLTUgLTE3IDQgLTQ5IDAgLTgzIC0xMCBsLTU1IC0xOCAtMjMgMjkgYy0yOSAzNyAtNTIgMjQgLTMzIC0xOCAxNiAtMzQgMzIgLTM5IDczIC0yMiA0NCAxOSAxMTAgMTkgMTI1IDIgNiAtOCAxNCAtMjkgMTggLTQ3IGw2IC0zMyAtNDkgNiBjLTI3IDQgLTYxIDEwIC03NSAxMyAtMjUgNiAtMjYgNCAtMjUgLTMzIGwxIC0zOCAtNTcgLTMgYy0zMiAtMiAtNTggLTcgLTU4IC0xMyAwIC0yMiAyOSAtNzggNTkgLTExMSAxNyAtMjAgMzEgLTQzIDMxIC01MSAwIC0yMCAtNDggLTU2IC0xMzAgLTk3IGwtNjUgLTMzIDQ4IC00MyBjNjEgLTU1IDE1MyAtMTAwIDI0MiAtMTE5IDg3IC0xOCAxMzQgLTE4IDIwNiAtMSAxNDAgMzIgMjI1IDEyMiAyODUgMzAwIDEzIDM4IDMyIDc1IDQxIDgyIDE0IDEwIDE1IDEzIDQgMTQgLTExIDAgLTEwIDMgMyAxMyAxNiAxMiAxNyAxNSAzIDIwIC04IDMgLTMwIDM1IC00NyA3MiAtNDIgODggLTg4IDEyMCAtMTc0IDEyMCAtNDQgMCAtNzQgLTcgLTEwOCAtMjQgLTU3IC0yOSAtNzggLTIzIC03OCAyMiAwIDQzIC0xNSA1NyAtNjIgNTcgLTI3IDAgLTQwIDUgLTQ4IDIwIC0xMyAyNCAtMjggMjYgLTM2IDV6IG00NDYgLTIxNSBjMTIgLTggMTEgLTEwIC03IC0xMCAtNDIgMCAtMzIgLTU5IDEwIC02MSAxMiAwIDE2IC0zIDkgLTYgLTIzIC05IC02MyA3IC03MSAzMCAtMTYgNDMgMjAgNzIgNTkgNDd6IG0zMCAtMzAgYzAgLTUgLTQgLTEwIC05IC0xMCAtNiAwIC0xMyA1IC0xNiAxMCAtMyA2IDEgMTAgOSAxMCA5IDAgMTYgLTQgMTYgLTEweiIvPgo8L2c+Cjwvc3ZnPg==">

<img src="https://img.shields.io/badge/IDE-%23121011?style=for-the-badge"> <img src="https://img.shields.io/badge/Spring Tool Suite4-6DB33F?style=for-the-badge&logo=spring&logoColor=white"> <img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078D7.svg?style=for-the-badge&logo=visual-studio-code"> <img src="https://img.shields.io/badge/DBeaver-4D2B1A?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMCIgd2lkdGg9IjEyOC4wMDAwMDBwdCIgaGVpZ2h0PSIxMjguMDAwMDAwcHQiIHZpZXdCb3g9IjAgMCAxMjguMDAwMDAwIDEyOC4wMDAwMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgoKPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsMTI4LjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKSIgZmlsbD0id2hpdGUiIHN0cm9rZT0ibm9uZSI+CjxwYXRoIGQ9Ik02OTkgMTA5MiBjLTI0IC0xNiAtNTYgLTQzIC03MCAtNjAgLTE4IC0yMSAtMzcgLTMyIC02MCAtMzQgLTMzIC0zIC0zNCAtNCAtMzIgLTQzIDEgLTIyIDQgLTU0IDggLTcwIDUgLTI1IC0yIC00OSAtMzggLTExOSBsLTQ0IC04OCA1IDU0IGM2IDc2IC0xNCAyMjAgLTM3IDI2NiAtNDYgOTAgLTE4MyA5MiAtMjM2IDIgLTE3IC0zMCAtMjAgLTUyIC0yMCAtMTUwIDAgLTEwNiAzIC0xMjMgMzcgLTIxNyA2MSAtMTc0IDE3MiAtMzU1IDI1OCAtNDIzIDY3IC01MyAxMTYgLTcwIDIwNyAtNzAgNTAgMCA4NSA0IDg5IDExIDQgOCAyMiA5IDUzIDQgNjIgLTEwIDExNyAtOCAxNDEgNSAyMiAxMiAyNyA0NSA5IDU2IC04IDUgLTkgMjYgLTMgNzMgNSAzNiA5IDExNiA5IDE3NiAwIDkwIC00IDEyMyAtMjQgMTgyIGwtMjQgNzIgMjcgNjEgYzI5IDY1IDM3IDE1MSAxNyAxODkgLTYgMTEgLTExIDMyIC0xMSA0NyAwIDI2IC0xIDI2IC00NyAyMCAtMjcgLTMgLTYyIC04IC04MCAtMTIgLTIwIC00IC00MyAwIC02NCAxMCAtNTUgMjcgLTY0IDIyIC01OSAtMzMgMSAtMTUgLTExIC0zNyAtMzMgLTYwIC03NSAtNzkgLTg4IC0xMjggLTM5IC0xNDkgMjYgLTExIDI1IC0xMSAtMTQgLTggbC00MiA0IC0yNiAtNjcgYy00MSAtMTAxIC01NiAtMTY5IC01NiAtMjUyIDAgLTc4IDIwIC0xNjUgNDcgLTIwOSBsMTYgLTI1IC0yMSAxOSBjLTEyIDExIC0zNCA0NCAtNDkgNzUgLTM3IDc4IC00MiAxNzIgLTE1IDI4MCAyMyA4OSA3MCAyMDMgODIgMTk2IDMgLTIgNyAxNSA3IDM4IDAgNTMgMzMgMTIzIDg1IDE4MiA0NyA1MyA4MyA3NCAxNDcgODUgbDQ2IDggLTUxIDEgYy0zOSAxIC02MCAtNSAtOTUgLTI3eiBtMjI5IC0zMTUgYy03IC0yMCAtMTcgLTM2IC0yMiAtMzYgLTUgMSAtMTIgLTUgLTE2IC0xMiAtMTIgLTE5IC00MCAtMiAtNDAgMjUgMCAxOSA3IDI2IDI5IDMxIDE2IDMgMzUgMTMgNDIgMjEgMTggMjIgMjEgMTEgNyAtMjl6Ii8+CjwvZz4KPC9zdmc+">

<img src="https://img.shields.io/badge/Language-%23121011?style=for-the-badge"> <img alt="HTML" src ="https://img.shields.io/badge/HTML5-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"> <img alt="Css" src ="https://img.shields.io/badge/CSS3-1572B6.svg?&style=for-the-badge&logo=CSS3&logoColor=white"> <img alt="JavaScript" src ="https://img.shields.io/badge/JavaScriipt-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=black"> <img src="https://img.shields.io/badge/java-FF8224?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MCA1MCIgd2lkdGg9IjUwcHgiIGhlaWdodD0iNTBweCI+DQogIDxwYXRoIGQ9Ik0gMjguMTg3NSAwIEMgMzAuOTM3NSA2LjM2MzI4MSAxOC4zMjgxMjUgMTAuMjkyOTY5IDE3LjE1NjI1IDE1LjU5Mzc1IEMgMTYuMDgyMDMxIDIwLjQ2NDg0NCAyNC42NDg0MzggMjYuMTI1IDI0LjY1NjI1IDI2LjEyNSBDIDIzLjM1NTQ2OSAyNC4xMDkzNzUgMjIuMzk4NDM4IDIyLjQ0OTIxOSAyMS4wOTM3NSAxOS4zMTI1IEMgMTguODg2NzE5IDE0LjAwNzgxMyAzNC41MzUxNTYgOS4yMDcwMzEgMjguMTg3NSAwIFogTSAzNi41NjI1IDguODEyNSBDIDM2LjU2MjUgOC44MTI1IDI1LjUgOS41MjM0MzggMjQuOTM3NSAxNi41OTM3NSBDIDI0LjY4NzUgMTkuNzQyMTg4IDI3Ljg0NzY1NiAyMS4zOTg0MzggMjcuOTM3NSAyMy42ODc1IEMgMjguMDExNzE5IDI1LjU1ODU5NCAyNi4wNjI1IDI3LjEyNSAyNi4wNjI1IDI3LjEyNSBDIDI2LjA2MjUgMjcuMTI1IDI5LjYwOTM3NSAyNi40NDkyMTkgMzAuNzE4NzUgMjMuNTkzNzUgQyAzMS45NDkyMTkgMjAuNDI1NzgxIDI4LjMyMDMxMyAxOC4yODUxNTYgMjguNjg3NSAxNS43NSBDIDI5LjAzOTA2MyAxMy4zMjQyMTkgMzYuNTYyNSA4LjgxMjUgMzYuNTYyNSA4LjgxMjUgWiBNIDE5LjE4NzUgMjUuMTU2MjUgQyAxOS4xODc1IDI1LjE1NjI1IDkuMDYyNSAyNS4wMTE3MTkgOS4wNjI1IDI3Ljg3NSBDIDkuMDYyNSAzMC44NjcxODggMjIuMzE2NDA2IDMxLjA4OTg0NCAzMS43ODEyNSAyOS4yNSBDIDMxLjc4MTI1IDI5LjI1IDM0LjI5Njg3NSAyNy41MTk1MzEgMzQuOTY4NzUgMjYuODc1IEMgMjguNzY1NjI1IDI4LjE0MDYyNSAxNC42MjUgMjguMjgxMjUgMTQuNjI1IDI3LjE4NzUgQyAxNC42MjUgMjYuMTc5Njg4IDE5LjE4NzUgMjUuMTU2MjUgMTkuMTg3NSAyNS4xNTYyNSBaIE0gMzguNjU2MjUgMjUuMTU2MjUgQyAzNy42NjQwNjMgMjUuMjM0Mzc1IDM2LjU5Mzc1IDI1LjYxNzE4OCAzNS42MjUgMjYuMzEyNSBDIDM3LjkwNjI1IDI1LjgyMDMxMyAzOS44NDM3NSAyNy4yMzQzNzUgMzkuODQzNzUgMjguODQzNzUgQyAzOS44NDM3NSAzMi40Njg3NSAzNC41OTM3NSAzNS44NzUgMzQuNTkzNzUgMzUuODc1IEMgMzQuNTkzNzUgMzUuODc1IDQyLjcxODc1IDM0Ljk1MzEyNSA0Mi43MTg3NSAyOSBDIDQyLjcxODc1IDI2LjI5Njg3NSA0MC44Mzk4NDQgMjQuOTg0Mzc1IDM4LjY1NjI1IDI1LjE1NjI1IFogTSAxNi43NSAzMC43MTg3NSBDIDE1LjE5NTMxMyAzMC43MTg3NSAxMi44NzUgMzEuOTM3NSAxMi44NzUgMzMuMDkzNzUgQyAxMi44NzUgMzUuNDE3OTY5IDI0LjU2MjUgMzcuMjA3MDMxIDMzLjIxODc1IDMzLjgxMjUgTCAzMC4yMTg3NSAzMS45Njg3NSBDIDI0LjM1MTU2MyAzMy44NDc2NTYgMTMuNTQ2ODc1IDMzLjIzNDM3NSAxNi43NSAzMC43MTg3NSBaIE0gMTguMTg3NSAzNS45Mzc1IEMgMTYuMDU4NTk0IDM1LjkzNzUgMTQuNjU2MjUgMzcuMjIyNjU2IDE0LjY1NjI1IDM4LjE4NzUgQyAxNC42NTYyNSA0MS4xNzE4NzUgMjcuMzcxMDk0IDQxLjQ3MjY1NiAzMi40MDYyNSAzOC40Mzc1IEwgMjkuMjE4NzUgMzYuNDA2MjUgQyAyNS40NTcwMzEgMzcuOTk2MDk0IDE2LjAxNTYyNSAzOC4yMzgyODEgMTguMTg3NSAzNS45Mzc1IFogTSAxMS4wOTM3NSAzOC42MjUgQyA3LjYyNSAzOC41NTQ2ODggNS4zNzUgNDAuMTEzMjgxIDUuMzc1IDQxLjQwNjI1IEMgNS4zNzUgNDguMjgxMjUgNDAuODc1IDQ3Ljk2NDg0NCA0MC44NzUgNDAuOTM3NSBDIDQwLjg3NSAzOS43Njk1MzEgMzkuNTI3MzQ0IDM5LjIwMzEyNSAzOS4wMzEyNSAzOC45Mzc1IEMgNDEuOTMzNTk0IDQ1LjY1NjI1IDkuOTY4NzUgNDUuMTIxMDk0IDkuOTY4NzUgNDEuMTU2MjUgQyA5Ljk2ODc1IDQwLjI1MzkwNiAxMi4zMjAzMTMgMzkuMzkwNjI1IDE0LjUgMzkuODEyNSBMIDEyLjY1NjI1IDM4Ljc1IEMgMTIuMTEzMjgxIDM4LjY2Nzk2OSAxMS41ODk4NDQgMzguNjM2NzE5IDExLjA5Mzc1IDM4LjYyNSBaIE0gNDQuNjI1IDQzLjI1IEMgMzkuMjI2NTYzIDQ4LjM2NzE4OCAyNS41NDY4NzUgNTAuMjIyNjU2IDExLjc4MTI1IDQ3LjA2MjUgQyAyNS41NDI5NjkgNTIuNjk1MzEzIDQ0LjU1ODU5NCA0OS41MzUxNTYgNDQuNjI1IDQzLjI1IFoiIGZpbGw9IiNGRkZGRkYiLz4NCjwvc3ZnPg==">

<img src="https://img.shields.io/badge/DB-%23121011?style=for-the-badge"> <img alt="Oracle" src="https://img.shields.io/badge/Oracle-FF0000?style=for-the-badge&logo=Oracle&logoColor=white">

<img src="https://img.shields.io/badge/server-%23121011?style=for-the-badge"> <img src="https://img.shields.io/badge/apache%20tomcat-%23F8DC75.svg?style=for-the-badge&logo=apache-tomcat&logoColor=black">

<img src="https://img.shields.io/badge/OS-%23121011?style=for-the-badge"> <img src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white">

<img src="https://img.shields.io/badge/hosting-%23121011?style=for-the-badge"> <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white">

<img src="https://img.shields.io/badge/other-%23121011?style=for-the-badge"> <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"> <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white">

|:hammer: Library & API|
|:---:|
```jQuery```, ```Jackson Databind```, ```JSON Simple```, ```Gson```, ```Commons FileUpload``` <br> ```Google Charts```, ```NURIGO```, ```PortOne```, ```Daum Postcode```

<br><br>

## :muscle: <a id="team-role">팀원 역할</a>
><p><strong>팀장</strong> : 김호진</p>
> - 상품 등록/수정/삭제, 리뷰

><p><strong>팀원</strong> : 김민진 :raising_hand_man:</p>
> - 주문(결제)/취소, 주문 & 상품 페이지 디자인, 월별 매출 차트화

><p><strong>팀원</strong> : 김동찬</p>
> - 로그인 & 회원가입, 마이페이지, 관리자 페이지

><p><strong>팀원</strong> : 김세은</p>
> - 공지사항, 장바구니

><p><strong>팀원</strong> : 박채연</p>
> - 메인, FAQ & QnA

<br><br>

## :tv: <a id="screen-configuration">화면 구성</a>
|메인|로그인 & 회원가입|
|---|---|
|<img src="https://github.com/neck950728/Sul/assets/151998896/892f6a72-69d3-407f-8889-f96b63fa42f1" width="387.5">|<img src="https://github.com/neck950728/Sul/assets/151998896/b91fb49e-7373-44b5-b466-a084a2523806" width="387.5">|

|상품 목록|상품 상세|
|---|---|
|<img src="https://github.com/neck950728/Sul/assets/151998896/b6d6f2b1-d801-433c-b21b-2d1002aa5661" width="387.5">|<img src="https://github.com/neck950728/Sul/assets/151998896/1797630b-e9da-431b-9776-44f91e9218dd" width="387.5">|

|장바구니|마이페이지|
|---|---|
|<img src="https://github.com/neck950728/Sul/assets/151998896/e9dc3161-71c4-477b-a5ec-e794b5f9ca53" width="387.5">|<img src="https://github.com/neck950728/Sul/assets/151998896/494fe7ea-dd02-443b-a40f-27eb7b17f2be" width="387.5">|

|주문|주문 취소|
|---|---|
|<img src="https://github.com/neck950728/Sul/assets/151998896/c0a88ed1-148c-4d4a-9c2b-bff2f8cd9b77" width="387.5">|<img src="https://github.com/neck950728/Sul/assets/151998896/fd3f99c5-a5d9-45b5-8db9-0283322c108a" width="387.5">|

|고객센터|관리자|
|---|---|
<img src="https://github.com/neck950728/Sul/assets/151998896/77d6c40f-f0a2-4cd1-9cfe-8a7c395e7223" width="387.5">|<img src="https://github.com/neck950728/Sul/assets/151998896/72648ee9-85c2-4bbe-a70c-935e4e8c553d" width="387.5">|
