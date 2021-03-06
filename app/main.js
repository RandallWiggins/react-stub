require('./style/main.scss');

import React from 'react';
import Router from 'react-router';
const {
   Route, RouteHandler, Link, DefaultRoute, NotFoundRoute, Location, State
} = Router;

import classnames from 'classnames';

const TopLevelNavigation = React.createClass({
   mixins: [State],
   render: function() {
      return <div><header>
         <ul>
            { this.props.topLevelNav.map((item)=>{
               return <li key={item.route} className={classnames({'active':this.context.router.isActive(item.route)})}>
                     <Link key={item.route} to={item.route}>{item.name}</Link>
                     </li>;
            })}
         </ul>
        </header>
        <RouteHandler/>
        </div>
   }
});
const Home = React.createClass({
   mixins: [Router.State],
   render() {
      return <section><h3>Home</h3>
      <article dangerouslySetInnerHTML={{__html: require('./home.html')}}/>
      </section>}
})

const Page2 = React.createClass({
   mixins: [Router.State],
   render() {
      return <section><h3>Page2</h3>
      <article dangerouslySetInnerHTML={{__html: require('./fring.html')}}/>
      </section>;
   }
})

const Page3 = React.createClass({
   mixins: [Router.State],
   render() {
      return <section><h3>Page3</h3>
      <article dangerouslySetInnerHTML={{__html: require('./wizard.html')}}/>
      </section>;
   }
})

const NotFound = React.createClass({
   mixins: [Router.State],
   render() {
      return <div>not found: {this.getPath()}</div>
   }
});

var routes = (
   <Route>
      <Route path="/" name="topNav" handler={TopLevelNavigation}>
         <Route name="home" path="/" handler={Home}/>
         <Route name="page2" handler={Page2}/>
         <Route name="page3" handler={Page3}/>
      </Route>
      <NotFoundRoute handler={NotFound}/>
   </Route>
);

Router.run(routes, function(MatchingComponent) {
         React.render( < MatchingComponent {... {
                  topLevelNav: [{
                     route: 'home',
                     name: 'Home'
                  }, {
                     route: 'page2',
                     name: 'Page Two'
                  }, {
                     route: 'page3',
                     name: 'Page Three'
                  }]
               }
            }
            />, document.body);
         });
