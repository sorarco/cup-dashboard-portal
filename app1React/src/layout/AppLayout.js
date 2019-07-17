import React, { Fragment, Component } from "react";
import DrawerLeft from "./DrawerLeft";

class AppLayout extends Component {

    // home1 = () => {
    //     return (
    //         <div style={{ marginTop: 100 }}>
    //             <h2>Home 1</h2>
    //             <RouterLink to="/home2">two</RouterLink>
    //         </div>
    //     );
    // }
    // home2 = () => {
    //     return (
    //         <div style={{ marginTop: 100 }}>
    //             <h2>Home 2</h2>
    //             <RouterLink to="/home3">two</RouterLink>
    //         </div>
    //     );
    // }
    // home3 = () => {
    //     return (
    //         <div style={{ marginTop: 100 }}>
    //             <h2>Home 3</h2>
    //         </div>
    //     );
    // }
    // switchRoutes = (

    //     <Switch>
    //         <Route exact path="/" component={this.home1} />
    //         <Route exact path="/home2" component={this.home2} />
    //         <Route exact path="/home3" component={this.home3} />
    //     </Switch>
    // );

    componentDidMount() {
        //check onAuthChange user is logged
    }

    render() {
        return (
            <div>
                <DrawerLeft />

                {/* <Container maxWidth="lg">
                    <Grid item xs={12}>
                        <Paper >
                            {this.switchRoutes}
                        </Paper>
                    </Grid>
                </Container> */}
            </div>
        );
    }
}

export default AppLayout;
