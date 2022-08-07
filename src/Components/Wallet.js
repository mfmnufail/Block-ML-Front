import React, { useState, useEffect } from "react";
import { Button, Form, Input, Table , Divider, Message, Dropdown, Container} from "semantic-ui-react";
import axios from "axios";

const Wallet = () => {
  const [wallet, setWallet] = useState({});


  useEffect(() => {
    axios.get("http://localhost:3704/wallet").then((response) => {
        setWallet(response.data);
      console.log(wallet)

    //   console.log(Object.values(trainPool))
    });
  }, []);

  
  
  return (
    <Container >
    
      <Divider horizontal>Wallet Details</Divider>

      <Table fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Wallet private key</Table.HeaderCell>
            <Table.HeaderCell>Wallet public key</Table.HeaderCell>
            <Table.HeaderCell>Reputation</Table.HeaderCell>
            <Table.HeaderCell>Balance</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>



          <Table.Row>
            <Table.Cell >{wallet.keypair}</Table.Cell>
            <Table.Cell>{wallet.publicKey}</Table.Cell>
            <Table.Cell>{wallet.reputation}</Table.Cell>
            <Table.Cell>{wallet.balance}</Table.Cell>
          </Table.Row>




        </Table.Body>
      </Table>
    </Container>
  );
};

export default Wallet;
