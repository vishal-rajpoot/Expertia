import React, { Fragment, useState } from "react";
import {
  Container,
  Grid,
  Card,
  Segment,
  Tab,
  Header,
  Button,
  Menu,
  Image,
  Icon,
  List
} from "semantic-ui-react";
import SampleChart from "../components/Chart";
import PageHeader from "../components/PageHeader";
import Base from "../Core/Base";
import DummyUrl from "../assets/Dummy.png";


const DashboardMain = props => {
  const [graph, showGraph] = useState(false);
  const [activeItem, setMenu] = useState("Product");
  const cards = [
    { value1: "Created", value2: "85" },
    { value1: "Sourced", value2: "380" },
    { value1: "Shortlisted", value2: "39" },
    { value1: "Hired", value2: "32" }
  ];
  const Tab1Content = (
    <>
      <Container>
        <Card.Group itemsPerRow="3" stackable>
          {cards.map((value, index) => {
            return (
              <>
                <Card
                  style={{
                    minHeight: "170px",
                    paddingTop: "0px",
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  }}
                >
                  <Card.Content style={{ paddingTop: "5px" }}>
                    <Card.Meta
                      style={{
                        fontWeight: "lighter",
                        color: "silver",
                        fontSize: "12px",
                        marginBottom: "10px"
                      }}
                    >
                      Created on this and this{" "}
                      <span style={{ fontWeight: "bold" }}>
                        12th april 2021
                      </span>
                    </Card.Meta>
                    <Grid columns="2">
                      <Grid.Row>
                        <Grid.Column>
                          <h3>
                            <p
                              style={{
                                fontWeight: "lighter",
                                color: "silver",
                                fontSize: "12px"
                              }}
                            >
                              role
                            </p>
                            Program <br /> Manager
                          </h3>
                        </Grid.Column>
                        <Grid.Column>
                          <p
                            style={{
                              fontWeight: "lighter",
                              color: "silver",
                              fontSize: "12px"
                            }}
                          >
                            sourced
                          </p>
                          <div style={{ marginTop: "20px" }}>
                            <span style={{ fontSize: "50px" }}>07</span> &nbsp;{" "}
                            <span>/ 10</span>
                          </div>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column style={{ paddingLeft: "10px" }}>
                          <span style={{ fontSize: "10px" }}>
                            HR POC : &nbsp;{" "}
                            <span style={{ fontWeight: "bold" }}>
                              Sahil Sikarwar
                            </span>
                          </span>
                        </Grid.Column>
                        <Grid.Column style={{ padding: "0px" }}>
                          <span style={{ fontSize: "10px" }}>
                            <Button
                              style={{
                                borderRadius: "20px",
                                background: "blue",
                                padding: "7px",
                                width: "100px",
                                color: "#FFFFFF",
                                fontSize: "12px"
                              }}
                              onClick={() => showGraph(true)}
                            >
                              Details
                            </Button>
                          </span>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Card.Content>
                </Card>
              </>
            );
          })}
          <Card style={{ minHeight: "170px" }}>
            <Menu.Menu
              style={{ position: "absolute", top: "32%", left: "32%" }}
            >
              <Icon
                name="plus"
                circular
                size="large"
                style={{
                  background: "blue",
                  color: "#FFFFFF",
                  marginLeft: "35px"
                }}
              />{" "}
              <span style={{ display: "flex" }}>create new position</span>
            </Menu.Menu>

          </Card>
        </Card.Group>
      </Container>
    </>
  );
  const ListMain = (
    <>
      <List divided relaxed>
        <List.Item
          style={{
            boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px", padding : "15px",
            borderRadius : '7px'
          }}
        >
          <Image src={DummyUrl} size="mini" circular verticalAlign="middle" />
          <List.Content>
            <List.Header as="a">Vishal Rajput</List.Header>
            <List.Description as="a">7 years experience</List.Description>
          </List.Content>
        </List.Item>
      </List>
      <SampleChart />
    </>
  );

  const handleItemClick = (e, { name }) => setMenu(name);
  const tabsName = [
    "Product",
    "Engineering",
    "Design & Research",
    "Marketing",
    "Sales",
    "Support"
  ];
  const TabsToShow = () => (
    <>
      <div>
        <Menu pointing secondary>
          {tabsName.map(tab => {
            return (
              <>
                <Menu.Item
                  name={tab}
                  active={activeItem === tab}
                  onClick={handleItemClick}
                />
              </>
            );
          })}
          <Menu.Menu position="right">
            <Icon
              name="plus"
              circular
              style={{ background: "blue", color: "#FFFFFF" }}
            />
          </Menu.Menu>
        </Menu>

        <Container style={{ padding: "15px" }}>
          {graph ? ListMain : Tab1Content}
        </Container>
      </div>
    </>
  );

  const nextDash = (
    <>
      <Container style={{ marginBottom: "20px" }}>
        <Segment>
          <Container>
            <Header as="h3">
              <span style={{ marginLeft: "20px" }}> Overview </span>
              <div style={{ float: "right" }}>
                <Button style={{ background: "none" }}>
                  <Icon name="sort amount up" />
                  Sort
                </Button>
                <Button icon="filter" style={{ background: "none" }}>
                  <Icon name="filter" />
                  filter
                </Button>
              </div>
            </Header>
          </Container>
          <br />
          <Container style={{ padding: "0px" }}>{TabsToShow()}</Container>
        </Segment>
      </Container>
    </>
  );
  const cardMap = (
    <>
      {cards.map((value, index) => {
        return (
          <>
            <Card style={{ minHeight: "110px", border: "2px solid #5DA3FA" }}>
              <Card.Content textAlign="center" style={{ padding: "30px" }}>
                <h2
                  style={{
                    fontSize: "25px",
                    fontWeight: "lighter",
                    color: "silver"
                  }}
                >
                  {value.value1}
                </h2>
                <span style={{ fontSize: "30px", fontWeight: "bold" }}>
                  {value.value2}
                </span>
              </Card.Content>
            </Card>
          </>
        );
      })}
    </>
  );
  return (
    <Fragment>
      <Base>
        <PageHeader />
        <Container>
          <Card.Group stackable itemsPerRow={4}>
            {cardMap}
          </Card.Group>          
        </Container>
        <Container style={{ marginTop: "30px" }}>{nextDash}</Container>
      </Base>
    </Fragment>
  );
};

export default DashboardMain;
