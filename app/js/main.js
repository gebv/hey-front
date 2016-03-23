var m = require("mithril")

m.route.mode = "pathname";

m.route(document.body, "/", {
    "/": m.component({view: function(c, args){return <h1>Hello</h1> }})
})