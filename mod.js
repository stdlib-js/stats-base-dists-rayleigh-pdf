// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,u=t.__defineSetter__,i=t.__lookupGetter__,f=t.__lookupSetter__;var a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(i.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,v="set"in a,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,a.get),v&&u&&u.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){return r!=r}var y=Math.floor,v=Math.ceil;function p(r){return r<0?v(r):y(r)}var b=Number.NEGATIVE_INFINITY,w=Number.POSITIVE_INFINITY;function A(r){return r===w||r===b}var _="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var m=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;var s="function"==typeof Symbol?Symbol.toStringTag:"";var N=_&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return m.call(r);t=r[s],u=s,n=null!=(o=r)&&d.call(o,u);try{r[s]=void 0}catch(n){return m.call(r)}return e=m.call(r),n?r[s]=t:delete r[s],e}:function(r){return m.call(r)},h="function"==typeof Uint32Array;var U="function"==typeof Uint32Array?Uint32Array:null;var j,g="function"==typeof Uint32Array?Uint32Array:void 0;j=function(){var r,n,t;if("function"!=typeof U)return!1;try{n=new U(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(h&&t instanceof Uint32Array||"[object Uint32Array]"===N(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?g:function(){throw new Error("not implemented")};var I=j,O="function"==typeof Float64Array;var S="function"==typeof Float64Array?Float64Array:null;var E,F="function"==typeof Float64Array?Float64Array:void 0;E=function(){var r,n,t;if("function"!=typeof S)return!1;try{n=new S([1,3.14,-3.14,NaN]),t=n,r=(O&&t instanceof Float64Array||"[object Float64Array]"===N(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?F:function(){throw new Error("not implemented")};var H=E,T="function"==typeof Uint8Array;var G="function"==typeof Uint8Array?Uint8Array:null;var P,L="function"==typeof Uint8Array?Uint8Array:void 0;P=function(){var r,n,t;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,256,257]),t=n,r=(T&&t instanceof Uint8Array||"[object Uint8Array]"===N(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?L:function(){throw new Error("not implemented")};var M=P,V="function"==typeof Uint16Array;var W="function"==typeof Uint16Array?Uint16Array:null;var k,x="function"==typeof Uint16Array?Uint16Array:void 0;k=function(){var r,n,t;if("function"!=typeof W)return!1;try{n=new W(n=[1,3.14,-3.14,65536,65537]),t=n,r=(V&&t instanceof Uint16Array||"[object Uint16Array]"===N(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?x:function(){throw new Error("not implemented")};var Y,q={uint16:k,uint8:M};(Y=new q.uint16(1))[0]=4660;var C,z,B=52===new q.uint8(Y.buffer)[0];!0===B?(C=1,z=0):(C=0,z=1);var D={HIGH:C,LOW:z},J=new H(1),K=new I(J.buffer),Q=D.HIGH,R=D.LOW;function X(r,n){return J[0]=n,r[0]=K[Q],r[1]=K[R],r}function Z(r,n){return 1===arguments.length?X([0,0],r):X(r,n)}var $,rr,nr=!0===B?1:0,tr=new H(1),er=new I(tr.buffer);function or(r){return tr[0]=r,er[nr]}!0===B?($=1,rr=0):($=0,rr=1);var ur={HIGH:$,LOW:rr},ir=new H(1),fr=new I(ir.buffer),ar=ur.HIGH,cr=ur.LOW;function lr(r,n){return fr[ar]=r,fr[cr]=n,ir[0]}var yr=[0,0];function vr(r,n){var t,e;return Z(yr,r),t=yr[0],t&=2147483647,e=or(n),lr(t|=e&=2147483648,yr[1])}function pr(r){return Math.abs(r)}function br(r,n){return l(n)||A(n)?(r[0]=n,r[1]=0,r):0!==n&&pr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var wr=[0,0],Ar=[0,0];function _r(r,n){var t,e;return 0===n||0===r||l(r)||A(r)?r:(function(r,n){1===arguments.length?br([0,0],r):br(r,n)}(wr,r),n+=wr[1],n+=function(r){var n=or(r);return(n=(2146435072&n)>>>20)-1023|0}(r=wr[0]),n<-1074?vr(0,r):n>1023?r<0?b:w:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Z(Ar,r),t=Ar[0],t&=2148532223,e*lr(t|=n+1023<<20,Ar[1])))}function mr(r){var n;return l(r)||r===w?r:r===b?0:r>709.782712893384?w:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,o,u,i;return _r(1-(n-(e=r-n)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=p(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function dr(r){return y(r)===r}function sr(r){return dr(r/2)}function Nr(r){return sr(r>0?r-1:r+1)}var hr=Math.sqrt,Ur=!0===B?0:1,jr=new H(1),gr=new I(jr.buffer);function Ir(r,n){return jr[0]=r,gr[Ur]=n>>>0,jr[0]}function Or(r){return 0|r}var Sr=!0===B?1:0,Er=new H(1),Fr=new I(Er.buffer);function Hr(r,n){return Er[0]=r,Fr[Sr]=n>>>0,Er[0]}var Tr=[1,1.5],Gr=[0,.5849624872207642],Pr=[0,1.350039202129749e-8];var Lr=1e300,Mr=1e-300,Vr=[0,0],Wr=[0,0];function kr(r,n){var t,e,o,u,i,f,a,c,y,v,p,_,m,d;if(l(r)||l(n))return NaN;if(Z(Vr,n),i=Vr[0],0===Vr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return hr(r);if(-.5===n)return 1/hr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(A(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:pr(r)<1==(n===w)?0:w}(r,n)}if(Z(Vr,r),u=Vr[0],0===Vr[1]){if(0===u)return function(r,n){return n===b?w:n===w?0:n>0?Nr(n)?r:0:Nr(n)?vr(w,r):w}(r,n);if(1===r)return 1;if(-1===r&&Nr(n))return-1;if(A(r))return r===b?kr(-0,-n):n<0?0:w}if(r<0&&!1===dr(n))return(r-r)/(r-r);if(o=pr(r),t=2147483647&u|0,e=2147483647&i|0,a=i>>>31|0,f=(f=u>>>31|0)&&Nr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&or(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*Lr*Lr:f*Mr*Mr;if(t>1072693248)return 0===a?f*Lr*Lr:f*Mr*Mr;p=function(r,n){var t,e,o,u,i,f;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Ir(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(Wr,o)}else p=function(r,n,t){var e,o,u,i,f,a,c,l,y,v,p,b,w,A,_,m,d,s,N,h,U;return s=0,t<1048576&&(s-=53,t=or(n*=9007199254740992)),s+=(t>>20)-1023|0,t=1072693248|(N=1048575&t|0),N<=235662?h=0:N<767610?h=1:(h=0,s+=1,t-=1048576),i=Ir(o=(m=(n=Hr(n,t))-(c=Tr[h]))*(d=1/(n+c)),0),e=524288+(t>>1|536870912),a=Hr(0,e+=h<<18),_=(u=o*o)*u*(0===(U=u)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=Ir(a=3+(u=i*i)+(_+=(f=d*(m-i*a-i*(n-(a-c))))*(i+o)),0),w=(p=-7.028461650952758e-9*(y=Ir(y=(m=i*a)+(d=f*a+(_-(a-3-u))*o),0))+.9617966939259756*(d-(y-m))+Pr[h])-((b=Ir(b=(v=.9617967009544373*y)+p+(l=Gr[h])+(A=s),0))-A-l-v),r[0]=b,r[1]=w,r}(Wr,o,t);if(v=(n-(c=Ir(n,0)))*p[0]+n*p[1],y=c*p[0],Z(Vr,_=v+y),m=Or(Vr[0]),d=Or(Vr[1]),m>=1083179008){if(0!=(m-1083179008|d))return f*Lr*Lr;if(v+8008566259537294e-32>_-y)return f*Lr*Lr}else if((2147483647&m)>=1083231232){if(0!=(m-3230714880|d))return f*Mr*Mr;if(v<=_-y)return f*Mr*Mr}return _=function(r,n,t){var e,o,u,i,f,a,c,l,y,v,p;return v=((y=2147483647&r|0)>>20)-1023|0,l=0,y>1071644672&&(e=((l=r+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-v>>>0,r<0&&(l=-l),n-=u=Hr(0,e)),r=Or(r=or(c=1-((c=(i=.6931471824645996*(u=Ir(u=t+n,0)))+(f=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(o=c-(u=c*c)*(0===(p=u)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(o-2)-((a=f-(c-i))+c*a)-c))),(r+=l<<20>>>0)>>20<=0?_r(c,l):Hr(c,r)}(m,y,v),f*_}function xr(r,n){var t;return l(r)||l(n)||n<0?NaN:0===n?0===r?w:0:r<0||r===w?0:1/(t=kr(n,2))*r*mr(-kr(r,2)/(2*t))}function Yr(r){return function(){return r}}function qr(r){return l(r)?Yr(NaN):function(n){if(l(n))return NaN;return n===r?w:0}}function Cr(r){var n,t;return l(r)||r<0?Yr(NaN):0===r?qr(0):(t=kr(r,2),n=1/t,function(r){if(l(r))return NaN;if(r<0||r===w)return 0;return n*r*mr(-kr(r,2)/(2*t))})}c((function(r,n){return l(r)||l(n)?NaN:r===n?w:0}),"factory",qr),c(xr,"factory",Cr);export{xr as default,Cr as factory};
//# sourceMappingURL=mod.js.map
