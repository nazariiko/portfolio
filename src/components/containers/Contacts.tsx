import React from 'react';
import styled from 'styled-components';
import NavigationItem from '../NavigationItem';

const StyledContacts = styled.div`
  width: 100%;
  margin-bottom: 100px;

  .container {
    max-width: 1170px;
    margin: 0 auto;
    padding: 0px 20px;

    .wrapper {
      display: flex;
      flex-direction: column;
    }
  }
`;

const ContactsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-weight: 500;
    font-size: 22px;
    line-height: 34px;
    text-align: center;
    letter-spacing: 0.025em;
    color: ${(props) => props.theme.text};
    margin-bottom: 10px;
  }

  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.025em;
    color: ${(props) => props.theme.text};
    margin-bottom: 40px;
    border-bottom: 1px dashed ${(props) => props.theme.secondary};
  }

  q {
    font-weight: 500;
    font-size: 22px;
    line-height: 34px;
    text-align: center;
    letter-spacing: 0.025em;
    color: ${(props) => props.theme.text};
    margin-bottom: 10px;
  }

  span {
    font-weight: 500;
    font-size: 22px;
    line-height: 34px;
    text-align: center;
    letter-spacing: 0.025em;
    color: ${(props) => props.theme.primary};
  }
`;

const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;

  .leftRect {
    width: 340px;
    height: 5px;
    background: ${(props) => props.theme.backgroundLighter};
  }

  .rigthRect {
    width: 340px;
    height: 5px;
    background: ${(props) => props.theme.backgroundLighter};
  }
`;

const Contacts = () => {
  return (
    <StyledContacts id="contacts">
      <div className="container">
        <div className="wrapper">
          <Heading>
            <div className="leftRect"></div>
            <NavigationItem number={'04.'} text={'Contacts'} fontSize={'26px'} />
            <div className="rigthRect"></div>
          </Heading>
          <ContactsContent>
            <h3>You can find me here:</h3>
            <p>nazarii.dev@gmail.com</p>
            <q>
              "Programming isn't about what you know; <br /> it's about what you can figure out."
            </q>
            <span>Chris Pine</span>
          </ContactsContent>
        </div>
      </div>
    </StyledContacts>
  );
};

export default React.memo(Contacts);
