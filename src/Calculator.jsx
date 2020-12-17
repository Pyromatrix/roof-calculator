import React from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Calculator extends React.Component {
  constructor(props) {
    super(props);



    this.state = {
      tarjouksia: false, // Alkuvaiheessa tallennettuja tarjouksia ei ole
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
      asiakas: '',
      vilpeElementti: '',
      ranniKulma: '',
    };
    

    this.handleChange = this.handleChange.bind(this) 
  }

  handleChange(event){ 
    this.setState({ 

      [event.target.name] : event.target.value 
    }) 
  } 



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
      asiakas: '',
      ranniKulma: '',
    });
  };

  // Ylläpitää historialistan näkyvillä myös päivityksen jälkeen
  componentDidMount() {
    this.setHistoryState();
  }

  // Tallentaa history stateen localstoragen tarjouksia avaimesta kaikki tiedot 
  setHistoryState = () => {
    if (localStorage.tarjouksia) {
      this.setState({ history: localStorage.tarjouksia.split('|') });
    } else {
      this.setState({ history: [] });
    }
  };


  // Tässä funktiossa lasketaan materiaalihinnat ja tallennetaan ne LocalStorageen.
  saveToLocalStorage = () => {

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

    
    const vesikouruHinta = `${this.state.vesikouru * 13}`;     // Hinta: 13 - Päivitetty 17.12.2020
    const syoksyputkiHinta = `${this.state.syoksyputki * 65}`; // Hinta: 65 - Päivitetty 17.12.2020
    const harjapeltiHinta = `${this.state.harjapelti * 2.7}`;  // Hinta: 2,7 - Päivitetty 17.12.2020
    const paatypeltiHinta = `${this.state.paatypelti * 2}`;  // Hinta: 2 - Päivitetty 17.12.2020
    const jiiripeltiHinta = `${this.state.jiiripelti * 12}`;  // Hinta: 12 - Päivitetty 17.12.2020

    const tippalistaHinta = `${this.state.tippalista * 4}`;  // Hinta: 4 - Päivitetty 17.12.2020
    const savupiippuHinta = `${this.state.savupiippu * 35}`;   // Hinta: 35 - Päivitetty 17.12.2020
    const vilpeKartioHinta = `${this.state.vilpeKartio * 20}`;  // Hinta: 20 - Päivitetty 17.12.2020
    const vilpeKantikasHinta = `${this.state.vilpeKantikas * 30}`;  // Hinta: 30 - Päivitetty 17.12.2020
    const otsalautaHinta = `${this.state.otsalauta * 1.8}`;  // Hinta: 1,8 - Päivitetty 17.12.2020
    const lumiesteHinta = `${this.state.lumieste * 13}`;   // Hinta: 13 - Päivitetty 17.12.2020
    const lapetikasHinta = `${this.state.lapetikas * 100}`;  // Hinta: 100 - Päivitetty 17.12.2020
    const seinatikasHinta = `${this.state.seinatikas * 100}`;   // Hinta: 100 - Päivitetty 17.12.2020
    const ranniKulmaHinta = `${this.state.ranniKulma * 20}`;   // Hinta: 20 - Päivitetty 17.12.2020
    const vilpeElementtiHinta = `${this.state.vilpeElementti * 85}`;   // Hinta: 85 - Päivitetty 17.12.2020




    const kattopeltiHintaInt = parseInt(kattopeltiHinta, 10);
    const vesikouruHintaInt = parseInt(vesikouruHinta, 10);
    const syoksyputkiHintaInt = parseInt(syoksyputkiHinta, 10);
    const harjapeltiHintaInt = parseInt(harjapeltiHinta, 10);
    const paatypeltiHintaInt = parseInt(paatypeltiHinta, 10);
    const jiiripeltiHintaInt = parseInt(jiiripeltiHinta, 10);

    const tippalistaHintaInt = parseInt(tippalistaHinta, 10);
    const savupiippuHintaInt = parseInt(savupiippuHinta, 10);
    const vilpeKartioHintaInt = parseInt(vilpeKartioHinta, 10);
    const vilpeKantikasHintaInt = parseInt(vilpeKantikasHinta, 10);
    const otsalautaHintaInt = parseInt(otsalautaHinta, 10);
    const lumiesteHintaInt = parseInt(lumiesteHinta, 10);
    const lapetikasHintaInt = parseInt(lapetikasHinta, 10);
    const seinatikasHintaInt = parseInt(seinatikasHinta, 10);
  

    const ranniKulmaHintaInt = parseInt(ranniKulmaHinta, 10);
    const vilpeElementtiHintaInt = parseInt(vilpeElementtiHinta, 10);

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


    // Määrittää LocalStoragen avaimeen tarjouksia tietoja. Erottelee | merkillä Local Storagessa |merkki vaihtaa riviä, alempi on ekan printtaus
    if (localStorage.tarjouksia) {
      localStorage.tarjouksia =
        `${this.state.asiakas}, ${kokonaisHinta}€|` +
        localStorage.tarjouksia;
    } else {
      localStorage.tarjouksia = `${this.state.asiakas}, ${kokonaisHinta}€|`;
    }
    this.noPriceFunction();
    this.resetFields();
  };

  // Jos LocalStorage on käytössä, suorittaa funktion saveToLocalStorage(), jonka jälkeen suorittaa setHistoryState()
  calcPrice = () => {
    if (typeof Storage !== 'undefined') {
      this.saveToLocalStorage();
  
    } else {
      console.error('local storage not supported');
    }
    this.setHistoryState();
  };

  // Poistaa Local Storagesta kohteen "tarjouksia", eli käytännössä siis tyhjentää koko historian -> Tämän jälkeen suorittaa setHistoryState() funktion
  resetHistory = () => { 
    if (localStorage.tarjouksia) {
      localStorage.removeItem('tarjouksia');
      this.noPriceFunction();

    }
    this.setHistoryState();
  };






  noPriceFunction = () => {

    if (localStorage.tarjouksia) {
      this.setState({ tarjouksia: true });
    }else {
      this.setState({ tarjouksia: false });
    }
  }



  setHistoryState = () => {
    if (localStorage.tarjouksia) {
      this.setState({ history: localStorage.tarjouksia.split('|') });
    } else {
      this.setState({ history: [] });
    }
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
              <div className="inputs">
                <Form.Group onSubmit={this.handleSubmit}>

                    <Form.Control
                      className='syotekentat'
                      type='text'  
                      name='asiakas'
                      placeholder='Asiakkaan nimi' 
                      value = {this.state.asiakas} 
                      onChange={this.handleChange}
                    />
                   
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
                      className='syotekentat'
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
              <Button className={"tarjouslaskin-buttons"} variant="success" size="lg" onClick={this.calcPrice}>Laske</Button>
              <Button className={"tarjouslaskin-buttons"} variant="warning" size="lg" onClick={this.resetHistory}>Poista historia</Button>
            </div>
            
            <div className="right">
            <h4>LASKELMA</h4>
              <div className="hinnat rounded">
              
                <div className={'tulostaulu-main'}>
                  <div id={'aikalista'} className={'tulostaulu'}>
                    <ul>
                      {this.state.tarjouksia === false && ('Ei laskettuja tarjouksia!')}
                      {this.state.tarjouksia === true && (<div>{this.state.history.map((item, index) => <li key={index}>{item}</li>)}</div>)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div> {/* WRAPPER PÄÄTTYY */}

          <div className="buttons-desktop">
            <Button className={"tarjouslaskin-buttons"} variant="success" size="lg" onClick={this.calcPrice}>Laske</Button>
            <Button className={"tarjouslaskin-buttons"} variant="warning" size="lg" onClick={this.resetHistory}>Poista historia</Button>
          </div>

        </div>
        
    );
  }
}

export default Calculator;