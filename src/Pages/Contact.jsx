
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import Form from '../Components/Form';
function Contact() {


  return (
    <>
        <Nav />
            <main style={{ marginTop: '5rem', height: '100vh' }}>
              <div className='container-form'>
                <h2>Contact</h2>
                <Form />
                </div>
            </main>
        <Footer />
    </>
    
  );
}

export default Contact;
