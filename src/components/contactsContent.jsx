import '../style/contactsContentStyle.css'
export default ContactsContent 

function ContactsContent(){
    return(
        <>
        <div className='contactContainer d-flex justify-content-evenly'>
            <div className='descContainer p-5'>
                <div className='contactTitle'>
                    <h1>Contactos</h1>
                </div>
                <div className='d-flex flex-column gap-5'>
                    <div className='location'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#7A8334" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13" />
                        <path d="M9 4v13" />
                        <path d="M15 7v13" />
                    </svg>
                    <h4 className='gree'>SanLorenzo - San Juan - Ganadera San Antonio</h4>
                    </div>
                    <div className='celphone'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-mobile" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#7A8334" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z" />
                        <path d="M11 4h2" />
                        <path d="M12 17v.01" />
                    </svg>
                    <h4 className='gree'>(507) 6997-1648</h4>
                    </div>
                    <div className='telephone'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#7A8334" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg>
                    <h4 className='gree'>(507) 774-1842</h4>
                    </div>
                    <div className='e-mail'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#7A8334" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                        <path d="M3 7l9 6l9 -6" />
                    </svg>
                    <h4 className='gree'>GanaderaSanAntonio@gmail.com</h4>
                    </div>
                </div>
            </div>
            <div className='imageContainer'>
            </div>
        </div>
        </>
    );
}