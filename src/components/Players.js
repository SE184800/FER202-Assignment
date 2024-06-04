import React, { Component } from 'react'

export default class Players extends Component {
  render() {
    return (
      <div className='Container'>
        <div className='Column'>
            <div className='Card'>
                <img src='assets/images/cr.jpg' alt=''/>
                <h3>Christiano Ronaldo</h3>
                <p className='title'>Manchester Unitied</p>
                <p><button>Detail</button></p>
            </div>
        </div>
        <div className='Column'>
            <div className='Card'>
                <img src='assets/images/kante.jpg' alt=''/>
                <h3>Ncolo Kante</h3>
                <p className='title'>Chelsea</p>
                <p><button>Detail</button></p>
            </div>
        </div>
        <div className='Column'>
            <div className='Card'>
                <img src='assets/images/messi.jpg' alt=''/>
                <h3>Lionel Messi</h3>
                <p className='title'>PSG</p>
                <p><button>Detail</button></p>
            </div>
        </div>
        <div className='Column'>
            <div className='Card'>
                <img src='assets/images/neymar.jpg' alt=''/>
                <h3>Neymar Junior</h3>
                <p className='title'>PSG</p>
                <p><button>Detail</button></p>
            </div>
        </div>
        <div className='Column'>
            <div className='Card'>
                <img src='assets/images/kane.jpg' alt=''/>
                <h3>Harry kane</h3>
                <p className='title'>Tottenham</p>
                <p><button>Detail</button></p>
            </div>
        </div>
        <div className='Column'>
            <div className='Card'>
                <img src='assets/images/haaland.jpg' alt=''/>
                <h3>Erling Haaland</h3>
                <p className='title'>Manchester City</p>
                <p><button>Detail</button></p>
            </div>
        </div>
      </div>
    )
  }
}
