
function Password(props) {
    return <input className="form-control" placeholder='Password' type='password' value={props.value} onChange={props.onChange} />
}

export default Password;