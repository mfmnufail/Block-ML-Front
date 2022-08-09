import React, { useState, useEffect } from "react";
import {Label, TextArea, Button, Form, Input, Table , Divider, Message, Dropdown, Container} from "semantic-ui-react";
import axios from "axios";

const FavouriteModel = () => {
  const [datasetAddress, setDatasetAddress] = useState("");
  const [modelAddress, setModelAddress] = useState("");
  const [testPerformance, setTestPerformance] = useState("");
  const [classification, setClassification] = useState("");
  const [regression, setRegression] = useState("");
  const [flag, setFlag] = useState("");
  const [error, setError] = useState();
  const [testfavModelPool, testsetFavModelPool] = useState([]);
  const [favModelPool, setFavModelPool] = useState([]);

  

  useEffect(() => {
    axios.get("http://localhost:3006/favmodel/pool").then((response) => {
        testsetFavModelPool(Object.values(response.data));
      console.log(Object.values(response.data));
      setFavModelPool(testfavModelPool)

      console.log("favourite " + JSON.parse(JSON.stringify(favModelPool)).transaction.datasetAddress)

    //   console.log(Object.values(trainPool))
    });
  }, []);

  const options = [
    { key: 'regression', text: 'Regression', value: 'regression' },
    { key: 'classification', text: 'Classification', value: 'classification' }
  ]
  
  const submitHandler=(event)=>{
    // event.preventDefault();
    
    flag==="regression" && setRegression(testPerformance.regression_performance.data.metrics.current.mean_abs_error);
    flag==="classification" && setClassification(testPerformance.classification_performance.data.metrics.current.accuracy);
    const data = {
      datasetAddress: datasetAddress,
      modelAddress: modelAddress,
      flag:  flag,
      performance: flag==="regression" ? parseFloat(regression) : parseFloat(classification)
    }

    if(performance != null){

      axios.post("http://localhost:3006/favmodel", data)
    }
    
    console.log("The data :" + JSON.stringify(data))

    // .catch(err => {
    //   setError(err.response.data.errors);
    // });
    

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
          <Input name="datasetAddress" label={`IPFS Hash`} placeholder="Training dataset content hash" onChange={(e)=>setDatasetAddress(e.target.value)} autoComplete="off" />
        </Form.Field>
        <Form.Field>
          <label>Model content hash from IPFS</label>
          {/* <input name="datasetAddress" placeholder="Training dataset content hash" onChange={(e)=> setDatasetAddress(e.target.value)} autoComplete="off" /> */}
          <Input name="modelAddress" label={`IPFS Hash`} placeholder="Model content hash" onChange={(e)=>setModelAddress(e.target.value)} autoComplete="off" />
        </Form.Field>
      
        <Form.Field>
          <label>Type of Machine Learning problem</label>
          <Dropdown name="flag" placeholder='Flag' fluid  selection options={options} onChange={(e,data) => setFlag(data.value)} />
        </Form.Field>

        <Form.Field
          name="performance"
          control={TextArea}
          label=' Past the JSON result from Evidently AI'
          placeholder='Tell us more about you...'
          onChange={(e) =>setTestPerformance(JSON.parse(e.target.value))}
        /> 

        {/* <p>{JSON.stringify(regression)}</p>
        <p>{JSON.stringify(classification)}</p> */}

        <Label>
          {flag==="regression" &&  <Label.Detail>Mean Absolut Error : {regression}</Label.Detail>}
          {flag==="classification" &&  <Label.Detail>Accuracy : {classification}</Label.Detail>}
        </Label> 
        <br/>
        <Button primary type="submit">Submit</Button>
        {error && <Message negative>
          <Message.Header>{error}</Message.Header>
        </Message>}
      </Form>

      <Divider horizontal>Favourite Model Pool</Divider>

      <Table fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>No</Table.HeaderCell>
            <Table.HeaderCell>Sender wallet key</Table.HeaderCell>
            <Table.HeaderCell>Training Dataset Address</Table.HeaderCell>
            <Table.HeaderCell>ML Problem</Table.HeaderCell>
            <Table.HeaderCell>Merkle Root Hash</Table.HeaderCell>
            {/* <Table.HeaderCell>Acceptable</Table.HeaderCell> */}
          </Table.Row>
        </Table.Header>


        <Table.Body>

        {testfavModelPool.map((row,index) =>(

          <Table.Row>
            <Table.Cell>{index+1}</Table.Cell> 
            <Table.Cell >{row.publickey}</Table.Cell> 
             <Table.Cell>{row.datasetAddress}</Table.Cell> 
            <Table.Cell>{row.flag}</Table.Cell>
            <Table.Cell>{row.merkleHash}</Table.Cell> 
           
          </Table.Row>

        ))} 


        </Table.Body>
      </Table>

      <Divider horizontal>Models & Performance</Divider>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Model Address</Table.HeaderCell>
            <Table.HeaderCell>Model Performance</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
        {testfavModelPool.map((row,index) =>(
          <>
            <Table.Row>

            <Table.HeaderCell>Public Key - {row.publickey}</Table.HeaderCell>
          </Table.Row>

          {Object.keys(row.models).map((e,index)=>(
            // Object.values(row.transaction.models).map(b=>(
              <>
           

          <Table.Row>

            <Table.Cell>{e}</Table.Cell>
            <Table.Cell>{Object.values(row.models)[index]}</Table.Cell>
          </Table.Row>
          </>

          ))}
  
          </>
        
          ))} 
        </Table.Body>
      </Table>
    </Container>
  );
};

export default FavouriteModel;
