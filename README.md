# On-board
Board with on-board olympic scoreboard

## TODO
- [x] Github repo 만들기
- [x] Repo에 contributor로 @shinjjang 초대하기
- [x] Markdown으로 스펙이랑 TODO 쓰기 
- [ ] Node로 'Hello world'를 출력하는 기본 프로젝트 생성해서 init commit 하기
- [ ] 데이터 구조 짜기(DB 스키마)
- [ ] URL 설계하기

## 데이터 스키마
| Field    | Type         | Null | Key | Default |
| -------- | ------------ | ---- | --- | ------- |
| id       | mediumint(9) | NO   | PRI | NULL    | auto_increment |
| date     | date         | YES  |     | NULL    |  |
| contents | text         | YES  |     | NULL    |