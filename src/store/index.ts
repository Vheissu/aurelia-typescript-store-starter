import { Container } from 'aurelia-dependency-injection';
import { Store } from 'aurelia-store';
//import { localStorageMiddleware, MiddlewarePlacement } from 'aurelia-store';

const store = Container.instance.get(Store);

//store.registerMiddleware(localStorageMiddleware, MiddlewarePlacement.After, { key: 'aurelia-steem--' });

export default store;
