function Z(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var N,Y,m={exports:{}},o={};function J(){if(N)return o;N=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),i=Symbol.for("react.consumer"),c=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),l=Symbol.for("react.lazy"),p=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d=Object.assign,h={};function v(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||y}function m(){}function _(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||y}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=v.prototype;var b=_.prototype=new m;b.constructor=_,d(b,v.prototype),b.isPureReactComponent=!0;var S=Array.isArray,E={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function g(t,n,r,o,u,i){return r=i.ref,{$$typeof:e,type:t,key:n,ref:void 0!==r?r:null,props:i}}function j(t){return"object"==typeof t&&null!==t&&t.$$typeof===e}var H=/\/+/g;function k(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(){}function $(n,r,o,u,i){var c=typeof n;("undefined"===c||"boolean"===c)&&(n=null);var a=!1;if(null===n)a=!0;else switch(c){case"bigint":case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case e:case t:a=!0;break;case l:return $((a=n._init)(n._payload),r,o,u,i)}}if(a)return i=i(n),a=""===u?"."+k(n,0):u,S(i)?(o="",null!=a&&(o=a.replace(H,"$&/")+"/"),$(i,r,o,"",(function(e){return e}))):null!=i&&(j(i)&&(i=function(e,t){return g(e.type,t,void 0,0,0,e.props)}(i,o+(null==i.key||n&&n.key===i.key?"":(""+i.key).replace(H,"$&/")+"/")+a)),r.push(i)),1;a=0;var s=""===u?".":u+":";if(S(n))for(var f=0;f<n.length;f++)a+=$(u=n[f],r,o,c=s+k(u,f),i);else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(n),"function"==typeof f)for(n=f.call(n),f=0;!(u=n.next()).done;)a+=$(u=u.value,r,o,c=s+k(u,f++),i);else if("object"===c){if("function"==typeof n.then)return $(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"==typeof e.status?e.then(R,R):(e.status="pending",e.then((function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)}),(function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)}))),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(n),r,o,u,i);throw r=String(n),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(n).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.")}return a}function C(e,t,n){if(null==e)return e;var r=[],o=0;return $(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function x(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)}),(function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"==typeof process&&"function"==typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function T(){}return o.Children={map:C,forEach:function(e,t,n){C(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!j(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},o.Component=v,o.Fragment=n,o.Profiler=u,o.PureComponent=_,o.StrictMode=r,o.Suspense=s,o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,o.act=function(){throw Error("act(...) is not supported in production builds of React.")},o.cache=function(e){return function(){return e.apply(null,arguments)}},o.cloneElement=function(e,t,n){if(null==e)throw Error("The argument must be a React element, but you passed "+e+".");var r=d({},e.props),o=e.key;if(null!=t)for(u in void 0!==t.ref&&void 0,void 0!==t.key&&(o=""+t.key),t)!w.call(t,u)||"key"===u||"__self"===u||"__source"===u||"ref"===u&&void 0===t.ref||(r[u]=t[u]);var u=arguments.length-2;if(1===u)r.children=n;else if(1<u){for(var i=Array(u),c=0;c<u;c++)i[c]=arguments[c+2];r.children=i}return g(e.type,o,void 0,0,0,r)},o.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:i,_context:e},e},o.createElement=function(e,t,n){var r,o={},u=null;if(null!=t)for(r in void 0!==t.key&&(u=""+t.key),t)w.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(o[r]=t[r]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var c=Array(i),a=0;a<i;a++)c[a]=arguments[a+2];o.children=c}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===o[r]&&(o[r]=i[r]);return g(e,u,void 0,0,0,o)},o.createRef=function(){return{current:null}},o.forwardRef=function(e){return{$$typeof:a,render:e}},o.isValidElement=j,o.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:x}},o.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},o.startTransition=function(e){var t=E.T,n={};E.T=n;try{var r=e(),o=E.S;null!==o&&o(n,r),"object"==typeof r&&null!==r&&"function"==typeof r.then&&r.then(T,O)}catch(e){O(e)}finally{E.T=t}},o.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},o.use=function(e){return E.H.use(e)},o.useActionState=function(e,t,n){return E.H.useActionState(e,t,n)},o.useCallback=function(e,t){return E.H.useCallback(e,t)},o.useContext=function(e){return E.H.useContext(e)},o.useDebugValue=function(){},o.useDeferredValue=function(e,t){return E.H.useDeferredValue(e,t)},o.useEffect=function(e,t){return E.H.useEffect(e,t)},o.useId=function(){return E.H.useId()},o.useImperativeHandle=function(e,t,n){return E.H.useImperativeHandle(e,t,n)},o.useInsertionEffect=function(e,t){return E.H.useInsertionEffect(e,t)},o.useLayoutEffect=function(e,t){return E.H.useLayoutEffect(e,t)},o.useMemo=function(e,t){return E.H.useMemo(e,t)},o.useOptimistic=function(e,t){return E.H.useOptimistic(e,t)},o.useReducer=function(e,t,n){return E.H.useReducer(e,t,n)},o.useRef=function(e){return E.H.useRef(e)},o.useState=function(e){return E.H.useState(e)},o.useSyncExternalStore=function(e,t,n){return E.H.useSyncExternalStore(e,t,n)},o.useTransition=function(){return E.H.useTransition()},o.version="19.0.0",o}function F(){return Y||(Y=1,m.exports=J()),m.exports}var V=F();const tt=Z(V);export{tt as F,V as a,F as r};