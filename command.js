#!/usr/bin/env node
const { program } = require('commander');

program
    .version('0.0.1', '-v, --version') // 프로그램 버전 설정, 첫 번째 인수로 버전을 넣고 두 번째 인수로 버전을 보여줄 옵션을 넣는다.
    .name('cli'); // 명령어의 이름

program
    .command('template <type>') // 명령어를 설정하는 메서드, <>는 필수라는 의미. *는 와일드카드로 나머지 모든 명령어 지칭
    .usage('<type> --filename [filename] --path [path]') // 명령어의 사용법 설정, [] 는 필수가 아닌 선택.
    .description('템플릿을 생성합니다.') // 명령어에 대한 설명을 설정하는 메서드
    .alias('tmpl') // 명령어의 별칭을 설정
    .option('-f, --filename [filename]', '파일명을 입력하세요.', 'index') // 명령어에 대한 부가적인 옵션 설정
    .option('-d, --directory [path]', '생성 경로를 입력하세요', '.')
    .action((type, options) => {
        console.log(type, options.filename, options.directory);
    });

program
    .command('*', { noHelp: true })
    .action(() => { // 명령어에 대한 실제 동작을 정의하는 메서드
        console.log('해당 명령어를 찾을 수 없습니다.');
        program.help(); // 설명서를 보여주는 옵션
    });

program
    .parse(process.argv); // program 객체의 마지막에 붙이는 메서드로 process.argv를 인수로 받아서 명령어와 옵션을 파싱