# Tripe
fucking awesome travel plan market

#plan db dummy 추가
curl -X POST -H "Content-Type: application/json" -d '{"point":10, "trans":"bus", "price":1000, "hotel":"hotel california", "etc":"cr3denza", "open":false, "select":false}' localhost:3000/plans

##MEAN Stack File Tree
---
>***app*** // 익스프레스 어플리케이션 논리를 유지하기 위한 공간  
>>***controllers*** // 익스프레스 어플리케이션 컨트롤러  
***modesl*** // 익스프레스 어플리케이션 모델  
***routes*** // 익스프레스 라우팅 미들웨어  
***views*** // 익스프레스 어플리케이션의 뷰  
  
>***config*** // 익스프레스 어플리케이션 구성 파일을 넣는 폴더, 추가되는 모듈들이 들어감  
>>***env***  // 익스프레스 어플리케이션의 환경 구성 파일  
***strategies*** // passport SNS, local 로그인 파일  
***config.js*** // 익스프레스 어플리케이션을 구성하는 파일  
***express.js*** // 익스프레스 어플리케이션을 초기화 하는 파일  
***mongoose.js***  
***passport.js***  
  
>***node_module***  
  
>***public*** // 정적인 클라이언트사이드 파일을 넣는 폴더  
>>***articles*** // 게시물 관련 앵귤러파일들  
>>>***config*** // 앵귤러 어플리케이션의 구성 파일을 넣는 폴더  
***controllers*** // 앵귤러 어플리케이션 컨트롤러를 넣는 폴더  
***services*** // 앵귤러 어플리케이션의 서비스 파일을 넣는 폴더  
***views*** // 앵규럴 어플리케이션의 뷰를 넣는 폴더  
***articles.client.module.js*** // 게시판 모듈  
_(아직 없음)_ ***css*** // CSS 파일을 넣는 폴더  
_(아직 없음)_ ***directives*** // 앵귤러 어플리케이션의 지시자파일을 넣는 폴더  
_(아직 없음)_ ***filters*** // 앵귤러 어플리케이션의 필터를 넣는 폴더  
_(아직 없음)_ ***img*** // 이미지 파일을 넣는 폴더  
  
>>***example*** // 루트경로 메인페이지 앵귤러파일들  
>>>***config*** // 앵귤러 어플리케이션의 구성 파일을 넣는 폴더  
***controllers*** // 앵귤러 어플리케이션 컨트롤러를 넣는 폴더  
***services*** // 앵귤러 어플리케이션의 서비스 파일을 넣는 폴더  
***views*** // 앵규럴 어플리케이션의 뷰를 넣는 폴더  
***example.client.module.js*** // 메인페이지 모듈  
_(아직 없음)_ ***css*** // CSS 파일을 넣는 폴더  
_(아직 없음)_ ***directives*** // 앵귤러 어플리케이션의 지시자파일을 넣는 폴더  
_(아직 없음)_ ***filters*** // 앵귤러 어플리케이션의 필터를 넣는 폴더  
_(아직 없음)_ ***img*** // 이미지 파일을 넣는 폴더  
   
>>***lib*** // 앵귤러 js 파일들  
  
>>***users*** // 유저 앵귤러 파일  
>>>***services*** // 유저 권한관련 앵귤러 서비스  
***users.client.module.js*** // 유저 모듈  
  
>>***application.js*** // 앵귤러 어플리케이션을 초기화 하는 파일  
  
>***bower.json*** // 버젼관리 파일  
***server.js*** // 노드 어플리케이션의 주 파일로 익스프레스 어플리케이션을 부트스트랩하기 위한 express.js를 모듈로 올림  
***package.json*** // 어플리케이션 의존성 관리를 위하 메타데이터 파일  

---
