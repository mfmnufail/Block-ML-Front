import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Table , Divider, Message, Dropdown, Container} from "semantic-ui-react";
import axios from 'axios';
import { ResponsiveLine } from '@nivo/line'
import Consensus from './Graphs/Consensus';
import Difficulty from './Graphs/Difficulty';
import SmartContractCost from './Graphs/SmartContractCost';
import MultipleBlockchain from './Graphs/MultipleBlockchain';

const Simulation = () => {

const [blockchain, setBlockchain] = useState([]);
   
useEffect(() => {
    axios.get("http://localhost:3006/blockchain").then((response) => {
      setBlockchain(response.data.chain);
   })
  }, []);

 return (
    <div style={{"height":"500px"}}>

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
        <Divider horizontal>Comparison between Consensus Algorithm</Divider>
        <Consensus/>
        <Divider horizontal>Blockchahin Difficulty vs Block Rate </Divider>
        <Difficulty/>
        <Divider horizontal> Smart Contract Number of Bidding vs Cost </Divider>
        <SmartContractCost/>
        <Divider horizontal> Block creation time for different consensus </Divider>
        <MultipleBlockchain/>
    </div>
  )
}

export default Simulation