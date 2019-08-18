import asyncComponent from '../lib/asyncComponent';

const AsyncHome = asyncComponent(()=>import('./Home'));
const AsyncForm = asyncComponent(()=>import('./Form'));
const AsyncList = asyncComponent(()=>import('./List'));
const AsyncDetail = asyncComponent(()=>import('./Detail'));
const AsyncNoMatch = asyncComponent(()=>import('./NoMatch'));

export {
    AsyncHome,
    AsyncForm,
    AsyncList,
    AsyncDetail,
    AsyncNoMatch
}
