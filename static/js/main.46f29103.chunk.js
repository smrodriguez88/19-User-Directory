(this["webpackJsonpuser-directory"]=this["webpackJsonpuser-directory"]||[]).push([[0],{25:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(0),i=a.n(n),c=a(5),o=a.n(c),l=(a(25),a(6)),s=a(18),d=a(19),u=a.n(d);var m=function(){return u.a.get("https://randomuser.me/api/?results=40&password=upper,lower,number&nat=us")};a(54),a(55),a(56);var h=function(){var e=Object(n.useState)(),t=Object(l.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(),o=Object(l.a)(c,2),d=o[0];return o[1],Object(n.useEffect)((function(){m().then((function(e){console.log(e.data.results),function(e){var t=[];e.map((function(e){t.push({image:e.picture.medium,name:"".concat(e.name.first," ").concat(e.name.last),phone:e.phone,email:e.email,dob:e.dob.date.split("T")[0]})})),i(t)}(e.data.results),console.log("User Data Retrieved")}))}),[d]),Object(r.jsx)("div",{className:"ag-theme-alpine grid-align",style:{width:1200},children:Object(r.jsx)(s.AgGridReact,{rowData:a,columnDefs:[{headerName:"Image",field:"image",width:200,sortable:!1,cellStyle:{textAlign:"center"},cellRenderer:function(e){var t=e.value;return"<img src=".concat(t," />")}},{headerName:"Name",field:"name",width:200,filter:!0},{headerName:"Phone",field:"phone",width:200,filter:!0},{headerName:"Email",field:"email",width:200,filter:!0},{headerName:"Date of Birth",field:"dob",width:200,filter:!0}],defaultColDef:{flex:1,resizable:!0,sortable:!0,cellStyle:{whiteSpace:"normal"}},rowHeight:76,domLayout:"autoHeight"})})};a(57);var f=function(){return Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("h1",{children:"User Directory"}),Object(r.jsx)("p",{children:"Click on desired column to sort, click on \u2630 icon to filter by column"})]})};var b=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(f,{}),Object(r.jsx)(h,{})]})};o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.46f29103.chunk.js.map