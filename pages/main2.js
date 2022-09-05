import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/chat.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col  md={8} xs={12}>
          <div className={styles.top}>
            <p>classic 350 (2012-2021)</p><span>Comfort</span><hr></hr>
            
        </div>
        
        
              <div><h6 classname="styles.h3">Q. What's the minimum height of a person required to drive classic 350 ? </h6>
               <div className={styles.ans1}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
</svg>
            16.1k Views
        <span className={styles.line}>|</span>
        <div>
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-text-fill" viewBox="0 0 16 16">
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
            </svg>  Add Answer</div>
            
          </div>
          <hr></hr>
          <div>31 Answer</div>
          </div>
          <Row>
            <Col md={1} sm={2} xs={2}>
            <h2 className={styles.anp}>S</h2>
            </Col>
            <Col md={11} sm={10} xs={10}>
              <div>
            <p><span className={styles.php}>Shahnawaz Khan </span> |1 Year ago </p>
            </div>
            
            <div className={styles.ans2}>
           
           <div className={styles.ans3}>
             @Vasanth |5.5 inches is per perfect minimum height for RE classic 350 
              

           </div>
           Are you mad bro if you are ridding bullet with 1 or 2 guy..being leg not touch the you are gonna suffer to much .. 
             if there will be some holes like dig on road ..you are gone ..5.B is enough to handle  
            </div>
            <div className={styles.ans6}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
               class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                  </svg>  0 | Reply</div>
                  <p className={styles.ans5}>Add 3 More Answer<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                      </svg></p>
            </Col>
          </Row>
          <Row>
            <Col md={1} sm={2} xs={2}>
            <h2 className={styles.anp}>S</h2>
            </Col>
            <Col md={11} sm={10} xs={10}>
              <div>
            <p><span className={styles.php}>Shahnawaz Khan</span> |1 Year ago </p>
            </div>
            
            <div className={styles.ans2}>
           
           <div className={styles.ans3}>
             @Jatav | are you mad bro if you are ridding bullet with one or two guy..being let not touch the you are gone a suffer to much .. 
             if there will be some holes like dig on road ..you are gone ..5.b is enough ..Read more  

           </div>
           hhfhhfjj
            </div>
            <div className={styles.ans6}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
               class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                  </svg>  0 | Reply</div>
                  <p className={styles.ans5}>Add 3 More Answer<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                      </svg></p>
            </Col>
          </Row>
          <Row>
            <Col md={1} sm={2} xs={2}>
            <h2 className={styles.anp}>S</h2>
            </Col>
            <Col md={11} sm={10} xs={10}>
              <div>
            <p><span className={styles.php}>Shahnawaz Khan </span> |1 Year ago </p>
            </div>
            
            <div className={styles.ans2}>
           
           <div className={styles.ans3}>
             @Jatav | are you mad bro if you are ridding bullet with one or two guy..being let not touch the you are gone a suffer to much .. 
             if there will be some holes like dig on road ..you are gone ..5.b is enough ..Read more  

           </div>
           hhfhhfjj
            </div>
            <div className={styles.ans6}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
               class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                  </svg>  0 | Reply</div>
                  <p className={styles.ans5}>Add 3 More Answer<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                      </svg></p>
            </Col>
          </Row>
        </Col>
        
        <Col  md={4} xs={12}>
        <div className={styles.photo2}>
            <p>Best Sports Bikes</p><span>View All</span><hr></hr>
            
        </div>
          <div className={styles.photo}>
          <Row>
            <Col md={4} xs={4}>
              <img src="/01.jpg"/>
            </Col>
            <Col md={8} xs={8}>
              <h6>KTM</h6>
              Rs. 1.65 Lakh
            </Col>
            <hr></hr>
          </Row>
          
          <Row>
            <Col md={4} xs={4}>
            <img src="/02.jpg"/>
            </Col>
            <Col md={8} xs={8}>
            <h6>Yamaha R15</h6>
              Rs. 1.27 Lakh
            </Col>
            <hr></hr>
          </Row>
          <Row>
            <Col md={4} xs={4}>
            <img src="/03.jpg"/>
            </Col>
            <Col md={8} xs={8}>
            <h6>TVS Apache</h6>
              Rs. 1.10 Lakh
            </Col>
            <hr></hr>
          </Row>
          <Row>
            <Col md={4} xs={4}>
            <img src="/04.jpg"/>
            
            </Col>
            
            <Col md={8} xs={8}>
            <h6>Yamaha FZ</h6>
              Rs. 1.05 Lakh
            </Col>
            <hr></hr>
          </Row>
          <Row>
            <Col md={4} xs={4}>
            <img src="/05.jpg"/>
            </Col>
            <Col md={8} xs={8}>
            <h6>Kawasaki Ninja</h6>
              Rs. 1.77 Lakh
            </Col>
            <hr></hr>
          </Row>
          <Row>
            <Col md={4} xs={4}>
              <img src="/06.jpg"/>
            </Col>
            <Col md={8} xs={8}>
              <h6>Karizma</h6>
              Rs. 1.56 Lakh
            </Col>
            
          </Row>
         
          </div >
        </Col>
      </Row>

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      
      
    </Container>

      <main className={styles.main}>
        
       
       

       
         
          
      </main>

      <footer className={styles.footer}>
      <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}