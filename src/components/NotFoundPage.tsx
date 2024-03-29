export default function NotFoundPage() {

    return (
        <div className='main' id="notFoundPage">
            <h1 className='title'>404!</h1>
            <p className='subtitle'>Uh oh, looks like I lost you.</p>
            <p>
				If there should be a valid page here, please <a href='/contact'>let me know</a>.
				<br/><br/>
				Country roads... <a href='/'>take me home</a>.
			</p>
        </div>
    )
}