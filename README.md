# wanted_pre_onboarding
원티드 프리온보딩 백엔드 코스 선발과제

사용기술 : Node.js, Express.js, Sequelize

## 서비스 개요

- 본 서비스는 기업의 채용을 위한 웹 서비스 입니다.
- 회사는 채용공고를 생성하고, 이에 사용자는 지원합니다.

## 요구사항
- 채용공고 등록(Create)/수정(Update)/삭제(Delete)
- 채용공고 목록 반환(Get List)
- 채용공고 검색(Search)
  - 채용공고 필드(회사명, 채용 포지션, 사용기술 등)중 검색 키워드가 하나라도 포함되어 있다면 검색 목록으로 반환
- 채용 상세 페이지(Get One)
  - 채용내용 필드 추가
  - 회사가 올린 다른 채용공고를 리스트로 반환
- 채용공고 지원(Create)
  - 사용자 1회 지원만 가능
  
> ### 참조
> - 회사, 사용자 등록 절차는 생략합니다. 
  (DB에 임의로 생성하여 진행)
> - 로그인 등 사용자 인증절차(토큰 등)는 생략합니다.
> - orm 필수 사용
## 실행방법

## DB Modeling
![image](https://user-images.githubusercontent.com/55984573/196209206-c8db9ab3-ad90-428c-93bf-5cb07955f5cc.png)

## API 문서
### 1. 채용공고 등록 
- url: /jobs
- method: POST
- request 
  ```json
  {
    "company_id": 회사_id,
    "position":"백엔드 주니어 개발자",
    "compensation":1000000,
    "contents":"원티드랩에서 백엔드 주니어 개발자를 채용합니다. 자격요건은..",
    "skill":"Python"
  }
  ```
- response
  - 성공(200)
  ```json
  {
    "success": true
  }
  ```
  - 회사 id가 없는 경우(400)
  ```json
  {
    "message": "잘못된 요청입니다."
  }
  ```
### 2. 채용공고 수정
- url : /jobs
- method: put
- request 
  ```json
  {
    "position":"백엔드 주니어 개발자",
    "compensation":1500000, # 변경됨
    "content":"원티드랩에서 백엔드 주니어 개발자를 '적극' 채용합니다. 자격요건은..", # 변경됨
    "skill":"Python"
  }
  ```
- response
  - 성공(200)
  ```json
  {
    "success": true
  }
  ```
  - 유효하지 않은 값을 전달했을 때(400)
  ```json
  {
    "message": "잘못된 요청입니다."
  }
  ```
### 3. 채용공고 삭제
- url : /jobs/:job_id
- method: delete
- response
  - 성공(200)
  ```json
  {
    "success": true
  }
  ```
### 4. 채용공고 목록 반환
### 5. 채용공고 검색
### 6. 채용 상세 페이지
### 7. 채용공고 지원

## Commit Convention
- [Feat] 기능 (새로운 기능)
- [Fix] 버그 (버그 수정)
- [Refactor] 리팩토링
- [Docs] 문서 (문서 추가, 수정, 삭제)
- [Test] 테스트 (테스트 코드 추가, 수정, 삭제: 비즈니스 로직에 변경 없음)
- [Setting] 환경 세팅
```git
ex) [Feat] ~기능 구현
```
