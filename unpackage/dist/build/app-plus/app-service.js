var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20181116_syb_scopedata*/global.__wcc_version__='v0.5vv_20181116_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
var value = $gdc( raw, "", 2 );
return value;
}
else
{
var value = $gdc( raw, "", 2 );
return value;
}
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'1c756545'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'djRecommendList']])
Z([3,'item.index'])
Z([[2,'<='],[[7],[3,'index']],[[7],[3,'djListNumber']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'35d88bd4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'8538ee04'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'2eab5e4a'])
Z([3,'handleProxy'])
Z([3,'_div M2eab5e4a nowPlay-panel'])
Z([[7],[3,'$k']])
Z([1,'2eab5e4a-0'])
Z([[2,'!='],[[7],[3,'musicInfo']],[1,'']])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'6ba326c8'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'programsList']])
Z([3,'item.index'])
Z([3,'handleProxy'])
Z([3,'_view M6ba326c8 item'])
Z([[7],[3,'$k']])
Z([[2,'+'],[1,'6ba326c8-0-'],[[7],[3,'index']]])
Z([[6],[[7],[3,'item']],[3,'index']])
Z([[2,'!=='],[[6],[[6],[[7],[3,'item']],[3,'channels']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'25dfbbc2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'9049520c'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'9049520c-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'1c756545'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'9049520c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'42cd432e'])
Z([[2,'=='],[[2,'!'],[[7],[3,'playlist']]],[1,'']])
Z([3,'_view M42cd432e page-panel'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'42cd432e-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'2eab5e4a'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'42cd432e-1']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'25dfbbc2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'42cd432e'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'8cdfbac0'])
Z([3,'_view M8cdfbac0 page-panel'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'8cdfbac0-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'2eab5e4a'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'personalizedList']])
Z([3,'item.index'])
Z([[2,'<='],[[7],[3,'index']],[1,10]])
Z(z[4])
Z(z[5])
Z([[7],[3,'toplistArtistList']])
Z(z[7])
Z([[2,'<='],[[7],[3,'index']],[1,20]])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'8cdfbac0-2']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'6ba326c8'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'8cdfbac0'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'7f53695a'])
Z([3,'_view M7f53695a page-panel'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'7f53695a-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'2eab5e4a'])
Z([3,'_view M7f53695a tab-content'])
Z([[2,'=='],[[7],[3,'tabNum']],[1,1]])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'7f53695a-1']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'8538ee04'])
Z([[2,'=='],[[7],[3,'tabNum']],[1,2]])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'7f53695a-2']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[7])
Z([[2,'=='],[[7],[3,'tabNum']],[1,3]])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'7f53695a-3']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[7])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'7f53695a'])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ffddd90c'])
Z([[2,'=='],[[2,'!'],[[7],[3,'mvDetail']]],[1,'']])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'ffddd90c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'f261eccc'])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'f261eccc'])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'160246fa'])
Z([[2,'=='],[[2,'!'],[[7],[3,'personalizedList']]],[1,'']])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'160246fa-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'2eab5e4a'])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'160246fa'])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'7e2a793a'])
Z([[2,'=='],[[2,'!'],[[6],[[7],[3,'musicDetail']],[3,'name']]],[1,'']])
Z([3,'_view data-v-2d37ff8c player-btn'])
Z([[7],[3,'isStop']])
Z([[2,'!'],[[7],[3,'isStop']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'7e2a793a'])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'125c1328'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'125c1328-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'2eab5e4a'])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'125c1328'])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'0660b324'])
Z([[2,'=='],[[2,'!'],[[7],[3,'playlist']]],[1,'']])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'0660b324-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'2eab5e4a'])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'0660b324'])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'a21b228c'])
Z([3,'_view Ma21b228c page-panel singerInfo'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'a21b228c-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'2eab5e4a'])
Z([3,'_view Ma21b228c tab-content'])
Z([[2,'=='],[[7],[3,'tabNum']],[1,1]])
Z([[2,'=='],[[7],[3,'tabNum']],[1,2]])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'a21b228c-1']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'25dfbbc2'])
Z([[2,'=='],[[7],[3,'tabNum']],[1,4]])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'a21b228c-2']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'35d88bd4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'a21b228c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./common/slots.wxml','/components/nowPlay.vue.wxml','/components/songList.vue.wxml','/components/programsList.vue.wxml','/components/djRecommendList.vue.wxml','/components/mvListT.vue.wxml','/components/mvList.vue.wxml','./components/djRecommendList.vue.wxml','./components/mvList.vue.wxml','./components/mvListT.vue.wxml','./components/nowPlay.vue.wxml','./components/programsList.vue.wxml','./components/songList.vue.wxml','./pages/djList/djList.vue.wxml','./pages/djList/djList.wxml','./djList.vue.wxml','./pages/getPlaylistDetail/getPlaylistDetail.vue.wxml','./pages/getPlaylistDetail/getPlaylistDetail.wxml','./getPlaylistDetail.vue.wxml','./pages/index/index.vue.wxml','./pages/index/index.wxml','./index.vue.wxml','./pages/mv/mv.vue.wxml','./pages/mv/mv.wxml','./mv.vue.wxml','./pages/mvDetail/mvDetail.vue.wxml','./pages/mvDetail/mvDetail.wxml','./mvDetail.vue.wxml','./pages/mvList/mvList.vue.wxml','./pages/mvList/mvList.wxml','./mvList.vue.wxml','./pages/personalizedList/personalizedList.vue.wxml','./pages/personalizedList/personalizedList.wxml','./personalizedList.vue.wxml','./pages/play/play.vue.wxml','./pages/play/play.wxml','./play.vue.wxml','./pages/ranking/ranking.vue.wxml','./pages/ranking/ranking.wxml','./ranking.vue.wxml','./pages/rankingList/rankingList.vue.wxml','./pages/rankingList/rankingList.wxml','./rankingList.vue.wxml','./pages/singerInfo/singerInfo.vue.wxml','./pages/singerInfo/singerInfo.wxml','./singerInfo.vue.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=e_[x[0]].i
_ai(oB,x[1],e_,x[0],1,1)
_ai(oB,x[2],e_,x[0],2,2)
_ai(oB,x[3],e_,x[0],3,2)
_ai(oB,x[4],e_,x[0],4,2)
_ai(oB,x[5],e_,x[0],5,2)
_ai(oB,x[6],e_,x[0],6,2)
oB.pop()
oB.pop()
oB.pop()
oB.pop()
oB.pop()
oB.pop()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1],x[2],x[3],x[4],x[5],x[6]],ic:[]}
d_[x[7]]={}
d_[x[7]]["1c756545"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[7]+':1c756545'
r.wxVkey=b
gg.f=$gdc(f_["./components/djRecommendList.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[7]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_v()
_(cF,oH)
if(_oz(z,5,fE,oD,gg)){oH.wxVkey=1
}
oH.wxXCkey=1
return cF
}
oB.wxXCkey=2
_2z(z,3,xC,e,s,gg,oB,'item','index','item.index')
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[7]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
d_[x[8]]["35d88bd4"]=function(e,s,r,gg){
var z=gz$gwx_3()
var b=x[8]+':35d88bd4'
r.wxVkey=b
gg.f=$gdc(f_["./components/mvList.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[8]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
d_[x[9]]["8538ee04"]=function(e,s,r,gg){
var z=gz$gwx_4()
var b=x[9]+':8538ee04'
r.wxVkey=b
gg.f=$gdc(f_["./components/mvListT.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[9]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[9]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
d_[x[10]]["2eab5e4a"]=function(e,s,r,gg){
var z=gz$gwx_5()
var b=x[10]+':2eab5e4a'
r.wxVkey=b
gg.f=$gdc(f_["./components/nowPlay.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[10]);return}
p_[b]=true
try{
var oB=_mz(z,'view',['bindtap',1,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,5,e,s,gg)){xC.wxVkey=1
}
xC.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[10]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
d_[x[11]]["6ba326c8"]=function(e,s,r,gg){
var z=gz$gwx_6()
var b=x[11]+':6ba326c8'
r.wxVkey=b
gg.f=$gdc(f_["./components/programsList.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[11]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_mz(z,'view',['bindtap',5,'class',1,'data-comkey',2,'data-eventid',3,'key',4],[],fE,oD,gg)
var cI=_v()
_(oH,cI)
if(_oz(z,10,fE,oD,gg)){cI.wxVkey=1
}
cI.wxXCkey=1
_(cF,oH)
return cF
}
oB.wxXCkey=2
_2z(z,3,xC,e,s,gg,oB,'item','index','item.index')
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[11]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
d_[x[12]]["25dfbbc2"]=function(e,s,r,gg){
var z=gz$gwx_7()
var b=x[12]+':25dfbbc2'
r.wxVkey=b
gg.f=$gdc(f_["./components/songList.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[12]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[12]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
d_[x[13]]["9049520c"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[13]+':9049520c'
r.wxVkey=b
gg.f=$gdc(f_["./pages/djList/djList.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[13]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=_oz(z,2,e,s,gg)
var oD=_gd(x[13],xC,e_,d_)
if(oD){
var fE=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[13],1,192)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var oJ=e_[x[13]].i
_ai(oJ,x[4],e_,x[13],1,1)
oJ.pop()
return r
}
e_[x[13]]={f:m7,j:[],i:[],ti:[x[4]],ic:[]}
d_[x[14]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var aL=e_[x[14]].i
_ai(aL,x[15],e_,x[14],1,1)
var tM=_v()
_(r,tM)
var eN=_oz(z,1,e,s,gg)
var bO=_gd(x[14],eN,e_,d_)
if(bO){
var oP=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
tM.wxXCkey=3
bO(oP,oP,tM,gg)
gg.f=cur_globalf
}
else _w(eN,x[14],2,18)
aL.pop()
return r
}
e_[x[14]]={f:m8,j:[],i:[],ti:[x[15]],ic:[]}
d_[x[16]]={}
d_[x[16]]["42cd432e"]=function(e,s,r,gg){
var z=gz$gwx_10()
var b=x[16]+':42cd432e'
r.wxVkey=b
gg.f=$gdc(f_["./pages/getPlaylistDetail/getPlaylistDetail.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[16]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=_v()
_(xC,oD)
var fE=_oz(z,4,e,s,gg)
var cF=_gd(x[16],fE,e_,d_)
if(cF){
var hG=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
oD.wxXCkey=3
cF(hG,hG,oD,gg)
gg.f=cur_globalf
}
else _w(fE,x[16],1,257)
var oH=_v()
_(xC,oH)
var cI=_oz(z,6,e,s,gg)
var oJ=_gd(x[16],cI,e_,d_)
if(oJ){
var lK=_1z(z,5,e,s,gg) || {}
var cur_globalf=gg.f
oH.wxXCkey=3
oJ(lK,lK,oH,gg)
gg.f=cur_globalf
}
else _w(cI,x[16],1,761)
_(oB,xC)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var oR=e_[x[16]].i
_ai(oR,x[1],e_,x[16],1,1)
_ai(oR,x[2],e_,x[16],1,46)
oR.pop()
oR.pop()
return r
}
e_[x[16]]={f:m9,j:[],i:[],ti:[x[1],x[2]],ic:[]}
d_[x[17]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var cT=e_[x[17]].i
_ai(cT,x[18],e_,x[17],1,1)
var hU=_v()
_(r,hU)
var oV=_oz(z,1,e,s,gg)
var cW=_gd(x[17],oV,e_,d_)
if(cW){
var oX=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
hU.wxXCkey=3
cW(oX,oX,hU,gg)
gg.f=cur_globalf
}
else _w(oV,x[17],2,18)
cT.pop()
return r
}
e_[x[17]]={f:m10,j:[],i:[],ti:[x[18]],ic:[]}
d_[x[19]]={}
d_[x[19]]["8cdfbac0"]=function(e,s,r,gg){
var z=gz$gwx_12()
var b=x[19]+':8cdfbac0'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[19]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
var oD=_oz(z,3,e,s,gg)
var fE=_gd(x[19],oD,e_,d_)
if(fE){
var cF=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[19],1,234)
var hG=_v()
_(oB,hG)
var oH=function(oJ,cI,lK,gg){
var tM=_v()
_(lK,tM)
if(_oz(z,8,oJ,cI,gg)){tM.wxVkey=1
}
tM.wxXCkey=1
return lK
}
hG.wxXCkey=2
_2z(z,6,oH,e,s,gg,hG,'item','index','item.index')
var eN=_v()
_(oB,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
if(_oz(z,13,xQ,oP,gg)){cT.wxVkey=1
}
cT.wxXCkey=1
return oR
}
eN.wxXCkey=2
_2z(z,11,bO,e,s,gg,eN,'item','index','item.index')
var hU=_v()
_(oB,hU)
var oV=_oz(z,15,e,s,gg)
var cW=_gd(x[19],oV,e_,d_)
if(cW){
var oX=_1z(z,14,e,s,gg) || {}
var cur_globalf=gg.f
hU.wxXCkey=3
cW(oX,oX,hU,gg)
gg.f=cur_globalf
}
else _w(oV,x[19],1,3250)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var aZ=e_[x[19]].i
_ai(aZ,x[1],e_,x[19],1,1)
_ai(aZ,x[3],e_,x[19],1,46)
aZ.pop()
aZ.pop()
return r
}
e_[x[19]]={f:m11,j:[],i:[],ti:[x[1],x[3]],ic:[]}
d_[x[20]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var e2=e_[x[20]].i
_ai(e2,x[21],e_,x[20],1,1)
var b3=_v()
_(r,b3)
var o4=_oz(z,1,e,s,gg)
var x5=_gd(x[20],o4,e_,d_)
if(x5){
var o6=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
b3.wxXCkey=3
x5(o6,o6,b3,gg)
gg.f=cur_globalf
}
else _w(o4,x[20],2,18)
e2.pop()
return r
}
e_[x[20]]={f:m12,j:[],i:[],ti:[x[21]],ic:[]}
d_[x[22]]={}
d_[x[22]]["7f53695a"]=function(e,s,r,gg){
var z=gz$gwx_14()
var b=x[22]+':7f53695a'
r.wxVkey=b
gg.f=$gdc(f_["./pages/mv/mv.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[22]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
var oD=_oz(z,3,e,s,gg)
var fE=_gd(x[22],oD,e_,d_)
if(fE){
var cF=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[22],1,229)
var hG=_n('view')
_rz(z,hG,'class',4,e,s,gg)
var oH=_v()
_(hG,oH)
if(_oz(z,5,e,s,gg)){oH.wxVkey=1
var lK=_v()
_(oH,lK)
var aL=_oz(z,7,e,s,gg)
var tM=_gd(x[22],aL,e_,d_)
if(tM){
var eN=_1z(z,6,e,s,gg) || {}
var cur_globalf=gg.f
lK.wxXCkey=3
tM(eN,eN,lK,gg)
gg.f=cur_globalf
}
else _w(aL,x[22],1,981)
}
var cI=_v()
_(hG,cI)
if(_oz(z,8,e,s,gg)){cI.wxVkey=1
var bO=_v()
_(cI,bO)
var oP=_oz(z,10,e,s,gg)
var xQ=_gd(x[22],oP,e_,d_)
if(xQ){
var oR=_1z(z,9,e,s,gg) || {}
var cur_globalf=gg.f
bO.wxXCkey=3
xQ(oR,oR,bO,gg)
gg.f=cur_globalf
}
else _w(oP,x[22],1,1141)
}
var oJ=_v()
_(hG,oJ)
if(_oz(z,11,e,s,gg)){oJ.wxVkey=1
var fS=_v()
_(oJ,fS)
var cT=_oz(z,13,e,s,gg)
var hU=_gd(x[22],cT,e_,d_)
if(hU){
var oV=_1z(z,12,e,s,gg) || {}
var cur_globalf=gg.f
fS.wxXCkey=3
hU(oV,oV,fS,gg)
gg.f=cur_globalf
}
else _w(cT,x[22],1,1301)
}
oH.wxXCkey=1
cI.wxXCkey=1
oJ.wxXCkey=1
_(oB,hG)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var c8=e_[x[22]].i
_ai(c8,x[1],e_,x[22],1,1)
_ai(c8,x[5],e_,x[22],1,46)
c8.pop()
c8.pop()
return r
}
e_[x[22]]={f:m13,j:[],i:[],ti:[x[1],x[5]],ic:[]}
d_[x[23]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var o0=e_[x[23]].i
_ai(o0,x[24],e_,x[23],1,1)
var cAB=_v()
_(r,cAB)
var oBB=_oz(z,1,e,s,gg)
var lCB=_gd(x[23],oBB,e_,d_)
if(lCB){
var aDB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
cAB.wxXCkey=3
lCB(aDB,aDB,cAB,gg)
gg.f=cur_globalf
}
else _w(oBB,x[23],2,18)
o0.pop()
return r
}
e_[x[23]]={f:m14,j:[],i:[],ti:[x[24]],ic:[]}
d_[x[25]]={}
d_[x[25]]["ffddd90c"]=function(e,s,r,gg){
var z=gz$gwx_16()
var b=x[25]+':ffddd90c'
r.wxVkey=b
gg.f=$gdc(f_["./pages/mvDetail/mvDetail.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[25]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[25]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var bGB=e_[x[26]].i
_ai(bGB,x[27],e_,x[26],1,1)
var oHB=_v()
_(r,oHB)
var xIB=_oz(z,1,e,s,gg)
var oJB=_gd(x[26],xIB,e_,d_)
if(oJB){
var fKB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oHB.wxXCkey=3
oJB(fKB,fKB,oHB,gg)
gg.f=cur_globalf
}
else _w(xIB,x[26],2,18)
bGB.pop()
return r
}
e_[x[26]]={f:m16,j:[],i:[],ti:[x[27]],ic:[]}
d_[x[28]]={}
d_[x[28]]["f261eccc"]=function(e,s,r,gg){
var z=gz$gwx_18()
var b=x[28]+':f261eccc'
r.wxVkey=b
gg.f=$gdc(f_["./pages/mvList/mvList.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[28]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
return r
}
e_[x[28]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var oNB=e_[x[29]].i
_ai(oNB,x[30],e_,x[29],1,1)
var cOB=_v()
_(r,cOB)
var oPB=_oz(z,1,e,s,gg)
var lQB=_gd(x[29],oPB,e_,d_)
if(lQB){
var aRB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
cOB.wxXCkey=3
lQB(aRB,aRB,cOB,gg)
gg.f=cur_globalf
}
else _w(oPB,x[29],2,18)
oNB.pop()
return r
}
e_[x[29]]={f:m18,j:[],i:[],ti:[x[30]],ic:[]}
d_[x[31]]={}
d_[x[31]]["160246fa"]=function(e,s,r,gg){
var z=gz$gwx_20()
var b=x[31]+':160246fa'
r.wxVkey=b
gg.f=$gdc(f_["./pages/personalizedList/personalizedList.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[31]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
var oD=_oz(z,3,e,s,gg)
var fE=_gd(x[31],oD,e_,d_)
if(fE){
var cF=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[31],1,219)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var eTB=e_[x[31]].i
_ai(eTB,x[1],e_,x[31],1,1)
eTB.pop()
return r
}
e_[x[31]]={f:m19,j:[],i:[],ti:[x[1]],ic:[]}
d_[x[32]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var oVB=e_[x[32]].i
_ai(oVB,x[33],e_,x[32],1,1)
var xWB=_v()
_(r,xWB)
var oXB=_oz(z,1,e,s,gg)
var fYB=_gd(x[32],oXB,e_,d_)
if(fYB){
var cZB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
xWB.wxXCkey=3
fYB(cZB,cZB,xWB,gg)
gg.f=cur_globalf
}
else _w(oXB,x[32],2,18)
oVB.pop()
return r
}
e_[x[32]]={f:m20,j:[],i:[],ti:[x[33]],ic:[]}
d_[x[34]]={}
d_[x[34]]["7e2a793a"]=function(e,s,r,gg){
var z=gz$gwx_22()
var b=x[34]+':7e2a793a'
r.wxVkey=b
gg.f=$gdc(f_["./pages/play/play.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[34]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(xC,fE)
if(_oz(z,4,e,s,gg)){fE.wxVkey=1
}
oD.wxXCkey=1
fE.wxXCkey=1
_(oB,xC)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
return r
}
e_[x[34]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var c3B=e_[x[35]].i
_ai(c3B,x[36],e_,x[35],1,1)
var o4B=_v()
_(r,o4B)
var l5B=_oz(z,1,e,s,gg)
var a6B=_gd(x[35],l5B,e_,d_)
if(a6B){
var t7B=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
o4B.wxXCkey=3
a6B(t7B,t7B,o4B,gg)
gg.f=cur_globalf
}
else _w(l5B,x[35],2,18)
c3B.pop()
return r
}
e_[x[35]]={f:m22,j:[],i:[],ti:[x[36]],ic:[]}
d_[x[37]]={}
d_[x[37]]["125c1328"]=function(e,s,r,gg){
var z=gz$gwx_24()
var b=x[37]+':125c1328'
r.wxVkey=b
gg.f=$gdc(f_["./pages/ranking/ranking.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[37]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=_oz(z,2,e,s,gg)
var oD=_gd(x[37],xC,e_,d_)
if(oD){
var fE=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[37],1,190)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var b9B=e_[x[37]].i
_ai(b9B,x[1],e_,x[37],1,1)
b9B.pop()
return r
}
e_[x[37]]={f:m23,j:[],i:[],ti:[x[1]],ic:[]}
d_[x[38]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var xAC=e_[x[38]].i
_ai(xAC,x[39],e_,x[38],1,1)
var oBC=_v()
_(r,oBC)
var fCC=_oz(z,1,e,s,gg)
var cDC=_gd(x[38],fCC,e_,d_)
if(cDC){
var hEC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oBC.wxXCkey=3
cDC(hEC,hEC,oBC,gg)
gg.f=cur_globalf
}
else _w(fCC,x[38],2,18)
xAC.pop()
return r
}
e_[x[38]]={f:m24,j:[],i:[],ti:[x[39]],ic:[]}
d_[x[40]]={}
d_[x[40]]["0660b324"]=function(e,s,r,gg){
var z=gz$gwx_26()
var b=x[40]+':0660b324'
r.wxVkey=b
gg.f=$gdc(f_["./pages/rankingList/rankingList.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[40]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
var oD=_oz(z,3,e,s,gg)
var fE=_gd(x[40],oD,e_,d_)
if(fE){
var cF=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[40],1,211)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var cGC=e_[x[40]].i
_ai(cGC,x[1],e_,x[40],1,1)
cGC.pop()
return r
}
e_[x[40]]={f:m25,j:[],i:[],ti:[x[1]],ic:[]}
d_[x[41]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var lIC=e_[x[41]].i
_ai(lIC,x[42],e_,x[41],1,1)
var aJC=_v()
_(r,aJC)
var tKC=_oz(z,1,e,s,gg)
var eLC=_gd(x[41],tKC,e_,d_)
if(eLC){
var bMC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aJC.wxXCkey=3
eLC(bMC,bMC,aJC,gg)
gg.f=cur_globalf
}
else _w(tKC,x[41],2,18)
lIC.pop()
return r
}
e_[x[41]]={f:m26,j:[],i:[],ti:[x[42]],ic:[]}
d_[x[43]]={}
d_[x[43]]["a21b228c"]=function(e,s,r,gg){
var z=gz$gwx_28()
var b=x[43]+':a21b228c'
r.wxVkey=b
gg.f=$gdc(f_["./pages/singerInfo/singerInfo.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[43]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
var oD=_oz(z,3,e,s,gg)
var fE=_gd(x[43],oD,e_,d_)
if(fE){
var cF=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[43],1,285)
var hG=_n('view')
_rz(z,hG,'class',4,e,s,gg)
var oH=_v()
_(hG,oH)
if(_oz(z,5,e,s,gg)){oH.wxVkey=1
}
var cI=_v()
_(hG,cI)
if(_oz(z,6,e,s,gg)){cI.wxVkey=1
var lK=_v()
_(cI,lK)
var aL=_oz(z,8,e,s,gg)
var tM=_gd(x[43],aL,e_,d_)
if(tM){
var eN=_1z(z,7,e,s,gg) || {}
var cur_globalf=gg.f
lK.wxXCkey=3
tM(eN,eN,lK,gg)
gg.f=cur_globalf
}
else _w(aL,x[43],1,1341)
}
var oJ=_v()
_(hG,oJ)
if(_oz(z,9,e,s,gg)){oJ.wxVkey=1
var bO=_v()
_(oJ,bO)
var oP=_oz(z,11,e,s,gg)
var xQ=_gd(x[43],oP,e_,d_)
if(xQ){
var oR=_1z(z,10,e,s,gg) || {}
var cur_globalf=gg.f
bO.wxXCkey=3
xQ(oR,oR,bO,gg)
gg.f=cur_globalf
}
else _w(oP,x[43],1,1501)
}
oH.wxXCkey=1
cI.wxXCkey=1
oJ.wxXCkey=1
_(oB,hG)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var xOC=e_[x[43]].i
_ai(xOC,x[1],e_,x[43],1,1)
_ai(xOC,x[2],e_,x[43],1,46)
_ai(xOC,x[6],e_,x[43],1,92)
xOC.pop()
xOC.pop()
xOC.pop()
return r
}
e_[x[43]]={f:m27,j:[],i:[],ti:[x[1],x[2],x[6]],ic:[]}
d_[x[44]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var fQC=e_[x[44]].i
_ai(fQC,x[45],e_,x[44],1,1)
var cRC=_v()
_(r,cRC)
var hSC=_oz(z,1,e,s,gg)
var oTC=_gd(x[44],hSC,e_,d_)
if(oTC){
var cUC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
cRC.wxXCkey=3
oTC(cUC,cUC,cRC,gg)
gg.f=cur_globalf
}
else _w(hSC,x[44],2,18)
fQC.pop()
return r
}
e_[x[44]]={f:m28,j:[],i:[],ti:[x[45]],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/mvDetail/mvDetail","pages/getPlaylistDetail/getPlaylistDetail","pages/personalizedList/personalizedList","pages/mvList/mvList","pages/djList/djList","pages/play/play","pages/ranking/ranking","pages/mv/mv","pages/rankingList/rankingList","pages/singerInfo/singerInfo"],"subPackages":[],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"音乐","navigationBarBackgroundColor":"#e91e63","backgroundColor":"#e91e63"},"usingComponents":{},"tabBar":{"color":"#333333","selectedColor":"#e91e63","borderStyle":"black","list":[{"text":"首页","pagePath":"pages/index/index","iconPath":"static/images/index-d.png","selectedIconPath":"static/images/index-a.png"},{"text":"牌行榜","pagePath":"pages/ranking/ranking","iconPath":"static/images/ranking-d.png","selectedIconPath":"static/images/ranking-a.png"},{"text":"MV","pagePath":"pages/mv/mv","iconPath":"static/images/mv-d.png","selectedIconPath":"static/images/mv-a.png"}]},"nvueCompiler":"weex","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"音乐","compilerVersion":"2.0.1"};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['pages/djList/djList.json']={"usingComponents":{},"navigationBarTitleText":"电台列表"};
__wxAppCode__['pages/djList/djList.wxml']=$gwx('./pages/djList/djList.wxml');

__wxAppCode__['pages/getPlaylistDetail/getPlaylistDetail.json']={"usingComponents":{},"navigationBarTitleText":"歌单列表"};
__wxAppCode__['pages/getPlaylistDetail/getPlaylistDetail.wxml']=$gwx('./pages/getPlaylistDetail/getPlaylistDetail.wxml');

__wxAppCode__['pages/index/index.json']={"usingComponents":{},"navigationBarTitleText":"音乐","enablePullDownRefresh":true};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/mv/mv.json']={"usingComponents":{},"navigationBarTitleText":"MV","enablePullDownRefresh":true};
__wxAppCode__['pages/mv/mv.wxml']=$gwx('./pages/mv/mv.wxml');

__wxAppCode__['pages/mvDetail/mvDetail.json']={"usingComponents":{},"navigationBarTitleText":"MV详情"};
__wxAppCode__['pages/mvDetail/mvDetail.wxml']=$gwx('./pages/mvDetail/mvDetail.wxml');

__wxAppCode__['pages/mvList/mvList.json']={"usingComponents":{},"navigationBarTitleText":"mv列表"};
__wxAppCode__['pages/mvList/mvList.wxml']=$gwx('./pages/mvList/mvList.wxml');

__wxAppCode__['pages/personalizedList/personalizedList.json']={"usingComponents":{},"navigationBarTitleText":"歌单"};
__wxAppCode__['pages/personalizedList/personalizedList.wxml']=$gwx('./pages/personalizedList/personalizedList.wxml');

__wxAppCode__['pages/play/play.json']={"usingComponents":{}};
__wxAppCode__['pages/play/play.wxml']=$gwx('./pages/play/play.wxml');

__wxAppCode__['pages/ranking/ranking.json']={"usingComponents":{},"navigationBarTitleText":"排行榜"};
__wxAppCode__['pages/ranking/ranking.wxml']=$gwx('./pages/ranking/ranking.wxml');

__wxAppCode__['pages/rankingList/rankingList.json']={"usingComponents":{}};
__wxAppCode__['pages/rankingList/rankingList.wxml']=$gwx('./pages/rankingList/rankingList.wxml');

__wxAppCode__['pages/singerInfo/singerInfo.json']={"usingComponents":{}};
__wxAppCode__['pages/singerInfo/singerInfo.wxml']=$gwx('./pages/singerInfo/singerInfo.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"3ab7":function(t,e,n){"use strict";var o=n("c731"),i=n.n(o);i.a},"415b":function(t,e,n){"use strict";n.r(e);var o=n("d95e"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=i.a},"5ad2":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("f3d3")),i=a(n("2f62"));function a(t){return t&&t.__esModule?t:{default:t}}o.default.use(i.default);var u=new i.default.Store({state:{isMusicStart:!1,isMusicPlay:!0,musicInfo:"",playTime:""},mutations:{setMusicInfo:function(t,e){t.musicInfo=e},musicStart:function(t,e){t.isMusicStart=e},setMusicPlay:function(t,e){t.isMusicPlay=e},setPlayTime:function(t,e){t.playTime=e}}}),r=u;e.default=r},b28a:function(t,e,n){"use strict";n.r(e);var o=n("415b");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("3ab7");var a,u,r=n("2877"),l=Object(r["a"])(o["default"],a,u,!1,null,null,null);e["default"]=l.exports},c731:function(t,e,n){},d950:function(t,e,n){"use strict";t.exports={server:"https://music.evinweb.com/",doucment:"https://binaryify.github.io/NeteaseCloudMusicApi/#/",type:{banner:"banner",personalized:"personalized",topMv:"top/mv",mvFirst:"mv/first",personalizedMv:"personalized/mv",toplistArtist:"toplist/artist",djRecommend:"dj/recommend",mvDetail:"mv/detail",mvUrl:"mv/url",simiMv:"simi/mv",playlistDetail:"playlist/detail",songDetail:"song/detail",songUrl:"song/url",topList:"top/list",programRecommend:"program/recommend",artistDesc:"artist/desc",artistSong:"artists",artistMv:"artist/mv"}}},d95e:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};e.default=o},ec35:function(t,e,n){"use strict";(function(t){n("c7c6");var e=u(n("f3d3")),o=u(n("b28a")),i=u(n("d950")),a=u(n("5ad2"));function u(t){return t&&t.__esModule?t:{default:t}}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){l(t,e,n[e])})}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.default.prototype.$store=a.default,e.default.config.productionTip=!1,o.default.mpType="app",e.default.prototype.MusicApi=i.default;var c=new e.default(r({store:a.default},o.default));c.$mount(),e.default.prototype.globalData={bgAudioMannager:t.getBackgroundAudioManager(),innerAudioContext:t.createInnerAudioContext()}}).call(this,n("6e42")["default"])}},[["ec35","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function r(r) {
    for (var n, l, i = r[0], a = r[1], f = r[2], p = 0, s = []; p < i.length; p++) {
      l = i[p], o[l] && s.push(o[l][0]), o[l] = 0;
    }

    for (n in a) {
      Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }

    c && c(r);

    while (s.length) {
      s.shift()();
    }

    return u.push.apply(u, f || []), t();
  }

  function t() {
    for (var e, r = 0; r < u.length; r++) {
      for (var t = u[r], n = !0, i = 1; i < t.length; i++) {
        var a = t[i];
        0 !== o[a] && (n = !1);
      }

      n && (u.splice(r--, 1), e = l(l.s = t[0]));
    }

    return e;
  }

  var n = {},
      o = {
    "common/runtime": 0
  },
      u = [];

  function l(r) {
    if (n[r]) return n[r].exports;
    var t = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(t.exports, t, t.exports, l), t.l = !0, t.exports;
  }

  l.m = e, l.c = n, l.d = function (e, r, t) {
    l.o(e, r) || Object.defineProperty(e, r, {
      enumerable: !0,
      get: t
    });
  }, l.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, l.t = function (e, r) {
    if (1 & r && (e = l(e)), 8 & r) return e;
    if (4 & r && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (l.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & r && "string" != typeof e) for (var n in e) {
      l.d(t, n, function (r) {
        return e[r];
      }.bind(null, n));
    }
    return t;
  }, l.n = function (e) {
    var r = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return l.d(r, "a", r), r;
  }, l.o = function (e, r) {
    return Object.prototype.hasOwnProperty.call(e, r);
  }, l.p = "/";
  var i = global["webpackJsonp"] = global["webpackJsonp"] || [],
      a = i.push.bind(i);
  i.push = r, i = i.slice();

  for (var f = 0; f < i.length; f++) {
    r(i[f]);
  }

  var c = a;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0bfb":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("2f62");function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){i(t,e,n[e])})}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a={data:function(){return{show:this.isMusicStart}},computed:o({},(0,r.mapState)(["isMusicStart","musicInfo"])),methods:{toPlaying:function(){t.navigateTo({url:"../play/play?id=playing"})}}};e.default=a}).call(this,n("6e42")["default"])},1305:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"privileges"},t._l(t.singerHotSongs,function(e,r){return n("view",{key:e.index,staticClass:"item",attrs:{eventid:"25dfbbc2-0-"+r},on:{tap:function(n){t.toPlay(e.id)}}},[n("view",{staticClass:"index"},[t._v(t._s(r+1))]),n("view",{staticClass:"info"},[n("view",{staticClass:"name"},[t._v(t._s(e.name))]),t._l(e.ar,function(e,r){return n("text",{key:e.i,staticClass:"arName"},[t._v(t._s(e.name))])})],2),t._m(0,!0)])}))},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"btn"},[n("text"),n("text"),n("text")])}];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},2877:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,s){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var f=u.render;u.render=function(t,e){return c.call(e),f(t,e)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:u}}n.d(e,"a",function(){return r})},"2f62":function(t,e,n){"use strict";n.r(e),n.d(e,"Store",function(){return h}),n.d(e,"install",function(){return P}),n.d(e,"mapState",function(){return j}),n.d(e,"mapMutations",function(){return S}),n.d(e,"mapGetters",function(){return E}),n.d(e,"mapActions",function(){return I}),n.d(e,"createNamespacedHelpers",function(){return T});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var r=function(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},o="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function i(t){o&&(t._devtoolHook=o,o.emit("vuex:init",t),o.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){o.emit("vuex:mutation",t,e)}))}function a(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function s(t){return null!==t&&"object"===typeof t}function c(t){return t&&"function"===typeof t.then}var u=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},f={namespaced:{configurable:!0}};f.namespaced.get=function(){return!!this._rawModule.namespaced},u.prototype.addChild=function(t,e){this._children[t]=e},u.prototype.removeChild=function(t){delete this._children[t]},u.prototype.getChild=function(t){return this._children[t]},u.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},u.prototype.forEachChild=function(t){a(this._children,t)},u.prototype.forEachGetter=function(t){this._rawModule.getters&&a(this._rawModule.getters,t)},u.prototype.forEachAction=function(t){this._rawModule.actions&&a(this._rawModule.actions,t)},u.prototype.forEachMutation=function(t){this._rawModule.mutations&&a(this._rawModule.mutations,t)},Object.defineProperties(u.prototype,f);var l=function(t){this.register([],t,!1)};function p(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;p(t.concat(r),e.getChild(r),n.modules[r])}}l.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},l.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},l.prototype.update=function(t){p([],this.root,t)},l.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var o=new u(e,n);if(0===t.length)this.root=o;else{var i=this.get(t.slice(0,-1));i.addChild(t[t.length-1],o)}e.modules&&a(e.modules,function(e,o){r.register(t.concat(o),e,n)})},l.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var d;var h=function(t){var e=this;void 0===t&&(t={}),!d&&"undefined"!==typeof window&&window.Vue&&P(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var o=t.state;void 0===o&&(o={}),"function"===typeof o&&(o=o()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new l(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new d;var a=this,s=this,c=s.dispatch,u=s.commit;this.dispatch=function(t,e){return c.call(a,t,e)},this.commit=function(t,e,n){return u.call(a,t,e,n)},this.strict=r,g(this,o,[],this._modules.root),m(this,o),n.forEach(function(t){return t(e)}),d.config.devtools&&i(this)},v={state:{configurable:!0}};function y(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function _(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;g(t,n,[],t._modules.root,!0),m(t,n,e)}function m(t,e,n){var r=t._vm;t.getters={};var o=t._wrappedGetters,i={};a(o,function(e,n){i[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var s=d.config.silent;d.config.silent=!0,t._vm=new d({data:{$$state:e},computed:i}),d.config.silent=s,t.strict&&A(t),r&&(n&&t._withCommit(function(){r._data.$$state=null}),d.nextTick(function(){return r.$destroy()}))}function g(t,e,n,r,o){var i=!n.length,a=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[a]=r),!i&&!o){var s=C(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){d.set(s,c,r.state)})}var u=r.context=b(t,a,n);r.forEachMutation(function(e,n){var r=a+n;w(t,r,e,u)}),r.forEachAction(function(e,n){var r=e.root?n:a+n,o=e.handler||e;x(t,r,o,u)}),r.forEachGetter(function(e,n){var r=a+n;O(t,r,e,u)}),r.forEachChild(function(r,i){g(t,e,n.concat(i),r,o)})}function b(t,e,n){var r=""===e,o={dispatch:r?t.dispatch:function(n,r,o){var i=k(n,r,o),a=i.payload,s=i.options,c=i.type;return s&&s.root||(c=e+c),t.dispatch(c,a)},commit:r?t.commit:function(n,r,o){var i=k(n,r,o),a=i.payload,s=i.options,c=i.type;s&&s.root||(c=e+c),t.commit(c,a,s)}};return Object.defineProperties(o,{getters:{get:r?function(){return t.getters}:function(){return $(t,e)}},state:{get:function(){return C(t.state,n)}}}),o}function $(t,e){var n={},r=e.length;return Object.keys(t.getters).forEach(function(o){if(o.slice(0,r)===e){var i=o.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[o]},enumerable:!0})}}),n}function w(t,e,n,r){var o=t._mutations[e]||(t._mutations[e]=[]);o.push(function(e){n.call(t,r.state,e)})}function x(t,e,n,r){var o=t._actions[e]||(t._actions[e]=[]);o.push(function(e,o){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e,o);return c(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):i})}function O(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function A(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function C(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function k(t,e,n){return s(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function P(t){d&&t===d||(d=t,r(d))}v.state.get=function(){return this._vm._data.$$state},v.state.set=function(t){0},h.prototype.commit=function(t,e,n){var r=this,o=k(t,e,n),i=o.type,a=o.payload,s=(o.options,{type:i,payload:a}),c=this._mutations[i];c&&(this._withCommit(function(){c.forEach(function(t){t(a)})}),this._subscribers.forEach(function(t){return t(s,r.state)}))},h.prototype.dispatch=function(t,e){var n=this,r=k(t,e),o=r.type,i=r.payload,a={type:o,payload:i},s=this._actions[o];if(s)return this._actionSubscribers.forEach(function(t){return t(a,n.state)}),s.length>1?Promise.all(s.map(function(t){return t(i)})):s[0](i)},h.prototype.subscribe=function(t){return y(t,this._subscribers)},h.prototype.subscribeAction=function(t){return y(t,this._actionSubscribers)},h.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch(function(){return t(r.state,r.getters)},e,n)},h.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},h.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),g(this,this.state,t,this._modules.get(t),n.preserveState),m(this,this.state)},h.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=C(e.state,t.slice(0,-1));d.delete(n,t[t.length-1])}),_(this)},h.prototype.hotUpdate=function(t){this._modules.update(t),_(this,!0)},h.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(h.prototype,v);var j=M(function(t,e){var n={};return N(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=D(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof o?o.call(this,e,n):e[o]},n[r].vuex=!0}),n}),S=M(function(t,e){var n={};return N(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var i=D(this.$store,"mapMutations",t);if(!i)return;r=i.context.commit}return"function"===typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),E=M(function(t,e){var n={};return N(e).forEach(function(e){var r=e.key,o=e.val;o=t+o,n[r]=function(){if(!t||D(this.$store,"mapGetters",t))return this.$store.getters[o]},n[r].vuex=!0}),n}),I=M(function(t,e){var n={};return N(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var i=D(this.$store,"mapActions",t);if(!i)return;r=i.context.dispatch}return"function"===typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),T=function(t){return{mapState:j.bind(null,t),mapGetters:E.bind(null,t),mapMutations:S.bind(null,t),mapActions:I.bind(null,t)}};function N(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function M(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function D(t,e,n){var r=t._modulesNamespaceMap[n];return r}var R={Store:h,install:P,version:"3.0.1",mapState:j,mapMutations:S,mapGetters:E,mapActions:I,createNamespacedHelpers:T};e["default"]=R},3598:function(t,e,n){"use strict";n.r(e);var r=n("c667"),o=n("deb5");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("fcf5");var a=n("2877"),s=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,null,null);e["default"]=s.exports},"4c27":function(t,e,n){"use strict";var r=n("915c"),o=n.n(r);o.a},"4f17":function(t,e,n){"use strict";n.r(e);var r=n("1305"),o=n("96a3");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);var a=n("2877"),s=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,null,null);e["default"]=s.exports},"600f":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{}},props:["singerHotSongs"],methods:{toPlay:function(e){e=e;t.navigateTo({url:"../play/play?id="+e})}}};e.default=n}).call(this,n("6e42")["default"])},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=Wt,e.createPage=Qt,e.createComponent=Yt,e.default=void 0;var r=o(n("f3d3"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){return c(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(c){o=!0,i=c}finally{try{r||null==s["return"]||s["return"]()}finally{if(o)throw i}}return n}function c(t){if(Array.isArray(t))return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=Object.prototype.toString,l=Object.prototype.hasOwnProperty;function p(t){return"function"===typeof t}function d(t){return"string"===typeof t}function h(t){return"[object Object]"===f.call(t)}function v(t,e){return l.call(t,e)}function y(){}function _(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var m=/-(\w)/g,g=_(function(t){return t.replace(m,function(t,e){return e?e.toUpperCase():""})}),b=/^\$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,$=/^create|Manager$/,w=/^on/;function x(t){return $.test(t)}function O(t){return b.test(t)}function A(t){return w.test(t)}function C(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function k(t){return!(x(t)||O(t)||A(t))}function P(t,e){return k(t)?function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return p(t.success)||p(t.fail)||p(t.complete)?e.apply(void 0,[t].concat(r)):C(new Promise(function(n,o){e.apply(void 0,[Object.assign({},t,{success:n,fail:o})].concat(r)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})}))}:e}var j=1e-4,S=750,E=!1,I=0,T=0;function N(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;I=r,T=n,E="ios"===e}function M(t,e){if(0===I&&N(),t=Number(t),0===t)return 0;var n=t/S*(e||I);return n<0&&(n=-n),n=Math.floor(n+j),0===n?1!==T&&E?.5:1:t<0?-n:n}var D={},R=[],B=[],V=["success","fail","cancel","complete"];function U(t,e,n){return function(r){return e(H(t,r,n))}}function L(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(h(e)){var i=!0===o?e:{};for(var a in p(n)&&(n=n(e,i)||{}),e)if(v(n,a)){var s=n[a];p(s)&&(s=s(e[a],e,i)),s?d(s)?i[s]=e[a]:h(s)&&(i[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==V.indexOf(a)?i[a]=U(t,e[a],r):o||(i[a]=e[a]);return i}return p(e)&&(e=U(t,e,r)),e}function H(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return p(D.returnValue)&&(e=D.returnValue(t,e)),L(t,e,n,{},r)}function W(t,e){if(v(D,t)){var n=D[t];return n?function(e,r){var o=n;p(n)&&(o=n(e)),e=L(t,e,o.args,o.returnValue);var i=[e];"undefined"!==typeof r&&i.push(r);var a=wx[o.name||t].apply(wx,i);return O(t)?H(t,a,o.returnValue,x(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var F=Object.create(null),G=["subscribePush","unsubscribePush","onPush","offPush","share"];function z(t){return function(e){var n=e.fail,r=e.complete,o={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};p(n)&&n(o),p(r)&&r(o)}}G.forEach(function(t){F[t]=z(t)});var J=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new r.default),t};var t}();function q(t,e,n){return t[e].apply(t,n)}function K(){return q(J(),"$on",Array.prototype.slice.call(arguments))}function X(){return q(J(),"$off",Array.prototype.slice.call(arguments))}function Z(){return q(J(),"$once",Array.prototype.slice.call(arguments))}function Q(){return q(J(),"$emit",Array.prototype.slice.call(arguments))}var Y=Object.freeze({$on:K,$off:X,$once:Z,$emit:Q});function tt(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,r=plus.webview.getWebviewById(t.__uniapp_mask_id);r=r.parent()||r;var o=t.show,i=t.hide,a=t.close,s=function(){r.setStyle({mask:n})},c=function(){r.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return o.apply(t,n)},t.hide=function(){c();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.close=function(){c(),e=[];for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a.apply(t,r)}}}function et(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&tt(e),e}function nt(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}var rt=Object.freeze({requireNativePlugin:nt,getSubNVueById:et}),ot=Page,it=Component,at=/:/g,st=_(function(t){return g(t.replace(at,"-"))});function ct(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return e.apply(t,[st(n)].concat(o))}}}function ut(t,e){var n=e[t];e[t]=n?function(){ct(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){ct(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return ut("onLoad",t),ot(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return ut("created",t),it(t)};var ft=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function lt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){v(n,e)&&(t[e]=n[e])})}function pt(t,e){e.forEach(function(e){t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)}})}function dt(t,e){var n;return e=e.default||e,p(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function ht(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function vt(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function yt(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(o){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(o){}return h(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||v(n,t)||(n[t]=r[t])}),n}var _t=[String,Number,Boolean,Object,Array,null];function mt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function gt(t,e){var n=t["behaviors"],r=t["extends"],o=t["mixins"],i=t["props"];i||(t["props"]=i=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(i)?(i.push("name"),i.push("value")):(i["name"]=String,i["value"]=null))}),h(r)&&r.props&&a.push(e({properties:$t(r.props,!0)})),Array.isArray(o)&&o.forEach(function(t){h(t)&&t.props&&a.push(e({properties:$t(t.props,!0)}))}),a}function bt(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function $t(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r={};return e||(r.vueId={type:String,value:""},r.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){r[t]={type:null,observer:mt(t)}}):h(t)&&Object.keys(t).forEach(function(e){var o=t[e];if(h(o)){var i=o["default"];p(i)&&(i=i()),o.type=bt(e,o.type,i,n),r[e]={type:-1!==_t.indexOf(o.type)?o.type:null,value:i,observer:mt(e)}}else{var a=bt(e,o,null,n);r[e]={type:-1!==_t.indexOf(a)?a:null,observer:mt(e)}}}),r}function wt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=y,t.preventDefault=y,t.target=t.target||{},v(t,"detail")||(t.detail={}),h(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function xt(t,e){var n=t;return e.forEach(function(e){var r=e[0],o=e[2];if(r||"undefined"!==typeof o){var i=e[1],a=e[3],s=r?t.__get_value(r,n):n;Number.isInteger(s)?n=o:i?Array.isArray(s)?n=s.find(function(e){return t.__get_value(i,e)===o}):h(s)?n=Object.keys(s).find(function(e){return t.__get_value(i,s[e])===o}):console.error("v-for 暂不支持循环数据：",s):n=s[o],a&&(n=t.__get_value(a,n))}}),n}function Ot(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,o){"string"===typeof e?e?"$event"===e?r["$"+o]=n:0===e.indexOf("$event.")?r["$"+o]=t.__get_value(e.replace("$event.",""),n):r["$"+o]=t.__get_value(e):r["$"+o]=t:r["$"+o]=xt(t,e)}),r}function At(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function Ct(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=!1;if(o&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=Ot(t,r,e),c=[];return n.forEach(function(t){"$event"===t?"__set_model"!==i||o?o&&!a?c.push(e.detail.__args__[0]):c.push(e):c.push(e.target.value):Array.isArray(t)&&"o"===t[0]?c.push(At(t)):"string"===typeof t&&v(s,t)?c.push(s[t]):c.push(t)}),c}var kt="~",Pt="^";function jt(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function St(t){var e=this;t=wt(t);var n=(t.currentTarget||t.target).dataset.eventOpts;if(!n)return console.warn("事件信息不存在");var r=t.type;n.forEach(function(n){var o=n[0],i=n[1],a=o.charAt(0)===Pt;o=a?o.slice(1):o;var s=o.charAt(0)===kt;o=s?o.slice(1):o,i&&jt(r,o)&&i.forEach(function(n){var r=n[0];if(r){var o=e.$vm;o.$options.generic&&o.$parent&&o.$parent.$parent&&(o=o.$parent.$parent);var i=o[r];if(!p(i))throw new Error(" _vm.".concat(r," is not a function"));if(s){if(i.once)return;i.once=!0}i.apply(o,Ct(e.$vm,t,n[1],n[2],a,r))}})})}var Et=["onShow","onHide","onError","onPageNotFound"];function It(t,e){var n=e.mocks,o=e.initRefs;r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=u({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(o(this),lt(this,n)))}});var i={onLaunch:function(e){this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e)}};return i.globalData=t.$options.globalData||{},pt(i,Et),i}var Tt=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function Nt(t,e){var n=t.$children,r=n.find(function(t){return t.$scope._$vueId===e});if(r)return r;for(var o=n.length-1;o>=0;o--)if(r=Nt(n[o],e),r)return r}function Mt(t){return Behavior(t)}function Dt(){return!!this.route}function Rt(t){this.triggerEvent("__l",t)}function Bt(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function Vt(t){var e,n=t.detail||t.value,r=n.vuePid,o=n.vueOptions;r&&(e=Nt(this.$vm,r)),e||(e=this.$vm),o.parent=e}function Ut(t){return It(t,{mocks:Tt,initRefs:Bt})}var Lt=["onUniNViewMessage"];function Ht(t){var e=Ut(t);return pt(e,Lt),e}function Wt(t){return App(Ht(t)),t}function Ft(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,o=e.initRelation,a=dt(r.default,t),s=i(a,2),c=s[0],u=s[1],f={options:{multipleSlots:!0,addGlobalClass:!0},data:yt(u,r.default.prototype),behaviors:gt(u,Mt),properties:$t(u.props,!1,u.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};vt(t.vueId,this),o.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new c(e),ht(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:Vt,__e:St}};return n?f:[f,c]}function Gt(t){return Ft(t,{isPage:Dt,initRelation:Rt})}function zt(t){var e=Gt(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var Jt=["onShow","onHide","onUnload"];function qt(t,e){var n=e.isPage,r=e.initRelation,o=zt(t,{isPage:n,initRelation:r});return pt(o.methods,Jt),o.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},o}function Kt(t){return qt(t,{isPage:Dt,initRelation:Rt})}Jt.push.apply(Jt,ft);var Xt=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function Zt(t){var e=Kt(t);return pt(e.methods,Xt),e}function Qt(t){return Component(Zt(t))}function Yt(t){return Component(zt(t))}R.forEach(function(t){D[t]=!1}),B.forEach(function(t){var e=D[t]&&D[t].name?D[t].name:t;wx.canIUse(e)||(D[t]=!1)});var te={};"undefined"!==typeof Proxy?te=new Proxy({},{get:function(t,e){return"upx2px"===e?M:rt[e]?P(e,rt[e]):Y[e]?Y[e]:v(wx,e)||v(D,e)?P(e,W(e,wx[e])):void 0}}):(te.upx2px=M,Object.keys(Y).forEach(function(t){te[t]=Y[t]}),Object.keys(rt).forEach(function(t){te[t]=P(t,rt[t])}),Object.keys(wx).forEach(function(t){(v(wx,t)||v(D,t))&&(te[t]=P(t,W(t,wx[t])))})),"undefined"!==typeof t&&(t.UniEmitter=Y),wx.createApp=Wt,wx.createPage=Qt,wx.createComponent=Yt;var ee=te,ne=ee;e.default=ne}).call(this,n("c8ba"))},7012:function(t,e,n){"use strict";n.r(e);var r=n("dbbe"),o=n("c357");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("4c27");var a=n("2877"),s=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,null,null);e["default"]=s.exports},"915c":function(t,e,n){},"96a3":function(t,e,n){"use strict";n.r(e);var r=n("600f"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=o.a},a82d:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{}},onLoad:function(){},props:["djRecommendList","djListNumber"]};e.default=r},b0ce:function(t,e,n){"use strict";n.r(e);var r=n("f3d3"),o=n.n(r);function i(t,e,n){var r,o=t.$options[e];if("onError"===e&&o&&(o=[o]),"function"===typeof o&&(o=[o]),o)for(var a=0,s=o.length;a<s;a++)r=o[a].call(t,n);return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return i(t,e,n)}),r}function a(t){return t.$vm.$root}e["default"]=function(t){return{data:{$root:{}},onLoad:function(e){var n=new o.a(t);this.$vm=n;var r=n.$root;r.__wxExparserNodeId__=this.__wxExparserNodeId__,r.__wxWebviewId__=this.__wxWebviewId__,r.$mp||(r.$mp={});var i=r.$mp;i.mpType="page",i.page=this,i.query=e,i.status="load",n.$mount()},handleProxy:function(t){var e=a(this);return e.$handleProxyWithVue(t)},onShow:function(){var t=a(this),e=t.$mp;e.status="show",i(t,"onShow"),t.$nextTick(function(){t._initDataToMP()})},onReady:function(){var t=a(this),e=t.$mp;e.status="ready",i(t,"onReady")},onHide:function(){var t=a(this),e=t.$mp;e.status="hide",i(t,"onHide")},onUnload:function(){var t=a(this);i(t,"onUnload"),t.$destroy()},onPullDownRefresh:function(){var t=a(this);i(t,"onPullDownRefresh")},onReachBottom:function(){var t=a(this);i(t,"onReachBottom")},onPageScroll:function(t){var e=a(this);i(e,"onPageScroll",t)},onTabItemTap:function(t){var e=a(this);i(e,"onTabItemTap",t)},onShareAppMessage:t.onShareAppMessage?function(t){var e=a(this);return i(e,"onShareAppMessage",t)}:null,onNavigationBarButtonTap:function(t){var e=a(this);i(e,"onNavigationBarButtonTap",t)},onNavigationBarSearchInputChanged:function(t){var e=a(this);i(e,"onNavigationBarSearchInputChanged",t)},onNavigationBarSearchInputConfirmed:function(t){var e=a(this);i(e,"onNavigationBarSearchInputConfirmed",t)},onNavigationBarSearchInputClicked:function(t){var e=a(this);i(e,"onNavigationBarSearchInputClicked",t)},onBackPress:function(t){var e=a(this);return i(e,"onBackPress",t)},$getAppWebview:function(t){return plus.webview.getWebviewById(""+this.__wxWebviewId__)}}}},c357:function(t,e,n){"use strict";n.r(e);var r=n("a82d"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=o.a},c667:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{directives:[{name:"show",rawName:"v-show",value:t.isMusicStart,expression:"isMusicStart"}],staticClass:"nowPlay"},[n("div",{staticClass:"nowPlay-panel",attrs:{eventid:"2eab5e4a-0"},on:{tap:function(e){t.toPlaying()}}},[n("image",{staticClass:"nowPlayIcom",attrs:{src:"../../static/images/nowPlay.png",mode:""}}),n("view",{staticClass:"nowPlayInfo"},[t._v("正在播放 :")]),""!=t.musicInfo?[n("view",{staticClass:"nowPlayName"},[t._v(t._s(t.musicInfo.name)+"--"+t._s(t.musicInfo.author))]),n("image",{staticClass:"nowPlayIcomP",attrs:{src:t.musicInfo.picUrl,mode:""}})]:t._e()],2),n("div",{staticClass:"nowPlay-seat"})])},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},c7c6:function(t,e,n){},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},dbbe:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("view",{staticClass:"djRecommendList"},t._l(t.djRecommendList,function(e,r){return r<=t.djListNumber?n("view",{key:e.index,staticClass:"item"},[n("view",{staticClass:"pic"},[n("image",{attrs:{src:e.picUrl,mode:"widthFix"}}),t._m(0,!0)]),n("view",{staticClass:"content"},[n("view",{staticClass:"name"},[t._v(t._s(e.name))]),n("view",{staticClass:"rcmdtext"},[t._v(t._s(e.rcmdtext))]),n("view",{staticClass:"info"},[n("text",[t._v("播放 : "+t._s(e.subCount)+"次")]),n("text",{staticClass:"category"},[t._v("类型 : "+t._s(e.category))])])])]):t._e()}))])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"playBtn"},[n("view",{staticClass:"icon"})])}];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},deb5:function(t,e,n){"use strict";n.r(e);var r=n("0bfb"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=o.a},f3d3:function(t,e,n){(function(e){try{e||(e={}),e.process=e.process||{},e.process.env=e.process.env||{},e.App=e.App||App,e.Page=e.Page||Page,e.Component=e.Component||Component,e.getApp=e.getApp||getApp}catch(n){}(function(e,n){t.exports=n()})(0,function(){"use strict";function t(e,n,r,o){if(r!==o&&void 0!==r)if(null==r||null==o||typeof r!==typeof o)e[n]=r;else if(Array.isArray(r)&&Array.isArray(o))if(r.length===o.length)for(var i=0,a=r.length;i<a;++i)t(e,n+"["+i+"]",r[i],o[i]);else e[n]=r;else if("object"===typeof r&&"object"===typeof o){var s=Object.keys(r),c=Object.keys(o);if(s.length!==c.length)e[n]=r;else{var u=Object.create(null);for(i=0,a=s.length;i<a;++i)u[s[i]]=!0,u[c[i]]=!0;if(Object.keys(u).length!==s.length)e[n]=r;else for(i=0,a=s.length;i<a;++i){var f=s[i];t(e,n+"."+f,r[f],o[f])}}}else r!==o&&(e[n]=r)}function r(e,n){for(var r=Object.keys(e),o={},i=0,a=r.length;i<a;++i){for(var s=r[i],c=s.split("."),u=n[c[0]],f=1,l=c.length;f<l&&void 0!==u;++f)u=u[c[f]];t(o,s,e[s],u)}return o}function o(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function a(t){return!0===t}function s(t){return!1===t}function c(t){return"string"===typeof t||"number"===typeof t}function u(t){return null!==t&&"object"===typeof t}var f=Object.prototype.toString;function l(t){return"[object Object]"===f.call(t)}function p(t){return"[object RegExp]"===f.call(t)}function d(t){var e=parseFloat(t);return e>=0&&Math.floor(e)===e&&isFinite(t)}function h(t){return null==t?"":"object"===typeof t?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function y(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}y("slot,component",!0);var _=y("key,ref,slot,is");function m(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var g=Object.prototype.hasOwnProperty;function b(t,e){return g.call(t,e)}function $(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var w=/-(\w)/g,x=$(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),O=$(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),A=/([^-])([A-Z])/g,C=$(function(t){return t.replace(A,"$1-$2").replace(A,"$1-$2").toLowerCase()});function k(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function P(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function j(t,e){for(var n in e)t[n]=e[n];return t}function S(t){for(var e={},n=0;n<t.length;n++)t[n]&&j(e,t[n]);return e}function E(t,e,n){}var I=function(t,e,n){return!1},T=function(t){return t};function N(t,e){var r=u(t),o=u(e);if(!r||!o)return!r&&!o&&String(t)===String(e);try{return JSON.stringify(t)===JSON.stringify(e)}catch(n){return t===e}}function M(t,e){for(var n=0;n<t.length;n++)if(N(t[n],e))return n;return-1}function D(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var R="data-server-rendered",B=["component","directive","filter"],V=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","onLaunch","onLoad","onShow","onReady","onHide","onUnload","onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onTabItemTap","attached","ready","moved","detached","onUniNViewMessage","onNavigationBarButtonTap","onBackPress"],U={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:I,isReservedAttr:I,isUnknownElement:I,getTagNamespace:E,parsePlatformTagName:T,mustUseProp:I,_lifecycleHooks:V},L=Object.freeze({});function H(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function W(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var F=/[^\w.$]/;function G(t){if(!F.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var z=E;function J(t,e,n){if(U.errorHandler)U.errorHandler.call(null,t,e,n);else{if(!X||"undefined"===typeof console)throw t;console.error(t)}}var q,K="__proto__"in{},X="undefined"!==typeof window,Z=["mpvue-runtime"].join(),Q=(Z&&/msie|trident/.test(Z),Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),Y=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)),tt=(Z&&/chrome\/\d+/.test(Z),{}.watch);if(X)try{var et={};Object.defineProperty(et,"passive",{get:function(){!0}}),window.addEventListener("test-passive",null,et)}catch(n){}var nt=function(){return void 0===q&&(q=!X&&"undefined"!==typeof e&&"server"===e["process"].env.VUE_ENV),q},rt=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ot(t){return"function"===typeof t&&/native code/.test(t.toString())}var it,at="undefined"!==typeof Symbol&&ot(Symbol)&&"undefined"!==typeof Reflect&&ot(Reflect.ownKeys),st=function(){var t,e=[],r=!1;function o(){r=!1;var t=e.slice(0);e.length=0;for(var n=0;n<t.length;n++)t[n]()}if("undefined"!==typeof Promise&&ot(Promise)){var i=Promise.resolve(),a=function(t){console.error(t)};t=function(){i.then(o).catch(a),Y&&setTimeout(E)}}else t=function(){setTimeout(o,0)};return function(o,i){var a;if(e.push(function(){if(o)try{o.call(i)}catch(n){J(n,i,"nextTick")}else a&&a(i)}),r||(r=!0,t()),!o&&"undefined"!==typeof Promise)return new Promise(function(t,e){a=t})}}();it="undefined"!==typeof Set&&ot(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=0,ut=function(){this.id=ct++,this.subs=[]};ut.prototype.addSub=function(t){this.subs.push(t)},ut.prototype.removeSub=function(t){m(this.subs,t)},ut.prototype.depend=function(){ut.target&&ut.target.addDep(this)},ut.prototype.notify=function(){for(var t=this.subs.slice(),e=0,n=t.length;e<n;e++)t[e].update()},ut.target=null;var ft=[];function lt(t){ut.target&&ft.push(ut.target),ut.target=t}function pt(){ut.target=ft.pop()}var dt=Array.prototype,ht=Object.create(dt);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=dt[t];W(ht,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);break}return o&&a.observeArray(o),a.dep.notify(),i})});var vt=Object.getOwnPropertyNames(ht),yt={shouldConvert:!0},_t=function(t){if(this.value=t,this.dep=new ut,this.vmCount=0,W(t,"__ob__",this),Array.isArray(t)){var e=K?mt:gt;e(t,ht,vt),this.observeArray(t)}else this.walk(t)};function mt(t,e,n){t.__proto__=e}function gt(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];W(t,i,e[i])}}function bt(t,e){var n;if(u(t))return b(t,"__ob__")&&t.__ob__ instanceof _t?n=t.__ob__:yt.shouldConvert&&!nt()&&(Array.isArray(t)||l(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new _t(t)),e&&n&&n.vmCount++,n}function $t(t,e,n,r,o){var i=new ut,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set,u=!o&&bt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ut.target&&(i.depend(),u&&u.dep.depend(),Array.isArray(e)&&Ot(e)),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||(c?c.call(t,e):n=e,u=!o&&bt(e),i.notify())}})}}function wt(t,e,n){if(Array.isArray(t)&&d(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(b(t,e))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?($t(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function xt(t,e){if(Array.isArray(t)&&d(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}function Ot(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Ot(e)}_t.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)$t(t,e[n],t[e[n]])},_t.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)bt(t[e])};var At=U.optionMergeStrategies;function Ct(t,e){if(!e)return t;for(var n,r,o,i=Object.keys(e),a=0;a<i.length;a++)n=i[a],r=t[n],o=e[n],b(t,n)?l(r)&&l(o)&&Ct(r,o):wt(t,n,o);return t}function kt(t,e,n){return n?t||e?function(){var r="function"===typeof e?e.call(n):e,o="function"===typeof t?t.call(n):void 0;return r?Ct(r,o):o}:void 0:e?t?function(){return Ct("function"===typeof e?e.call(this):e,t.call(this))}:e:t}function Pt(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t}function jt(t,e){var n=Object.create(t||null);return e?j(n,e):n}At.data=function(t,e,n){return n?kt(t,e,n):e&&"function"!==typeof e?t:kt.call(this,t,e)},V.forEach(function(t){At[t]=Pt}),B.forEach(function(t){At[t+"s"]=jt}),At.watch=function(t,e){if(t===tt&&(t=void 0),e===tt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var n={};for(var r in j(n,t),e){var o=n[r],i=e[r];o&&!Array.isArray(o)&&(o=[o]),n[r]=o?o.concat(i):Array.isArray(i)?i:[i]}return n},At.props=At.methods=At.inject=At.computed=function(t,e){if(!e)return Object.create(t||null);if(!t)return e;var n=Object.create(null);return j(n,t),j(n,e),n},At.provide=kt;var St=function(t,e){return void 0===e?t:e};function Et(t){var e=t.props;if(e){var n,r,o,i={};if(Array.isArray(e)){n=e.length;while(n--)r=e[n],"string"===typeof r&&(o=x(r),i[o]={type:null})}else if(l(e))for(var a in e)r=e[a],o=x(a),i[o]=l(r)?r:{type:r};t.props=i}}function It(t){var e=t.inject;if(Array.isArray(e))for(var n=t.inject={},r=0;r<e.length;r++)n[e[r]]=e[r]}function Tt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Nt(t,e,n){"function"===typeof e&&(e=e.options),Et(e),It(e),Tt(e);var r=e.extends;if(r&&(t=Nt(t,r,n)),e.mixins)for(var o=0,i=e.mixins.length;o<i;o++)t=Nt(t,e.mixins[o],n);var a,s={};for(a in t)c(a);for(a in e)b(t,a)||c(a);function c(r){var o=At[r]||St;s[r]=o(t[r],e[r],n,r)}return s}function Mt(t,e,n,r){if("string"===typeof n){var o=t[e];if(b(o,n))return o[n];var i=x(n);if(b(o,i))return o[i];var a=O(i);if(b(o,a))return o[a];var s=o[n]||o[i]||o[a];return s}}function Dt(t,e,n,r){var o=e[t],i=!b(n,t),a=n[t];if(Vt(Boolean,o.type)&&(i&&!b(o,"default")?a=!1:Vt(String,o.type)||""!==a&&a!==C(t)||(a=!0)),void 0===a){a=Rt(r,o,t);var s=yt.shouldConvert;yt.shouldConvert=!0,bt(a),yt.shouldConvert=s}return a}function Rt(t,e,n){if(b(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Bt(e.type)?r.call(t):r}}function Bt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Vt(t,e){if(!Array.isArray(e))return Bt(e)===Bt(t);for(var n=0,r=e.length;n<r;n++)if(Bt(e[n])===Bt(t))return!0;return!1}var Ut=function(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.functionalContext=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},Lt={child:{}};Lt.child.get=function(){return this.componentInstance},Object.defineProperties(Ut.prototype,Lt);var Ht=function(t){void 0===t&&(t="");var e=new Ut;return e.text=t,e.isComment=!0,e};function Wt(t){return new Ut(void 0,void 0,void 0,String(t))}function Ft(t){var e=new Ut(t.tag,t.data,t.children,t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.isCloned=!0,e}function Gt(t){for(var e=t.length,n=new Array(e),r=0;r<e;r++)n[r]=Ft(t[r]);return n}var zt,Jt=$(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function qt(t){function e(){var t=arguments,n=e.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=n.slice(),o=0;o<r.length;o++)r[o].apply(null,t)}return e.fns=t,e}function Kt(t,e,n,r,i){var a,s,c,u;for(a in t)s=t[a],c=e[a],u=Jt(a),o(s)||(o(c)?(o(s.fns)&&(s=t[a]=qt(s)),n(u.name,s,u.once,u.capture,u.passive)):s!==c&&(c.fns=s,t[a]=c));for(a in e)o(t[a])&&(u=Jt(a),r(u.name,e[a],u.capture))}function Xt(t,e,n){var r=e.options.props;if(!o(r)){var a={},s=t.attrs,c=t.props;if(i(s)||i(c))for(var u in r){var f=C(u);Zt(a,c,u,f,!0)||Zt(a,s,u,f,!1)}return a}}function Zt(t,e,n,r,o){if(i(e)){if(b(e,n))return t[n]=e[n],o||delete e[n],!0;if(b(e,r))return t[n]=e[r],o||delete e[r],!0}return!1}function Qt(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Yt(t){return c(t)?[Wt(t)]:Array.isArray(t)?ee(t):void 0}function te(t){return i(t)&&i(t.text)&&s(t.isComment)}function ee(t,e){var n,r,s,u=[];for(n=0;n<t.length;n++)r=t[n],o(r)||"boolean"===typeof r||(s=u[u.length-1],Array.isArray(r)?u.push.apply(u,ee(r,(e||"")+"_"+n)):c(r)?te(s)?s.text+=String(r):""!==r&&u.push(Wt(r)):te(r)&&te(s)?u[u.length-1]=Wt(s.text+r.text):(a(t._isVList)&&i(r.tag)&&o(r.key)&&i(e)&&(r.key="__vlist"+e+"_"+n+"__"),u.push(r)));return u}function ne(t,e){return t.__esModule&&t.default&&(t=t.default),u(t)?e.extend(t):t}function re(t,e,n,r,o){var i=Ht();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function oe(t,e,n){if(a(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;if(a(t.loading)&&i(t.loadingComp))return t.loadingComp;if(!i(t.contexts)){var r=t.contexts=[n],s=!0,c=function(){for(var t=0,e=r.length;t<e;t++)r[t].$forceUpdate()},f=D(function(n){t.resolved=ne(n,e),s||c()}),l=D(function(e){i(t.errorComp)&&(t.error=!0,c())}),p=t(f,l);return u(p)&&("function"===typeof p.then?o(t.resolved)&&p.then(f,l):i(p.component)&&"function"===typeof p.component.then&&(p.component.then(f,l),i(p.error)&&(t.errorComp=ne(p.error,e)),i(p.loading)&&(t.loadingComp=ne(p.loading,e),0===p.delay?t.loading=!0:setTimeout(function(){o(t.resolved)&&o(t.error)&&(t.loading=!0,c())},p.delay||200)),i(p.timeout)&&setTimeout(function(){o(t.resolved)&&l(null)},p.timeout))),s=!1,t.loading?t.loadingComp:t.resolved}t.contexts.push(n)}function ie(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&i(n.componentOptions))return n}}function ae(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&ue(t,e)}function se(t,e,n){n?zt.$once(t,e):zt.$on(t,e)}function ce(t,e){zt.$off(t,e)}function ue(t,e,n){zt=t,Kt(e,n||{},se,ce,t)}function fe(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this,o=this;if(Array.isArray(t))for(var i=0,a=t.length;i<a;i++)r.$on(t[i],n);else(o._events[t]||(o._events[t]=[])).push(n),e.test(t)&&(o._hasHookEvent=!0);return o},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this,r=this;if(!arguments.length)return r._events=Object.create(null),r;if(Array.isArray(t)){for(var o=0,i=t.length;o<i;o++)n.$off(t[o],e);return r}var a,s=r._events[t];if(!s)return r;if(1===arguments.length)return r._events[t]=null,r;var c=s.length;while(c--)if(a=s[c],a===e||a.fn===e){s.splice(c,1);break}return r},t.prototype.$emit=function(t){var e=this,r=e._events[t];if(r){r=r.length>1?P(r):r;for(var o=P(arguments,1),i=0,a=r.length;i<a;i++)try{r[i].apply(e,o)}catch(n){J(n,e,'event handler for "'+t+'"')}}return e}}function le(t,e){var n={};if(!t)return n;for(var r=[],o=0,i=t.length;o<i;o++){var a=t[o];if(a.context!==e&&a.functionalContext!==e||!a.data||null==a.data.slot)r.push(a);else{var s=a.data.slot,c=n[s]||(n[s]=[]);"template"===a.tag?c.push.apply(c,a.children):c.push(a)}}return r.every(pe)||(n.default=r),n}function pe(t){return t.isComment||" "===t.text}function de(t,e){e=e||{};for(var n=0;n<t.length;n++)Array.isArray(t[n])?de(t[n],e):e[t[n].key]=t[n].fn;return e}var he=null;function ve(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function ye(t){t.prototype._update=function(t,e){var n=this;n._isMounted&&we(n,"beforeUpdate");var r=n.$el,o=n._vnode,i=he;he=n,n._vnode=t,o?n.$el=n.__patch__(o,t):(n.$el=n.__patch__(n.$el,t,e,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),he=i,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){we(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||m(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),we(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null)}}}function _e(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=Ht),we(t,"beforeMount"),r=function(){t._update(t._render(),n)},t._watcher=new De(t,r,E),n=!1,null==t.$vnode&&(t._isMounted=!0,we(t,"mounted")),t}function me(t,e,n,r,o){var i=!!(o||t.$options._renderChildren||r.data.scopedSlots||t.$scopedSlots!==L);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=o,t.$attrs=r.data&&r.data.attrs,t.$listeners=n,e&&t.$options.props){yt.shouldConvert=!1;for(var a=t._props,s=t.$options._propKeys||[],c=0;c<s.length;c++){var u=s[c];a[u]=Dt(u,t.$options.props,e,t)}yt.shouldConvert=!0,t.$options.propsData=e}if(n){var f=t.$options._parentListeners;t.$options._parentListeners=n,ue(t,n,f)}i&&(t.$slots=le(o,r.context),t.$forceUpdate())}function ge(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function be(t,e){if(e){if(t._directInactive=!1,ge(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)be(t.$children[n]);we(t,"activated")}}function $e(t,e){if((!e||(t._directInactive=!0,!ge(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)$e(t.$children[n]);we(t,"deactivated")}}function we(t,e){var r=t.$options[e];if(r)for(var o=0,i=r.length;o<i;o++)try{r[o].call(t)}catch(n){J(n,t,e+" hook")}t._hasHookEvent&&t.$emit("hook:"+e)}var xe=[],Oe=[],Ae={},Ce=!1,ke=!1,Pe=0;function je(){Pe=xe.length=Oe.length=0,Ae={},Ce=ke=!1}function Se(){var t,e;for(ke=!0,xe.sort(function(t,e){return t.id-e.id}),Pe=0;Pe<xe.length;Pe++)t=xe[Pe],e=t.id,Ae[e]=null,t.run();var n=Oe.slice(),r=xe.slice();je(),Te(n),Ee(r),rt&&U.devtools&&rt.emit("flush")}function Ee(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&we(r,"updated")}}function Ie(t){t._inactive=!1,Oe.push(t)}function Te(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,be(t[e],!0)}function Ne(t){var e=t.id;if(null==Ae[e]){if(Ae[e]=!0,ke){var n=xe.length-1;while(n>Pe&&xe[n].id>t.id)n--;xe.splice(n+1,0,t)}else xe.push(t);Ce||(Ce=!0,st(Se))}}var Me=0,De=function(t,e,n,r){this.vm=t,t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Me,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new it,this.newDepIds=new it,this.expression="","function"===typeof e?this.getter=e:(this.getter=G(e),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};De.prototype.get=function(){var t;lt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(n){if(!this.user)throw n;J(n,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&Be(t),pt(),this.cleanupDeps()}return t},De.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},De.prototype.cleanupDeps=function(){var t=this,e=this.deps.length;while(e--){var n=t.deps[e];t.newDepIds.has(n.id)||n.removeSub(t)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},De.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Ne(this)},De.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(n){J(n,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},De.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},De.prototype.depend=function(){var t=this,e=this.deps.length;while(e--)t.deps[e].depend()},De.prototype.teardown=function(){var t=this;if(this.active){this.vm._isBeingDestroyed||m(this.vm._watchers,this);var e=this.deps.length;while(e--)t.deps[e].removeSub(t);this.active=!1}};var Re=new it;function Be(t){Re.clear(),Ve(t,Re)}function Ve(t,e){var n,r,o=Array.isArray(t);if((o||u(t))&&Object.isExtensible(t)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o){n=t.length;while(n--)Ve(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)Ve(t[r[n]],e)}}}var Ue={enumerable:!0,configurable:!0,get:E,set:E};function Le(t,e,n){Ue.get=function(){return this[e][n]},Ue.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Ue)}function He(t){t._watchers=[];var e=t.$options;e.props&&We(t,e.props),e.methods&&Xe(t,e.methods),e.data?Fe(t):bt(t._data={},!0),e.computed&&Je(t,e.computed),e.watch&&e.watch!==tt&&Ze(t,e.watch)}function We(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;yt.shouldConvert=i;var a=function(i){o.push(i);var a=Dt(i,e,n,t);$t(r,i,a),i in t||Le(t,"_props",i)};for(var s in e)a(s);yt.shouldConvert=!0}function Fe(t){var e=t.$options.data;e=t._data="function"===typeof e?Ge(e,t):e||{},l(e)||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);while(o--){var i=n[o];r&&b(r,i)||H(i)||Le(t,"_data",i)}bt(e,!0)}function Ge(t,e){try{return t.call(e)}catch(n){return J(n,e,"data()"),{}}}var ze={lazy:!0};function Je(t,e){var n=t._computedWatchers=Object.create(null);for(var r in e){var o=e[r],i="function"===typeof o?o:o.get;n[r]=new De(t,i,E,ze),r in t||qe(t,r,o)}}function qe(t,e,n){"function"===typeof n?(Ue.get=Ke(e),Ue.set=E):(Ue.get=n.get?!1!==n.cache?Ke(e):n.get:E,Ue.set=n.set?n.set:E),Object.defineProperty(t,e,Ue)}function Ke(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ut.target&&e.depend(),e.value}}function Xe(t,e){t.$options.props;for(var n in e)t[n]=null==e[n]?E:k(e[n],t)}function Ze(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)Qe(t,n,r[o]);else Qe(t,n,r)}}function Qe(t,e,n,r){return l(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function Ye(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=wt,t.prototype.$delete=xt,t.prototype.$watch=function(t,e,n){var r=this;if(l(e))return Qe(r,t,e,n);n=n||{},n.user=!0;var o=new De(r,t,e,n);return n.immediate&&e.call(r,o.value),function(){o.teardown()}}}function tn(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function en(t){var e=nn(t.$options.inject,t);e&&(yt.shouldConvert=!1,Object.keys(e).forEach(function(n){$t(t,n,e[n])}),yt.shouldConvert=!0)}function nn(t,e){if(t){for(var n=Object.create(null),r=at?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o],a=t[i],s=e;while(s){if(s._provided&&a in s._provided){n[i]=s._provided[a];break}s=s.$parent}0}return n}}function rn(t,e,n,r,o){var a={},s=t.options.props;if(i(s))for(var c in s)a[c]=Dt(c,s,e||{});else i(n.attrs)&&on(a,n.attrs),i(n.props)&&on(a,n.props);var u=Object.create(r),f=function(t,e,n,r){return vn(u,t,e,n,r,!0)},l=t.options.render.call(null,f,{data:n,props:a,children:o,parent:r,listeners:n.on||{},injections:nn(t.options.inject,r),slots:function(){return le(o,r)}});return l instanceof Ut&&(l.functionalContext=r,l.functionalOptions=t.options,n.slot&&((l.data||(l.data={})).slot=n.slot)),l}function on(t,e){for(var n in e)t[x(n)]=e[n]}var an={init:function(t,e,n,r){if(!t.componentInstance||t.componentInstance._isDestroyed){var o=t.componentInstance=un(t,he,n,r);o.$mount(e?t.elm:void 0,e)}else if(t.data.keepAlive){var i=t;an.prepatch(i,i)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;me(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,we(n,"mounted")),t.data.keepAlive&&(e._isMounted?Ie(n):be(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?$e(e,!0):e.$destroy())}},sn=Object.keys(an);function cn(t,e,n,r,s){if(!o(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var f;if(o(t.cid)&&(f=t,t=oe(f,c,n),void 0===t))return re(f,e,n,r,s);e=e||{},Tn(t),i(e.model)&&pn(t.options,e);var l=Xt(e,t,s);if(a(t.options.functional))return rn(t,l,e,n,r);var p=e.on;if(a(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}fn(e);var h=t.options.name||s,v=new Ut("vue-component-"+t.cid+(h?"-"+h:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:l,listeners:p,tag:s,children:r},f);return v}}}function un(t,e,n,r){var o=t.componentOptions,a={_isComponent:!0,parent:e,propsData:o.propsData,_componentTag:o.tag,_parentVnode:t,_parentListeners:o.listeners,_renderChildren:o.children,_parentElm:n||null,_refElm:r||null},s=t.data.inlineTemplate;return i(s)&&(a.render=s.render,a.staticRenderFns=s.staticRenderFns),new o.Ctor(a)}function fn(t){t.hook||(t.hook={});for(var e=0;e<sn.length;e++){var n=sn[e],r=t.hook[n],o=an[n];t.hook[n]=r?ln(o,r):o}}function ln(t,e){return function(n,r,o,i){t(n,r,o,i),e(n,r,o,i)}}function pn(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.props||(e.props={}))[n]=e.model.value;var o=e.on||(e.on={});i(o[r])?o[r]=[e.model.callback].concat(o[r]):o[r]=e.model.callback}var dn=1,hn=2;function vn(t,e,n,r,o,i){return(Array.isArray(n)||c(n))&&(o=r,r=n,n=void 0),a(i)&&(o=hn),yn(t,e,n,r,o)}function yn(t,e,n,r,o){if(i(n)&&i(n.__ob__))return Ht();if(i(n)&&i(n.is)&&(e=n.is),!e)return Ht();var a,s,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===hn?r=Yt(r):o===dn&&(r=Qt(r)),"string"===typeof e)?(s=U.getTagNamespace(e),a=U.isReservedTag(e)?new Ut(U.parsePlatformTagName(e),n,r,void 0,void 0,t):i(c=Mt(t.$options,"components",e))?cn(c,n,t,r,e):new Ut(e,n,r,void 0,void 0,t)):a=cn(e,n,t,r);return i(a)?(s&&_n(a,s),a):Ht()}function _n(t,e){if(t.ns=e,"foreignObject"!==t.tag&&i(t.children))for(var n=0,r=t.children.length;n<r;n++){var a=t.children[n];i(a.tag)&&o(a.ns)&&_n(a,e)}}function mn(t,e){var n,r,o,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(u(t))for(a=Object.keys(t),n=new Array(a.length),r=0,o=a.length;r<o;r++)s=a[r],n[r]=e(t[s],s,r);return i(n)&&(n._isVList=!0),n}function gn(t,e,n,r){var o=this.$scopedSlots[t];if(o)return n=n||{},r&&(n=j(j({},r),n)),o(n)||e;var i=this.$slots[t];return i||e}function bn(t){return Mt(this.$options,"filters",t,!0)||T}function $n(t,e,n){var r=U.keyCodes[e]||n;return Array.isArray(r)?-1===r.indexOf(t):r!==t}function wn(t,e,n,r,o){if(n)if(u(n)){var i;Array.isArray(n)&&(n=S(n));var a=function(a){if("class"===a||"style"===a||_(a))i=t;else{var s=t.attrs&&t.attrs.type;i=r||U.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}if(!(a in i)&&(i[a]=n[a],o)){var c=t.on||(t.on={});c["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function xn(t,e){var n=this._staticTrees[t];return n&&!e?Array.isArray(n)?Gt(n):Ft(n):(n=this._staticTrees[t]=this.$options.staticRenderFns[t].call(this._renderProxy),An(n,"__static__"+t,!1),n)}function On(t,e,n){return An(t,"__once__"+e+(n?"_"+n:""),!0),t}function An(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Cn(t[r],e+"_"+r,n);else Cn(t,e,n)}function Cn(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function kn(t,e){if(e)if(l(e)){var n=t.on=t.on?j({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(i,o):i}}else;return t}function Pn(t){t._vnode=null,t._staticTrees=null;var e=t.$vnode=t.$options._parentVnode,n=e&&e.context;t.$slots=le(t.$options._renderChildren,n),t.$scopedSlots=L,t._c=function(e,n,r,o){return vn(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return vn(t,e,n,r,o,!0)};var r=e&&e.data;$t(t,"$attrs",r&&r.attrs,null,!0),$t(t,"$listeners",r&&r.on,null,!0)}function jn(t){t.prototype.$nextTick=function(t){return st(t,this)},t.prototype._render=function(){var t,e=this,r=e.$options,o=r.render,i=r.staticRenderFns,a=r._parentVnode;if(e._isMounted)for(var s in e.$slots)e.$slots[s]=Gt(e.$slots[s]);e.$scopedSlots=a&&a.data.scopedSlots||L,i&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=a;try{t=o.call(e._renderProxy,e.$createElement)}catch(n){J(n,e,"render function"),t=e._vnode}return t instanceof Ut||(t=Ht()),t.parent=a,t},t.prototype._o=On,t.prototype._n=v,t.prototype._s=h,t.prototype._l=mn,t.prototype._t=gn,t.prototype._q=N,t.prototype._i=M,t.prototype._m=xn,t.prototype._f=bn,t.prototype._k=$n,t.prototype._b=wn,t.prototype._v=Wt,t.prototype._e=Ht,t.prototype._u=de,t.prototype._g=kn}var Sn=0;function En(t){t.prototype._init=function(t){var e=this;e._uid=Sn++,e._isVue=!0,t&&t._isComponent?In(e,t):e.$options=Nt(Tn(e.constructor),t||{},e),e._renderProxy=e,e._self=e,ve(e),ae(e),Pn(e),we(e,"beforeCreate"),en(e),He(e),tn(e),we(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function In(t,e){var n=t.$options=Object.create(t.constructor.options);n.parent=e.parent,n.propsData=e.propsData,n._parentVnode=e._parentVnode,n._parentListeners=e._parentListeners,n._renderChildren=e._renderChildren,n._componentTag=e._componentTag,n._parentElm=e._parentElm,n._refElm=e._refElm,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Tn(t){var e=t.options;if(t.super){var n=Tn(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=Nn(t);o&&j(t.extendOptions,o),e=t.options=Nt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Nn(t){var e,n=t.options,r=t.extendOptions,o=t.sealedOptions;for(var i in n)n[i]!==o[i]&&(e||(e={}),e[i]=Mn(n[i],r[i],o[i]));return e}function Mn(t,e,n){if(Array.isArray(t)){var r=[];n=Array.isArray(n)?n:[n],e=Array.isArray(e)?e:[e];for(var o=0;o<t.length;o++)(e.indexOf(t[o])>=0||n.indexOf(t[o])<0)&&r.push(t[o]);return r}return t}function Dn(t){this._init(t)}function Rn(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=P(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Bn(t){t.mixin=function(t){return this.options=Nt(this.options,t),this}}function Vn(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name,a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Nt(n.options,t),a["super"]=n,a.options.props&&Un(a),a.options.computed&&Ln(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,B.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=j({},a.options),o[r]=a,a}}function Un(t){var e=t.options.props;for(var n in e)Le(t.prototype,"_props",n)}function Ln(t){var e=t.options.computed;for(var n in e)qe(t.prototype,n,e[n])}function Hn(t){B.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&l(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}En(Dn),Ye(Dn),fe(Dn),ye(Dn),jn(Dn);var Wn=[String,RegExp,Array];function Fn(t){return t&&(t.Ctor.options.name||t.tag)}function Gn(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!p(t)&&t.test(e)}function zn(t,e,n){for(var r in t){var o=t[r];if(o){var i=Fn(o.componentOptions);i&&!n(i)&&(o!==e&&Jn(o),t[r]=null)}}}function Jn(t){t&&t.componentInstance.$destroy()}var qn={name:"keep-alive",abstract:!0,props:{include:Wn,exclude:Wn},created:function(){this.cache=Object.create(null)},destroyed:function(){var t=this;for(var e in t.cache)Jn(t.cache[e])},watch:{include:function(t){zn(this.cache,this._vnode,function(e){return Gn(t,e)})},exclude:function(t){zn(this.cache,this._vnode,function(e){return!Gn(t,e)})}},render:function(){var t=ie(this.$slots.default),e=t&&t.componentOptions;if(e){var n=Fn(e);if(n&&(this.include&&!Gn(this.include,n)||this.exclude&&Gn(this.exclude,n)))return t;var r=null==t.key?e.Ctor.cid+(e.tag?"::"+e.tag:""):t.key;this.cache[r]?t.componentInstance=this.cache[r].componentInstance:this.cache[r]=t,t.data.keepAlive=!0}return t}},Kn={KeepAlive:qn};function Xn(t){var e={get:function(){return U}};Object.defineProperty(t,"config",e),t.util={warn:z,extend:j,mergeOptions:Nt,defineReactive:$t},t.set=wt,t.delete=xt,t.nextTick=st,t.options=Object.create(null),B.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,j(t.options.components,Kn),Rn(t),Bn(t),Vn(t),Hn(t)}Xn(Dn),Object.defineProperty(Dn.prototype,"$isServer",{get:nt}),Object.defineProperty(Dn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Dn.version="2.4.1",Dn.mpvueVersion="1.0.12";var Zn=y("template,script,style,element,content,slot,link,meta,svg,view,a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select,slider,slider-neighbor,indicator,trisition,trisition-group,canvas,list,cell,header,loading,loading-indicator,refresh,scrollable,scroller,video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown",!0),Qn=y("style,class");y("web,spinner,switch,video,textarea,canvas,indicator,marquee,countdown",!0),y("embed,img,image,input,link,meta",!0);function Yn(){}function tr(){}function er(){}function nr(t){return t&&t.$attrs?t.$attrs["mpcomid"]:"0"}var rr={tap:["tap","click"],touchstart:["touchstart"],touchmove:["touchmove"],touchcancel:["touchcancel"],touchend:["touchend"],longtap:["longtap"],input:["input"],blur:["change","blur"],submit:["submit"],focus:["focus"],scrolltoupper:["scrolltoupper"],scrolltolower:["scrolltolower"],scroll:["scroll"]},or={};function ir(t,e){return or}function ar(t,e){return or}function sr(t){return or}function cr(t){return or}function ur(t,e,n){}function fr(t,e){}function lr(t,e){}function pr(t){return or}function dr(t){return or}function hr(t){return"div"}function vr(t,e){return or}function yr(t,e,n){return or}var _r=Object.freeze({createElement:ir,createElementNS:ar,createTextNode:sr,createComment:cr,insertBefore:ur,removeChild:fr,appendChild:lr,parentNode:pr,nextSibling:dr,tagName:hr,setTextContent:vr,setAttribute:yr}),mr={create:function(t,e){gr(e)},update:function(t,e){t.data.ref!==e.data.ref&&(gr(t,!0),gr(e))},destroy:function(t){gr(t,!0)}};function gr(t,e){var n=t.data.ref;if(n){var r=t.context,o=t.componentInstance||t.elm,i=r.$refs;e?Array.isArray(i[n])?m(i[n],o):i[n]===o&&(i[n]=void 0):t.data.refInFor?Array.isArray(i[n])?i[n].indexOf(o)<0&&i[n].push(o):i[n]=[o]:i[n]=o}}var br=new Ut("",{},[]),$r=["create","activate","update","remove","destroy"];function wr(t,e){return t.key===e.key&&(t.tag===e.tag&&t.isComment===e.isComment&&i(t.data)===i(e.data)&&xr(t,e)||a(t.isAsyncPlaceholder)&&t.asyncFactory===e.asyncFactory&&o(e.asyncFactory.error))}function xr(t,e){if("input"!==t.tag)return!0;var n,r=i(n=t.data)&&i(n=n.attrs)&&n.type,o=i(n=e.data)&&i(n=n.attrs)&&n.type;return r===o}function Or(t,e,n){var r,o,a={};for(r=e;r<=n;++r)o=t[r].key,i(o)&&(a[o]=r);return a}function Ar(t){var e,n,r={},s=t.modules,u=t.nodeOps;for(e=0;e<$r.length;++e)for(r[$r[e]]=[],n=0;n<s.length;++n)i(s[n][$r[e]])&&r[$r[e]].push(s[n][$r[e]]);function f(t){return new Ut(u.tagName(t).toLowerCase(),{},[],void 0,t)}function l(t,e){function n(){0===--n.listeners&&p(t)}return n.listeners=e,n}function p(t){var e=u.parentNode(t);i(e)&&u.removeChild(e,t)}function d(t,e,n,r,o){if(t.isRootInsert=!o,!h(t,e,n,r)){var s=t.data,c=t.children,f=t.tag;i(f)?(t.elm=t.ns?u.createElementNS(t.ns,f):u.createElement(f,t),w(t),g(t,c,e),i(s)&&$(t,e),m(n,t.elm,r)):a(t.isComment)?(t.elm=u.createComment(t.text),m(n,t.elm,r)):(t.elm=u.createTextNode(t.text),m(n,t.elm,r))}}function h(t,e,n,r){var o=t.data;if(i(o)){var s=i(t.componentInstance)&&o.keepAlive;if(i(o=o.hook)&&i(o=o.init)&&o(t,!1,n,r),i(t.componentInstance))return v(t,e),a(s)&&_(t,e,n,r),!0}}function v(t,e){i(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,b(t)?($(t,e),w(t)):(gr(t),e.push(t))}function _(t,e,n,o){var a,s=t;while(s.componentInstance)if(s=s.componentInstance._vnode,i(a=s.data)&&i(a=a.transition)){for(a=0;a<r.activate.length;++a)r.activate[a](br,s);e.push(s);break}m(n,t.elm,o)}function m(t,e,n){i(t)&&(i(n)?n.parentNode===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function g(t,e,n){if(Array.isArray(e))for(var r=0;r<e.length;++r)d(e[r],n,t.elm,null,!0);else c(t.text)&&u.appendChild(t.elm,u.createTextNode(t.text))}function b(t){while(t.componentInstance)t=t.componentInstance._vnode;return i(t.tag)}function $(t,n){for(var o=0;o<r.create.length;++o)r.create[o](br,t);e=t.data.hook,i(e)&&(i(e.create)&&e.create(br,t),i(e.insert)&&n.push(t))}function w(t){var e,n=t;while(n)i(e=n.context)&&i(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,""),n=n.parent;i(e=he)&&e!==t.context&&i(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,"")}function x(t,e,n,r,o,i){for(;r<=o;++r)d(n[r],i,t,e)}function O(t){var e,n,o=t.data;if(i(o))for(i(e=o.hook)&&i(e=e.destroy)&&e(t),e=0;e<r.destroy.length;++e)r.destroy[e](t);if(i(e=t.children))for(n=0;n<t.children.length;++n)O(t.children[n])}function A(t,e,n,r){for(;n<=r;++n){var o=e[n];i(o)&&(i(o.tag)?(C(o),O(o)):p(o.elm))}}function C(t,e){if(i(e)||i(t.data)){var n,o=r.remove.length+1;for(i(e)?e.listeners+=o:e=l(t.elm,o),i(n=t.componentInstance)&&i(n=n._vnode)&&i(n.data)&&C(n,e),n=0;n<r.remove.length;++n)r.remove[n](t,e);i(n=t.data.hook)&&i(n=n.remove)?n(t,e):e()}else p(t.elm)}function k(t,e,n,r,a){var s,c,f,l,p=0,h=0,v=e.length-1,y=e[0],_=e[v],m=n.length-1,g=n[0],b=n[m],$=!a;while(p<=v&&h<=m)o(y)?y=e[++p]:o(_)?_=e[--v]:wr(y,g)?(P(y,g,r),y=e[++p],g=n[++h]):wr(_,b)?(P(_,b,r),_=e[--v],b=n[--m]):wr(y,b)?(P(y,b,r),$&&u.insertBefore(t,y.elm,u.nextSibling(_.elm)),y=e[++p],b=n[--m]):wr(_,g)?(P(_,g,r),$&&u.insertBefore(t,_.elm,y.elm),_=e[--v],g=n[++h]):(o(s)&&(s=Or(e,p,v)),c=i(g.key)?s[g.key]:null,o(c)?(d(g,r,t,y.elm),g=n[++h]):(f=e[c],wr(f,g)?(P(f,g,r),e[c]=void 0,$&&u.insertBefore(t,f.elm,y.elm),g=n[++h]):(d(g,r,t,y.elm),g=n[++h])));p>v?(l=o(n[m+1])?null:n[m+1].elm,x(t,l,n,h,m,r)):h>m&&A(t,e,p,v)}function P(t,e,n,s){if(t!==e){var c=e.elm=t.elm;if(a(t.isAsyncPlaceholder))i(e.asyncFactory.resolved)?E(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(a(e.isStatic)&&a(t.isStatic)&&e.key===t.key&&(a(e.isCloned)||a(e.isOnce)))e.componentInstance=t.componentInstance;else{var f,l=e.data;i(l)&&i(f=l.hook)&&i(f=f.prepatch)&&f(t,e);var p=t.children,d=e.children;if(i(l)&&b(e)){for(f=0;f<r.update.length;++f)r.update[f](t,e);i(f=l.hook)&&i(f=f.update)&&f(t,e)}o(e.text)?i(p)&&i(d)?p!==d&&k(c,p,d,n,s):i(d)?(i(t.text)&&u.setTextContent(c,""),x(c,null,d,0,d.length-1,n)):i(p)?A(c,p,0,p.length-1):i(t.text)&&u.setTextContent(c,""):t.text!==e.text&&u.setTextContent(c,e.text),i(l)&&i(f=l.hook)&&i(f=f.postpatch)&&f(t,e)}}}function j(t,e,n){if(a(n)&&i(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var S=y("attrs,style,class,staticClass,staticStyle,key");function E(t,n,r){if(a(n.isComment)&&i(n.asyncFactory))return n.elm=t,n.isAsyncPlaceholder=!0,!0;n.elm=t;var o=n.tag,s=n.data,c=n.children;if(i(s)&&(i(e=s.hook)&&i(e=e.init)&&e(n,!0),i(e=n.componentInstance)))return v(n,r),!0;if(i(o)){if(i(c))if(t.hasChildNodes()){for(var u=!0,f=t.firstChild,l=0;l<c.length;l++){if(!f||!E(f,c[l],r)){u=!1;break}f=f.nextSibling}if(!u||f)return!1}else g(n,c,r);if(i(s))for(var p in s)if(!S(p)){$(n,r);break}}else t.data!==n.text&&(t.data=n.text);return!0}return function(t,e,n,s,c,l){if(!o(e)){var p=!1,h=[];if(o(t))p=!0,d(e,h,c,l);else{var v=i(t.nodeType);if(!v&&wr(t,e))P(t,e,h,s);else{if(v){if(1===t.nodeType&&t.hasAttribute(R)&&(t.removeAttribute(R),n=!0),a(n)&&E(t,e,h))return j(e,h,!0),t;t=f(t)}var y=t.elm,_=u.parentNode(y);if(d(e,h,y._leaveCb?null:_,u.nextSibling(y)),i(e.parent)){var m=e.parent;while(m)m.elm=e.elm,m=m.parent;if(b(e))for(var g=0;g<r.create.length;++g)r.create[g](br,e.parent)}i(_)?A(_,[t],0,0):i(t.tag)&&O(t)}}return j(e,h,p),e.elm}i(t)&&O(t)}}var Cr=[mr],kr=Ar({nodeOps:_r,modules:Cr});function Pr(){kr.apply(this,arguments),this.$updateDataToMP()}function jr(t,e,r){var o,i=t.$options[e];if("onError"===e&&i&&(i=[i]),i)for(var a=0,s=i.length;a<s;a++)try{o=i[a].call(t,r)}catch(n){J(n,t,e+" hook")}return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return jr(t,e,r)}),o}function Sr(t,e){var n=e.$mp;t&&t.globalData&&(n.appOptions=t.globalData.appOptions)}function Er(t,e,n){if(t){var r,o,i;if(Array.isArray(t)){r=t.length;while(r--)o=t[r],"string"===typeof o&&(i=x(o),e[i]={type:null})}else if(l(t))for(var a in t)o=t[a],i=x(a),e[i]=l(o)?o:{type:o};for(var s in e)if(e.hasOwnProperty(s)){var c=e[s];c.default&&(c.value=c.default);var u=c.observer;c.observer=function(t,e){n[i]=t,"function"===typeof u&&u.call(n,t,e)}}return e}}function Ir(t){var e=t.$options.properties,n=t.$options.props,r={};return Er(e,r,t),Er(n,r,t),r}function Tr(t){var e=t._mpProps={},n=Object.keys(t.$options.properties||{});n.forEach(function(n){n in t||(Le(t,"_mpProps",n),e[n]=void 0)}),bt(e,!0)}function Nr(t,n){var r=this.$root;r.$mp||(r.$mp={});var o=r.$mp;if(o.status)return"app"===t?jr(this,"onLaunch",o.appOptions):(this.__wxWebviewId__=r.__wxWebviewId__,this.__wxExparserNodeId__=r.__wxExparserNodeId__,jr(this,"onLoad",o.query)),n();if(o.mpType=t,o.status="register","app"===t)e.App({globalData:{appOptions:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLaunch:function(t){void 0===t&&(t={}),o.app=this,o.status="launch",this.globalData.appOptions=o.appOptions=t,jr(r,"onLaunch",t),n()},onShow:function(t){void 0===t&&(t={}),o.status="show",this.globalData.appOptions=o.appOptions=t,jr(r,"onShow",t)},onHide:function(){o.status="hide",jr(r,"onHide")},onError:function(t){jr(r,"onError",t)},onUniNViewMessage:function(t){jr(r,"onUniNViewMessage",t)}});else if("component"===t)Tr(r),e.Component({properties:Ir(r),data:{$root:{}},methods:{handleProxy:function(t){return r.$handleProxyWithVue(t)}},created:function(){o.status="created",o.page=this},attached:function(){o.status="attached",jr(r,"attached")},ready:function(){o.status="ready",jr(r,"ready"),n(),r.$nextTick(function(){r._initDataToMP()})},moved:function(){jr(r,"moved")},detached:function(){o.status="detached",jr(r,"detached")}});else{var i=e.getApp();e.Page({data:{$root:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLoad:function(t){r.__wxWebviewId__=this.__wxWebviewId__,r.__wxExparserNodeId__=this.__wxExparserNodeId__,o.page=this,o.query=t,o.status="load",Sr(i,r),r.$options&&"function"===typeof r.$options.data&&Object.assign(r.$data,r.$options.data()),jr(r,"onLoad",t)},onShow:function(){r.__wxWebviewId__=this.__wxWebviewId__,r.__wxExparserNodeId__=this.__wxExparserNodeId__,o.page=this,o.status="show",jr(r,"onShow"),r.$nextTick(function(){r._initDataToMP()})},onReady:function(){o.status="ready",jr(r,"onReady"),n()},onHide:function(){o.status="hide",jr(r,"onHide")},onUnload:function(){o.status="unload",jr(r,"onUnload"),o.page=null},onPullDownRefresh:function(){jr(r,"onPullDownRefresh")},onReachBottom:function(){jr(r,"onReachBottom")},onShareAppMessage:r.$options.onShareAppMessage?function(t){return jr(r,"onShareAppMessage",t)}:null,onPageScroll:function(t){jr(r,"onPageScroll",t)},onTabItemTap:function(t){jr(r,"onTabItemTap",t)}})}}function Mr(t){var e=[].concat(Object.keys(t._data||{}),Object.keys(t._props||{}),Object.keys(t._mpProps||{}),Object.keys(t._computedWatchers||{}));return e.reduce(function(e,n){return e[n]=t[n],e},{})}function Dr(t,e){void 0===e&&(e=[]);var n=t||{},r=n.$parent;return r?(e.unshift(nr(r)),r.$parent?Dr(r,e):e):e}function Rr(t){var e=Dr(t).join(","),n=e+(e?",":"")+nr(t),r=Object.assign(Mr(t),{$k:n,$kk:n+",",$p:e}),o="$root."+n,i={};return i[o]=r,i}function Br(t,e){void 0===e&&(e={});var n=t.$children;return n&&n.length&&n.forEach(function(t){return Br(t,e)}),Object.assign(e,Rr(t))}function Vr(t,e,n){var r,o,i,a=null,s=0;function c(){s=!1===n.leading?0:Date.now(),a=null,i=t.apply(r,o),a||(r=o=null)}return n||(n={}),function(u,f){var l=Date.now();s||!1!==n.leading||(s=l);var p=e-(l-s);return r=this,o=o?[u,Object.assign(o[1],f)]:[u,f],p<=0||p>e?(clearTimeout(a),a=null,s=l,i=t.apply(r,o),a||(r=o=null)):a||!1===n.trailing||(a=setTimeout(c,p)),i}}var Ur=Vr(function(t,e){t&&t(e)},50);function Lr(t){var e=t.$root,n=e.$mp||{},r=n.mpType;void 0===r&&(r="");var o=n.page;if("app"!==r&&o&&"function"===typeof o.setData)return o}function Hr(){var t=Lr(this);if(t){var e=JSON.parse(JSON.stringify(Rr(this)));Ur(t.setData.bind(t),r(e,t.data))}}function Wr(){var t=Lr(this);if(t){var e=Br(this.$root);t.setData(JSON.parse(JSON.stringify(e)))}}function Fr(t,e){void 0===e&&(e=[]);var n=e.slice(1);return n.length?n.reduce(function(t,e){for(var n=t.$children.length,r=0;r<n;r++){var o=t.$children[r],i=nr(o);if(i===e)return t=o,t}return t},t):t}function Gr(t,e,n){void 0===n&&(n=[]);var r=[];if(!t||!t.tag)return r;var o=t||{},i=o.data;void 0===i&&(i={});var a=o.children;void 0===a&&(a=[]);var s=o.componentInstance;s?Object.keys(s.$slots).forEach(function(t){var o=s.$slots[t],i=Array.isArray(o)?o:[o];i.forEach(function(t){r=r.concat(Gr(t,e,n))})}):a.forEach(function(t){r=r.concat(Gr(t,e,n))});var c=i.attrs,u=i.on;return c&&u&&c["eventid"]===e?(n.forEach(function(t){var e=u[t];"function"===typeof e?r.push(e):Array.isArray(e)&&(r=r.concat(e))}),r):r}function zr(t){var e=t.type,n=t.timeStamp,r=t.touches,o=t.detail;void 0===o&&(o={});var i=t.target;void 0===i&&(i={});var a=t.currentTarget;void 0===a&&(a={});var s=o.x,c=o.y,u={mp:t,type:e,timeStamp:n,x:s,y:c,target:Object.assign({},i,o),detail:o,currentTarget:a,stopPropagation:E,preventDefault:E};return r&&r.length&&(Object.assign(u,r[0]),u.touches=r),u}function Jr(t){var e=this.$root,n=t.type,r=t.target;void 0===r&&(r={});var o=t.currentTarget,i=o||r,a=i.dataset;void 0===a&&(a={});var s=a.comkey;void 0===s&&(s="");var c=a.eventid,u=Fr(e,s.split(","));if(u){var f=rr[n]||[n],l=Gr(u._vnode,c,f);if(l.length){var p=zr(t);if(1===l.length){var d=l[0](p);return d}l.forEach(function(t){return t(p)})}}}return Dn.config.mustUseProp=Yn,Dn.config.isReservedTag=Zn,Dn.config.isReservedAttr=Qn,Dn.config.getTagNamespace=tr,Dn.config.isUnknownElement=er,Dn.prototype.__patch__=Pr,Dn.prototype.$mount=function(t,e){var n=this,r=this.$options;if(r&&(r.render||r.mpType)){var o=r.mpType;return void 0===o&&(o="page"),this._initMP(o,function(){return _e(n,void 0,void 0)})}return _e(this,void 0,void 0)},Dn.prototype._initMP=Nr,Dn.prototype.$updateDataToMP=Hr,Dn.prototype._initDataToMP=Wr,Dn.prototype.$handleProxyWithVue=Jr,Dn})}).call(this,n("c8ba"))},fcf5:function(t,e,n){"use strict";var r=n("fffc"),o=n.n(r);o.a},fffc:function(t,e,n){}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');


__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"08db":function(t,i,e){"use strict";e.r(i);var n=e("779f"),s=e("ec33");for(var a in s)"default"!==a&&function(t){e.d(i,t,function(){return s[t]})}(a);e("e40b");var o=e("2877"),r=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,null,null);i["default"]=r.exports},"0e45":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{}},onLoad:function(){},props:["programsList"],methods:{toPlay:function(i){i=i;t.navigateTo({url:"../play/play?id="+i})}}};i.default=e}).call(this,e("6e42")["default"])},"112f":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=o(e("7012")),s=o(e("3598")),a=o(e("8f54"));function o(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{bannersList:"",swiper:{indicatorDots:!0,autoplay:!0,interval:5e3,duration:500,circular:!0,indicatorActiveColor:"#e91e63",previousMargin:"10px"},personalizedList:"",topMvList:"",toplistArtistList:"",djRecommendList:"",djListNumber:"5",programsList:""}},components:{djRecommendList:n.default,nowPlay:s.default,programsList:a.default},onLoad:function(){this.getDataList()},onPullDownRefresh:function(){this.getDataList(),t.stopPullDownRefresh()},methods:{getDataList:function(){this.getBannerList(),this.getPersonalizedList(),this.getTopMvList(),this.getToplistArtistList(),this.getProgramRecommendList()},getBannerList:function(){var i=this;t.showLoading({title:"加载中"}),t.request({url:i.MusicApi.server+i.MusicApi.type.banner,success:function(e){t.hideLoading(),200==e.data.code?i.bannersList=e.data.banners:t.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"})},fail:function(i){t.hideLoading(),t.showToast({title:"请求超时",duration:5e3,icon:"none"})}})},getPersonalizedList:function(){var i=this;t.showLoading({title:"加载中"}),t.request({url:i.MusicApi.server+i.MusicApi.type.personalized,success:function(e){t.hideLoading(),200==e.data.code?i.personalizedList=e.data.result:(console.error("数据获取失败"),t.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"}))},fail:function(i){t.hideLoading(),t.showToast({title:"请求超时",duration:5e3,icon:"none"})}})},getTopMvList:function(){var i=this;t.showLoading({title:"加载中"}),t.request({url:i.MusicApi.server+i.MusicApi.type.topMv,data:{limit:10},success:function(e){t.hideLoading(),200==e.data.code?i.topMvList=e.data.data:(console.error("数据获取失败"),t.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"}))},fail:function(i){t.hideLoading(),t.showToast({title:"请求超时",duration:5e3,icon:"none"})}})},getToplistArtistList:function(){var i=this;t.showLoading({title:"加载中"}),t.request({url:i.MusicApi.server+i.MusicApi.type.toplistArtist,data:{limit:10},success:function(e){t.hideLoading(),200==e.data.code?i.toplistArtistList=e.data.list.artists:(console.error("数据获取失败"),t.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"}))},fail:function(i){t.hideLoading(),t.showToast({title:"请求超时",duration:5e3,icon:"none"})}})},getDjRecommendList:function(){var i=this;t.showLoading({title:"加载中"}),t.request({url:i.MusicApi.server+i.MusicApi.type.djRecommend,data:{limit:10},success:function(e){t.hideLoading(),200==e.data.code?i.djRecommendList=e.data.djRadios:(console.error("数据获取失败"),t.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"}))},fail:function(i){t.hideLoading(),t.showToast({title:"请求超时",duration:5e3,icon:"none"})}})},getProgramRecommendList:function(){var i=this;t.showLoading({title:"加载中"}),t.request({url:i.MusicApi.server+i.MusicApi.type.programRecommend,success:function(e){t.hideLoading(),200==e.data.code?i.programsList=e.data.programs:(console.error("数据获取失败"),t.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"}))},fail:function(i){t.hideLoading(),t.showToast({title:"请求超时",duration:5e3,icon:"none"})}})},openMvDetail:function(i){i=i;t.navigateTo({url:"../mvDetail/mvDetail?mvid="+i})},openDjList:function(){t.navigateTo({url:"../djList/djList"})},openPersonalizedDetail:function(i){i=i;t.navigateTo({url:"../getPlaylistDetail/getPlaylistDetail?id="+i})},openPersonalizedList:function(){t.navigateTo({url:"../personalizedList/personalizedList"})},toSingerInfo:function(i){var e={picUrl:encodeURIComponent(this.toplistArtistList[i].img1v1Url),name:this.toplistArtistList[i].name,id:this.toplistArtistList[i].id};e=JSON.stringify(e),t.navigateTo({url:"../singerInfo/singerInfo?data="+e})},toRankingList:function(i){t.navigateTo({url:"../rankingList/rankingList?id="+i})},openMvList:function(){t.navigateTo({url:"../mvList/mvList"})}}};i.default=r}).call(this,e("6e42")["default"])},"6a40":function(t,i,e){"use strict";var n=e("ffd1"),s=e.n(n);s.a},"779f":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{staticClass:"page-panel"},[e("nowPlay",{attrs:{mpcomid:"8cdfbac0-0"}}),e("view",{staticClass:"banner"},[e("swiper",{attrs:{"indicator-dots":t.swiper.indicatorDots,autoplay:t.swiper.autoplay,interval:t.swiper.interval,duration:t.swiper.duration,circular:t.swiper.circular,"indicator-active-color":t.swiper.indicatorActiveColor,"previous-margin":t.swiper.previousMargin,"next-margin":t.swiper.previousMargin}},t._l(t.bannersList,function(i,n){return e("swiper-item",{key:i.index,attrs:{eventid:"8cdfbac0-0-"+n,mpcomid:"8cdfbac0-1-"+n},on:{tap:function(i){t.toRankingList(n)}}},[e("image",{attrs:{src:i.imageUrl,mode:"widthFix"}})])}))],1),e("view",{staticClass:"page-title",attrs:{eventid:"8cdfbac0-1"},on:{tap:function(i){t.openPersonalizedList()}}},[e("text",{staticClass:"themeColor"},[t._v("推")]),t._v("荐歌单")]),e("scroll-view",{staticClass:"scroll-view_H",staticStyle:{width:"100%"},attrs:{"scroll-x":""}},[e("view",{staticClass:"personalizedList"},t._l(t.personalizedList,function(i,n){return n<=10?e("view",{key:i.index,staticClass:"item",attrs:{eventid:"8cdfbac0-2-"+n},on:{tap:function(e){t.openPersonalizedDetail(i.id)}}},[e("image",{attrs:{src:i.picUrl,mode:"widthFix"}}),e("text",{staticClass:"name"},[t._v(t._s(i.name))])]):t._e()}))]),t._m(0),e("scroll-view",{staticClass:"scroll-view_H",staticStyle:{width:"100%"},attrs:{"scroll-x":""}},[e("view",{staticClass:"topMvList"},t._l(t.topMvList,function(i,n){return e("view",{key:i.index,staticClass:"item",attrs:{eventid:"8cdfbac0-3-"+n},on:{tap:function(e){t.openMvDetail(i.id)}}},[e("image",{attrs:{src:i.cover,mode:"widthFix"}}),e("text",{staticClass:"name"},[t._v(t._s(i.name))]),e("view",{staticClass:"playBtn"},[e("view",{staticClass:"icon"})])])}))]),t._m(1),e("scroll-view",{staticClass:"scroll-view_H",staticStyle:{width:"100%"},attrs:{"scroll-x":""}},[e("view",{staticClass:"toplistArtistList"},t._l(t.toplistArtistList,function(i,n){return n<=20?e("view",{key:i.index,staticClass:"item",attrs:{eventid:"8cdfbac0-4-"+n},on:{tap:function(i){t.toSingerInfo(n)}}},[e("image",{attrs:{src:i.img1v1Url,mode:"widthFix"}}),e("text",{staticClass:"name"},[t._v(t._s(i.name))])]):t._e()}))]),t._m(2),e("programsList",{attrs:{programsList:t.programsList,mpcomid:"8cdfbac0-2"}})],1)},s=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{staticClass:"page-title"},[e("text",{staticClass:"themeColor"},[t._v("M")]),t._v("V排行")])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{staticClass:"page-title"},[e("text",{staticClass:"themeColor"},[t._v("歌")]),t._v("手榜")])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{staticClass:"page-title"},[e("text",{staticClass:"themeColor"},[t._v("推")]),t._v("荐节目")])}];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return s})},"8dac":function(t,i,e){"use strict";e.r(i);var n=e("0e45"),s=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,function(){return n[t]})}(a);i["default"]=s.a},"8f54":function(t,i,e){"use strict";e.r(i);var n=e("d147"),s=e("8dac");for(var a in s)"default"!==a&&function(t){e.d(i,t,function(){return s[t]})}(a);e("6a40");var o=e("2877"),r=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,null,null);i["default"]=r.exports},d147:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",[e("view",{staticClass:"djRecommendList"},t._l(t.programsList,function(i,n){return e("view",{key:i.index,staticClass:"item",attrs:{eventid:"6ba326c8-0-"+n},on:{tap:function(e){t.toPlay(i.mainSong.id)}}},[e("view",{staticClass:"pic"},[e("image",{attrs:{src:i.mainSong.album.picUrl,mode:"widthFix"}}),t._m(0,!0)]),e("view",{staticClass:"content"},[e("view",{staticClass:"name"},[t._v(t._s(i.name))]),e("view",{staticClass:"rcmdtext"},[t._v(t._s(i.reason))]),e("view",{staticClass:"info"},[e("text",[t._v("播放 : "+t._s(i.listenerCount)+"次")]),0!==i.channels.length?e("text",{staticClass:"category"},[t._v("类型 : "+t._s(i.channels[0]))]):t._e()])])])}))])},s=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{staticClass:"playBtn"},[e("view",{staticClass:"icon"})])}];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return s})},e3d9:function(t,i,e){},e40b:function(t,i,e){"use strict";var n=e("e3d9"),s=e.n(n);s.a},ec33:function(t,i,e){"use strict";e.r(i);var n=e("112f"),s=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,function(){return n[t]})}(a);i["default"]=s.a},f2f2:function(t,i,e){"use strict";e("c7c6");var n=a(e("b0ce")),s=a(e("08db"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(s.default))},ffd1:function(t,i,e){}},[["f2f2","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/mvDetail/mvDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mvDetail/mvDetail.js';

define('pages/mvDetail/mvDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mvDetail/mvDetail"],{"08a0":function(t,i,e){"use strict";e.r(i);var a=e("6b60"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,function(){return a[t]})}(n);i["default"]=s.a},"13ef":function(t,i,e){"use strict";var a=e("145a"),s=e.n(a);s.a},"145a":function(t,i,e){},"5eb2":function(t,i,e){"use strict";e.r(i);var a=e("e0fd"),s=e("08a0");for(var n in s)"default"!==n&&function(t){e.d(i,t,function(){return s[t]})}(n);e("13ef");var o=e("2877"),r=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,null,null);i["default"]=r.exports},"6b60":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{mvid:"",mvDetail:"",mvUrl:"",simiMvList:""}},onLoad:function(t){this.mvid=t.mvid,this.getMvDetail(),this.getMvUrl(),this.getSimiMvList()},methods:{getMvDetail:function(){var i=this;t.showLoading({title:"加载中"}),t.request({url:i.MusicApi.server+i.MusicApi.type.mvDetail,data:{mvid:i.mvid},success:function(e){t.hideLoading(),200==e.data.code?i.mvDetail=e.data.data:(console.error("数据获取失败"),t.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"}))},fail:function(i){t.hideLoading(),t.showToast({title:"请求超时",duration:5e3,icon:"none"})}})},getMvUrl:function(){var i=this;t.showLoading({title:"加载中"}),t.request({url:i.MusicApi.server+i.MusicApi.type.mvUrl,data:{id:i.mvid},success:function(e){t.hideLoading(),200==e.data.code?i.mvUrl=e.data.data.url:t.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"})},fail:function(i){t.hideLoading(),t.showToast({title:"请求超时",duration:5e3,icon:"none"})}})},getSimiMvList:function(){var i=this;t.showLoading({title:"加载中"}),t.request({url:i.MusicApi.server+i.MusicApi.type.simiMv,data:{mvid:i.mvid},success:function(e){t.hideLoading(),200==e.data.code?i.simiMvList=e.data.mvs:t.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"})},fail:function(i){t.hideLoading(),t.showToast({title:"请求超时",duration:5e3,icon:"none"})}})},videoErrorCallback:function(i){t.showToast({title:i.target.errMsg,duration:5e3,icon:"none"})},toMvDetail:function(t){this.mvid=t,this.getMvDetail(),this.getMvUrl(),this.getSimiMvList()}}};i.default=e}).call(this,e("6e42")["default"])},e0fd:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return""==!t.mvDetail?e("view",[e("view",{staticClass:"video"},[e("video",{attrs:{id:"myVideo",src:t.mvUrl,controls:"",poster:t.mvDetail.cover,eventid:"ffddd90c-0"},on:{error:t.videoErrorCallback}})]),e("view",{staticClass:"page-panel"},[e("view",{staticClass:"videoInfo"},[e("view",{staticClass:"name"},[t._v(t._s(t.mvDetail.name))]),e("view",{staticClass:"tips"},[e("text",[t._v("发布 : "+t._s(t.mvDetail.publishTime))]),e("text",{staticClass:"artistName"},[t._v("演唱 : "+t._s(t.mvDetail.artistName))])]),e("view",{staticClass:"desc"},[t._v(t._s(t.mvDetail.desc))])]),t._m(0),e("view",{staticClass:"simiMvList"},t._l(t.simiMvList,function(i,a){return e("view",{key:i.id,staticClass:"item",attrs:{eventid:"ffddd90c-1-"+a},on:{tap:function(e){t.toMvDetail(i.id)}}},[e("view",{staticClass:"pic"},[e("image",{attrs:{src:i.cover,mode:"aspectFill"}})]),e("view",{staticClass:"info"},[e("view",{staticClass:"name"},[t._v(t._s(i.name))]),e("view",{staticClass:"artistName"},[t._v(t._s(i.artistName))])]),t._m(1,!0)])}))])]):t._e()},s=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{staticClass:"page-title"},[e("text",{staticClass:"themeColor"},[t._v("类")]),t._v("似MV")])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{staticClass:"btn"},[e("text"),e("text"),e("text")])}];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return s})},e4d0:function(t,i,e){"use strict";e("c7c6");var a=n(e("b0ce")),s=n(e("5eb2"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(s.default))}},[["e4d0","common/runtime","common/vendor"]]]);
});
require('pages/mvDetail/mvDetail.js');
__wxRoute = 'pages/getPlaylistDetail/getPlaylistDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/getPlaylistDetail/getPlaylistDetail.js';

define('pages/getPlaylistDetail/getPlaylistDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/getPlaylistDetail/getPlaylistDetail"],{2844:function(t,e,a){"use strict";a.r(e);var i=a("8355"),n=a("a892");for(var l in n)"default"!==l&&function(t){a.d(e,t,function(){return n[t]})}(l);a("97e0");var s=a("2877"),o=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=o.exports},"572c":function(t,e,a){},8355:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return""==!t.playlist?a("view",{staticClass:"page-panel"},[a("nowPlay",{attrs:{mpcomid:"42cd432e-0"}}),a("view",{staticClass:"playlistDetail ease-row"},[a("view",{staticClass:"ease-col-3-1 coverImgUrls"},[a("image",{attrs:{src:t.playlist.coverImgUrl,mode:"widthFix"}})]),a("view",{staticClass:"ease-col-3-2 playlistInfo"},[a("view",{staticClass:"name"},[t._v(t._s(t.playlist.name))]),a("view",{staticClass:"description"},[t._v(t._s(t.playlist.description))])])]),a("songList",{attrs:{singerHotSongs:t.playlist.tracks,mpcomid:"42cd432e-1"}})],1):t._e()},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},9139:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=l(a("3598")),n=l(a("4f17"));function l(t){return t&&t.__esModule?t:{default:t}}var s={data:function(){return{id:"",playlist:"",playlistDetailSwith:!1}},components:{nowPlay:i.default,songList:n.default},onLoad:function(t){this.id=t.id,this.getPlaylistDetail()},methods:{getPlaylistDetail:function(){var e=this;t.showLoading({title:"加载中"}),t.request({url:e.MusicApi.server+e.MusicApi.type.playlistDetail,data:{id:e.id},success:function(a){200==a.data.code?(e.playlist=a.data.playlist,t.hideLoading()):(t.hideLoading(),console.error("数据获取失败"),t.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"}))},fail:function(e){t.hideLoading(),t.showToast({title:"请求超时",duration:5e3,icon:"none"})}})},toPlay:function(e){e=e;t.navigateTo({url:"../play/play?id="+e})}}};e.default=s}).call(this,a("6e42")["default"])},"97e0":function(t,e,a){"use strict";var i=a("572c"),n=a.n(i);n.a},a892:function(t,e,a){"use strict";a.r(e);var i=a("9139"),n=a.n(i);for(var l in i)"default"!==l&&function(t){a.d(e,t,function(){return i[t]})}(l);e["default"]=n.a},c22e:function(t,e,a){"use strict";a("c7c6");var i=l(a("b0ce")),n=l(a("2844"));function l(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(n.default))}},[["c22e","common/runtime","common/vendor"]]]);
});
require('pages/getPlaylistDetail/getPlaylistDetail.js');
__wxRoute = 'pages/personalizedList/personalizedList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/personalizedList/personalizedList.js';

define('pages/personalizedList/personalizedList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/personalizedList/personalizedList"],{5113:function(e,t,n){"use strict";n("c7c6");var i=o(n("b0ce")),a=o(n("69fe"));function o(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(a.default))},"69fe":function(e,t,n){"use strict";n.r(t);var i=n("cdde"),a=n("ca6c");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("f402");var s=n("2877"),r=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,null,null);t["default"]=r.exports},"93df":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("3598"));function a(e){return e&&e.__esModule?e:{default:e}}var o={data:function(){return{personalizedList:""}},components:{nowPlay:i.default},onLoad:function(){this.getPersonalizedList()},methods:{getPersonalizedList:function(){var t=this;e.showLoading({title:"加载中"}),e.request({url:t.MusicApi.server+t.MusicApi.type.personalized,success:function(n){e.hideLoading(),200==n.data.code?t.personalizedList=n.data.result:(console.error("数据获取失败"),e.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"}))},fail:function(t){e.hideLoading(),e.showToast({title:"请求超时",duration:5e3,icon:"none"})}})},openPersonalizedDetail:function(t){t=t;e.navigateTo({url:"../getPlaylistDetail/getPlaylistDetail?id="+t})}}};t.default=o}).call(this,n("6e42")["default"])},bdc1:function(e,t,n){},ca6c:function(e,t,n){"use strict";n.r(t);var i=n("93df"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=a.a},cdde:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return""==!e.personalizedList?n("view",{staticClass:"page-panel"},[n("nowPlay",{attrs:{mpcomid:"160246fa-0"}}),n("view",{staticClass:"personalizedList ease-row"},e._l(e.personalizedList,function(t,i){return n("view",{key:t.id,staticClass:"item ease-col-2-1",attrs:{eventid:"160246fa-0-"+i},on:{tap:function(n){e.openPersonalizedDetail(t.id)}}},[n("image",{attrs:{src:t.picUrl,mode:"widthFix"}}),n("text",{staticClass:"name"},[e._v(e._s(t.name))])])}))],1):e._e()},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},f402:function(e,t,n){"use strict";var i=n("bdc1"),a=n.n(i);a.a}},[["5113","common/runtime","common/vendor"]]]);
});
require('pages/personalizedList/personalizedList.js');
__wxRoute = 'pages/mvList/mvList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mvList/mvList.js';

define('pages/mvList/mvList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mvList/mvList"],{"37db":function(t,e,n){"use strict";n("c7c6");var a=o(n("b0ce")),i=o(n("439b"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},"439b":function(t,e,n){"use strict";n.r(e);var a=n("df3e"),i=n("f0a4");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("a71b");var s=n("2877"),u=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},"46a1":function(t,e,n){},a71b:function(t,e,n){"use strict";var a=n("46a1"),i=n.n(a);i.a},ba39:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{mvList:""}},onLoad:function(){this.getMvList()},methods:{getMvList:function(){var e=this;t.showLoading({title:"加载中"}),t.request({url:e.MusicApi.server+e.MusicApi.type.topMv,success:function(n){t.hideLoading(),200==n.data.code?e.mvList=n.data.data:(console.error("数据获取失败"),t.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"}))},fail:function(e){t.hideLoading(),t.showToast({title:"请求超时",duration:5e3,icon:"none"})}})},openMvDetail:function(e){e=e;t.navigateTo({url:"../mvDetail/mvDetail?mvid="+e})}}};e.default=n}).call(this,n("6e42")["default"])},df3e:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"page-panel"},[n("view",{staticClass:"mvList"},t._l(t.mvList,function(e,a){return n("view",{key:e.index,staticClass:"item",attrs:{eventid:"f261eccc-0-"+a},on:{tap:function(n){t.openMvDetail(e.id)}}},[n("image",{attrs:{src:e.cover,mode:"widthFix"}}),n("text",{staticClass:"name"},[t._v(t._s(e.name))]),t._m(0,!0)])}))])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"playBtn"},[n("view",{staticClass:"icon"})])}];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},f0a4:function(t,e,n){"use strict";n.r(e);var a=n("ba39"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a}},[["37db","common/runtime","common/vendor"]]]);
});
require('pages/mvList/mvList.js');
__wxRoute = 'pages/djList/djList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/djList/djList.js';

define('pages/djList/djList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/djList/djList"],{1045:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("7012"));function i(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{djRecommendList:"",djListNumber:"10"}},onLoad:function(){this.getDjList()},methods:{getDjList:function(){var e=this;t.showLoading({title:"加载中"}),t.request({url:e.MusicApi.server+e.MusicApi.type.djRecommend,success:function(n){t.hideLoading(),200==n.data.code?e.djRecommendList=n.data.djRadios:(console.error("数据获取失败"),t.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"}))},fail:function(e){t.hideLoading(),t.showToast({title:"请求超时",duration:5e3,icon:"none"})}})}},components:{djRecommendList:o.default}};e.default=u}).call(this,n("6e42")["default"])},"4f7d":function(t,e,n){"use strict";n("c7c6");var o=u(n("b0ce")),i=u(n("ac94"));function u(t){return t&&t.__esModule?t:{default:t}}Page((0,o.default)(i.default))},"7b5a":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"page-panel"},[n("djRecommendList",{attrs:{djRecommendList:t.djRecommendList,djListNumber:t.djListNumber,mpcomid:"9049520c-0"}})],1)},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},"948e":function(t,e,n){"use strict";n.r(e);var o=n("1045"),i=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=i.a},ac94:function(t,e,n){"use strict";n.r(e);var o=n("7b5a"),i=n("948e");for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);var a=n("2877"),d=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=d.exports}},[["4f7d","common/runtime","common/vendor"]]]);
});
require('pages/djList/djList.js');
__wxRoute = 'pages/play/play';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/play/play.js';

define('pages/play/play.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/play/play"],{"40ae":function(i,t,a){"use strict";a.r(t);var e=a("d0b9"),s=a.n(e);for(var n in e)"default"!==n&&function(i){a.d(t,i,function(){return e[i]})}(n);t["default"]=s.a},"75d9":function(i,t,a){},"88f9":function(i,t,a){"use strict";a.r(t);var e=a("a8e4"),s=a("40ae");for(var n in s)"default"!==n&&function(i){a.d(t,i,function(){return s[i]})}(n);a("f774");var u=a("2877"),o=Object(u["a"])(s["default"],e["a"],e["b"],!1,null,"2d37ff8c",null);t["default"]=o.exports},a8e4:function(i,t,a){"use strict";var e=function(){var i=this,t=i.$createElement,a=i._self._c||t;return""==!i.musicDetail.name?a("view",{staticClass:"page-panel-h"},[a("view",{staticClass:"music-name"},[i._v(i._s(i.musicDetail.name))]),a("view",{staticClass:"music-author"},[i._v(i._s(i.musicDetail.author))]),a("view",{staticClass:"music-pic"},[a("image",{attrs:{src:i.musicDetail.picUrl}})]),a("view",{staticClass:"player-panel"},[a("view",{staticClass:"time"},[a("view",{staticClass:"item"},[i._v(i._s(i.musicTime.currentTime))]),a("view",{staticClass:"item"},[i._v(i._s(i.musicTime.duration))])]),a("slider",{attrs:{value:i.musicTime.currentTime,step:"0.01",min:"0",max:i.musicTime.duration,"block-size":"12",activeColor:"#E91E63",eventid:"7e2a793a-0"},on:{changing:i.sliderChange}}),a("view",{staticClass:"player-btn"},[i.isStop?a("view",{staticClass:"playStop",attrs:{eventid:"7e2a793a-1"},on:{tap:function(t){i.toAgain()}}},[a("image",{attrs:{src:"../../static/images/again.png",mode:""}})]):i._e(),i.isStop?i._e():a("view",{staticClass:"playStop",attrs:{eventid:"7e2a793a-2"},on:{tap:function(t){i.toPausePlay()}}},[a("image",{attrs:{src:i.isPlay?i.playIcon:i.pauseIcon,mode:""}})])])])]):i._e()},s=[];a.d(t,"a",function(){return e}),a.d(t,"b",function(){return s})},c6c3:function(i,t,a){"use strict";a("c7c6");var e=n(a("b0ce")),s=n(a("88f9"));function n(i){return i&&i.__esModule?i:{default:i}}Page((0,e.default)(s.default))},d0b9:function(i,t,a){"use strict";(function(i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=a("2f62");function s(i){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},e=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(a).filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable}))),e.forEach(function(t){n(i,t,a[t])})}return i}function n(i,t,a){return t in i?Object.defineProperty(i,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[t]=a,i}var u={data:function(){return{musicDetail:{id:"",url:"",name:"",picUrl:"",author:""},musicTime:{currentTime:0,duration:0},playIcon:"../../static/images/play.png",pauseIcon:"../../static/images/pause.png",isStop:!1,isPlay:!0,musicSwith:0,musicSwithNum:2,bgAudioMannager:"",innerAudioContext:""}},computed:s({},(0,e.mapState)(["isMusicStart","musicInfo","isMusicPlay","playTime"])),onLoad:function(i){this.musicDetail.id=i.id,this.bgAudioMannager=this.globalData.bgAudioMannager,this.bgAudioMannagerFunc(),"playing"!==this.musicDetail.id?(this.getMusicUrl(),this.getMusicInfo(),this.isStop=!1,this.isPlay=!0):(this.musicDetail=this.musicInfo,this.musicTime=this.playTime,this.isMusicPlay?this.isPlay=!0:this.isPlay=!1,0==this.globalData.bgAudioMannager.currentTime?this.isStop=!0:this.isStop=!1)},onUnload:function(i){this.setPlayTime(this.musicTime),this.setMusicInfo(this.musicDetail),this.setMusicPlay(this.isPlay)},methods:s({},(0,e.mapMutations)(["musicStart","setMusicInfo","setMusicPlay","setPlayTime"]),{bgAudioMannagerFunc:function(){var i=this;this.bgAudioMannager.onTimeUpdate(function(){i.musicTime.currentTime=i.bgAudioMannager.currentTime/60,i.musicTime.duration=i.bgAudioMannager.duration/60,i.musicTime.currentTime=i.musicTime.currentTime.toFixed(2),i.musicTime.duration=i.musicTime.duration.toFixed(2),i.globalData.bgAudioMannager.currentTime==i.globalData.bgAudioMannager.duration&&(i.isStop=!0)})},getMusicUrl:function(){var t=this;i.showLoading({title:"加载中"}),i.request({url:t.MusicApi.server+t.MusicApi.type.songUrl,data:{id:t.musicDetail.id},success:function(a){200==a.data.code?(t.musicDetail.url=a.data.data[0].url,t.musicSwith++,i.hideLoading()):(i.hideLoading(),console.error("数据获取失败"),i.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"}))},fail:function(t){i.hideLoading(),i.showToast({title:"请求超时",duration:5e3,icon:"none"})}})},getMusicInfo:function(){var t=this;i.showLoading({title:"加载中"}),i.request({url:t.MusicApi.server+t.MusicApi.type.songDetail,data:{ids:t.musicDetail.id},success:function(a){if(200==a.data.code){for(var e in t.musicDetail.name=a.data.songs[0].name,t.musicDetail.picUrl=a.data.songs[0].al.picUrl,a.data.songs[0].ar)t.musicDetail.author=t.musicDetail.author+a.data.songs[0].ar[e].name+"/";t.musicDetail.author=t.musicDetail.author.substr(0,t.musicDetail.author.length-1),t.musicSwith++,i.hideLoading()}else i.hideLoading(),console.error("数据获取失败"),i.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"})},fail:function(t){i.hideLoading(),i.showToast({title:"请求超时",duration:5e3,icon:"none"})}})},playMusic:function(){this.musicStart("true"),this.bgAudioMannager.stop(),this.bgAudioMannager.title=this.musicDetail.name,this.bgAudioMannager.singer=this.musicDetail.author,this.bgAudioMannager.coverImgUrl=this.musicDetail.picUrl,this.bgAudioMannager.src=this.musicDetail.url,this.bgAudioMannager.play()},toPausePlay:function(){this.isPlay?(this.bgAudioMannager.pause(),this.isPlay=!1):(this.bgAudioMannager.play(),this.isPlay=!0)},toAgain:function(){this.isStop=!1,this.isPlay=!0,this.playMusic()},sliderChange:function(i){var t=i.detail.value;this.bgAudioMannager.seek(60*t)}}),watch:{musicSwith:function(i,t){i==this.musicSwithNum&&this.playMusic()}}};t.default=u}).call(this,a("6e42")["default"])},f774:function(i,t,a){"use strict";var e=a("75d9"),s=a.n(e);s.a}},[["c6c3","common/runtime","common/vendor"]]]);
});
require('pages/play/play.js');
__wxRoute = 'pages/ranking/ranking';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/ranking/ranking.js';

define('pages/ranking/ranking.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ranking/ranking"],{"002a":function(i,t,n){},"3d2a":function(i,t,n){"use strict";var e=function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("view",{staticClass:"page-panel"},[n("nowPlay",{attrs:{mpcomid:"125c1328-0"}}),n("view",{staticClass:"ranking-panel ease-row"},i._l(i.rankingList,function(t,e){return n("div",{key:t.index,staticClass:"item ease-col-3-1",attrs:{eventid:"125c1328-0-"+e},on:{tap:function(t){i.toRankingList(e)}}},[n("image",{staticClass:"ranking-pic",attrs:{src:t.picUrl,mode:"widthFix"}}),n("view",{staticClass:"ranking-name"},[i._v(i._s(t.name))])])}))],1)},c=[];n.d(t,"a",function(){return e}),n.d(t,"b",function(){return c})},"542e":function(i,t,n){"use strict";(function(i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=c(n("3598"));function c(i){return i&&i.__esModule?i:{default:i}}var p={data:function(){return{rankingList:[{name:"云音乐新歌榜",id:"0",picUrl:"http://p1.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg",description:"云音乐新歌榜：云音乐用户一周内收听所有新歌（一月内最新发行） 官方TOP排行榜，每天更新。"},{name:"云音乐热歌榜",id:"1",picUrl:"http://p1.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg",description:"云音乐热歌榜：云音乐用户一周内收听所有线上歌曲 官方TOP排行榜，每周四更新。"},{name:"网易原创歌曲榜",id:"2",picUrl:"http://p1.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg",description:"云音乐独立原创音乐人作品官方榜单，以推荐优秀原创作品为目的。每周四网易云音乐首发。申请网易音乐人：http://music.163.com/nmusician/"},{name:"云音乐飙升榜",id:"3",picUrl:"http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg",description:"云音乐中每天热度上升最快的100首单曲，每日更新。"},{name:"云音乐电音榜",id:"4",picUrl:"http://p1.music.126.net/5tgOCD4jiPKBGt7znJl-2g==/18822539557941307.jpg",description:"云音乐用户一周内收听电子音乐官方TOP排行榜，每周五更新"},{name:"UK排行榜周榜",id:"5",picUrl:"http://p1.music.126.net/VQOMRRix9_omZbg4t-pVpw==/18930291695438269.jpg",description:"UK排行榜"},{name:"美国Billboard周榜",id:"6",picUrl:"http://p1.music.126.net/EBRqPmY8k8qyVHyF8AyjdQ==/18641120139148117.jpg",description:"美国Billboard排行榜"},{name:"iTunes榜",id:"8",picUrl:"http://p2.music.126.net/WTpbsVfxeB6qDs_3_rnQtg==/109951163601178881.jpg",description:"iTunes榜Top100"},{name:"Hit FM Top榜",id:"9",picUrl:"http://p2.music.126.net/54vZEZ-fCudWZm6GH7I55w==/19187577416338508.jpg",description:"Hit FM Top 20 Countdown 第36期"},{name:"日本Oricon周榜",id:"10",picUrl:"http://p2.music.126.net/Rgqbqsf4b3gNOzZKxOMxuw==/19029247741938160.jpg",description:"ORICONSTYLE CD单曲周榜，每周三更新，欢迎关注。"},{name:"香港电台中文歌曲龙虎榜",id:"16",picUrl:"http://p2.music.126.net/YQsr07nkdkOyZrlAkf0SHA==/18976471183805915.jpg",description:"香港电台中文歌曲龙虎榜，每周五更新"},{name:"台湾Hito排行榜",id:"20",picUrl:"http://p2.music.126.net/wqi4TF4ILiTUUL5T7zhwsQ==/18646617697286899.jpg",description:"資料來源統計： ※唱片行銷售量佔20%(含玫瑰大眾、g-music、五大、佳佳、博客來等各大唱片行) ※數位音樂下載佔30%(含 iTunes、KK box、myMusic、Omusic、各鈴聲下載榜) ※Hit Fm聯播網AIR PLAY電台播出率佔50%"},{name:"Beatport全球电子舞曲榜",id:"21",picUrl:"http://p2.music.126.net/A61n94BjWAb-ql4xpwpYcg==/18613632348448741.jpg",description:"Beatport全球电子舞曲排行榜TOP100（本榜每周四更新）"},{name:"云音乐ACG音乐榜",id:"22",picUrl:"http://p1.music.126.net/vttjtRjL75Q4DEnjRsO8-A==/18752170813539664.jpg",description:"云音乐用户一周内收听所有ACG音乐官方TOP排行榜，每周四更新。"},{name:"中国TOP排行榜(港台榜)",id:"14",picUrl:"http://p1.music.126.net/d8faOLHxwWPta02fskrdDQ==/2057186255569164.jpg",description:"中国TOP排行榜是由MusicRadio音乐之声依据时下最热门的流行单曲形成的权威音乐榜单。"},{name:"中国TOP排行榜(内地榜)",id:"15",picUrl:"../../static/images/mr.png",description:"中国TOP排行榜是由MusicRadio音乐之声依据时下最热门的流行单曲形成的权威音乐榜单。"},{name:"云音乐嘻哈榜",id:"23",picUrl:"http://p1.music.126.net/QWMV-Ru_6149AKe0mCBXKg==/1420569024374784.jpg",description:"云音乐嘻哈榜"},{name:"韩国Melon排行榜周榜",id:"11",picUrl:"http://p1.music.126.net/kSDPQ1aRPPf1GXHwICGLvg==/1367792472071827.jpg",description:"MelOn已成为韩国最大的音源网站，许多音乐打榜节目，均以MelOn的音源排行作为参考，或者MelOn占较大比重。MelOn包涵了几乎所有在韩国发行的歌曲，包括数码单曲，专辑歌曲，迷你专辑歌曲，OST等。"}]}},components:{nowPlay:e.default},methods:{toRankingList:function(t){var n=this.rankingList[t];i.navigateTo({url:"../rankingList/rankingList?id="+n.id})}}};t.default=p}).call(this,n("6e42")["default"])},"5e5e":function(i,t,n){"use strict";n("c7c6");var e=p(n("b0ce")),c=p(n("fe61"));function p(i){return i&&i.__esModule?i:{default:i}}Page((0,e.default)(c.default))},"984a":function(i,t,n){"use strict";var e=n("002a"),c=n.n(e);c.a},c22d:function(i,t,n){"use strict";n.r(t);var e=n("542e"),c=n.n(e);for(var p in e)"default"!==p&&function(i){n.d(t,i,function(){return e[i]})}(p);t["default"]=c.a},fe61:function(i,t,n){"use strict";n.r(t);var e=n("3d2a"),c=n("c22d");for(var p in c)"default"!==p&&function(i){n.d(t,i,function(){return c[i]})}(p);n("984a");var a=n("2877"),r=Object(a["a"])(c["default"],e["a"],e["b"],!1,null,"c19838d2",null);t["default"]=r.exports}},[["5e5e","common/runtime","common/vendor"]]]);
});
require('pages/ranking/ranking.js');
__wxRoute = 'pages/mv/mv';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mv/mv.js';

define('pages/mv/mv.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mv/mv"],{"10eb":function(t,e,a){"use strict";a.r(e);var i=a("479c"),n=a("991c");for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);a("ac77");var o=a("2877"),u=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports},"3fda":function(t,e,a){},"43ee":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(a("3598")),n=s(a("7de7"));function s(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{tabNum:1,mvFirstList:"",topMvList:"",personalizedMvList:""}},onLoad:function(){this.getDataList()},onPullDownRefresh:function(){this.getDataList(),t.stopPullDownRefresh()},components:{nowPlay:i.default,mvListT:n.default},methods:{getDataList:function(){this.getMvFirstList(),this.getTopMvList(),this.getPersonalizedMvList()},getMvFirstList:function(){var e=this;t.showLoading({title:"加载中"}),t.request({url:e.MusicApi.server+e.MusicApi.type.mvFirst,success:function(a){t.hideLoading(),200==a.data.code?e.mvFirstList=a.data.data:t.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"})},fail:function(e){t.hideLoading(),t.showToast({title:"请求超时",duration:5e3,icon:"none"})}})},getTopMvList:function(){var e=this;t.showLoading({title:"加载中"}),t.request({url:e.MusicApi.server+e.MusicApi.type.topMv,success:function(a){t.hideLoading(),200==a.data.code?e.topMvList=a.data.data:t.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"})},fail:function(e){t.hideLoading(),t.showToast({title:"请求超时",duration:5e3,icon:"none"})}})},getPersonalizedMvList:function(){var e=this;t.showLoading({title:"加载中"}),t.request({url:e.MusicApi.server+e.MusicApi.type.personalizedMv,success:function(a){t.hideLoading(),200==a.data.code?e.personalizedMvList=a.data.result:t.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"})},fail:function(e){t.hideLoading(),t.showToast({title:"请求超时",duration:5e3,icon:"none"})}})}}};e.default=o}).call(this,a("6e42")["default"])},"479c":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"page-panel"},[a("nowPlay",{attrs:{mpcomid:"7f53695a-0"}}),a("view",{staticClass:"left-tab"},[a("view",{staticClass:"tab-title"},[a("text",{staticClass:"item",class:1==t.tabNum?"active":"",attrs:{eventid:"7f53695a-0"},on:{tap:function(e){t.tabNum=1}}},[t._v("最新MV")]),a("text",{staticClass:"item",class:2==t.tabNum?"active":"",attrs:{eventid:"7f53695a-1"},on:{tap:function(e){t.tabNum=2}}},[t._v("MV排行")]),a("text",{staticClass:"item",class:3==t.tabNum?"active":"",attrs:{eventid:"7f53695a-2"},on:{tap:function(e){t.tabNum=3}}},[t._v("推荐MV")])]),a("view",{staticClass:"tab-content"},[1==t.tabNum?a("view",{staticClass:"item"},[a("mvListT",{attrs:{data:t.mvFirstList,mpcomid:"7f53695a-1"}})],1):t._e(),2==t.tabNum?a("view",{staticClass:"item"},[a("mvListT",{attrs:{data:t.topMvList,mpcomid:"7f53695a-2"}})],1):t._e(),3==t.tabNum?a("view",{staticClass:"item"},[a("mvListT",{attrs:{data:t.personalizedMvList,mpcomid:"7f53695a-3"}})],1):t._e()])])],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},5105:function(t,e,a){},"52d5":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"ease-row mvListT"},t._l(t.data,function(e,i){return a("view",{key:e.id,staticClass:"ease-col-2-1 item",attrs:{eventid:"8538ee04-0-"+i},on:{tap:function(a){t.openMvDetail(e.id)}}},[a("image",{attrs:{src:e.cover?e.cover:e.picUrl,mode:""}}),a("text",{staticClass:"name"},[t._v(t._s(e.name))]),t._m(0,!0)])}))},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"playBtn"},[a("view",{staticClass:"icon"})])}];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},"740a":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}},props:["data"],methods:{openMvDetail:function(e){e=e;t.navigateTo({url:"../mvDetail/mvDetail?mvid="+e})}}};e.default=a}).call(this,a("6e42")["default"])},"7de7":function(t,e,a){"use strict";a.r(e);var i=a("52d5"),n=a("ae6c");for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);a("b53d");var o=a("2877"),u=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports},"905f":function(t,e,a){"use strict";a("c7c6");var i=s(a("b0ce")),n=s(a("10eb"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(n.default))},"991c":function(t,e,a){"use strict";a.r(e);var i=a("43ee"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);e["default"]=n.a},ac77:function(t,e,a){"use strict";var i=a("3fda"),n=a.n(i);n.a},ae6c:function(t,e,a){"use strict";a.r(e);var i=a("740a"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);e["default"]=n.a},b53d:function(t,e,a){"use strict";var i=a("5105"),n=a.n(i);n.a}},[["905f","common/runtime","common/vendor"]]]);
});
require('pages/mv/mv.js');
__wxRoute = 'pages/rankingList/rankingList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/rankingList/rankingList.js';

define('pages/rankingList/rankingList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/rankingList/rankingList"],{2142:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return""==!t.playlist?i("view",{staticClass:"page-panel"},[i("nowPlay",{attrs:{mpcomid:"0660b324-0"}}),i("view",{staticClass:"playlistDetail ease-row"},[i("view",{staticClass:"ease-col-3-1 coverImgUrls"},[i("image",{attrs:{src:t.playlist.coverImgUrl,mode:"widthFix"}})]),i("view",{staticClass:"ease-col-3-2 playlistInfo"},[i("view",{staticClass:"name"},[t._v(t._s(t.playlist.name))]),i("view",{staticClass:"description"},[t._v(t._s(t.playlist.description))])])]),i("view",{staticClass:"privileges"},t._l(t.playlist.tracks,function(e,a){return i("view",{key:e.index,staticClass:"item",attrs:{eventid:"0660b324-0-"+a},on:{tap:function(i){t.toPlay(e.id)}}},[i("view",{staticClass:"index"},[t._v(t._s(a+1))]),i("view",{staticClass:"info"},[i("view",{staticClass:"name"},[t._v(t._s(e.name))]),t._l(e.ar,function(e,a){return i("text",{key:e.i,staticClass:"arName"},[t._v(t._s(e.name))])})],2),t._m(0,!0)])}))],1):t._e()},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"btn"},[i("text"),i("text"),i("text")])}];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"223b":function(t,e,i){"use strict";i.r(e);var a=i("2142"),n=i("c5ec");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("537c");var l=i("2877"),o=Object(l["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports},"537c":function(t,e,i){"use strict";var a=i("8930"),n=i.n(a);n.a},8930:function(t,e,i){},c5ec:function(t,e,i){"use strict";i.r(e);var a=i("f15b"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},df81:function(t,e,i){"use strict";i("c7c6");var a=s(i("b0ce")),n=s(i("223b"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(n.default))},f15b:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("3598"));function n(t){return t&&t.__esModule?t:{default:t}}var s={data:function(){return{id:"",playlist:"",playlistDetailSwith:!1}},components:{nowPlay:a.default},onLoad:function(t){this.id=t.id,this.getTopList()},methods:{getTopList:function(){var e=this;t.showLoading({title:"加载中"}),t.request({url:e.MusicApi.server+e.MusicApi.type.topList,data:{idx:e.id},success:function(i){200==i.data.code?(e.playlist=i.data.playlist,t.hideLoading()):(t.hideLoading(),console.error("数据获取失败"),t.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"}))},fail:function(e){t.hideLoading(),t.showToast({title:"请求超时",duration:5e3,icon:"none"})}})},toPlay:function(e){e=e;t.navigateTo({url:"../play/play?id="+e})}}};e.default=s}).call(this,i("6e42")["default"])}},[["df81","common/runtime","common/vendor"]]]);
});
require('pages/rankingList/rankingList.js');
__wxRoute = 'pages/singerInfo/singerInfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/singerInfo/singerInfo.js';

define('pages/singerInfo/singerInfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/singerInfo/singerInfo"],{"2c21":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"page-panel singerInfo"},[n("nowPlay",{attrs:{mpcomid:"a21b228c-0"}}),n("view",{staticClass:"panel"},[n("image",{attrs:{src:t.singerInfo.picUrl,mode:""}}),n("view",{staticClass:"name"},[t._v(t._s(t.singerInfo.name))])]),n("view",{staticClass:"tab"},[n("view",{staticClass:"tab-title"},[n("view",{staticClass:"item",class:1==t.tabNum?"active":"",attrs:{eventid:"a21b228c-0"},on:{tap:function(e){t.tabNum=1}}},[t._v("描述")]),n("view",{staticClass:"item",class:2==t.tabNum?"active":"",attrs:{eventid:"a21b228c-1"},on:{tap:function(e){t.tabNum=2}}},[t._v("单曲")]),n("view",{staticClass:"item",class:4==t.tabNum?"active":"",attrs:{eventid:"a21b228c-2"},on:{tap:function(e){t.tabNum=4}}},[t._v("MV")])]),n("view",{staticClass:"tab-content"},[1==t.tabNum?n("view",{staticClass:"item"},[n("view",{staticClass:"SingerDesc"},[t._v(t._s(t.SingerDesc.briefDesc))])]):t._e(),2==t.tabNum?n("view",{staticClass:"item"},[n("songList",{attrs:{singerHotSongs:t.singerHotSongs,mpcomid:"a21b228c-1"}})],1):t._e(),4==t.tabNum?n("view",{staticClass:"item"},[n("mvList",{attrs:{singerMvs:t.singerMvs,mpcomid:"a21b228c-2"}})],1):t._e()])])],1)},s=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s})},3589:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"simiMvList"},t._l(t.singerMvs,function(e,i){return n("view",{key:e.id,staticClass:"item",attrs:{eventid:"35d88bd4-0-"+i},on:{tap:function(n){t.openMvDetail(e.id)}}},[n("view",{staticClass:"pic"},[n("image",{attrs:{src:e.imgurl16v9,mode:"aspectFill"}})]),n("view",{staticClass:"info"},[n("view",{staticClass:"name"},[t._v(t._s(e.name))]),n("view",{staticClass:"artistName"},[t._v(t._s(e.artistName))])]),t._m(0,!0)])}))},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"btn"},[n("text"),n("text"),n("text")])}];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s})},"4d0e":function(t,e,n){"use strict";n.r(e);var i=n("2c21"),s=n("cdc2");for(var a in s)"default"!==a&&function(t){n.d(e,t,function(){return s[t]})}(a);n("e156");var o=n("2877"),r=Object(o["a"])(s["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},"4e66":function(t,e,n){"use strict";n.r(e);var i=n("3589"),s=n("6597");for(var a in s)"default"!==a&&function(t){n.d(e,t,function(){return s[t]})}(a);var o=n("2877"),r=Object(o["a"])(s["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},"55b4":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("4f17")),s=o(n("3598")),a=o(n("4e66"));function o(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{singerInfo:"",tabNum:1,SingerDesc:"",singerHotSongs:"",singerMvs:""}},components:{songList:i.default,nowPlay:s.default,mvList:a.default},onLoad:function(t){var e=JSON.parse(t.data);this.singerInfo=e,this.singerInfo.picUrl=decodeURIComponent(this.singerInfo.picUrl),this.getSingerDesc(),this.getSingerSong(),this.getSingerMv()},methods:{getSingerDesc:function(){var e=this;t.showLoading({title:"加载中"}),t.request({url:e.MusicApi.server+e.MusicApi.type.artistDesc,data:{id:e.singerInfo.id},success:function(n){t.hideLoading(),200==n.data.code?e.SingerDesc=n.data:(console.error("数据获取失败"),t.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"}))},fail:function(e){t.hideLoading(),t.showToast({title:"请求超时",duration:5e3,icon:"none"})}})},getSingerSong:function(){var e=this;t.showLoading({title:"加载中"}),t.request({url:e.MusicApi.server+e.MusicApi.type.artistSong,data:{id:e.singerInfo.id},success:function(n){t.hideLoading(),200==n.data.code?e.singerHotSongs=n.data.hotSongs:(console.error("数据获取失败"),t.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"}))},fail:function(e){t.hideLoading(),t.showToast({title:"请求超时",duration:5e3,icon:"none"})}})},getSingerMv:function(){var e=this;t.showLoading({title:"加载中"}),t.request({url:e.MusicApi.server+e.MusicApi.type.artistMv,data:{id:e.singerInfo.id},success:function(n){t.hideLoading(),200==n.data.code?e.singerMvs=n.data.mvs:(console.error("数据获取失败"),t.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"}))},fail:function(e){t.hideLoading(),t.showToast({title:"请求超时",duration:5e3,icon:"none"})}})}}};e.default=r}).call(this,n("6e42")["default"])},6597:function(t,e,n){"use strict";n.r(e);var i=n("c087"),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=s.a},9658:function(t,e,n){"use strict";n("c7c6");var i=a(n("b0ce")),s=a(n("4d0e"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(s.default))},ace9:function(t,e,n){},c087:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{}},props:["singerMvs"],methods:{openMvDetail:function(e){e=e;t.navigateTo({url:"../mvDetail/mvDetail?mvid="+e})}}};e.default=n}).call(this,n("6e42")["default"])},cdc2:function(t,e,n){"use strict";n.r(e);var i=n("55b4"),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=s.a},e156:function(t,e,n){"use strict";var i=n("ace9"),s=n.n(i);s.a}},[["9658","common/runtime","common/vendor"]]]);
});
require('pages/singerInfo/singerInfo.js');


