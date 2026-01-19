import React from 'react'

const page = async ({params}) => {

    const obj = await params;
    const channelID = obj.kafkachannel;
    const storageID = obj.storageid;
  return (
    
    <div>
        <p>Kafka Storage id is : {storageID}</p>
        <p>Kafka Channel id is : {channelID}</p>
    </div>
  )
}

export default page