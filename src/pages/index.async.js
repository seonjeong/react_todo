import asyncComponent from '../lib/asyncComponent';

const AsyncHome = asyncComponent(()=>import('./Home?chunk'));
const AsyncList = asyncComponent(()=>import('./List?chunk'));
const AsyncDetail = asyncComponent(()=>import('./Detail'));
// const AsyncNoMatch = asyncComponent(()=>import('./NoMatch'));

export {
    AsyncHome,
    AsyncList,
    AsyncDetail,
    // AsyncNoMatch
}
