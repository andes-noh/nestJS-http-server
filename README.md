# NestJs-http-server Project(v0.1)

## 1.개요

- yarn upgrade ts-node-dev@latest ts-node@latest 버전 업그레이드
- fastify 적용
- nestJS standalone application
- swagger 작성 추가
- 기본 포트 3000, .env 파일 통해 변경 가능
- typeorm 기능 추가 예정(v0.2예정)
- docker 관련 추가 예정(v0.3 or 추후)

## 2.실행

- yarn
- yarn debug

## 3.swagger

- `localhost:3000/swagger`
- ./index.ts로 주소 변경 가능

## 4.api

- get, post 구현
- delete, patch 구현 예정

## 5.CI/CD pipeline 구축 (with argocd)

- Link: [Argo CD][argocd]

[argocd]: https://argo-cd.readthedocs.io/en/stable/ 'Go Argo'
