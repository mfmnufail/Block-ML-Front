import React, { useState, useEffect } from "react";
import { Button, Form, Input, Table , Divider, Message, Dropdown, Container} from "semantic-ui-react";
import axios from "axios";

const TestDataset = () => {
  const [trainDatasetAddress, setTrainDatasetAddress] = useState("");
  const [testDatasetAddress, setTestDatasetAddress] = useState("");
  const [description, setDescription] = useState("");
  const [flag, setFlag] = useState("");
  const [error, setError] = useState();
  const [note, setNote] = useState();
  const [testPool, setTestPool] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:3704/test/pool").then((response) => {
      setTestPool(Object.values(response.data));
      console.log(response.data);

    //   console.log(Object.values(trainPool))
    });
  }, []);

  const options = [
    { key: 'regression', text: 'Regression', value: 'regression' },
    { key: 'classification', text: 'Classification', value: 'classification' }
  ]
  
  const submitHandler=(event)=>{
    event.preventDefault();
    const data = {
      trainDatasetAddress: trainDatasetAddress,
      testDatasetAddress: testDatasetAddress,
      description: description,
      flag:  flag
    }

    console.log("The data :" + JSON.stringify(data))

    axios.post("http://localhost:3704/data/test", data)
    .catch(err => {
      setError(err.response.data.errors);
    });
    

  }

//   const deleteHandler=(id)=>{
//     axios.delete(`https://localhost:5001/student/${id}`)
//     .then((response) => {
//       console.log(response.data);

//     });
//   }



  return (
    <Container >
      <Form onSubmit={submitHandler}>
        <Form.Field>
          <label>Training dataset content hash from IPFS</label>
          {/* <input name="datasetAddress" placeholder="Training dataset content hash" onChange={(e)=> setDatasetAddress(e.target.value)} autoComplete="off" /> */}
          <Input name="trainDatasetAddress" label={`IPFS Hash`} placeholder="Training dataset content hash" onChange={(e)=>setTrainDatasetAddress(e.target.value)} autoComplete="off" />
        </Form.Field>
        <Form.Field>
          <label>Testing dataset content hash from IPFS</label>
          {/* <input name="datasetAddress" placeholder="Training dataset content hash" onChange={(e)=> setDatasetAddress(e.target.value)} autoComplete="off" /> */}
          <Input name="testDatasetAddress" label={`IPFS Hash`} placeholder="Testing dataset content hash" onChange={(e)=>setTestDatasetAddress(e.target.value)} autoComplete="off" />
        </Form.Field>
        <Form.Field>
          <label>Description of the test dataset</label>
          <input
            name="description"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            autoComplete="off"
          />
        </Form.Field>
        <Form.Field>
          <label>Type of Machine Learning problem</label>
          <Dropdown name="flag" placeholder='Flag' fluid  selection options={options} onChange={(e,data) => setFlag(data.value)} />
        </Form.Field>

        <Button primary type="submit">Submit</Button>
        {error && <Message negative>
          <Message.Header>{error}</Message.Header>
        </Message>}
      </Form>

      <Divider horizontal>Testing Dataset Pool</Divider>

      <Table fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>No</Table.HeaderCell>
            <Table.HeaderCell>Sender wallet key</Table.HeaderCell>
            <Table.HeaderCell>Ruputation</Table.HeaderCell>
            <Table.HeaderCell>Training Dataset Address</Table.HeaderCell>
            <Table.HeaderCell>Testing Dataset Address</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>ML Problem</Table.HeaderCell>
            <Table.HeaderCell>Deadline</Table.HeaderCell>
            <Table.HeaderCell>Acceptable</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>

          {testPool.map((row,index)=>(

          <Table.Row>
            <Table.Cell>{index+1}</Table.Cell>
            <Table.Cell >{row.senderWallet.publicKey}</Table.Cell>
            <Table.Cell >{row.senderWallet.reputation}</Table.Cell>
            <Table.Cell>{row.trainDatasetAddress}</Table.Cell>
            <Table.Cell>{row.testDatasetAddress}</Table.Cell>
            <Table.Cell>{row.description}</Table.Cell>
            <Table.Cell>{row.flag}</Table.Cell>
            <Table.Cell>{row.deadline.deadline}</Table.Cell>
            <Table.Cell>{row.deadline.isAcceptable ? "Yes" : "No"}</Table.Cell>
          </Table.Row>

          ))}


        </Table.Body>
      </Table>
    </Container>
  );
};

export default TestDataset;
