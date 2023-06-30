import React from "react";
import "./ViewDetail.css";
import { Button, Space } from "antd";

function ViewDetail(props) {
  return props.trigger ? (
    <>
      <div className="view_detail">
        <div className="detail">
          <Button className="close_btn" onClick={() => props.setTrigger(false)}>
            X
          </Button>
          {props.children}
        </div>
      </div>
    </>
  ) : (
    ""
  );
}

export default ViewDetail;
