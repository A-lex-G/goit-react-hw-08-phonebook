"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[88],{9088:function(n,e,r){r.r(e),r.d(e,{default:function(){return S}});var t,o,a,i,s,c,l,d,u,m=r(2791),p=r(9434),b=r(3634),x=r(6916),f=function(n){return n.filter},h=function(n){return n.contacts.isLoading},v=function(n){return n.contacts},g=(0,x.P1)([v,f],(function(n,e){var r=n.items;return r.length>0?!0===(""!==e)?r.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})):r:[]})),j=r(8593),y=r(184),Z=function(){j.ko},w=r(168),k=r(1109),F=k.Z.ul(t||(t=(0,w.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    border: 1px solid var(--cornflower);\n    border-radius: 4px;\n    padding: 5px;\n    background-color: var(--light-slate);\n"]))),z=k.Z.li(o||(o=(0,w.Z)(["\n    display: flex;\n    align-items: center;\n    column-gap: 10px;\n"]))),C=k.Z.button(a||(a=(0,w.Z)(["\n    border: 1px solid var(--navy-blue);\n    border-radius: 4px;\n    cursor: pointer;\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    border 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    :hover {\n        background-color: tomato;\n        border: 1px solid var(--cornflower);\n    }\n}\n"]))),A=r(1686),N=r.n(A),I=function(){var n=(0,p.I0)(),e=(0,p.v9)(v),r=e.isLoading,t=e.error,o=(0,p.v9)(g);return(0,m.useEffect)((function(){n((0,b.yF)())}),[n]),(0,y.jsx)(y.Fragment,{children:o.length>0&&(0,y.jsxs)(F,{children:[r&&(0,y.jsx)(Z,{}),t&&(0,y.jsx)("p",{children:t}),o.map((function(e){return(0,y.jsxs)(z,{children:[(0,y.jsxs)("p",{children:[e.name,":",(0,y.jsx)("span",{children:e.number})]}),(0,y.jsx)(C,{onClick:function(){return function(e){var r=e.id,t=e.name;n((0,b.GK)(r)),N().Notify.success("".concat(t," was deleted from your contacts"))}(e)},children:"Delete"})]},e.id)}))]})})},L=r(4942),_=r(5984),q=k.Z.form(i||(i=(0,w.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    row-gap: 5px;\n    width: 300px;\n    padding: 10px 10px;\n    border: 1px solid var(--cornflower);\n    border-radius: 4px;\n    background-color: var(--light-slate);\n"]))),D=k.Z.label(s||(s=(0,w.Z)(["\n    font-size: medium;\n    font-weight: 700;\n"]))),E=k.Z.input(c||(c=(0,w.Z)(["\n    border: 1px solid var(--navy-blue);\n    border-radius: 4px;\n    transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    :hover {\n        border: 1px solid tomato;\n    }\n"]))),K=k.Z.button(l||(l=(0,w.Z)(["\n    border: 1px solid var(--navy-blue);\n    background-color: var(--cornflower);\n    border-radius: 4px;\n    margin-top: 20px;\n    cursor: pointer;\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    border 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    :hover {\n        background-color: tomato;\n        border: 1px solid var(--cornflower);\n    }\n"]))),P=function(){var n=(0,p.I0)(),e=(0,p.v9)(v).items,r=(0,_.x0)(),t=(0,_.x0)();return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(q,{onSubmit:function(r){var t;r.preventDefault();var o=r.target,a=o.elements.name.value;if(e.map((function(n){return n.name})).includes(a))N().Notify.warning("".concat(a," is already in contacts"));else{var i=(t={},(0,L.Z)(t,o.elements.name.name,a),(0,L.Z)(t,o.elements.number.name,o.elements.number.value),t);n((0,b.uK)(i)),N().Notify.success("".concat(a," was added to your contacts")),o.reset()}},action:"",children:[(0,y.jsx)(D,{htmlFor:r,children:"Name"}),(0,y.jsx)(E,{name:"name",id:r,type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"please enter name",required:!0}),(0,y.jsx)(D,{htmlFor:t,children:"Number"}),(0,y.jsx)(E,{name:"number",id:t,type:"tel",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"please enter phone number",required:!0}),(0,y.jsx)(K,{type:"submit",children:"Add contact"})]})})},B=r(1634),G=k.Z.label(d||(d=(0,w.Z)(["\n    display: flex;\n    margin-bottom: 5px;\n    color: tomato;\n"]))),J=k.Z.input(u||(u=(0,w.Z)(["\n    border: 1px solid var(--navy-blue);\n    border-radius: 4px;\n    transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    :hover {\n        border: 1px solid tomato;\n    }\n"]))),M=function(){var n=(0,p.I0)(),e=(0,p.v9)(f),r=(0,_.x0)();return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(G,{htmlFor:r,children:"Find contacts by name"}),(0,y.jsx)(J,{type:"text",name:"filter",id:r,value:e,onChange:function(e){var r=e.currentTarget.value;e.preventDefault(),n((0,B.j)(r))},placeholder:"please enter name to find",required:!0})]})};function S(){var n=(0,p.I0)(),e=(0,p.v9)(h),r=(0,p.v9)(v).items;return(0,m.useEffect)((function(){n((0,b.yF)())}),[n]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(P,{}),e&&(0,y.jsx)(Z,{}),r.length>0&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(M,{}),(0,y.jsx)(I,{})]})]})}}}]);
//# sourceMappingURL=88.69b7b25f.chunk.js.map