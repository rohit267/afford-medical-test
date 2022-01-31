

function Text(props) {
    return <input className='form-control' type='text' onChange={props.onChange} value={props.value} placeholder={props.place} />
}

export default Text;