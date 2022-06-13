import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Modal,
  Visibility
} from "semantic-ui-react";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024
  }
});



const HomepageHeading = ({ mobile }) => (
  <Grid divided="vertically" style={{ marginTop: "150px" }}>
    <Grid.Row columns={2}>
      <Grid.Column>
        <Container style={{ padding: "50px 100px" }}>
          <Header as="h1" style={{ fontSize: "50px" }} textAlign="left">
            Let's Find that <br /> best candidate...
          </Header>
          <p style={{ textAlign: "left", fontWeight: "light" }}>
            Source, screen , rank, candidates
            <br />
            from multiple job boards, internal and external databases.
          </p>
          <Button
            floated="left"
            size="large"
            style={{
              background: "blue",
              color: "#FFFFFF",
              borderRadius: "20px",
              width: "200px"
            }}
          >
            Get Started
          </Button>
        </Container>
      </Grid.Column>
      <Grid.Column>
        <Image
          size="large"
          style={{ textAlign: "center", margin: "auto" }}
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.oasisalignment.com%2Fwp-content%2Fuploads%2F2018%2F07%2Fvideo-icon.png&f=1&nofb=1"
        />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);


class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Media greaterThan="mobile">
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <div
            textAlign="center"
            style={{ minHeight:700, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              secondary={!fixed}
              size="large"
            >
              <Container >
                <Menu.Item as="h1" position="left">
                  Expertia
                </Menu.Item>
                
                <Menu.Item position="right">
                  <Button
                    primary={fixed}
                    style={{
                      marginLeft: "0.5em",
                      background: "none",
                      borderRadius: "25px",
                      width: "150px"
                    }}
                  >
                    Solutions
                  </Button>

                  <Button
                    primary={fixed}
                    style={{
                      marginLeft: "0.5em",
                      background: "none",
                      borderRadius: "25px",
                      width: "150px"
                    }}
                  >
                    AboutUs
                  </Button>
                  <Button
                    primary={fixed}
                    style={{
                      marginLeft: "0.5em",
                      background: "none",
                      borderRadius: "25px",
                      width: "150px"
                    }}
                  >
                    Contact Us
                  </Button>
                  <Modal
                    dimmer="blurring"
                    size="mini"
                    closeIcon
                    style={{ height: "500px", borderRadius: "0px" }}
                    trigger={
                      <Button
                        primary={fixed}
                        style={{
                          marginLeft: "0.5em",
                          background: "blue",
                          color: "white",
                          borderRadius: "25px",
                          width: "150px"
                        }}
                      >
                        Sign Up
                      </Button>
                    }
                    header="Reminder!"
                  >
                    <Container style={{ padding: "25px" }}>
                      <div style={{ marginTop: "50px" }}>
                        <Header>Great!</Header>
                        <Header as="h1">
                          What are you <br /> looking for ?
                        </Header>
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          bottom: "20%",
                          left: "20%"
                        }}
                      >
                        <Link to="/dashboard">
                          <Button
                            style={{
                              borderRadius: "21px",
                              width: "200px",
                              marginBottom: "20px",
                              fontSize: "17px",
                              fontWeight: "bold",
                              background: "blue",
                              color: "#FFFFFF"
                            }}
                          >
                            To Hire
                          </Button>
                        </Link>
                        <br />
                        <Button
                          style={{
                            borderRadius: "21px",
                            width: "200px",
                            fontSize: "17px",
                            fontWeight: "bold",
                            background: "green",
                            color: "#FFFFFF"
                          }}
                        >
                          To Apply
                        </Button>
                        <br />
                        <br />
                        <a
                          href="#"
                          style={{
                            textAlign: "center",
                            marginLeft: "20px",
                            textDecoration: "underline"
                          }}
                        >
                          I already have an account
                        </a>
                      </div>
                    </Container>
                  </Modal>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </div>
          <p style={{ textAlign: "center", fontSize: "25px" }}>with expertia</p>
        </Visibility>

        {children}
      </Media>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Media as={Sidebar.Pushable} at="mobile">
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as="a" active>
              Home
            </Menu.Item>
            <Menu.Item as="a">Work</Menu.Item>
            <Menu.Item as="a">Company</Menu.Item>
            <Menu.Item as="a">Careers</Menu.Item>
            <Menu.Item as="a">Log in</Menu.Item>
            <Menu.Item as="a">Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 350, padding: "1em 0em" }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  <Menu.Item position="right">
                    <Button as="a" inverted>
                      Log in
                    </Button>
                    <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
 
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h1" style={{ fontSize: "50px" }}>
              Source Widely,
            </Header>

            <p style={{ marginTop: "50px", fontWeight: "lighter" }}>
              Automatically source from your company <br /> database pr explore
              the existing job <br /> platforms for the best talent out there...
            </p>
            <a href="#">Know More</a>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Header as="h1" style={{ fontSize: "50px" }}>
              Source Widely,
            </Header>

            <p style={{ marginTop: "50px", fontWeight: "lighter" }}>
              Automatically source from your company <br /> database pr explore
              the existing job <br /> platforms for the best talent out there...
            </p>
            <a href="#">Know More</a>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

  </ResponsiveContainer>
);

export default HomepageLayout
