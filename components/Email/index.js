

function Email(props) {
    return <input className="form-control" placeholder="Email" type='email' value={props.value} onChange={props.onChange} />
}

export default Email;