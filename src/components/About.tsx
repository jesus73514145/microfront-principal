import Navbar from "./Navbar/Navbar";

export default function PageAbout(){
    return(
        <main>
                  <Navbar/>
            <h1>About</h1>
            <p>Esta es la página sobre. MICROFRONT 1</p>
            <iframe 
                src="https://master.d1vid5xqqrcxyu.amplifyapp.com/" 
                style={{ width: '100%', height: '100vh', border: 'none' }} 
                title="Microfront-2"
            />
        </main>
    )
}