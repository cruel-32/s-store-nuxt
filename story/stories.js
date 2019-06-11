module.exports =  {
    'hello' : {
        type : 'story',
        text : '안녕? S의 개인블로그에 온 걸 환영해',
        next : 'DoYouKnowWhoIam',
        face : ['normal'],
        action : ['greeting']
    },
    'DoYouKnowWhoIam' : {
        type : 'question',
        text : '내가 누군지는 알고 있겠지? ^ㅁ^',
        face : ['normal'],
        answers : [
            {
                text : '물론이지 반가워',
                next : 'welcomeToo',
            },
            {
                text : '니가 왜 여기있어?',
                next : 'KeepItASecret',
            },
            {
                text : '글쎄 누구더라?',
                next : 'YouAreQuiteBehind',
            },
        ]
    },
    'welcomeToo' : {
        type : 'story',
        text : '그래 나도 무척 반가워! ㅎㅎ',
        next : 'ImNotHere',
        face : ['pink'],
        action : ['yes'],
    },
    'KeepItASecret' : {
        type : 'story',
        text : '음... 그, 그건... 비,비밀로 해줘...',
        next : 'ImNotHere',
        face : ['sweat'],
        action : ['no'],
    },
    'ImNotHere' : {
        type : 'story',
        text : '어쩌면 난... 다음엔 여기 없을 수도 있어...',
        next : 'BecauseCopyright',
        face : ['normal'],
    },
    'BecauseCopyright' : {
        type : 'story',
        text : '여기 주인장이 비영리 개인블로그 라길래 놀러왔는데',
        next : 'superStar',
        face : ['sweat'],
    },
    'YouAreQuiteBehind' : {
        type : 'story',
        text : '너.... 유행에 엄청나게 뒤쳐지는구나',
        next : 'donHaveAfriend',
        face : ['sweat'],
    },
    'donHaveAfriend' : {
        type : 'story',
        text : '아니면... 친구가 없니..?',
        next : 'ImNotHere',
        face : ['depression'],
    },
    'superStar' : {
        type : 'story',
        text : '이렇게 일을 많이 시킬줄은 몰라서 살짝 불안하거든...',
        next : 'isReplaced',
        face : ['sweat'],
    },
    'isReplaced' : {
        type : 'question',
        text : '암튼 내가 다른 캐릭터로 대체 되더라도 많이 놀러와줘',
        face : ['normal'],
        answers : [
            {
                text : '그래 알겠어',
                next : 'thankYou',
            },
            {
                text : '아 귀찮은데',
                next : 'Annoying',
            },
        ]
    },
    "thankYou" : {
        type : 'story',
        text : '고마워, 넌 착하구나',
        face : ['pink'],
        next : 'introduce',
        action : ['yes'],
    },
    "Annoying" : {
        type : 'story',
        text : '너 좀 짜증나는 타입이구나',
        face : ['angry'],
        next : 'introduce',
    },
    "introduce" : {
        type : 'story',
        text : '암튼 이제 이 블로그에 대해 소개할게',
        face : ['normal'],
        next : 'selectMenu',
    },
    "selectMenu" : {
        type : 'end',
        text : '원하는 메뉴를 선택해봐',
        face : ['normal'],
    },
    "rehi" : {
        type : 'story',
        text : '안녕 반가워 또 왔네?',
        face : ['pink'],
        next : 'selectMenu',
    },
}