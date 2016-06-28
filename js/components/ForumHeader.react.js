var ForumHeader = React.createClass({
    
    render: function() {
        
       // console.log(this.props.allAnswers);
        
        return (
             <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a className="navbar-brand" href="#">
                    React Forum
                  </a>
                </div>
              </div>
            </nav>

            );




    //     React.createElement(
    //         "nav", {
    //             className: "navbar navbar-default"
    //         },
    //         React.createElement(
    //             "div", {
    //                 className: "container-fluid"
    //             },
    //             React.createElement(
    //                 "div", {
    //                     className: "navbar-header"
    //                 },
    //                 React.createElement(
    //                     "a", {
    //                         className: "navbar-brand",
    //                         href: "#"
    //                     },
    //                     "React Forum"
    //                 )
    //             )
    //         )
    //     );
        
    // }

}});