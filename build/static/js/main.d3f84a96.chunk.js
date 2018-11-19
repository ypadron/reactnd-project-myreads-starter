(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(32)},27:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(14),s=a.n(r),c=a(34),l=a(4),i=a(5),u=a(7),h=a(6),p=a(8),d=a(35),m=a(33),f=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.book.imageLinks?this.props.book.imageLinks.thumbnail:"";return o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:'url("'.concat(t,'")')}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{onChange:function(t){return e.props.updateShelf(e.props.book,t.target.value)},defaultValue:this.props.currentShelf||"none"},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"},this.props.book.title),o.a.createElement("div",{className:"book-authors"},this.props.book.authors))}}]),t}(o.a.Component),b=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},this.props.title),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},this.props.books.map(function(t){return o.a.createElement("li",{key:t.id},o.a.createElement(f,{book:t,updateShelf:e.props.updateShelf,currentShelf:t.shelf}))}))))}}]),t}(o.a.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads")),o.a.createElement("div",{className:"list-books-content"},o.a.createElement("div",null,o.a.createElement(b,{title:"Currently Reading",books:this.props.books.filter(function(e){return"currentlyReading"===e.shelf}),updateShelf:this.props.updateShelf}),o.a.createElement(b,{title:"Want to Read",books:this.props.books.filter(function(e){return"wantToRead"===e.shelf}),updateShelf:this.props.updateShelf}),o.a.createElement(b,{title:"Read",books:this.props.books.filter(function(e){return"read"===e.shelf}),updateShelf:this.props.updateShelf}))),o.a.createElement("div",{className:"open-search"},o.a.createElement(m.a,{to:"/search",className:"add-book",onClick:function(){return e.setState({showSearchPage:!0})}},"Add a book")))}}]),t}(o.a.Component),v=a(12),E="https://reactnd-books-api.udacity.com",y=localStorage.token;y||(y=localStorage.token=Math.random().toString(36).substr(-8));var S={Accept:"application/json",Authorization:y},j=function(e,t){return fetch("".concat(E,"/books/").concat(e.id),{method:"PUT",headers:Object(v.a)({},S,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},g=function(e){return fetch("".concat(E,"/search"),{method:"POST",headers:Object(v.a)({},S,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},O=a(15),N=a.n(O),w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={query:"",searchedBooks:[]},a.updateQuery=function(e,t){a.setState({query:e}),a.updateSearchedBooks(e)},a.updateSearchedBooks=function(e){e?g(e).then(function(e){e.error?a.setState({searchedBooks:[]}):a.setState({searchedBooks:e})}):a.setState({searchedBooks:[]})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(m.a,{to:"/",className:"close-search",onClick:function(){return e.setState({showSearchPage:!1})}},"Close"),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement(N.a,{type:"text",placeholder:"Search by title or author",value:this.state.query,debounceTimeout:1e3,onChange:function(t){return e.updateQuery(t.target.value)}}))),o.a.createElement("div",{className:"search-books-results"},o.a.createElement("ol",{className:"books-grid"},this.state.searchedBooks.map(function(t){var a="none";return e.props.books.map(function(e){return e.id===t.id?a=e.shelf:""}),o.a.createElement("li",{key:t.id},o.a.createElement(f,{book:t,updateShelf:e.props.updateShelf,currentShelf:a}))}))))}}]),t}(o.a.Component),C=(a(27),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={showSearchPage:!1,books:[]},a.updateShelf=function(e,t){j(e,t).then(function(){a.getBooks()})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getBooks()}},{key:"getBooks",value:function(){var e=this;fetch("".concat(E,"/books"),{headers:S}).then(function(e){return e.json()}).then(function(e){return e.books}).then(function(t){e.setState({books:t})})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"app"},o.a.createElement(d.a,{exact:!0,path:"/",render:function(){return o.a.createElement(k,{books:e.state.books,updateShelf:e.updateShelf})}}),o.a.createElement(d.a,{path:"/search",component:function(){return o.a.createElement(w,{updateShelf:e.updateShelf,books:e.state.books})}}))}}]),t}(o.a.Component));a(30);s.a.render(o.a.createElement(c.a,null,o.a.createElement(C,null)),document.getElementById("root"))}},[[17,2,1]]]);
//# sourceMappingURL=main.d3f84a96.chunk.js.map