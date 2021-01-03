import React from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Calculator extends React.Component {
  constructor(props) {
    super(props);



    // source: https://googlechrome.github.io/samples/service-worker/basic/
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
     http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

// Names of the two caches used in this version of the service worker.
// Change to v2, etc. when you update any of the local resources, which will
// in turn trigger the install event again.
const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [
  'index.html',
  './', // Alias for index.html
  'styles.css',
  '../../styles/main.css',
  'demo.js'
];

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
  // Skip cross-origin requests, like those for Google Analytics.
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            // Put a copy of the response in the runtime cache.
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});






    this.state = {
      tarjouksia: false, // Alkuvaiheessa tallennettuja tarjouksia ei ole
      myyntikatelaskelma: false,
      pintaAla: '', // Alustetaan input kentän value arvo, ilman tätä ensimmäinen tulostettu arvo ilman kenttään koskemista on defined. Uncontrolled --> Controlled
      vesikouru: '',
      syoksyputki: '',
      harjapelti: '',
      paatypelti: '',
      jiiripelti: '',
      tippalista: '',
      savupiippu: '',
      vilpeKartio: '',
      vilpeKantikas: '',
      otsalauta: '',
      lumieste: '',
      lapetikas: '',
      seinatikas: '',
      ruodeLauta: '',
      peltiProfiili: '',
      vilpeElementti: '',
      ranniKulma: '',
      pyydettyHinta: '',
      myyntiKate: '',
      kokonaisHintaState: '',
    };
    

    this.handleChange = this.handleChange.bind(this) 
  }

  handleChange(event){ 
    this.setState({ 

      [event.target.name] : event.target.value 
    }) 
  } 

  componentDidMount() {
    window.addEventListener('online', () => this.setOnlineStatus(true));
    window.addEventListener('offline', () => this.setOnlineStatus(false));
  }
  
  componentWillUnmount() {
    window.removeEventListener('online');
    window.removeEventListener('offline');
  }
  
  setOnlineStatus = isOnline => this.setState({ online: isOnline })
  


  resetFields = () => { 
    this.setState({
      pintaAla: '', 
      vesikouru: '',
      syoksyputki: '',
      harjapelti: '',
      paatypelti: '',
      jiiripelti: '',
      savupiippu: '',
      vilpeKartio: '',
      vilpeKantikas: '',
      otsalauta: '',
      lumieste: '',
      lapetikas: '',
      seinatikas: '',
      ruodeLauta: '',
      peltiProfiili: '',
      tippalista: '',
      vilpeElementti: '',
      ranniKulma: '',
    });
  };

  resetCalculations = () => { 
    this.setState({
      pyydettyHinta: '',
      myyntiKate: '',
      kokonaisHintaState: '',
    });
  };


  // Tässä funktiossa lasketaan materiaalihinnat ja tallennetaan ne LocalStorageen.
  calcPrice = () => {

    let kattopeltiHinta = '';


      if (this.state.peltiProfiili.toUpperCase() === 'LL' & this.state.ruodeLauta === '32') {
        kattopeltiHinta = `${this.state.pintaAla * 12.17}`;
      }else {if (this.state.peltiProfiili.toUpperCase() === 'TT' & this.state.ruodeLauta === '32') {
        kattopeltiHinta = `${this.state.pintaAla * 8.92}`;
        }else {if (this.state.peltiProfiili.toUpperCase() === 'LL' & this.state.ruodeLauta === '22') {
          kattopeltiHinta = `${this.state.pintaAla * 12.02}`;
          }else {if (this.state.peltiProfiili.toUpperCase() === 'TT' & this.state.ruodeLauta === '22') {
            kattopeltiHinta = `${this.state.pintaAla * 8.92}`;
            }else {
              alert('Peltiprofiili sallitut arvot: TT tai LL. Ruodelauta sallitut arvot: 32 tai 22.')
              return;
            }    
          }
        }
      }
    const kattopeltiHintaInt = parseInt(kattopeltiHinta, 10);

    
    const vesikouruHintaInt = parseInt(this.state.vesikouru * 13, 10);
    const syoksyputkiHintaInt = parseInt(this.state.syoksyputki * 65, 10);
    const harjapeltiHintaInt = parseInt(this.state.harjapelti * 2.7, 10);
    const paatypeltiHintaInt = parseInt(this.state.paatypelti * 2, 10);
    const jiiripeltiHintaInt = parseInt(this.state.jiiripelti * 12, 10);
    const tippalistaHintaInt = parseInt(this.state.tippalista * 4, 10);
    const savupiippuHintaInt = parseInt(this.state.savupiippu * 35, 10);
    const vilpeKartioHintaInt = parseInt(this.state.vilpeKartio * 20, 10);
    const vilpeKantikasHintaInt = parseInt(this.state.vilpeKantikas * 30, 10);
    const otsalautaHintaInt = parseInt(this.state.otsalauta * 1.8, 10);
    const lumiesteHintaInt = parseInt(this.state.lumieste * 13, 10);
    const lapetikasHintaInt = parseInt(this.state.lapetikas * 100, 10);
    const seinatikasHintaInt = parseInt(this.state.seinatikas * 100, 10);
    const ranniKulmaHintaInt = parseInt(this.state.ranniKulma * 20, 10);
    const vilpeElementtiHintaInt = parseInt(this.state.vilpeElementti * 85, 10);
    const kiinteaKitti = 20;

    const kokonaisHinta = 
    kattopeltiHintaInt+
    vesikouruHintaInt+
    syoksyputkiHintaInt+
    harjapeltiHintaInt+
    paatypeltiHintaInt+
    jiiripeltiHintaInt+
    tippalistaHintaInt+
    savupiippuHintaInt+
    vilpeKartioHintaInt+
    vilpeKantikasHintaInt+
    otsalautaHintaInt+
    lumiesteHintaInt+
    lapetikasHintaInt+
    seinatikasHintaInt+
    ranniKulmaHintaInt+
    vilpeElementtiHintaInt+
    kiinteaKitti
    ;


    this.setState({
      kokonaisHintaState: kokonaisHinta,
      tarjouksia: true,
    });
  };


calcProfit = () => {

  let pyyntiAlvNolla = `${this.state.pyydettyHinta/124*100}`;
  let laskettuHinta = `${this.state.kokonaisHintaState}`;

  let pyyntiAlvNollaInt = parseInt(pyyntiAlvNolla, 10);
  let laskettuHintaInt = parseInt(laskettuHinta, 10);
  
  console.log(`alv nolla pyynti = ${pyyntiAlvNollaInt}`)
  console.log(`laskettu hinta alv 0 on = ${laskettuHintaInt}`)

  let kate = pyyntiAlvNollaInt-laskettuHintaInt;

  this.setState({
    myyntiKate: kate,
    myyntikatelaskelma: true,
  });
  
};


 // Tarkastelee input kenttää ja tallentaa arvoa muuttuvasti state.valueen.
 // Kaksi nappia jotka suorittavat tarjoukset tallennus ja historian tyhjennysfunktiot.
 // Historia lista ajoista. Hakee tiedot state historysta ja printtaa ne listaksi

 // Disabled =  "true" herjaa testissä --> OIKEA TAPA disabled={true}
  render() {
    return (
      
        <div className="main-div">

          <div className="wrapper">
            <div className="left">
              <h4>MITTATIEDOT</h4>
              <div className="inputs " >
                <Form.Group onSubmit={this.handleSubmit} >
                   
                    <Form.Control
                      className='syotekentat'
                      type='text'  
                      name='peltiProfiili'
                      placeholder='Peltiprofiili (LL tai TT)' 
                      value = {this.state.peltiProfiili} 
                      onChange={this.handleChange}
                    />
                    <Form.Control
                      className='syotekentat'
                      type='number'  
                      name='ruodeLauta'
                      placeholder='Ruodelauta (22 tai 32)' 
                      value = {this.state.ruodeLauta} 
                      onChange={this.handleChange}
                  /> 

                    <Form.Control
                      className='syotekentat'
                      type='number'  
                      name='pintaAla'
                      placeholder='Pinta-ala (m2)' 
                      value = {this.state.pintaAla} 
                      onChange={this.handleChange}
                    /> 
                    <Form.Control 
                      className='syotekentat'
                      type='number'
                      name='vesikouru'
                      placeholder='Vesikourua (m)'  
                      value={this.state.vesikouru} 
                      onChange={this.handleChange}
                    /> 
                    <Form.Control 
                      className='syotekentat'
                      type='number'
                      name='otsalauta'
                      placeholder='Otsalautaa (m)'  
                      value={this.state.otsalauta} 
                      onChange={this.handleChange}
                    /> 

                    <Form.Control
                      className='syotekentat'
                      type='number'
                      name='syoksyputki' 
                      placeholder='Syöksyputket (kpl)'
                      value={this.state.syoksyputki} 
                      onChange={this.handleChange}
                    /> 

                    <Form.Control
                      className='syotekentat'
                      type='number'
                      name='harjapelti' 
                      placeholder='Harjapeltiä (m)'
                      value={this.state.harjapelti} 
                      onChange={this.handleChange}
                    /> 

                    <Form.Control 
                      className='syotekentat'
                      type='number'
                      name='jiiripelti' 
                      placeholder='Jiiripeltiä (m)'
                      value={this.state.jiiripelti} 
                      onChange={this.handleChange}
                    /> 

                    <Form.Control 
                      className='syotekentat'
                      type='number'
                      name='savupiippu' 
                      placeholder='Savupiippuja (kpl)'
                      value={this.state.savupiippu} 
                      onChange={this.handleChange}
                    /> 

                    <Form.Control 
                      className='syotekentat'
                      type='number'
                      name='vilpeKartio' 
                      placeholder='Vilpe - kartio (kpl)'
                      value={this.state.vilpeKartio} 
                      onChange={this.handleChange}
                    /> 

                    <Form.Control 
                      className='syotekentat'
                      type='number'
                      name='vilpeKantikas' 
                      placeholder='Vilpe - kantikas (kpl)'
                      value={this.state.vilpeKantikas} 
                      onChange={this.handleChange}
                    /> 

                    <Form.Control 
                      className='syotekentat'
                      type='number'
                      name='vilpeElementti' 
                      placeholder='Vilpe - elementti (kpl)'
                      value={this.state.vilpeElementti} 
                      onChange={this.handleChange}
                    /> 

                    <Form.Control 
                      className='syotekentat'
                      type='number'
                      name='lumieste' 
                      placeholder='Lumiestettä (m)'
                      value={this.state.lumieste} 
                      onChange={this.handleChange}
                    /> 

                    <Form.Control 
                      className='syotekentat'
                      type='number'
                      name='lapetikas' 
                      placeholder='Lapetikkaita (kpl)'
                      value={this.state.lapetikas} 
                      onChange={this.handleChange}
                    /> 

                    <Form.Control 
                      className='syotekentat'
                      type='number'
                      name='seinatikas' 
                      placeholder='Seinätikkaita (kpl)'
                      value={this.state.seinatikas} 
                      onChange={this.handleChange}
                    /> 

                    <Form.Control 
                      className='syotekentat'
                      type='number'
                      name='tippalista' 
                      placeholder='Tippalistaa (m)'
                      value={this.state.tippalista} 
                      onChange={this.handleChange}
                    /> 

                    <Form.Control 
                      className='syotekentat mobiili-last'
                      type='number'
                      name='ranniKulma' 
                      placeholder='Rännikulmia (kpl)'
                      value={this.state.ranniKulma} 
                      onChange={this.handleChange}
                    /> 
                </Form.Group>
              </div>
            </div>

            <div className="buttons-mobiili">
              <Button className={"tarjouslaskin-buttons"} variant="success" size="lg" onClick={this.calcPrice}>Laske tarjous</Button>
              <Button className={"tarjouslaskin-buttons mobiili-last"} variant="warning" size="lg" onClick={this.resetFields}>Tyhjennä kentät</Button>
            </div>
            
            <div className="right">
            <h4>LASKELMA</h4>
              <div className="hinnat rounded">
                <div className={'tulostaulu-main'}>
                  <div id={'aikalista'} className={'tulostaulu'}>
                    <ul>
                      {this.state.tarjouksia === false && ('Ei laskettuja tarjouksia!')}
                      {this.state.tarjouksia === true && (<div>Urakka {this.state.kokonaisHintaState}€ alv. 0%</div>)}
                    </ul>
                  </div>
                </div>
              </div>

              <Form.Group onSubmit={this.handleSubmit} class="form-group-left">
                <Form.Control
                  className='syotekentat hinnat hintaehdotus'
                  type='text'  
                  name='pyydettyHinta'
                  placeholder='Pyydetty hinta (€)' 
                  value = {this.state.pyydettyHinta} 
                  onChange={this.handleChange}
                />
              </Form.Group>

              <div className="hinnat rounded mobiili-last">
                <div className={'tulostaulu-main'}>
                  <div id={'aikalista'} className={'tulostaulu'}>
                    <ul>
                        {this.state.myyntikatelaskelma === false && ('Ei laskettuja tarjouksia!')}
                        {this.state.myyntikatelaskelma === true && (<div>Kate {this.state.myyntiKate}€ alv. 0%</div>)}
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            <div className="buttons-mobiili">
              <Button className={"tarjouslaskin-buttons"} variant="success" size="lg" onClick={this.calcProfit}>Laske kate</Button>
              <Button className={"tarjouslaskin-buttons mobiili-last"} variant="danger" size="lg" onClick={this.resetCalculations}>Poista laskelma</Button>
            </div>
            

          </div> {/* WRAPPER PÄÄTTYY */}

          <div className="buttons-desktop">
            <div className="d-flex flex-column">
              <div id="desktop-first-row" class="d-flex flex-row mt-1">
                <Button className={"tarjouslaskin-buttons"} variant="success" size="lg" onClick={this.calcPrice}>Laske tarjous</Button>
                <Button className={"tarjouslaskin-buttons"} variant="success" size="lg" onClick={this.calcProfit}>Laske kate</Button>
              </div>
              <div id="desktop-second-row" class="d-flex flex-row mb-4">
                <Button className={"tarjouslaskin-buttons"} variant="warning" size="lg" onClick={this.resetFields}>Tyhjennä kentät</Button>
                <Button className={"tarjouslaskin-buttons"} variant="danger" size="lg" onClick={this.resetCalculations}>Poista laskelma</Button>
              </div>
              
            </div>
          </div>

        </div>
        
    );
  }
}

export default Calculator;