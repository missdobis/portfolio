import React, { Component } from 'react';
import { Cell, Grid, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
    render() {
        return (
          <div className="contact-body">
            <Grid className="contact-grid">
              <Cell col={6}>
                <h2>Adaobi Ezenwa</h2>
                <img
                  src="./img/dobis.jpg"
                  alt="avatar"
                  style={{ height: "250px" }}
                />
                <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
                  Adaobi is a Software Developer who is also a Hardware
                  Engineer. Currently working as a Hardware Engineer at Hinckley
                  Associates and interning as a FrontEnd Web Developer at Dev_Careers 
                  with both companies based in Lagos, Nigeria.
                </p>
              </Cell>
              <Cell col={6}>
                <h2>Contact Me</h2>
                <hr />
                <div className="contact-list">
                  <List>
                    
                    <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Arvo'}}>
                          <i className="fa fa-phone" aria-hidden="true"/>
                        +234 8104223355
                      </ListItemContent>
                    </ListItem>
                    
                    <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Arvo'}}>
                          <i className="fa fa-twitter" aria-hidden="true"/>
                        @missdobis
                      </ListItemContent>
                    </ListItem>
                    
                    <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Arvo'}}>
                          <i className="fa fa-skype" aria-hidden="true"/>
                        @dobisdaniel
                      </ListItemContent>
                    </ListItem>
                    
                    <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Arvo'}}>
                          <i className="fa fa-envelope-square" aria-hidden="true"/>
                        missdobis@gmail.com
                      </ListItemContent>
                    </ListItem>
                    
                  </List>
                </div>
              </Cell>
            </Grid>
          </div>
        );
    }
}

export default Contact;