(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{218:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0);var react_default=__webpack_require__.n(react);var lib=__webpack_require__(15);var lib_default=__webpack_require__.n(lib);var root=__webpack_require__(128);var compose=__webpack_require__(27);var Helmet=__webpack_require__(127);var define_property=__webpack_require__(129);var define_property_default=__webpack_require__.n(define_property);var define_properties=__webpack_require__(130);var define_properties_default=__webpack_require__.n(define_properties);var get_own_property_descriptors=__webpack_require__(90);var get_own_property_descriptors_default=__webpack_require__.n(get_own_property_descriptors);var for_each=__webpack_require__(63);var for_each_default=__webpack_require__.n(for_each);var get_own_property_descriptor=__webpack_require__(92);var get_own_property_descriptor_default=__webpack_require__.n(get_own_property_descriptor);var filter=__webpack_require__(131);var filter_default=__webpack_require__.n(filter);var get_own_property_symbols=__webpack_require__(93);var get_own_property_symbols_default=__webpack_require__.n(get_own_property_symbols);var object_keys=__webpack_require__(132);var keys_default=__webpack_require__.n(object_keys);var defineProperty=__webpack_require__(49);var defineProperty_default=__webpack_require__.n(defineProperty);var slicedToArray=__webpack_require__(454);var slicedToArray_default=__webpack_require__.n(slicedToArray);var es=__webpack_require__(134);var actions=__webpack_require__(68);var Form=__webpack_require__(468);var Input=__webpack_require__(469);var SubmitButton=__webpack_require__(470);var styles=function styles(theme){return{form:{margin:"auto"},input:{marginBottom:15},button:{}}};var RegForm_styles=styles;function ownKeys(object,enumerableOnly){var keys=keys_default()(object);if(get_own_property_symbols_default.a){var symbols=get_own_property_symbols_default()(object);if(enumerableOnly)symbols=filter_default()(symbols).call(symbols,(function(sym){return get_own_property_descriptor_default()(object,sym).enumerable}));keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){var _context;for_each_default()(_context=ownKeys(source,true)).call(_context,(function(key){defineProperty_default()(target,key,source[key])}))}else if(get_own_property_descriptors_default.a){define_properties_default()(target,get_own_property_descriptors_default()(source))}else{var _context2;for_each_default()(_context2=ownKeys(source)).call(_context2,(function(key){define_property_default()(target,key,get_own_property_descriptor_default()(source,key))}))}}return target}var RegForm_RegForm=function RegForm(_ref){var classes=_ref.classes,requestRegistration=_ref.requestRegistration;var _useState=Object(react["useState"])({login:"",email:"",password:"",rPassword:""}),_useState2=slicedToArray_default()(_useState,2),regForm=_useState2[0],setRegForm=_useState2[1];var onButtonClick=function onButtonClick(){requestRegistration(regForm)};return react_default.a.createElement(Form["a"],{className:classes.form},react_default.a.createElement(Input["a"],{className:classes.input,type:"email",ph:"E-mail",value:regForm.email,onInputChange:function onInputChange(email){return setRegForm(_objectSpread({},regForm,{email:email}))}}),react_default.a.createElement(Input["a"],{className:classes.input,ph:"Login",value:regForm.login,onInputChange:function onInputChange(login){return setRegForm(_objectSpread({},regForm,{login:login}))}}),react_default.a.createElement(Input["a"],{className:classes.input,type:"password",ph:"Password",value:regForm.password,onInputChange:function onInputChange(password){return setRegForm(_objectSpread({},regForm,{password:password}))}}),react_default.a.createElement(Input["a"],{className:classes.input,type:"password",ph:"Repeat password",value:regForm.rPassword,onInputChange:function onInputChange(rPassword){return setRegForm(_objectSpread({},regForm,{rPassword:rPassword}))}}),react_default.a.createElement(SubmitButton["a"],{className:classes.button,onSubmitButtonClick:onButtonClick},"Sign up"))};var RegForm_mapDispatchToProps=function mapDispatchToProps(dispatch){return{requestRegistration:function requestRegistration(obj){return dispatch(Object(actions["e"])(obj))}}};var components_RegForm=Object(compose["a"])(Object(es["b"])(null,RegForm_mapDispatchToProps),lib_default()(RegForm_styles))(RegForm_RegForm);var styles_styles=function styles(theme){return{wrapper:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%"}}};var Registration_styles=styles_styles;var Registration_Registration=function Registration(_ref){var classes=_ref.classes;return react_default.a.createElement(react["Fragment"],null,react_default.a.createElement(Helmet["a"],{title:"Registration"}),react_default.a.createElement("section",{className:classes.wrapper},react_default.a.createElement(components_RegForm,null)))};var pages_Registration=__webpack_exports__["default"]=Object(compose["a"])(root["hot"],lib_default()(Registration_styles))(Registration_Registration)},453:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){var classes=[];for(var i=0;i<arguments.length;i++){var arg=arguments[i];if(!arg)continue;var argType=typeof arg;if(argType==="string"||argType==="number"){classes.push(arg)}else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);if(inner){classes.push(inner)}}else if(argType==="object"){for(var key in arg){if(hasOwn.call(arg,key)&&arg[key]){classes.push(key)}}}}return classes.join(" ")}if(true&&module.exports){classNames.default=classNames;module.exports=classNames}else if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))}else{}})()},454:function(module,exports,__webpack_require__){var arrayWithHoles=__webpack_require__(455);var iterableToArrayLimit=__webpack_require__(460);var nonIterableRest=__webpack_require__(467);function _slicedToArray(arr,i){return arrayWithHoles(arr)||iterableToArrayLimit(arr,i)||nonIterableRest()}module.exports=_slicedToArray},455:function(module,exports,__webpack_require__){var _Array$isArray=__webpack_require__(456);function _arrayWithHoles(arr){if(_Array$isArray(arr))return arr}module.exports=_arrayWithHoles},456:function(module,exports,__webpack_require__){module.exports=__webpack_require__(457)},457:function(module,exports,__webpack_require__){module.exports=__webpack_require__(458)},458:function(module,exports,__webpack_require__){__webpack_require__(459);var path=__webpack_require__(5);module.exports=path.Array.isArray},459:function(module,exports,__webpack_require__){var $=__webpack_require__(3);var isArray=__webpack_require__(89);$({target:"Array",stat:true},{isArray:isArray})},460:function(module,exports,__webpack_require__){var _getIterator=__webpack_require__(461);var _isIterable=__webpack_require__(464);function _iterableToArrayLimit(arr,i){if(!(_isIterable(Object(arr))||Object.prototype.toString.call(arr)==="[object Arguments]")){return}var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=_getIterator(arr),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}module.exports=_iterableToArrayLimit},461:function(module,exports,__webpack_require__){module.exports=__webpack_require__(462)},462:function(module,exports,__webpack_require__){__webpack_require__(87);__webpack_require__(126);module.exports=__webpack_require__(463)},463:function(module,exports,__webpack_require__){var anObject=__webpack_require__(16);var getIteratorMethod=__webpack_require__(214);module.exports=function(it){var iteratorMethod=getIteratorMethod(it);if(typeof iteratorMethod!="function"){throw TypeError(String(it)+" is not iterable")}return anObject(iteratorMethod.call(it))}},464:function(module,exports,__webpack_require__){module.exports=__webpack_require__(465)},465:function(module,exports,__webpack_require__){__webpack_require__(87);__webpack_require__(126);module.exports=__webpack_require__(466)},466:function(module,exports,__webpack_require__){var classof=__webpack_require__(88);var wellKnownSymbol=__webpack_require__(4);var Iterators=__webpack_require__(41);var ITERATOR=wellKnownSymbol("iterator");module.exports=function(it){var O=Object(it);return O[ITERATOR]!==undefined||"@@iterator"in O||Iterators.hasOwnProperty(classof(O))}},467:function(module,exports){function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}module.exports=_nonIterableRest},468:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0);var react_default=__webpack_require__.n(react);var classnames=__webpack_require__(453);var classnames_default=__webpack_require__.n(classnames);var lib=__webpack_require__(15);var lib_default=__webpack_require__.n(lib);var compose=__webpack_require__(27);var styles=function styles(theme){return{form:{display:"flex",flexFlow:"column nowrap",alignItems:"center",minWidth:320,padding:"25px 20px 15px",backgroundColor:theme.colors.components.form.bg,borderRadius:5,boxShadow:"10px 10px 15px #212121"}}};var Form_styles=styles;var Form_Form=function Form(_ref){var classes=_ref.classes,className=_ref.className,children=_ref.children;return react_default.a.createElement("form",{className:classnames_default()(classes.form,className),method:"POST"},children)};var components_Form=__webpack_exports__["a"]=Object(compose["a"])(lib_default()(Form_styles))(Form_Form)},469:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0);var react_default=__webpack_require__.n(react);var classnames=__webpack_require__(453);var classnames_default=__webpack_require__.n(classnames);var lib=__webpack_require__(15);var lib_default=__webpack_require__.n(lib);var compose=__webpack_require__(27);var styles=function styles(theme){return{input:{width:"100%",height:40,padding:20,font:"inherit",backgroundColor:theme.colors.components.input.bg,border:"none",borderRadius:5}}};var Input_styles=styles;var Input_Input=function Input(_ref){var classes=_ref.classes,className=_ref.className,type=_ref.type,ph=_ref.ph,_ref$value=_ref.value,value=_ref$value===void 0?"":_ref$value,onInputChange=_ref.onInputChange;return react_default.a.createElement("input",{className:classnames_default()(classes.input,className),type:type,placeholder:ph,value:value,required:true,onChange:function onChange(e){return onInputChange(e.target.value)}})};var components_Input=__webpack_exports__["a"]=Object(compose["a"])(lib_default()(Input_styles))(Input_Input)},470:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0);var react_default=__webpack_require__.n(react);var classnames=__webpack_require__(453);var classnames_default=__webpack_require__.n(classnames);var lib=__webpack_require__(15);var lib_default=__webpack_require__.n(lib);var compose=__webpack_require__(27);var styles=function styles(theme){return{button:{width:100,height:30,font:"inherit",color:theme.colors.components.submitButton.color,backgroundColor:theme.colors.components.submitButton.background,border:"1px solid white",borderRadius:5,cursor:"pointer",transition:"color 0.4s, text-decoration 0.4s","&:hover":{color:theme.colors.components.submitButton.hover,textDecoration:"underline"}}}};var SubmitButton_styles=styles;var SubmitButton_SubmitButton=function SubmitButton(_ref){var classes=_ref.classes,className=_ref.className,children=_ref.children,onSubmitButtonClick=_ref.onSubmitButtonClick;return react_default.a.createElement("button",{className:classnames_default()(classes.button,className),type:"button","aria-label":"button for sending form",onClick:onSubmitButtonClick},children)};var components_SubmitButton=__webpack_exports__["a"]=Object(compose["a"])(lib_default()(SubmitButton_styles))(SubmitButton_SubmitButton)}}]);