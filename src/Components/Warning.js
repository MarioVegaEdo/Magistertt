const Warning = (props) => {
    const message = props.value
    return(
        <div id="warning">
            <span>El campo: {message} es obligatorio</span>
        </div>
    )
}

export default Warning