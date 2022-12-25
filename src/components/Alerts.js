import React from 'react'

export default function Alerts(props) {
  return (
    props.alert && <div class={`alert alert-${props.type}`} role="alert">
    <strong>{props.alert.type}</strong>: {props.alert.msg};
    </div>
  )
}
