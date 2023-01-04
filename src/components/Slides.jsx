function Slides({ iframeLink, iframeTitle }) {
    return (
        <>
            <h3 style={{ position: 'absolute', zIndex: -1, top: '50%', right: '50%' }}>Loading..</h3>
            <iframe title={iframeTitle} src={iframeLink} frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        </>
    )
}

export default Slides;