import React from "react";

export default function Node({val}) {
    return (
      <div
        className="form-control form-control-sm"
        type="text"
        placeholder={val}
        disabled="disabled"
      >
        {val}
      </div>
    );
  }

