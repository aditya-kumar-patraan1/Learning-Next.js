import React from "react";

const page = async ({ params }) => {
  const obj = await params;
  const channelID = obj.kafkachannel;

  return (
    <div>
      <p>Id is : {channelID}</p>
    </div>
  );
};

export default page;
