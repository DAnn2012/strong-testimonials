!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";a.r(t);var n=wp.element.Fragment,r=wp.components.Spinner,s=function(e){return"loading"==e.status?[React.createElement(n,null,React.createElement("div",{className:"st-block-preview"},React.createElement("div",{className:"st-block-preview__content"},React.createElement("div",{className:"st-block-preview__logo"}," "),React.createElement(r,null))))]:null},o=function(e,t){return"strong-view strong-view-id-".concat(e," ").concat(t," wpmtst-").concat(t)},i=function(e,t){var a="strong-content strong-".concat(e," columns-").concat(t);return""==e?a="strong-content strong-normal columns-1":"masonry"==e&&(a+=" masonry"),a},l=function(e){return React.createElement("h3",{class:"wpmtst-testimonial-heading testimonial-heading"},React.createElement("a",{href:e.meta.meta.company_website[0],rel:"bookmark"},e.title.rendered))},c=function(e){switch(e){case"widget-thumbnail":return"75";case"thumbnail":return"150";case"medium":return"300";case"large":return"1024"}},u=wp.element,m=(u.Component,u.Fragment,u.useEffect),p=function(e){var t,a,n,r=e.testimonial,s=e.attributes,o=e.viewType,i=(e.layout,r.id);r.title,r.content,r.meta.meta;if("display"==o){var u=s.layout;s.columns;m((function(){var e;"masonry"==u&&((e=jQuery('.strong-view[data-state="idle"] .strong-masonry')).prepend('<div class="grid-sizer"></div><div class="gutter-sizer"></div>'),e.masonry({columnWidth:".grid-sizer",gutter:".gutter-sizer",itemSelector:".wpmtst-testimonial",percentPosition:!0}),e.closest(".strong-view").attr("data-state","init"))}))}return[React.createElement("div",{className:"wpmtst-testimonial testimonial post-".concat(i," t-slide")},React.createElement("div",{className:"wpmtst-testimonial-inner testimonial-inner"},React.createElement("div",{className:"wpmtst-testimonial-content testimonial-content"},l(r),React.createElement("p",null,r.content.raw.replace(/(<([^>]+)>)/gi,""))),(t=r.meta.featured_image,a=st_views.gravatar,n=c("thumbnail"),0==t?React.createElement("div",{class:"wpmtst-testimonial-image testimonial-image"},React.createElement("img",{alt:"",src:a,srcset:a,class:"avatar avatar-".concat(n," photo"),height:n,width:n,loading:"lazy"})):React.createElement("div",{class:"wpmtst-testimonial-image testimonial-image"},React.createElement("img",{width:n,height:n,src:t,class:"attachment-thumbnail size-thumbnail wp-post-image",alt:"",srcset:t,sizes:"(max-width: ".concat(n,"px) 100vw, ").concat(n,"px")}))),React.createElement("div",{class:"clear"})))]},d=function(e){return[React.createElement("div",{className:"pagination"},React.createElement("a",{className:"st-previous"},React.createElement("span",null,"Previous Page")),React.createElement("div",{className:"pages"},React.createElement("a",{className:"page-numbers"},"1"),React.createElement("a",{className:"page-numbers"},"2"),React.createElement("a",{className:"page-numbers"},"3"),React.createElement("a",{className:"page-numbers"},"4"),React.createElement("a",{className:"page-numbers"},"5"),React.createElement("a",{className:"page-numbers dots"},"..."),React.createElement("a",{className:"page-numbers"},"8")),React.createElement("a",{className:"st-next"},React.createElement("span",null,"Next Page")))]};function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var y=wp.element,f=y.Fragment,b=y.useEffect,v=function(e){var t=e.attributes,a=e.initMasonry,n=e.setMasonryObj,r=(e.test,t.id),s=t.template,l=t.layout,c=t.columns,u=t.testimonials,m=t.pagination;t.testimonialsToShow;return b((function(){"masonry"==l&&a(r,n)}),[l,c]),[React.createElement("div",{className:o(r,s),"data-count":u.length,"data-state":"idle"},React.createElement("div",{className:i(l,c)},React.createElement(f,null,0!=u&&React.createElement(React.Fragment,null,u.map((function(t,n){return[React.createElement(p,g({testimonial:t,index:n,initMasonry:a},e))]}))))),m&&React.createElement(React.Fragment,null,React.createElement(d,null)))]},h=wp.element.useEffect,w=function(e){var t=e.allTestimonialsCategories,a=e.selectedCategories,n=e.setAttributes,r=e.dispatch;return h((function(){var e=[];if(t.forEach((function(t){e.push({value:t.id,label:t.name,count:t.count,slug:t.slug})})),!jQuery(".st-testimonial-categories-input").hasClass("selectize-control"))jQuery(".st-testimonial-categories-input").selectize({valueField:"value",plugins:["remove_button"],labelField:"label",searchField:["label","value"],multiple:!0,create:!1,placeholder:"Search for category...",preload:!0,allowEmptyOptions:!0,closeAfterSelect:!0,options:a.concat(e),render:{option:function(e,t){return'<div class="st-categories"><p class="st-category-name">'+t(e.label)+'</p><p class="st-category-count">'+t(e.count)+"</p></div>"}},onChange:function(e){e=e.split(","),r({type:"SELECTEDCATEGORYCHANGE",payload:{value:e,setAttributes:n}})}})}),[]),React.createElement("input",{className:"st-testimonial-categories-input",value:0==a.length?"":a.join()})},E=wp.i18n.__,R=wp.element,_=(R.Fragment,R.useState,wp.blockEditor.InspectorControls),O=wp.components,S=(O.Button,O.PanelBody),C=O.RangeControl,j=O.SelectControl,T=O.__experimentalNumberControl,A=O.__experimentalInputControl,N=O.ToggleControl,k=O.__experimentalRadio,P=O.__experimentalRadioGroup,x=function(e){var t=e.attributes,a=e.setAttributes,n=e.testimonialsFetch,r=e.dispatch,s=e.destroyMasonry,o=e.masonryObj,i=t.id,l=t.layout,c=t.columns,u=t.testimonialsToShow,m=t.allTestimonialsCategories,p=t.selectedCategories,d=t.pagination,g=t.orderBy,y=t.query,f=t.template,b=function(){return React.createElement(P,{label:E("Type","strong-testimonials"),onChange:function(e){a({template:e})},checked:f},React.createElement(k,{value:"default"},E("Default","strong-testimonials")),React.createElement(k,{value:"modern"},E("Modern","strong-testimonials")),React.createElement(k,{value:"bold"},E("Bold","strong-testimonials")),React.createElement(k,{value:"simple"},E("Simple","strong-testimonials")),React.createElement(k,{value:"unstyled"},E("Unstyled","strong-testimonials")))};return React.createElement(React.Fragment,null,React.createElement(_,null,React.createElement(S,{title:E("Layout Settings","strong-testimonials"),initialOpen:!0},React.createElement(j,{label:E("Type","strong-testimonials"),value:l,options:[{label:E("List","strong-testimonials"),value:""},{label:E("Masonry","strong-testimonials"),value:"masonry"}],onChange:function(e){"masonry"!=e&&s(i,o),a({layout:e})}}),""!=l&&React.createElement(C,{label:E("Columns","strong-testimonials"),value:c,onChange:function(e){return a({columns:e})},min:2,max:4}),React.createElement(React.Fragment,null,React.createElement("label",null,"No. of testimonials"),React.createElement(T,{isShiftStepEnabled:!0,onChange:function(e){r({type:"TESTIMONIALSTOSHOWCHANGE",payload:{value:e,setAttributes:a}})},shiftStep:10,value:u,min:0,max:100}))),React.createElement(S,{title:E("Testimonial Category","strong-testimonials"),initialOpen:!0},null!=m&&React.createElement(React.Fragment,null,React.createElement(w,{setAttributes:a,allTestimonialsCategories:m,selectedCategories:p,testimonialsFetch:n,dispatch:r}))),React.createElement(S,{title:E("Order By","strong-testimonials"),initialOpen:!0},React.createElement(j,{value:g,options:[{label:E("Newest First","strong-testimonials"),value:"desc"},{label:E("Oldest First","strong-testimonials"),value:"asc"}],onChange:function(e){r({type:"ORDERBYCHANGE",payload:{value:e,setAttributes:a}})}})),React.createElement(S,{title:E("Pagination","strong-testimonials"),initialOpen:!0},React.createElement(N,{label:E("Toggle Pagination","strong-testimonials"),checked:d,help:E(d?"Pagination is turned on":"Pagination is turned off","strong-testimonials"),onChange:function(){return a({pagination:!d})}}),d&&React.createElement(React.Fragment,null,React.createElement(A,{type:"number",label:E("Items Per Page","strong-testimonials"),min:1,max:100,value:u,onChange:function(e){r({type:"TESTIMONIALSTOSHOWCHANGE",payload:{value:e,setAttributes:a}})}}),React.createElement(A,{type:"number",label:E("Offset","strong-testimonials"),min:0,max:100,onChange:function(e){r({type:"OFFSETCHANGE",payload:{value:e,setAttributes:a,query:y}})},value:y.offset}),React.createElement(A,{type:"number",label:E("Max Pages To Show","strong-testimonials"),min:0,max:100,value:y.pages,onChange:function(e){r({type:"PAGESCHANGE",payload:{value:e,setAttributes:a,query:y}})}}))),React.createElement(S,{initialOpen:!0,title:E("Template Settings","strong-testimonials")},b)))};function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var n,r,s=[],o=!0,i=!1;try{for(a=a.call(e);!(o=(n=a.next()).done)&&(s.push(n.value),!t||s.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{o||null==a.return||a.return()}finally{if(i)throw r}}return s}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return B(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return B(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function H(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function G(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?H(Object(a),!0).forEach((function(t){D(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):H(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function D(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}wp.i18n.__;var I=wp.element,z=(I.Component,I.Fragment,I.useEffect),q=I.useReducer,L=I.useState,Q=(I.useRef,wp.data),W=(Q.withSelect,Q.useSelect),Y=wp.components;Y.SelectControl,Y.Spinner,Y.Toolbar,Y.Button,wp.blockEditor.BlockControls,wp.compose.compose;function U(e,t){switch(t.type){case"ORDERBYCHANGE":return e.orderBy=t.payload.value,t.payload.setAttributes({orderBy:t.payload.value,testimonials:[],status:"loading"}),e;case"SELECTEDCATEGORYCHANGE":return t.payload.setAttributes({selectedCategories:t.payload.value,testimonials:[],status:"loading"}),e;case"TESTIMONIALSTOSHOWCHANGE":return""!=t.payload.value&&t.payload.setAttributes({testimonialsToShow:parseInt(t.payload.value),testimonials:[],status:"loading"}),e;case"OFFSETCHANGE":return t.payload.setAttributes({query:G(G({},t.payload.query),{},{offset:parseInt(t.payload.value)}),testimonials:[],status:"loading"}),e;case"PAGESCHANGE":return t.payload.setAttributes({query:G(G({},t.payload.query),{},{pages:parseInt(t.payload.value)}),testimonials:[],status:"loading"}),e;default:return e}}var V=function(e){var t=e.setAttributes,a=e.attributes,n=a.status,r=a.testimonials,o=a.testimonialsToShow,i=a.selectedCategories,l=a.orderBy,c=(a.id,a.query),u=M(q(U,{orderBy:l,selectedCategories:i,testimonialsToShow:o}),2),m=(u[0],u[1]),p=W((function(e){var t=e("core").getEntityRecords,a={post_status:"publish",per_page:0==o?-1:o,order:"asc"==l?"asc":"desc",offset:c.offset,pages:c.pages};return 0!=i.length&&""!=i.join()&&(a["wpm-testimonial-category"]=i),t("postType","wpm-testimonial",a)||[]})),d=M(L(!1),2),g=d[0],y=d[1],f=function(e,t){e.currentTarget.setMasonryObj(e.currentTarget)},b=function(e,t){return 0!=t&&(jQuery(t).masonry("destroy"),!0)};return z((function(){0==a.id&&(!function(e){wp.apiFetch({path:"wp/v2/wpm-testimonial-category"}).then((function(t){e({allTestimonialsCategories:t})}))}(t),t({id:Math.floor(1e4*Math.random())+1,layout:"",template:"default",columns:2}))}),[]),z((function(){0!=r.length||(0==p.length?t({status:"loading"}):0!=p.length&&0==r.length&&t({status:"ready",testimonials:p}))})),z((function(){}),[l,i,o]),"loading"===n?[React.createElement(React.Fragment,null,React.createElement(x,F({},e,{testimonialsFetch:p,dispatch:m,destroyMasonry:b,masonryObj:g})),React.createElement(s,{status:n}))]:React.createElement(React.Fragment,null,React.createElement(x,F({},e,{testimonialsFetch:p,dispatch:m,destroyMasonry:b,masonryObj:g})),React.createElement(v,F({},e,{initMasonry:function(e,t){var a=jQuery(".strong-view-id-".concat(e," .strong-masonry"));0==jQuery(".grid-sizer").length&&a.prepend('<div class="grid-sizer"></div><div class="gutter-sizer"></div>');var n=a.masonry({columnWidth:".grid-sizer",gutter:".gutter-sizer",itemSelector:".wpmtst-testimonial",percentPosition:!0});n[0].setMasonryObj=t,n.on("layoutComplete",f),a.closest(".strong-view-id-".concat(e)).attr("data-state","init")},setMasonryObj:y})))},$=function(e,t,a){var n="strong-view strong-view-id-".concat(e," ").concat(t," wpmtst-").concat(t," slider-container slider-mode-").concat(a.effect);return 1==a.adapt_height&&(n+=" slider-adaptive"),"none"!=a.controls_type&&("sides"==a.controls_type?n+=" controls-type-sides controls-style-".concat(a.controls_style):"simple"!=a.controls_type&&"full"!=a.controls_type||(n+=" nav-position-".concat(a.nav_position," controls-style-").concat(a.controls_style)),"full"==a.pager_type&&(n+=" pager-type-full pager-style-".concat(a.pager_style))),n},J=wp.element,K=J.Fragment,X=J.useEffect,Z=function(e){var t=e.attributes,a=t.id,n=t.template,r=t.testimonials,s=t.config,o=t.viewType;X((function(){!1!==s&&i(function(e,t){return{mode:e.effect,speed:e.speed,pause:e.pause,autoHover:e.auto_hover,autoStart:0,infiniteLoop:e.continuous_sliding,stopAutoOnClick:e.stop_auto_on_click,adaptiveHeight:e.adapt_height,adaptiveHeightSpeed:e.adapt_height_speed,controls:1,autoControls:1,pager:"full"==e.pager_type?1:0,slideCount:t.length,debug:!1,type:e.type,breakpoints:{single:{maxSlides:e.show_single.max_slides,moveSlides:e.show_single.move_slides,slideMargin:e.show_single.margin},multiple:e.breakpoints},startText:"text"==e.controls_style?"Start":"",stopText:"text"==e.controls_style?"Stop":"",prevText:"text"==e.controls_style?"Prev":"",nextText:"text"==e.controls_style?"Next":"",buildPager:"text"==e.pager_style?null:"icons",simpleSetPager:1}}(s,r))}));var i=function(e){console.log(e);var t=jQuery('.strong-view.slider-container[data-state="idle"]');t.length&&t.each((function(){var t=jQuery(this),a=t.data("count");void 0!==a&&1===a||t.strongSlider(e)}))};return React.createElement(K,null,React.createElement("div",{className:$(a,n,s),"data-count":r.length,"data-slider-var":"strong_slider_id_".concat(a),"data-state":"idle"}," ",React.createElement("div",{class:"strong-content wpmslider-content"},r.length>0&&React.createElement(K,null,r.map((function(e,t){return[React.createElement(p,{testimonial:e,index:t,viewType:o})]}))))))},ee=wp.element,te=(ee.Component,ee.Fragment,ee.useEffect),ae=wp.data,ne=ae.withSelect,re=ae.useSelect,se=wp.components,oe=(se.SelectControl,se.Spinner,se.Toolbar,se.Button,wp.blockEditor.BlockControls,wp.compose.compose,ne((function(e,t){return{testimonials:(0,e("core").getEntityRecords)("postType","wpm-testimonial",{post_status:"publish",per_page:-1})||[]}})),wp.components.withFilters("wpst.StrongTestimonialViewEdit"),function(e){var t=e.setAttributes,a=e.attributes,n=a.status,r=a.testimonials,o=a.id,i=a.template,l=a.config,c=re((function(e){return(0,e("core").getEntityRecords)("postType","wpm-testimonial",{post_status:"publish",per_page:-1})||[]}));return te((function(){0!=r||(0==c.length?t({status:"loading"}):0!=c.length&&0==r.length&&t({status:"ready",testimonials:c}))})),te((function(){0==o&&""==i&&t({id:Math.floor(1e4*Math.random())+1,template:"default"}),0==l&&t({config:{type:"show_single",show_single:{max_slides:1,move_slides:1,margin:1},breakpoints:{desktop:{description:"Desktop",width:1200,max_slides:2,move_slides:1,margin:20},large:{description:"Large",width:1024,max_slides:2,move_slides:1,margin:20},medium:{description:"Medium",width:640,max_slides:1,move_slides:1,margin:10},small:{description:"Small",width:480,max_slides:1,move_slides:1,margin:1}},effect:"fade",speed:1,pause:8,auto_start:!0,continuous_sliding:!0,auto_hover:!0,adapt_height:!0,adapt_height_speed:.5,stretch:0,stop_auto_on_click:!0,controls_type:"simple",controls_style:"buttons",pager_type:"none",pager_style:"buttons",nav_position:"inside"}})})),"loading"===n?[React.createElement(s,{status:n})]:React.createElement(Z,e)});function ie(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function le(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(a),!0).forEach((function(t){ce(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ie(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function ce(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function ue(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function me(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function pe(e,t,a){return t&&me(e.prototype,t),a&&me(e,a),e}var de=wp.i18n.__,ge=wp.blocks.registerBlockType,ye=wp.blocks.createBlock,fe=function(){function e(){ue(this,e),this.registerBlock()}return pe(e,[{key:"registerBlock",value:function(){this.blockName="strongtestimonials/view",this.blockAttributes={id:{type:"number",default:0},viewType:{type:"string",default:"display"},status:{type:"string",default:"ready"},template:{type:"string",default:""},layout:{type:"string",default:""},columns:{type:"number",default:2},testimonialsToShow:{type:"number",default:0},testimonials:{type:"array",default:[]},allTestimonialsCategories:{type:"array",default:[]},selectedCategories:{type:"array",default:[]},orderBy:{type:"string",default:"desc"},pagination:{type:"boolean",default:!1},query:{type:"object",default:{per_page:-1,pages:0,offset:0,order:"desc",orderBy:"date"}}},ge(this.blockName,{title:"Display",description:de("A beatiful display to show all your testimonials","strong-testimonials"),icon:"editor-quote",category:"strong-testimonials-view",supports:{align:!0,customClassName:!1},attributes:this.blockAttributes,transforms:{to:[{attributes:le({},this.attributes),type:"block",priority:7,blocks:["strongtestimonials/slideshow"],transform:function(e){return ye("strongtestimonials/slideshow",{id:e.id,status:e.status,template:e.template,testimonials:e.testimonials})}}]},edit:V,save:function(){return null}})}}]),e}(),be=function(){function e(){ue(this,e),this.registerBlock()}return pe(e,[{key:"registerBlock",value:function(){this.blockName="strongtestimonials/slideshow",this.blockAttributes={id:{type:"number",default:0},viewType:{type:"string",default:"slideshow"},status:{type:"string",default:"ready"},template:{type:"string",default:""},testimonials:{type:"array",default:[]},config:{type:"object",default:!1}},ge(this.blockName,{title:"Slideshow",description:de("A beautiful slideshow to show all your testimonials","strong-testimonials"),icon:"editor-quote",category:"strong-testimonials-view",supports:{customClassName:!1},attributes:this.blockAttributes,transforms:{to:[{attributes:le({},this.attributes),type:"block",priority:7,blocks:["strongtestimonials/view"],transform:function(e){return ye("strongtestimonials/view",{id:e.id,status:e.status,template:e.template,testimonials:e.testimonials})}}]},edit:oe,save:function(){return null}})}}]),e}();new fe,new be}]);