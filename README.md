# wanted_pre_onboarding
[원티드 프리온보딩 백엔드 코스 선발과제](https://bow-hair-db3.notion.site/5-1850bca26fda4e0ca1410df270c03409)

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

## DB Modeling
![image](https://user-images.githubusercontent.com/55984573/196697797-e543f1c0-f113-4919-ac9c-d758f5361e95.png)

## API 문서
### 1. 채용공고 등록 
- url: /jobs
- method: POST
- request 
  ```json
  {
    "companyId": 3,
    "position":"백엔드 주니어 개발자",
    "compensation":1000000,
    "contents":"원티드랩에서 백엔드 주니어 개발자를 채용합니다. 자격요건은..",
    "skill":"Python"
  }
  ```
- response
  - 성공(201)
  ```json
  {
    "message": "success"
  }
  ```
  - input 값이 유효하지 않은 경우(400)
  ```json
  {
    "message": "유효하지 않은 값 입니다."
  }
  ```
  - 존재하지 않는 company id로 요청하는 경우(400)
  ```json
  {
    "message": "잘못된 요청입니다."
  }
  ```
### 2. 채용공고 수정
- url : /jobs/:id
- method: PUT
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
    "message": "success"
  }
  ```
  - input 값의 타입이 맞지 않을 경우(400)
  ```json
  {
    "message": "유효하지 않은 값 입니다."
  }
  ```
  - input 값에 회사 id가 있는경우(400)
  
  ```json
  {
    "message": "잘못된 요청입니다."
  }
  ```
  - 존재하지 않는 job id로 요청하는 (404)
  ```json
  {
    "message": "잘못된 요청입니다."
  }
  ```
### 3. 채용공고 삭제
- url : /jobs/:id
- method: DELETE
- response
  - 성공(200)
  ```json
  {
    "message": "success"
  }
  ```
  - 존재하지 않는 job id로 (404)
  ```json
  {
    "message": "잘못된 요청입니다."
  }
  ```
### 4,5. 채용공고 목록 반환 및 검색
> #### 지역, 국가, 회사이름, 포지션, 스킬 중 검색 keyword가 들어있으면 반환 
> #### search 없이 요청 보낼 경우 전체 목록 반환
- url: /jobs?search=keyword
- method: GET
- response
  - 성공(200)
  ```json
    [
      {
        "id": 1,
        "position": "백엔드 주니어 개발자",
        "compensation": 3000000,
        "skill": "Python",
        "companyName": "dd",
        "region": null,
        "country": null
      },
      {
        "id": 2,
        "position": "백엔드 주니어 개발자",
        "compensation": 5000000,
        "skill": "Python",
        "companyName": "dd",
        "region": null,
        "country": null
      },
   ]
    ```
### 6. 채용 상세 페이지
- url: /jobs/:id 
- method: GET
- response
  - 성공(200)
  ```json
  {
      "id": 10,
      "position": "백엔드 주니어 개발자",
      "compensation": 300000,
      "skill": "Python",
      "content": null,
      "companyName": "하하",
      "region": "서울",
      "country": "한국",
      "otherJobs": [
          6,
          11
      ]
  }
  ```
  - 존재하지 않는 id로 요청하는 경우(404)
  ```json
  {
    "message": "잘못된 요청입니다."
  }
  ```
### 7. 채용공고 지원
- url: /jobs/appliment 
- method: POST
- request
  ```json
  {
    "userId":"1",
    "jobId":"4"
  }
  ```
- response
  - 이미 지원한 경우(400)
  ```json
  {
    "message": "이미 지원한 공고입니다."
  }
  ```
  - input 값을 잘못 넘길 경우(400)
  ```json
  {
    "message": "유효하지 않은 값입니다."
  }
  ```
  - 존재하지 않은 userId or jobId로 요청하는 경우(400)
  ```json
  {
    "message": "잘못된 요청입니다."
  }
  ```
## Commit Convention
- [Feat] 기능 (새로운 기능)
- [Fix] 버그 (버그 수정)
- [Refactor] 리팩토링
- [Docs] 문서 (문서 추가, 수정, 삭제)
- [Test] 테스트 (테스트 코드 추가, 수정, 삭제: 비즈니스 로직에 변경 없음)
- [Setting] 환경 세팅
```git
ex) [Feat] ~기능 구현
  
    - 세부사항1
    - 세부사항2
```
