import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { parseEther } from "@ethersproject/units";
import Auction from "./Auction.json";
import {
  Button,
  Divider,
  Header,
  Icon,
  Input,
  Label,
} from "semantic-ui-react";
import DeployContract from "./DeployContract";

// const auctionAddress = '0xe6F77402Ba3e5013be10FB0Af63D148B6A9Dd181';
const emptyAddress = "0x0000000000000000000000000000000000000000";

// display account details
function SmartContract() {
  
  const [disable, setDisable] = useState(false);
  const [show, setShow] = useState(false);
  const [account, setAccount] = useState("");
  const [auctionAddress, setAuctionAddress] = useState("");
  const [amount, setAmount] = useState(0);
  const [isOwner, setIsOwner] = useState("");
  const [highestBidder, setHighestBidder] = useState("");

  const [transactionHash, setTransactionHash] = useState("");
  const [ipfsHash, setIpfsHash] = useState("");

  async function initializeProvider() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();
    return new ethers.Contract(auctionAddress, Auction, signer);
  }

  async function requestAccount() {
    const account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(account[0]);
  }

  async function fetchHighestBidder() {
    if (typeof window.ethereum !== "undefined") {
      const contract = await initializeProvider();
      try {
        const highestBidder = await contract.fetchHighestBidder();
        // const { bidAmount, bidder } = highestBid;

        // Convert amount from Wei to ether and round to 4 decimals
        // setHighestBid(parseFloat(formatEther(bidAmount.toString())).toPrecision(4));
        setHighestBidder(highestBidder.toLowerCase());
      } catch (e) {
        console.log("error fetching highest bidder: ", e);
      }
    }
  }

  async function fetchTransactionHash() {
    if (typeof window.ethereum !== "undefined") {
      const contract = await initializeProvider();
      try {
        const transactionHash = await contract.fetchTransactionHash();
        setTransactionHash(transactionHash);
      } catch (e) {
        console.log("error fetching transaction hash: ", e);
      }
    }
  }

  async function fetchIpfsHash() {
    if (typeof window.ethereum !== "undefined") {
      const contract = await initializeProvider();
      try {
        const ipfsHash = await contract.fetchIpfsHash();
        setIpfsHash(ipfsHash);
      } catch (e) {
        console.log("error fetching IPFS hash: ", e);
      }
    }
  }

  // async function fetchCurrentCarDetails() {
  //   if (typeof window.ethereum !== 'undefined') {
  //     const contract = await initializeProvider();
  //     try {
  //       const car = await contract.fetchCurrentCarDetails();
  //       setCurrentCar(new Car (car.make, car.model, car.year, car.colour));
  //     } catch (e) {
  //       console.log('error fetching car details: ', e);
  //     }
  //   }
  // }

  // async function fetchMyBid() {
  //   if (typeof window.ethereum !== 'undefined') {
  //     const contract = await initializeProvider();
  //     try {
  //       console.log("mybid: ", await account)
  //       const myBid = await contract.bids(account);
  //       setMyBid(parseFloat(formatEther(myBid.toString())));
  //     } catch (e) {
  //       console.log('error fetching my bid: ', e);
  //     }
  //   }
  // }

  // async function fetchAllBids() {
  //   if (typeof window.ethereum !== 'undefined') {
  //     const contract = await initializeProvider();
  //     try {

  //     } catch (e) {
  //       console.log('error fetching all bids: ', e);
  //     }
  //   }
  // }

  async function fetchOwner() {
    console.log("calling fetch owner");
    // if (typeof window.ethereum !== 'undefined') {
    const contract = await initializeProvider();
    console.log("contract", contract);
    try {
      console.log("setting");
      const owner = await contract.getOwner();
      setIsOwner(owner);
    } catch (e) {
      console.log("error fetching owner: ", e);
    }
    // }
  }

  async function endAuction() {
    if (typeof window.ethereum !== "undefined") {
      const contract = await initializeProvider();
      console.log("contract", contract);
      try {
        await contract.auctionEnd();
        fetchHighestBidder();
      } catch (e) {
        console.log("error ending auction: ", e);
      }
    }
  }

  async function submitBid(event) {
    event.preventDefault();
    if (typeof window.ethereum !== "undefined") {
      const contract = await initializeProvider();
      try {
        // user inputs amount in terms of ether, conver tto wei
        const wei = parseEther(amount);
        await contract.bid({ value: wei });

        // wait for smart contract to emit LogBid event then update component
        // contract.on('LogBid', (_, __) => {
        //   fetchMyBid();
        //   fetchHighestBid();
        // });
      } catch (e) {
        console.log("error making bid: ", e);
      }
    }
  }

  async function withdraw() {
    console.log("attempting to withdraw");
    if (typeof window.ethereum !== "undefined") {
      const contract = await initializeProvider();
      // contract.on('LogWithdrawal', (_) => {
      //   fetchMyBid();
      //   fetchHighestBid();
      // });
      try {
        console.log("inside try");
        await contract.widraw();
      } catch (e) {
        console.log("error withdrawing fund: ", e);
      }
    }
  }

  // request account
  useEffect(() => {
    requestAccount();
  }, []);

  useEffect(() => {
    if (account) {
      fetchOwner();
     
    }
  }, [account]);

  return (
    <div>
      <div style={{ marginLeft: "40%" }}>
        <Header as="h2" icon="book" content="Dataset Auction" />
      </div>

      {/* <DeployContract/> */}

      <Divider/>

      <br />

      <div>
        <div className="text-right">
          <Label
            style={{ width: "48%", marginBottom: "5px", fontSize: "16px" }}
          >
            <Icon name="user circle" /> Account: {account.toLowerCase()}
          </Label>
        </div>
        <div className="text-right">
          <Label
            style={{
              width: "48%",
              marginBottom: "5px",
              marginRight: "5px",
              fontSize: "16px",
            }}
          >
            <Icon name="book" />
            {/* Contract Address: {auctionAddress.toLowerCase()} */}
            <input
              onChange={(e) => setAuctionAddress(e.target.value)}
              style={{ height: "25px", width: "95%" }}
              placeholder="Contract Address"
            />
          </Label>

          <Button
            primary
            onClick={() => {
              fetchOwner();
              fetchTransactionHash();
              setShow(true);
            }}
          >
            Check
          </Button>
        </div>
        <div className="text-right">
          <Label
            style={{ width: "48%", marginBottom: "5px", fontSize: "16px" }}
          >
            <Icon name="user secret" /> Owner Address: {isOwner.toLowerCase()}
          </Label>
        </div>
      </div>

      {show &&
        (isOwner.toLowerCase() !== account.toLowerCase() ? (
          <>
            <div>
              <Input
                style={{ width: "48%", marginRight: "5px", fontSize: "16px" }}
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                label="Bidding Amount"
                name="Bid Amount"
                type="number"
                placeholder="Enter Bid Amount"
              />

              <Button primary  onClick={submitBid} type="submit">
                Bid
              </Button>

              <Button color="google plus" onClick={withdraw}>
                Withdraw
              </Button>
            </div>

            <div>
              <Label
                style={{ width: "48%", marginTop: "5px", fontSize: "16px" }}
              >
                <Icon name="slack hash" />
                Transaction hash
                <Label.Detail>{transactionHash}</Label.Detail>
              </Label>
            </div>
            <div>
              <Label
                style={{
                  width: "48%",
                  marginTop: "5px",
                  marginRight: "5px",
                  fontSize: "16px",
                }}
              >
                <Icon name="slack hash" />
                Dataset IPFS hash
                <Label.Detail>{ipfsHash}</Label.Detail>
              </Label>
              <Button primary onClick={fetchIpfsHash}>
                Check
              </Button>
            </div>
          </>
        ) : (
          <>
            <Divider />
            <br />

            <div>
              <Label
                style={{ width: "48%", marginRight: "5px", fontSize: "16px" }}
              >
                <Icon name="slack hash" />
                You own this auction
              </Label>
              <Button color="google plus" onClick={endAuction}>
                End Auction
              </Button>
            </div>
          </>
        ))}
    </div>
  );
}

export default SmartContract;
