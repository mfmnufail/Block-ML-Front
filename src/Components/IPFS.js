import React, { useState } from 'react'
import { FileUpload } from 'react-ipfs-uploader'
import { Input } from 'semantic-ui-react'

const IPFS = () => {
  const [fileUrl, setFileUrl] = useState('')
  const [fpath, setfPath] = useState('')


  
  

    return (
        <div>
          <h3>Upload the file and get the hash: </h3>
            <FileUpload setUrl={setFileUrl} />
            FileUrl : <a
                href={fileUrl}
                target='_blank'
                rel='noopener noreferrer'
            >
                {fileUrl}
            </a>

            <div>
            File Hash : {fileUrl.slice(28)}

            </div>

            <div>

            <h3>Download the file using the file hash: </h3>

            <Input placeholder={fileUrl.slice(28)} label='File Hash :' onChange={(e)=>setfPath(e.target.value)} />

            <div><a href={`https://ipfs.infura.io/ipfs/${fpath}`}> Download the file!</a></div>
            </div>

        </div>
    )
}

export default IPFS