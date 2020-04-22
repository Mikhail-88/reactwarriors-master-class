(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},108:function(e,t){},110:function(e,t){},144:function(e,t){},145:function(e,t){},197:function(e,t,a){},198:function(e,t,a){},199:function(e,t,a){},201:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(89),c=a.n(o),i=a(31),s=a(14),l=a(15),u=a(17),m=a(16),v=a(18),d=(a(97),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).trimOverview=function(e,t){return e.length>t?"".concat(e.slice(0,t).split(".").slice(0,-1).join("."),"."):e},a.getMovieImage=function(e){var t="https://image.tmdb.org/t/p/w500".concat(e.backdrop_path||e.poster_path);return e.backdrop_path||e.poster_path?t:"https://stockpictures.io/wp-content/uploads/2020/01/image-not-found-big-768x432.png"},a.handleClickRemove=function(e){return function(){a.setState({favorite:!1}),a.props.removeFromFavorite(e)}},a.handleClickAdd=function(e){return function(){a.setState({favorite:!0}),a.props.addToFavorite(e)}},a.state={favorite:!1},a}return Object(v.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.movie,a=e.removeMovie,n=this.state.favorite;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"card-img-top",src:this.getMovieImage(t),alt:"movie poster"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-title"},t.title),r.a.createElement("p",{className:"card-rate mb-4"},"Rating: ",t.vote_average),r.a.createElement("p",{className:"card-overview"},this.trimOverview(t.overview,680)),r.a.createElement("div",{className:"card-buttons d-flex flex-column align-items-end"},n?r.a.createElement("button",{type:"button",className:"btn btn-secondary mb-2",onClick:this.handleClickRemove(t)},"Remove Favorite"):r.a.createElement("button",{type:"button",className:"btn btn-success mb-2",onClick:this.handleClickAdd(t)},"Add to Favorites"),r.a.createElement("button",{className:"btn btn-danger",onClick:a.bind(null,t)},"Delete movie"))))}}]),t}(n.Component)),p="https://api.themoviedb.org/3",f="3f4ca4f3a9750da53450646ced312397",b=a(30),g=a.n(b),h=(a(98),function(e){var t=e.sort_by,a=e.updateSortBy,n=function(e){return function(){return a(e)}},o=function(e){var a=t===e;return g()("btn btn-info",{active:a})};return r.a.createElement("ul",{className:"tabs nav nav-pills"},r.a.createElement("li",{className:"nav-item m-1"},r.a.createElement("button",{className:o("popularity.desc"),onClick:n("popularity.desc")},"Popularity")),r.a.createElement("li",{className:"nav-item m-1"},r.a.createElement("button",{className:o("revenue.desc"),onClick:n("revenue.desc")},"Revenue")),r.a.createElement("li",{className:"nav-item m-1"},r.a.createElement("button",{className:o("vote_average.desc"),onClick:n("vote_average.desc")},"Vote average")))}),E=(a(99),function(e){var t=e.favoriteMovies;return r.a.createElement("div",{className:"col-3 favorite"},r.a.createElement("h3",null,"Favorites: ",r.a.createElement("br",null)," ",t.length," movies"),r.a.createElement("ul",{className:"list-group"},t.map(function(e){return r.a.createElement("li",{className:"list-group-item",key:e.id},r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",null,e.title),r.a.createElement("div",null,e.vote_average)))})))}),y=(a(100),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleSortByRate=function(){return function(){a.setState({rateUp:!1}),a.props.sortByRate()}},a.handleSortByReverseRate=function(){return function(){a.setState({rateUp:!0}),a.props.sortByReverseRate()}},a.state={rateUp:!0},a}return Object(v.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.rateUp;return r.a.createElement("div",{className:"col align-self-center text-right"},e?r.a.createElement("button",{type:"button",title:"Sort by Rate Up",className:"btn btn-secondary sort-button",onClick:this.handleSortByRate()},"\u21d1"):r.a.createElement("button",{type:"button",title:"Sort by Rate Down",className:"btn btn-secondary sort-button",onClick:this.handleSortByReverseRate()},"\u21d3"))}}]),t}(n.Component)),N=(a(101),function(e){var t=e.scrollTop;return r.a.createElement("button",{type:"button",className:"button__top",onClick:function(){return t()},title:"Go to top"},"Top")}),_=function(){return r.a.createElement("div",{className:"loader spinner-border text-primary",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))},k=(a(102),a(103)),S=function(e){var t=e.page,a=e.totalPages,n=e.changePage,o=function(e){var a=t===e;return g()("pagination__button",{"pagination__button--active":a})},c=function(e,t){return t<6?new Array(t).fill("").map(function(e,t){return t+1}):e<=5?[1,2,3,4,5,"...",t]:e>=5&&e<=t-5?[1,"...",e-1,e,e+1,"...",t]:[1,"...",t-4,t-3,t-2,t-1,t]}(t,a);return r.a.createElement("div",{className:"pagination"},r.a.createElement("button",{disabled:1===t?"disabled":"",className:"pagination__button",onClick:function(){return n(t-1)}},"\xab"),c.map(function(e){return r.a.createElement("button",{disabled:"..."===e?"disabled":"",className:o(e),key:k.generate(5),onClick:function(){return n(e)}},e)}),r.a.createElement("button",{disabled:t===a?"disabled":"",className:"pagination__button",onClick:function(){return n(t+1)}},"\xbb"))},R=a(91),j=a(90),w=a.n(j),C=function(e){var t=e.updateSearch,a=Object(n.useState)(""),o=Object(R.a)(a,2),c=o[0],i=o[1],s=Object(n.useCallback)(w()(t,1e3),[]);return r.a.createElement("input",{className:"form-control",type:"text",value:c,placeholder:"Search movies",onChange:function(e){var t=e.target;i(t.value),s(c)}})},O=(a(197),function(){return r.a.createElement("div",{className:"notFound-movie"},r.a.createElement("img",{src:"https://avatars.mds.yandex.net/get-zen_doc/197997/pub_5ada0b7200b3ddc88a038800_5ada0c0148c85e73f0dcb9b7/scale_1200",alt:"no movie"}),r.a.createElement("p",null,"Movie not found"))}),M=(a(198),function(){return r.a.createElement("div",{className:"errorBlock"},r.a.createElement("img",{src:"https://eksmo.ru/upload/iblock/c99/d_L_min.jpg",alt:"error"}),r.a.createElement("span",{className:"errorText"},"Something goes wrong, try again later."))}),F=(a(199),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).getMoviesFromServer=function(){fetch("".concat(p,"/discover/movie?api_key=").concat(f,"&sort_by=").concat(a.state.sort_by,"&page=").concat(a.state.page)).then(function(e){return e.json()}).then(function(e){a.setState({movies:e.results,isLoading:!1,isError:!1,totalPages:e.total_pages})}).catch(function(){a.setState({isError:!0,isLoading:!1})})},a.changePage=function(e){e>0&&e<=a.state.totalPages&&a.setState({page:e,isLoading:!0})},a.removeMovie=function(e){var t=a.state.movies.filter(function(t){return t.id!==e.id});a.setState({movies:t})},a.addToFavorite=function(e){var t=[].concat(Object(i.a)(a.state.favoriteMovies),[e]);a.setState({favoriteMovies:t})},a.removeFromFavorite=function(e){var t=a.state.favoriteMovies.filter(function(t){return t.id!==e.id});a.setState({favoriteMovies:t})},a.sortByRate=function(){a.setState(function(e){return{movies:Object(i.a)(e.movies).sort(function(e,t){return t.vote_average-e.vote_average})}})},a.sortByReverseRate=function(){a.setState(function(e){return{movies:Object(i.a)(e.movies).sort(function(e,t){return e.vote_average-t.vote_average})}})},a.updateSortBy=function(e){a.setState({isLoading:!0,sort_by:e,page:1})},a.scrollTop=function(){a.myRef.current.scrollIntoView({behavior:"smooth",block:"start"})},a.searchMovie=function(e,t){return t.length<2?e:e.filter(function(e){return e.title.toLowerCase().includes(t.toLowerCase().trim())})},a.updateSearch=function(e){a.setState({searchText:e})},a.state={movies:[],favoriteMovies:[],sort_by:"popularity.desc",isLoading:!0,isError:!1,page:1,totalPages:0,searchText:""},a.myRef=r.a.createRef(),a}return Object(v.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getMoviesFromServer()}},{key:"componentDidUpdate",value:function(e,t){t.sort_by===this.state.sort_by&&t.page===this.state.page||this.getMoviesFromServer()}},{key:"componentDidCatch",value:function(){this.setState({isError:!0})}},{key:"render",value:function(){var e=this,t=this.state,a=t.movies,n=t.favoriteMovies,o=t.sort_by,c=t.page,i=t.totalPages,s=t.isLoading,l=t.isError,u=t.searchText,m=this.searchMovie(a,u),v=l&&r.a.createElement(M,null),p=s&&r.a.createElement(_,null);return r.a.createElement("div",{className:"container",ref:this.myRef},r.a.createElement("div",{className:"row mt-4 wrapper"},r.a.createElement("div",{className:"col-9 content"},r.a.createElement("div",{className:"mb-3"},r.a.createElement(C,{updateSearch:this.updateSearch})),r.a.createElement("div",{className:"row mb-4 navigation"},r.a.createElement("div",{className:"col-9"},r.a.createElement(h,{sort_by:o,updateSortBy:this.updateSortBy})),r.a.createElement(y,{sortByRate:this.sortByRate,sortByReverseRate:this.sortByReverseRate})),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(S,{page:c,totalPages:i,changePage:this.changePage})),r.a.createElement("div",{className:"row card_container"},v||p||!m.length&&r.a.createElement(O,null)||m.map(function(t){return r.a.createElement("div",{className:"col-6 mb-4 card_wrapper",key:t.id},r.a.createElement(d,{movie:t,removeMovie:e.removeMovie,addToFavorite:e.addToFavorite,removeFromFavorite:e.removeFromFavorite}))}))),r.a.createElement(E,{favoriteMovies:n})),r.a.createElement(N,{scrollTop:this.scrollTop}))}}]),t}(n.Component));a(200);c.a.render(r.a.createElement(F,null),document.getElementById("root"))},92:function(e,t,a){e.exports=a(201)},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[92,1,2]]]);
//# sourceMappingURL=main.0579e1cf.chunk.js.map