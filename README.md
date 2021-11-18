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

### `yarn clean`

빌드 파일을 제거합니다.
