(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{217:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var classCallCheck=__webpack_require__(32);var classCallCheck_default=__webpack_require__.n(classCallCheck);var createClass=__webpack_require__(33);var createClass_default=__webpack_require__.n(createClass);var possibleConstructorReturn=__webpack_require__(50);var possibleConstructorReturn_default=__webpack_require__.n(possibleConstructorReturn);var getPrototypeOf=__webpack_require__(51);var getPrototypeOf_default=__webpack_require__.n(getPrototypeOf);var inherits=__webpack_require__(52);var inherits_default=__webpack_require__.n(inherits);var react=__webpack_require__(0);var react_default=__webpack_require__.n(react);var lib=__webpack_require__(15);var lib_default=__webpack_require__.n(lib);var root=__webpack_require__(128);var compose=__webpack_require__(27);var Helmet=__webpack_require__(127);var styles=function styles(theme){return{wrapper:{height:"100%",padding:50,backgroundColor:"#aee",backgroundOrigin:"content-box",backgroundClip:"content-box"}}};var Graphic_styles=styles;var Graphic_Graphic=function Graphic(_ref){var classes=_ref.classes;return react_default.a.createElement("div",{className:classes.wrapper},react_default.a.createElement("h2",null,"Graphic"))};var components_Graphic=Object(compose["a"])(lib_default()(Graphic_styles))(Graphic_Graphic);var styles_styles=function styles(theme){return{wrapper:{backgroundColor:"#efa"}}};var Menu_styles=styles_styles;var Menu_Menu=function Menu(_ref){var classes=_ref.classes;return react_default.a.createElement("div",{className:classes.wrapper},react_default.a.createElement("h2",null,"Menu"))};var components_Menu=Object(compose["a"])(lib_default()(Menu_styles))(Menu_Menu);var Index_styles_styles=function styles(theme){return{wrapper:{display:"grid",gridTemplateColumns:"70% 30%",width:"100%"},title:{textAlign:"center"},statistics:{gridArea:"statistics"}}};var Index_styles=Index_styles_styles;var Index_IndexPage=function(_Component){inherits_default()(IndexPage,_Component);function IndexPage(){classCallCheck_default()(this,IndexPage);return possibleConstructorReturn_default()(this,getPrototypeOf_default()(IndexPage).apply(this,arguments))}createClass_default()(IndexPage,[{key:"render",value:function render(){var classes=this.props.classes;return react_default.a.createElement(react["Fragment"],null,react_default.a.createElement(Helmet["a"],{title:"Main"}),react_default.a.createElement("section",{className:classes.wrapper},react_default.a.createElement(components_Graphic,null),react_default.a.createElement(components_Menu,null)))}}]);return IndexPage}(react["Component"]);var Index=__webpack_exports__["default"]=Object(compose["a"])(root["hot"],lib_default()(Index_styles))(Index_IndexPage)}}]);