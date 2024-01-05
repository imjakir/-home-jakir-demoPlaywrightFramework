let browser = 'opera';
switch (browser) {
    case 'Chrome':
        console.log('You are using Chrome');
        break;
    case 'Firefox':
        console.log('You are using Firefox');
        break;
    case 'Safari':
        console.log('You are using Safari');
        break;
    case 'Opera':
        console.log('You are using Opera');
        break;
    case 'Edge':
        console.log('You are using Edge');
        break;
    default:
        console.log('You are using an unknown browser');
        break;
}

function launchBrowser(browserNumber) {
    switch (browserNumber) {
        case 0:
            console.log('You are using Chrome');
            break;
        case 2:
            console.log('You are using Firefox');
            break;
        case 3:
            console.log('You are using Safari');
            break;
        case 4:
            console.log('You are using Opera');
            break;
        case 5:
            console.log('You are using Edge');
            break;
        default:
            console.log('You are using an unknown browser');
            break;
    }
}
launchBrowser(0);