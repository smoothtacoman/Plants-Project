(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{214:function(e,t,a){e.exports=a(408)},219:function(e,t,a){},221:function(e,t,a){},223:function(e,t,a){},378:function(e,t,a){},399:function(e,t,a){},401:function(e,t,a){},405:function(e,t,a){},408:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(47),l=a.n(c),s=a(416),o=a(419),i=(a(219),a(221),a(20)),m=a(21),u=a(29),p=a(28),d=a(30),h=(a(223),a(417)),E=a(418),f=a(409),g=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{trigger:r.a.createElement(E.a,null,"Sign In")},r.a.createElement(h.a.Header,null,"Sign in Page"),r.a.createElement(h.a.Content,{image:!0},r.a.createElement(f.a,{wrapped:!0,size:"large",src:"https://images.pexels.com/photos/1313807/pexels-photo-1313807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1200"}),r.a.createElement(h.a.Description,null,r.a.createElement("div",{className:"login-page"},r.a.createElement("div",{className:"form"},r.a.createElement("form",{className:"register-form"},r.a.createElement("input",{type:"text",placeholder:"name"}),r.a.createElement("input",{type:"password",placeholder:"password"}),r.a.createElement("input",{type:"text",placeholder:"email address"}),r.a.createElement("button",null,"create"),r.a.createElement("p",{className:"message"},"Already registered? ",r.a.createElement("a",{href:"/#"},"Sign In"))),r.a.createElement("form",{className:"login-form"},r.a.createElement("input",{type:"text",placeholder:"email"}),r.a.createElement("input",{type:"password",placeholder:"password"}),r.a.createElement("button",null,"login"),r.a.createElement("p",{className:"message"},"Not registered? ",r.a.createElement("a",{href:"/signup"},"Create an account"))))))))}}]),t}(r.a.Component),N=(a(378),function(){function e(){Object(i.a)(this,e)}return Object(m.a)(e,null,[{key:"getCart",value:function(){return this.cartData||(this.cartData=JSON.parse(localStorage.getItem("cart"))||[]),this.cartData}},{key:"setCart",value:function(e){return this.cartData||(this.cartData=JSON.parse(localStorage.getItem("cart"))||[]),this.cartData.push(e),localStorage.setItem("cart",JSON.stringify(this.cartData)),this.cartData}},{key:"removeFromCartById",value:function(e){return this.cartData=this.cartData.filter(function(t){return t.id!==e}),localStorage.setItem("cart",JSON.stringify(this.cartData)),this.cartData}}]),e}()),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).itemsInCart=function(){a.state.cart.filter(function(e){return e.plantName}).length},a.renderCart=function(){if(a.state.cart)return r.a.createElement("div",{className:"cart-wrapper"},a.state.cart.map(function(e){return r.a.createElement("div",{className:"cart-entry"},r.a.createElement("div",{className:"img-box"},r.a.createElement("img",{className:"image",src:e.image,alt:e.image})),r.a.createElement("div",{className:"content-box"},r.a.createElement("p",null,"Plant: ",e.plantName),r.a.createElement("p",null,"Amount: ",e.count," "),r.a.createElement("p",null,"Price of each: $",e.price," ",r.a.createElement("a",{onClick:function(t){return a.removeItem(e.id)},style:{float:"right","font-size":"15px",cursor:"pointer"}},r.a.createElement("i",{class:"fas fa-trash-alt"})," Delete ")),r.a.createElement("hr",null)))}),r.a.createElement("p",{className:"total-container"}," Total: ",a.state.total),r.a.createElement("button",{className:"checkout-button"},"Check Out"))},console.log("cart state"+a.state),a.state={cart:[],total:0},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"removeItem",value:function(e){console.log("removing "+e);var t=N.removeFromCartById(e),a=t.reduce(function(e,t){return t.price*t.count+e},0);this.setState({cart:t,total:a})}},{key:"openCart",value:function(){var e=N.getCart(),t=e.reduce(function(e,t){return t.price*t.count+e},0);this.setState({cart:e,total:t})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"cart-modal"},r.a.createElement(h.a,{trigger:r.a.createElement("button",{className:"item"},r.a.createElement("i",{className:"fas fa-shopping-cart",id:"shopping-icon"})),onOpen:function(){return e.openCart()}},r.a.createElement(h.a.Header,null,r.a.createElement("p",null," Your Cart ")),r.a.createElement(h.a.Content,{image:!0},r.a.createElement(h.a.Description,null,this.renderCart()),r.a.createElement(f.a,{wrapped:!0,size:"medium",src:"https://images.pexels.com/photos/1313807/pexels-photo-1313807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1200"}))))}}]),t}(r.a.Component),b=function(e){return r.a.createElement("div",{className:"navbar-content"},r.a.createElement("div",{className:"ui inverted segment",id:"navbar-background"},r.a.createElement("div",{className:"ui inverted secondary menu"},r.a.createElement("div",{className:"logo"},r.a.createElement("a",{href:"/",className:"logo"},r.a.createElement("span",{className:"font-one"},"TOLEDO'S")," \xa0",r.a.createElement("span",{className:"font-two"},"PLANTS"))),e.children,r.a.createElement("a",{className:"item right floated",id:"about-us",href:"/about"},"About Us"),r.a.createElement(v,null),r.a.createElement(g,null))))},y=function(){return r.a.createElement("div",{className:"about-container"})},O=function(){return r.a.createElement("div",{className:"signup-container"},r.a.createElement("div",{className:"signup-header"}),r.a.createElement("div",{className:"signup-page"},r.a.createElement("div",{className:"form"},r.a.createElement("form",{className:"register-form"},r.a.createElement("input",{type:"text",placeholder:"name"}),r.a.createElement("input",{type:"password",placeholder:"password"}),r.a.createElement("input",{type:"text",placeholder:"email address"}),r.a.createElement("button",null,"create"),r.a.createElement("p",{className:"message"},"Already registered? ",r.a.createElement("a",{href:"/#"},"Sign In"))),r.a.createElement("form",{className:"login-form"},r.a.createElement("input",{type:"text",placeholder:"email"}),r.a.createElement("input",{type:"password",placeholder:"password"}),r.a.createElement("button",null,"Register")))))},k=a(84),C=a.n(k),w={getPlants:function(){return C.a.get("http://localhost:3004/api/plants/")},savePlants:function(e){return C.a.post("/api/plants",e)},deleteBook:function(e){return C.a.delete("/api/books/"+e)}},S=(a(399),a(204)),j=(a(401),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleIncrement=function(){if(a.state.count>a.state.stock)return alert("Out of Stock");a.setState({count:a.state.count+1})},a.handleDecrement=function(){a.state.count<=1?a.setState(function(e){return{counter:e.count-1}}):a.setState({count:a.state.count-1})},a.onInputChange=function(e){a.setState({count:e})},a.addToCart=function(){console.log("state",a.state);var e=a.state;N.setCart(e)},a.state=Object(S.a)({count:1},e),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"payment-container"},r.a.createElement("button",{className:"decrement",onClick:this.handleDecrement},"-"),r.a.createElement("input",{type:"text",value:this.state.count,onChange:function(t){return e.onInputChange(t.target.value)}}),r.a.createElement("button",{className:"increment",onClick:this.handleIncrement},"+")),r.a.createElement("button",{className:"add-to-cart",onClick:this.addToCart},"Add To Cart"))}}]),t}(r.a.Component)),x=a(85),D=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).toggle=function(){e.setState({isFlipped:!e.state.isFlipped})},e.state={isFlipped:!1},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"plant-container"},r.a.createElement(x.c,{flipOnHover:!1,flipOnClick:!1,flipDirection:"horizontal",ref:function(t){return e.flippyHorizontal=t}},r.a.createElement(x.b,{style:{padding:"0rem",boxShadow:"none"}},r.a.createElement("div",{className:"card"},r.a.createElement("button",{className:"toggle-style",onClick:function(){return e.flippyHorizontal.toggle()}},"Learn about ",this.props.plantName),r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{alt:this.props.plantName,src:this.props.image})),r.a.createElement("div",{className:"content"},r.a.createElement("p",null," ",this.props.plantName),r.a.createElement("p",null,"$",this.props.price),r.a.createElement(j,{key:this.props._id,id:this.props._id,image:this.props.image,plantName:this.props.plantName,price:this.props.price,stock:this.props.stock,description:this.props.description,water:this.props.water,sunlight:this.props.sunlight})))),r.a.createElement(x.a,{style:{backgroundColor:"#175852"}},r.a.createElement("a",{className:"toggle-style",onClick:function(){return e.flippyHorizontal.toggle()}},"Back"),r.a.createElement("div",{className:"back-container"},r.a.createElement("div",{className:"description"},this.props.description),r.a.createElement("p",{className:"water-sun"},this.props.sunlight),r.a.createElement("p",{className:"water-sun"},this.props.water)))))}}]),t}(r.a.Component),I=(a(405),function(e){var t=e.handleSearch;return r.a.createElement("div",{className:"wrap"},r.a.createElement("div",{className:"search"},r.a.createElement("input",{type:"text",onKeyUp:t,className:"searchTerm",placeholder:"What are you looking for?"}),r.a.createElement("button",{type:"submit",className:"searchButton"},r.a.createElement("i",{className:"fa fa-search"}))))}),P=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).loadPlants=function(){w.getPlants().then(function(e){return a.setState({plants:e.data,searchedPlants:e.data})}).catch(function(e){return console.log(e)})},a.state={searchedPlants:[],plants:[]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.loadPlants()}},{key:"handleSearch",value:function(e){var t=e.target.value,a=this.state.plants.filter(function(e){return-1!==e.plantName.toLowerCase().search(t.toLowerCase().replace(/[^a-zA-Z0-9]+/g,"-"))});this.setState({searchedPlants:a})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(I,{handleSearch:this.handleSearch.bind(this)}),r.a.createElement("div",{className:"content-wrapper"},0!==this.state.searchedPlants.length?this.state.searchedPlants.map(function(e){return r.a.createElement(D,{key:e._id,_id:e._id,image:e.image,plantName:e.plantName,price:e.price,stock:e.stock,description:e.description,water:e.water,sunlight:e.sunlight})}):"NO RESULTS"))}}]),t}(r.a.Component);l.a.render(r.a.createElement(function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"subtle-background"},r.a.createElement("div",{className:"wrapper"},r.a.createElement(b,null),r.a.createElement(o.a,{exact:!0,path:"/",component:P}),r.a.createElement(o.a,{exact:!0,path:"/about",component:y}),r.a.createElement(o.a,{exact:!0,path:"/signup",component:O}))))},null),document.querySelector("#root"))}},[[214,2,1]]]);
//# sourceMappingURL=main.335d97ec.chunk.js.map