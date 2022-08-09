import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Container, Divider, Form, Icon, Input, Label, Table } from 'semantic-ui-react'

const DeployContract = () => {

    const[privateKey, setPrivateKey] = useState("")
    const[accounts, setAccounts] = useState("")
    const[biddingTime, setBiddingTime] = useState("")
    const[blockHash, setBlockHash] = useState("")
    const[ipfsHash, setIpfsHash] = useState("")
    const[transactionHash, setTransactionHash] = useState("")
    const[contractAddress, setContractAddress] = useState("")
    const[contractPool, setContractPool] = useState([])

    useEffect(() => {
      axios.get("http://localhost:3006/blockchain").then((response) => {
        setContractPool(response.data.chain);
        // console.log(response.data);
  
      //   console.log(Object.values(trainPool))
      });
    }, []);



    
    async function requestAccount() {
        const account = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccounts(account[0]);
      }

      useEffect(() => {
        requestAccount();
      }, []);




    const submitHandler=(event)=>{
        event.preventDefault();
        const data = {
          MNEMONIC: privateKey,
          account: accounts,
          biddingTime:  parseInt(biddingTime),
          blockHash: blockHash,
          ipfsHash: ipfsHash
        }
    
        console.log("The data :" + JSON.stringify(data))
    
        axios.post("http://localhost:3006/contract", data)
        .then((response)=>{
            setContractAddress(response.data.contractAddress)
            setTransactionHash(response.data.transactionHash)

            console.log("contract address " + contractAddress)
            console.log("transaction hash " + transactionHash)
        })
        // .catch(err => {
        //   setError(err.response.data.errors);
        // });
        
    
      }


  return (
    <Container>

    <Form onSubmit={submitHandler}>
        <Form.Field>
          <label>Private Key</label>
          {/* <input name="datasetAddress" placeholder="Training dataset content hash" onChange={(e)=> setDatasetAddress(e.target.value)} autoComplete="off" /> */}
          <Input name="privateKey" label={`Private Key`} placeholder="Private Key" onChange={(e)=>setPrivateKey(e.target.value)} autoComplete="off" />
        </Form.Field>
        {/* <Form.Field>
          <label>Account address</label>
          <Label>
            <Icon name='user circle' /> {accounts}
        </Label>
        </Form.Field> */}
        <Form.Field>
          <label>Set the bidding time limit</label>
          {/* <input name="datasetAddress" placeholder="Training dataset content hash" onChange={(e)=> setDatasetAddress(e.target.value)} autoComplete="off" /> */}
          <Input name="biddingTime" label={`Bidding Time`} placeholder="seconds" onChange={(e)=>setBiddingTime(e.target.value)} autoComplete="off" />
        </Form.Field>
        <Form.Field>
          <label>Block hash </label>
          {/* <input name="datasetAddress" placeholder="Training dataset content hash" onChange={(e)=> setDatasetAddress(e.target.value)} autoComplete="off" /> */}
          <Input name="blockHash" label={`Block Hash`} placeholder="Block hash" onChange={(e)=>setBlockHash(e.target.value)} autoComplete="off" />
        </Form.Field>
        <Form.Field>
          <label>Dataset IPFS hash </label>
          {/* <input name="datasetAddress" placeholder="Training dataset content hash" onChange={(e)=> setDatasetAddress(e.target.value)} autoComplete="off" /> */}
          <Input name="ipfsHash" label={`IPFS Hash`} placeholder="Dataset IPFS Hash" onChange={(e)=>setIpfsHash(e.target.value)} autoComplete="off" />
        </Form.Field>
      
       

        <Button primary type="submit">Deploy</Button>
        {/* {error && <Message negative>
          <Message.Header>{error}</Message.Header>
        </Message>} */}

        <Divider/>
        <Label>
            <Icon name='send' /> Transaction Hash: {transactionHash}
        </Label>
        <br/>
        <br/>
        <Label>
            <Icon name='clone' /> Contract Address: {contractAddress}
        </Label>
        <Divider/>

      </Form>


      <Divider horizontal>Contract Pool</Divider>


      <Table fixed>
      <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Index</Table.HeaderCell>
            <Table.HeaderCell>Public Key</Table.HeaderCell>
            <Table.HeaderCell>Block Hash</Table.HeaderCell>
            <Table.HeaderCell>Transaction Hash</Table.HeaderCell>
            <Table.HeaderCell>Contract Address</Table.HeaderCell>
            <Table.HeaderCell>Start Time</Table.HeaderCell>
            <Table.HeaderCell>End Time</Table.HeaderCell>
          </Table.Row>
      </Table.Header>

      {contractPool.map((row,index)=>(
        row.contractTransactions.map(e=>(

        <Table.Body>
          <Table.Row>
            <Table.Cell>{index+1}</Table.Cell>
            <Table.Cell>{e.publickey}</Table.Cell>
            <Table.Cell>{e.blockHash}</Table.Cell>
            <Table.Cell>{e.transactionHash}</Table.Cell>
            <Table.Cell>{e.contractAddress}</Table.Cell>
            {/* <Table.Cell>{Math.floor(e.startTime/1000)}</Table.Cell>
            <Table.Cell>{e.startTime + e.biddingTime*1000}</Table.Cell> */}
            <Table.Cell>{new Date(e.startTime).getHours()}:{new Date(e.startTime).getMinutes()}:{new Date(e.startTime).getSeconds()}</Table.Cell>
            <Table.Cell>{new Date(e.startTime + e.biddingTime*1000).getHours()}:{new Date(e.startTime + e.biddingTime*1000).getMinutes()}:{new Date(e.startTime + e.biddingTime*1000).getSeconds()}</Table.Cell>
          </Table.Row>
        </Table.Body>
        ))
      ))}

      </Table>
    </Container>
  )
}

export default DeployContract