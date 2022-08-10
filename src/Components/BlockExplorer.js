import React, { useState, useEffect } from "react";
import { Table , Divider,Container} from "semantic-ui-react";
import axios from "axios";

const TrainDataset = () => {

  const [blockchain, setBlockchain] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:3015/blockchain").then((response) => {
      setBlockchain(response.data.chain);
      console.log("Blockchain explorer " + JSON.stringify(response.data.chain));

    //   console.log(Object.values(trainPool))
    });
  }, []);

 
  
  


  return (
    <Container >
    
      <Divider horizontal>Blockchain Explorer</Divider>

      <Table fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Index</Table.HeaderCell>
            <Table.HeaderCell>Time Stamp</Table.HeaderCell>
            <Table.HeaderCell>Hash</Table.HeaderCell>
            <Table.HeaderCell>Next Validator</Table.HeaderCell>
            <Table.HeaderCell>Previous Block Hash</Table.HeaderCell>
            <Table.HeaderCell>Deadline</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
          {blockchain.map((row)=>(

        <Table.Body>
          <Table.Row>
            <Table.Cell >{row.index}</Table.Cell>
            <Table.Cell >{row.timstamp}</Table.Cell>
            <Table.Cell>{row.hash}</Table.Cell>
            <Table.Cell>{row.nextValidator}</Table.Cell>
            <Table.Cell>{row.previousBlockHash}</Table.Cell>
          </Table.Row>
        </Table.Body>
          ))}
      </Table>

      <Divider horizontal>Transaction Pool</Divider>
      <Table>
      <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Index</Table.HeaderCell>
            <Table.HeaderCell>Amount</Table.HeaderCell>
            <Table.HeaderCell>Sender</Table.HeaderCell>
            <Table.HeaderCell>Recipient</Table.HeaderCell>
          </Table.Row>
      </Table.Header>

      {blockchain.map((row,index)=>(
        row.transactions.map(e=>(
        <Table.Body>
          <Table.Row>
            <Table.Cell>{index+1}</Table.Cell>
            <Table.Cell>{e.amount}</Table.Cell>
            <Table.Cell>{e.sender}</Table.Cell>
            <Table.Cell>{e.recipient}</Table.Cell>
          </Table.Row>
        </Table.Body>
        ))
      ))}

      </Table>

      <Divider horizontal>Training Dataset Pool</Divider>

      <Table fixed>
      <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Index</Table.HeaderCell>
            <Table.HeaderCell>publicKey</Table.HeaderCell>
            <Table.HeaderCell>Train Dataset Address</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Deadline</Table.HeaderCell>
            <Table.HeaderCell>Flag</Table.HeaderCell>
          </Table.Row>
      </Table.Header>

      {blockchain.map((row,index)=>(
        row.trainDataTransaction.map(e=>(
        <Table.Body>
          <Table.Row>
            <Table.Cell>{index+1}</Table.Cell>
            <Table.Cell>{e.senderWallet}</Table.Cell>
            <Table.Cell>{e.datasetAddress}</Table.Cell>
            <Table.Cell>{e.description}</Table.Cell>
            <Table.Cell>{e.deadline}</Table.Cell>
            <Table.Cell>{e.flag}</Table.Cell>
          </Table.Row>
        </Table.Body>
        ))
      ))}

      </Table>

      <Divider horizontal>Testing Dataset Pool</Divider>
      <Table fixed>
      <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Index</Table.HeaderCell>
            <Table.HeaderCell>publicKey</Table.HeaderCell>
            <Table.HeaderCell>Train Dataset Address</Table.HeaderCell>
            <Table.HeaderCell>Test Dataset Address</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Deadline</Table.HeaderCell>
            <Table.HeaderCell>Test Dataset Acceptable</Table.HeaderCell>
            <Table.HeaderCell>Flag</Table.HeaderCell>
          </Table.Row>
      </Table.Header>

      {blockchain.map((row,index)=>(
        row.testDataTransaction.map(e=>(
        <Table.Body>
          <Table.Row>
            <Table.Cell>{index+1}</Table.Cell>
            <Table.Cell>{e.senderWallet}</Table.Cell>
            <Table.Cell>{e.trainDatasetAddress}</Table.Cell>
            <Table.Cell>{e.testDatasetAddress}</Table.Cell>
            <Table.Cell>{e.description}</Table.Cell>
            <Table.Cell>{e.deadline.deadline}</Table.Cell>
            <Table.Cell>{e.deadline.isAcceptable? "YES" : "NO"}</Table.Cell>
            <Table.Cell>{e.flag}</Table.Cell>
          </Table.Row>
        </Table.Body>
        ))
      ))}

      </Table>
      <br/><br/>
    </Container>
  );
};

export default TrainDataset;
