(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{232:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0);var react_default=__webpack_require__.n(react);var lib=__webpack_require__(23);var lib_default=__webpack_require__.n(lib);var root=__webpack_require__(142);var compose=__webpack_require__(37);var Helmet=__webpack_require__(141);var concat=__webpack_require__(11);var concat_default=__webpack_require__.n(concat);var classnames=__webpack_require__(501);var classnames_default=__webpack_require__.n(classnames);var es=__webpack_require__(143);var styles=function styles(theme){return{wrapper:{display:"flex",justifyContent:"space-between",alignItems:"center"},title:{fontSize:"2rem"},date:{fontSize:"0.75rem"}}};var UserInfo_styles=styles;var UserInfo_parseDate=function parseDate(date){var _context,_context2;return concat_default()(_context=concat_default()(_context2="".concat(date.getDate(),".")).call(_context2,date.getMonth(),".")).call(_context,date.getFullYear())};var UserInfo_UserInfo=function UserInfo(_ref){var classes=_ref.classes,className=_ref.className,user=_ref.user;return react_default.a.createElement("article",{className:classnames_default()(classes.wrapper,className)},react_default.a.createElement("h2",{className:classes.title},user.username),react_default.a.createElement("p",{className:classes.date},UserInfo_parseDate(user.regDate)))};var mapStateToProps=function mapStateToProps(state){return{user:state.user}};var components_UserInfo=Object(compose["a"])(Object(es["b"])(mapStateToProps),lib_default()(UserInfo_styles))(UserInfo_UserInfo);var es_function_name=__webpack_require__(231);var map=__webpack_require__(104);var map_default=__webpack_require__.n(map);var styles_styles=function styles(theme){return{wrapper:{},title:{margin:0,marginBottom:10,fontSize:"2rem"},table:{width:"100%",border:"1px solid black"},tBody:{},tr:{height:40},td:{paddingLeft:10,backgroundColor:"white",border:"1px solid black"}}};var MoneyInfo_styles=styles_styles;var data=[{name:"BTC",value:1342e-7},{name:"USD",value:150.53},{name:"EUR",value:0}];var MoneyInfo_MoneyInfo=function MoneyInfo(_ref){var classes=_ref.classes,className=_ref.className;var parseData=function parseData(){return map_default()(data).call(data,(function(item,index){return react_default.a.createElement("tr",{key:index,className:classes.tr},react_default.a.createElement("td",{className:classes.td},item.name),react_default.a.createElement("td",{className:classes.td},item.value))}))};return react_default.a.createElement("div",{className:classnames_default()(classes.wrapper,className)},react_default.a.createElement("h2",{className:classes.title},"Wallet"),react_default.a.createElement("table",{className:classes.table},react_default.a.createElement("tbody",{className:classes.tBody},parseData())))};var components_MoneyInfo=Object(compose["a"])(lib_default()(MoneyInfo_styles))(MoneyInfo_MoneyInfo);var define_property=__webpack_require__(41);var define_property_default=__webpack_require__.n(define_property);var define_properties=__webpack_require__(42);var define_properties_default=__webpack_require__.n(define_properties);var get_own_property_descriptors=__webpack_require__(17);var get_own_property_descriptors_default=__webpack_require__.n(get_own_property_descriptors);var for_each=__webpack_require__(10);var for_each_default=__webpack_require__.n(for_each);var get_own_property_descriptor=__webpack_require__(18);var get_own_property_descriptor_default=__webpack_require__.n(get_own_property_descriptor);var filter=__webpack_require__(43);var filter_default=__webpack_require__.n(filter);var get_own_property_symbols=__webpack_require__(19);var get_own_property_symbols_default=__webpack_require__.n(get_own_property_symbols);var object_keys=__webpack_require__(27);var keys_default=__webpack_require__.n(object_keys);var defineProperty=__webpack_require__(16);var defineProperty_default=__webpack_require__.n(defineProperty);var slicedToArray=__webpack_require__(553);var slicedToArray_default=__webpack_require__.n(slicedToArray);var Exchange_styles_styles=function styles(theme){return{form:{alignItems:"flex-start",padding:0,backgroundColor:theme.colors.account.exchange.form.background,borderRadius:0,boxShadow:"none"},header:{margin:0,marginBottom:5,fontSize:"2rem"},info:{margin:0,marginBottom:35},input:{marginBottom:30},button:{width:"70%",height:60,fontSize:"1.5rem",textTransform:"uppercase",color:theme.colors.account.exchange.button.color,backgroundColor:theme.colors.account.exchange.button.background,borderRadius:4}}};var Exchange_styles=Exchange_styles_styles;var Form=__webpack_require__(578);var SubmitButton=__webpack_require__(580);var helpers_extends=__webpack_require__(539);var extends_default=__webpack_require__.n(helpers_extends);var objectWithoutProperties=__webpack_require__(540);var objectWithoutProperties_default=__webpack_require__.n(objectWithoutProperties);var Input=__webpack_require__(579);var Select_styles_styles=function styles(theme){return{select:{},option:{}}};var Select_styles=Select_styles_styles;var basicCurrency=["btc","usd","rub"];var Select_Select=function Select(_ref){var classes=_ref.classes,className=_ref.className;return react_default.a.createElement("select",{size:1,className:classnames_default()(classes.select,className)},map_default()(basicCurrency).call(basicCurrency,(function(item,index){return react_default.a.createElement("option",{key:index,className:classes.option},item)})))};var components_Select=Object(compose["a"])(lib_default()(Select_styles))(Select_Select);var CurrencyInput_styles_styles=function styles(theme){return{container:{display:"grid",gridTemplateAreas:'\n      "text text"\n      "input select"\n    ',gridTemplateColumns:"70% 30%",width:"100%"},text:{margin:0,marginBottom:10,textTransform:"uppercase"},input:{gridArea:"input",height:60,paddingLeft:35,fontSize:"1.5rem",border:"1px solid ".concat(theme.colors.account.exchange.input.border),borderRadius:"4px 0 0 4px"},select:{gridArea:"select",height:60,borderRadius:"0 4px 4px 0"}}};var CurrencyInput_styles=CurrencyInput_styles_styles;var CurrencyInput_CurrencyInput=function CurrencyInput(_ref){var classes=_ref.classes,className=_ref.className,text=_ref.text,props=objectWithoutProperties_default()(_ref,["classes","className","text"]);return react_default.a.createElement("div",{className:classnames_default()(classes.container,className)},react_default.a.createElement("p",{className:classes.text},text),react_default.a.createElement(Input["a"],extends_default()({className:classes.input},props)),react_default.a.createElement(components_Select,{className:classes.select}))};var components_CurrencyInput=Object(compose["a"])(lib_default()(CurrencyInput_styles))(CurrencyInput_CurrencyInput);function ownKeys(object,enumerableOnly){var keys=keys_default()(object);if(get_own_property_symbols_default.a){var symbols=get_own_property_symbols_default()(object);if(enumerableOnly)symbols=filter_default()(symbols).call(symbols,(function(sym){return get_own_property_descriptor_default()(object,sym).enumerable}));keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){var _context;for_each_default()(_context=ownKeys(source,true)).call(_context,(function(key){defineProperty_default()(target,key,source[key])}))}else if(get_own_property_descriptors_default.a){define_properties_default()(target,get_own_property_descriptors_default()(source))}else{var _context2;for_each_default()(_context2=ownKeys(source)).call(_context2,(function(key){define_property_default()(target,key,get_own_property_descriptor_default()(source,key))}))}}return target}var Exchange_Exchange=function Exchange(_ref){var classes=_ref.classes;var _useState=Object(react["useState"])({value1:"",value2:""}),_useState2=slicedToArray_default()(_useState,2),exchange=_useState2[0],setExchange=_useState2[1];var onButtonClick=function onButtonClick(){};return react_default.a.createElement(Form["a"],{className:classes.form},react_default.a.createElement("h2",{className:classes.header},"Exchange"),react_default.a.createElement("p",{className:classes.info},"Select currency pair to exchange"),react_default.a.createElement(components_CurrencyInput,{className:classes.input,text:"I give",placeholder:"0",value:exchange.value1,onChange:function onChange(e){return setExchange(_objectSpread({},exchange,{value1:e.target.value}))}}),react_default.a.createElement(components_CurrencyInput,{className:classes.input,text:"I receive",placeholder:"0",value:exchange.value2,onChange:function onChange(e){return setExchange(_objectSpread({},exchange,{value2:e.target.value}))}}),react_default.a.createElement(SubmitButton["a"],{className:classes.button,onSubmitButtonClick:onButtonClick},"Exchange"))};var components_Exchange=Object(compose["a"])(lib_default()(Exchange_styles))(Exchange_Exchange);var Account_styles_styles=function styles(theme){return{wrapper:{display:"grid",gridTemplateRows:"40px 1fr",gridTemplateColumns:"3fr 2fr",gridTemplateAreas:"\n      'user user'\n      'exchange money'\n    ",gridGap:"40px",width:"100%",padding:"40px 0"},userInfo:{gridArea:"user"}}};var Account_styles=Account_styles_styles;var Account_Account=function Account(_ref){var classes=_ref.classes;return react_default.a.createElement(react["Fragment"],null,react_default.a.createElement(Helmet["a"],{title:"Wallet"}),react_default.a.createElement("section",{className:classes.wrapper},react_default.a.createElement(components_UserInfo,{className:classes.userInfo}),react_default.a.createElement(components_Exchange,null),react_default.a.createElement(components_MoneyInfo,null)))};var pages_Account=__webpack_exports__["default"]=Object(compose["a"])(root["hot"],lib_default()(Account_styles))(Account_Account)},501:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){var classes=[];for(var i=0;i<arguments.length;i++){var arg=arguments[i];if(!arg)continue;var argType=typeof arg;if(argType==="string"||argType==="number"){classes.push(arg)}else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);if(inner){classes.push(inner)}}else if(argType==="object"){for(var key in arg){if(hasOwn.call(arg,key)&&arg[key]){classes.push(key)}}}}return classes.join(" ")}if(true&&module.exports){classNames.default=classNames;module.exports=classNames}else if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))}else{}})()},519:function(module,exports,__webpack_require__){module.exports=__webpack_require__(572)},539:function(module,exports,__webpack_require__){var _Object$assign=__webpack_require__(567);function _extends(){module.exports=_extends=_Object$assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}module.exports=_extends},540:function(module,exports,__webpack_require__){var _indexOfInstanceProperty=__webpack_require__(519);var _Object$getOwnPropertySymbols=__webpack_require__(573);var objectWithoutPropertiesLoose=__webpack_require__(575);function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=objectWithoutPropertiesLoose(source,excluded);var key,i;if(_Object$getOwnPropertySymbols){var sourceSymbolKeys=_Object$getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(_indexOfInstanceProperty(excluded).call(excluded,key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}module.exports=_objectWithoutProperties},553:function(module,exports,__webpack_require__){var arrayWithHoles=__webpack_require__(554);var iterableToArrayLimit=__webpack_require__(559);var nonIterableRest=__webpack_require__(566);function _slicedToArray(arr,i){return arrayWithHoles(arr)||iterableToArrayLimit(arr,i)||nonIterableRest()}module.exports=_slicedToArray},554:function(module,exports,__webpack_require__){var _Array$isArray=__webpack_require__(555);function _arrayWithHoles(arr){if(_Array$isArray(arr))return arr}module.exports=_arrayWithHoles},555:function(module,exports,__webpack_require__){module.exports=__webpack_require__(556)},556:function(module,exports,__webpack_require__){module.exports=__webpack_require__(557)},557:function(module,exports,__webpack_require__){__webpack_require__(558);var path=__webpack_require__(4);module.exports=path.Array.isArray},558:function(module,exports,__webpack_require__){var $=__webpack_require__(2);var isArray=__webpack_require__(80);$({target:"Array",stat:true},{isArray:isArray})},559:function(module,exports,__webpack_require__){var _getIterator=__webpack_require__(560);var _isIterable=__webpack_require__(563);function _iterableToArrayLimit(arr,i){if(!(_isIterable(Object(arr))||Object.prototype.toString.call(arr)==="[object Arguments]")){return}var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=_getIterator(arr),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}module.exports=_iterableToArrayLimit},560:function(module,exports,__webpack_require__){module.exports=__webpack_require__(561)},561:function(module,exports,__webpack_require__){__webpack_require__(100);__webpack_require__(140);module.exports=__webpack_require__(562)},562:function(module,exports,__webpack_require__){var anObject=__webpack_require__(24);var getIteratorMethod=__webpack_require__(229);module.exports=function(it){var iteratorMethod=getIteratorMethod(it);if(typeof iteratorMethod!="function"){throw TypeError(String(it)+" is not iterable")}return anObject(iteratorMethod.call(it))}},563:function(module,exports,__webpack_require__){module.exports=__webpack_require__(564)},564:function(module,exports,__webpack_require__){__webpack_require__(100);__webpack_require__(140);module.exports=__webpack_require__(565)},565:function(module,exports,__webpack_require__){var classof=__webpack_require__(103);var wellKnownSymbol=__webpack_require__(5);var Iterators=__webpack_require__(54);var ITERATOR=wellKnownSymbol("iterator");module.exports=function(it){var O=Object(it);return O[ITERATOR]!==undefined||"@@iterator"in O||Iterators.hasOwnProperty(classof(O))}},566:function(module,exports){function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}module.exports=_nonIterableRest},567:function(module,exports,__webpack_require__){module.exports=__webpack_require__(568)},568:function(module,exports,__webpack_require__){module.exports=__webpack_require__(569)},569:function(module,exports,__webpack_require__){__webpack_require__(570);var path=__webpack_require__(4);module.exports=path.Object.assign},570:function(module,exports,__webpack_require__){var $=__webpack_require__(2);var assign=__webpack_require__(571);$({target:"Object",stat:true,forced:Object.assign!==assign},{assign:assign})},571:function(module,exports,__webpack_require__){"use strict";var DESCRIPTORS=__webpack_require__(14);var fails=__webpack_require__(9);var objectKeys=__webpack_require__(79);var getOwnPropertySymbolsModule=__webpack_require__(144);var propertyIsEnumerableModule=__webpack_require__(101);var toObject=__webpack_require__(48);var IndexedObject=__webpack_require__(102);var nativeAssign=Object.assign;module.exports=!nativeAssign||fails((function(){var A={};var B={};var symbol=Symbol();var alphabet="abcdefghijklmnopqrst";A[symbol]=7;alphabet.split("").forEach((function(chr){B[chr]=chr}));return nativeAssign({},A)[symbol]!=7||objectKeys(nativeAssign({},B)).join("")!=alphabet}))?function assign(target,source){var T=toObject(target);var argumentsLength=arguments.length;var index=1;var getOwnPropertySymbols=getOwnPropertySymbolsModule.f;var propertyIsEnumerable=propertyIsEnumerableModule.f;while(argumentsLength>index){var S=IndexedObject(arguments[index++]);var keys=getOwnPropertySymbols?objectKeys(S).concat(getOwnPropertySymbols(S)):objectKeys(S);var length=keys.length;var j=0;var key;while(length>j){key=keys[j++];if(!DESCRIPTORS||propertyIsEnumerable.call(S,key))T[key]=S[key]}}return T}:nativeAssign},572:function(module,exports,__webpack_require__){module.exports=__webpack_require__(230)},573:function(module,exports,__webpack_require__){module.exports=__webpack_require__(574)},574:function(module,exports,__webpack_require__){module.exports=__webpack_require__(227)},575:function(module,exports,__webpack_require__){var _indexOfInstanceProperty=__webpack_require__(519);var _Object$keys=__webpack_require__(576);function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=_Object$keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(_indexOfInstanceProperty(excluded).call(excluded,key)>=0)continue;target[key]=source[key]}return target}module.exports=_objectWithoutPropertiesLoose},576:function(module,exports,__webpack_require__){module.exports=__webpack_require__(577)},577:function(module,exports,__webpack_require__){module.exports=__webpack_require__(228)},578:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0);var react_default=__webpack_require__.n(react);var classnames=__webpack_require__(501);var classnames_default=__webpack_require__.n(classnames);var lib=__webpack_require__(23);var lib_default=__webpack_require__.n(lib);var compose=__webpack_require__(37);var styles=function styles(theme){return{form:{display:"flex",flexFlow:"column nowrap",alignItems:"center",minWidth:320,padding:"25px 20px 15px",backgroundColor:theme.colors.components.form.bg,borderRadius:5,boxShadow:"10px 10px 15px #212121"}}};var Form_styles=styles;var Form_Form=function Form(_ref){var classes=_ref.classes,className=_ref.className,children=_ref.children;return react_default.a.createElement("form",{className:classnames_default()(classes.form,className),method:"POST"},children)};var components_Form=__webpack_exports__["a"]=Object(compose["a"])(lib_default()(Form_styles))(Form_Form)},579:function(module,__webpack_exports__,__webpack_require__){"use strict";var helpers_extends=__webpack_require__(539);var extends_default=__webpack_require__.n(helpers_extends);var objectWithoutProperties=__webpack_require__(540);var objectWithoutProperties_default=__webpack_require__.n(objectWithoutProperties);var react=__webpack_require__(0);var react_default=__webpack_require__.n(react);var classnames=__webpack_require__(501);var classnames_default=__webpack_require__.n(classnames);var lib=__webpack_require__(23);var lib_default=__webpack_require__.n(lib);var compose=__webpack_require__(37);var styles=function styles(theme){return{input:{width:"100%",height:40,padding:20,font:"inherit",backgroundColor:theme.colors.components.input.bg,border:"none",borderRadius:5}}};var Input_styles=styles;var Input_Input=function Input(_ref){var classes=_ref.classes,className=_ref.className,props=objectWithoutProperties_default()(_ref,["classes","className"]);return react_default.a.createElement("input",extends_default()({className:classnames_default()(classes.input,className),required:true},props))};var components_Input=__webpack_exports__["a"]=Object(compose["a"])(lib_default()(Input_styles))(Input_Input)},580:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0);var react_default=__webpack_require__.n(react);var classnames=__webpack_require__(501);var classnames_default=__webpack_require__.n(classnames);var lib=__webpack_require__(23);var lib_default=__webpack_require__.n(lib);var compose=__webpack_require__(37);var styles=function styles(theme){return{button:{width:100,height:30,font:"inherit",color:theme.colors.components.submitButton.color,backgroundColor:theme.colors.components.submitButton.background,border:"1px solid white",borderRadius:5,cursor:"pointer",transition:"color 0.4s, text-decoration 0.4s","&:hover":{color:theme.colors.components.submitButton.hover,textDecoration:"underline"}}}};var SubmitButton_styles=styles;var SubmitButton_SubmitButton=function SubmitButton(_ref){var classes=_ref.classes,className=_ref.className,children=_ref.children,onSubmitButtonClick=_ref.onSubmitButtonClick;return react_default.a.createElement("button",{className:classnames_default()(classes.button,className),type:"button","aria-label":"button for sending form",onClick:onSubmitButtonClick},children)};var components_SubmitButton=__webpack_exports__["a"]=Object(compose["a"])(lib_default()(SubmitButton_styles))(SubmitButton_SubmitButton)}}]);