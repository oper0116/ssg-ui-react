# ssg-ui-react

## Getting Started

### Install

1. yarn 버전 확인하며 yarn 버전 2.x 이상인것을 확인

```bash
yarn -v // 3.1.0
```

2. 패키지 설치

```bash
yarn install
```

### VSCODE 설정

#### TypeScript

1. 다음 명령을 실행하여 .yarn/sdks라는 새 디렉토리를 생성합니다.

```
yarn dlx @yarnpkg/sdks vscode
```

2. 안전상의 이유로 VSCode에서는 사용자 지정 TS 설정을 명시적으로 활성화해야 합니다.

3. TypeScript 파일에서 ctrl+shift+p를 누릅니다.

4. "TypeScript 버전 선택"을 선택합니다. (Use Workspace Version)

5. "워크스페이스 버전 사용"을 선택합니다.

- https://yarnpkg.com/getting-started/editor-sdks#vscode

#### zipFs

- zipFS plugin 설치
- GoT To Delcare 기능 활성화

##### Go To Delcare 가 되지 않을 경우

- 2021-10-14 기준 VSCODE 버전(1.61.0)에서 Go To Delcare 오류 발생하여, VSCODE 버전(1.60.0)으로 다운그레이드 및 VSCODE 자동 업데이트 해제
- VSCODE 다운로드 [링크](https://code.visualstudio.com/docs/supporting/faq#_previous-release-versions)
- `Ctrl + ,` > `Update Mode` 검색 > `None`

```
https://update.code.visualstudio.com/{version}/win32-x64-user/stable // 64bit installer
```

### Cookie 공유를 위한 설정

- C:\Windows\System32\drivers\etc\hosts 파일에 아래 내용 추가

```
...
127.0.0.1 local-m.ssg.com
...
```

- 브라우저 http://local-m.ssg.com 접속
- http://dev-m.ssg.com에서 로그인시 http://local-m.ssg.com 쿠키값 공유 credential 적용 (2021-11-08 기준 DEV 서버)
- [hosts 파일 설정](https://offbyone.tistory.com/149)
- [CORS](https://developer.mozilla.org/ko/docs/Web/HTTP/CORS)

## Available Scripts

프로젝트 디렉토리에서 아래 명령어를 사용할 수 있습니다.

### `yarn storybook`

스토리북을 실행합니다.<br /> 브라우저에서
[https://localhost:6006](https://localhost:6006) 를 실행해보세요. <br /> 파일을
수정하면 페이지가 리로드됩니다.<br /> 디버그 콘솔에서 lint 에러를 확인할 수 있습
니다.

### `yarn build:storybook`

스토리북을 빌드합니다.

### `yarn test`

watch mode로 테스트 러너를 실행합니다.<br /> 자세한 정보는
[running tests](https://facebook.github.io/create-react-app/docs/running-tests)
를 확인해보세요.

### `yarn build`

`dist` 폴더에 패키지를 빌드합니다.

### `yarn bundlesize`

패키지의 번들사이즈를 체크합니다. <br /> bundlesize.config.json에서
허용 사이즈를 설정할 수 있습니다.

### `yarn clean`

빌드 파일을 제거합니다.

## Release

### `yarn changeset`

패키지 변경사항을 기록합니다. 버전을 올릴 패키지를 선택한 후,
major, minor, patch 중 하나를 선택합니다. 그리고 변경사항 summary를 작성합니다.

### `yarn version:pkgs`

패키지 변경사항을 package.json과 CHANGELOG.md에 반영합니다.

### `yarn release`

패키지를 배포합니다.