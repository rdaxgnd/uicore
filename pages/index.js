import React from 'react'
import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

// Generator settings as basic
const varStyles = {
  boxradius: [3, 4, 8, 8, 8, 10, 10, 10, 10, 12, 12, 12, 16, 20, 24, 30, 34, 38],
  boxpadding: [30, 32, 34, 40, 42, 44, 46, 50, 52, 54, 56, 60],
  boxborder: ['2px', '2px', '2px', '2px', '2px', '2px', '2px', '2px', '4px', '4px', '4px', '6px', '6px', '6px',],

  h1: ['32px', '38px', '42px'],
  h2: ['20px', '22px', '24px'],
  p: ['16px', '18px'],
}

export default function Home() {

  // Default and start values
  const [boxRadius, setBoxRadius] = React.useState({ borderRadius: 12 })
  const [boxPadding, setBoxPadding] = React.useState({ padding: 30 })
  const [boxBorder, setBoxBorder] = React.useState({ border: '2px' })

  const [h1Style, setH1Style] = React.useState({ fontSize: '54px' })
  const [h2Style, setH2Style] = React.useState({ fontSize: '28px' })
  const [pStyle, setPStyle] = React.useState({ fontSize: '18px' })

  const [colorPrimary, setColorPrimary] = useState({ red: 25, green: 25, blue: 25 });
  const [colorSecondary, setColorSecondary] = useState({ red: 25, green: 25, blue: 25 });
  const [colorSecondaryDark, setColorSecondaryDark] = useState({ red: 25, green: 25, blue: 25 });

  // Random generator function
  function generateStyles() {
    setBoxRadius({ borderRadius: varStyles.boxradius[Math.floor(Math.random() * varStyles.boxradius.length)] })
    setBoxPadding({ padding: varStyles.boxpadding[Math.floor(Math.random() * varStyles.boxpadding.length)] })
    setBoxBorder({ border: varStyles.boxborder[Math.floor(Math.random() * varStyles.boxborder.length)] })

    setH1Style({ fontSize: varStyles.h1[Math.floor(Math.random() * varStyles.h1.length)] })
    setH2Style({ fontSize: varStyles.h2[Math.floor(Math.random() * varStyles.h2.length)] })
    setPStyle({ fontSize: varStyles.p[Math.floor(Math.random() * varStyles.p.length)] })

    // Primary and Secondary color generator
    const newColorPrimary = {
      red: Math.floor(Math.random() * 256),
      green: Math.floor(Math.random() * 256),
      blue: Math.floor(Math.random() * 256)
    };
    setColorPrimary(newColorPrimary);

    const newColorSecondary = {
      red: Math.floor(Math.random() * 256),
      green: Math.floor(Math.random() * 256),
      blue: Math.floor(Math.random() * 256)
    };
    setColorSecondary(newColorSecondary);

    const newColorSecondaryDark = {
      red: Math.max(0, newColorSecondary.red - Math.round(newColorSecondary.red * 0.50)),
      green: Math.max(0, newColorSecondary.green - Math.round(newColorSecondary.green * 0.50)),
      blue: Math.max(0, newColorSecondary.blue - Math.round(newColorSecondary.blue * 0.50))
    };
    setColorSecondaryDark(newColorSecondaryDark);

  }

  // RGB value convert to string
  function getColorString(color) {
    return `rgb(${color.red}, ${color.green}, ${color.blue})`;
  }

  // RGB value convert to text
  function getColorText(color) {
    return `R: ${color.red} G: ${color.green} B: ${color.blue}`;
  }

  return (
    <div>
      <Head>
        <title>uiCore</title>
      </Head>

    <div className={styles.container} style={{fontSize: 16}}>
      <div style={{padding: 20, color: '#DFDFDF'}}>
        <div className={styles.sticky}>
          <p><span style={{fontWeight: 700}}>uiCore</span></p>
          <br/>
          <p>Generate a brand new uiKit with one click!</p>
          <br/><br/>
          <button className={styles.generateButton} onClick={generateStyles}>
          Generate
          </button>
        </div>
      </div>
      <div style={{padding: 20, backgroundColor: '#ffffff', borderRadius: 12}}>
        <div>
          <img src='red.svg' style={{marginRight: 5}}></img>
          <img src='yellow.svg' style={{marginRight: 5}}></img>
          <img src='green.svg'></img>
        </div>

        <div className={styles.pageMain} style={{backgroundColor: getColorString(colorPrimary), ...boxRadius, ...boxPadding }}>
          <br/>
          <br/>
          <br/>
          <br/>
          <h2 style={{...h2Style, color: '#ffffff'}}>Primary</h2>
          <p className={styles.lowOpacity} style={{marginTop: 8, fontSize: 16, color: '#ffffff'}}>{getColorText(colorPrimary)}</p>
        </div>
        <div className={styles.pageColumn}>
          <div style={{marginTop: 20, ...boxPadding, backgroundColor: getColorString(colorSecondary), ...boxRadius }}>
            <br/>
            <br/>
            <br/>
            <br/>
            <h2 style={{...h2Style, color: '#ffffff'}}>Secondary</h2>
            <p className={styles.lowOpacity} style={{marginTop: 8, fontSize: 16, color: '#ffffff'}}>{getColorText(colorSecondary)}</p>
          </div>
          <div style={{marginTop: 20, ...boxPadding, backgroundColor: getColorString(colorSecondaryDark), ...boxRadius }}>
            <br/>
            <br/>
            <br/>
            <br/>
            <h2 style={{...h2Style, color: '#ffffff'}}>Secondary Dark</h2>
            <p className={styles.lowOpacity} style={{marginTop: 8, fontSize: 16, color: '#ffffff'}}>{getColorText(colorSecondaryDark)}</p>
          </div>
        </div>

        <div style={{marginTop: 60}} className={styles.pageColumn}>
          <div style={{...boxPadding}}>
            <h1 style={{...h1Style, color: getColorString(colorPrimary)}}>Heading One</h1>
            <h2 style={{...h2Style, marginTop: 20}}>Heading Two</h2>

            <p style={{marginTop: 40}}><a href={'#'} style={{color: getColorString(colorPrimary), textDecoration: 'none'}}>Primary Link</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href={'#'} style={{color: getColorString(colorSecondary), textDecoration: 'none'}}>Secondary Link</a></p>
            <p style={{marginTop: 20}} className={styles.lowOpacity}><a href={'#'} style={{color: getColorString(colorPrimary), textDecoration: 'none'}}>Primary Link</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href={'#'} style={{color: getColorString(colorSecondary), textDecoration: 'none'}} className={styles.lowOpacity}>Secondary Link</a></p>

          </div>
          <div style={{...boxPadding}}>
            <p style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>

        <div style={{marginTop: 60}} className={styles.pageColumn}>
          <div>
            <button style={{backgroundColor: getColorString(colorPrimary), ...boxRadius, border: 'none', padding: 20, width: '100%', fontSize: 14, fontWeight: 700, color: '#ffffff'}}>PRIMARY</button>
          </div>
          <div>
            <button style={{backgroundColor: getColorString(colorSecondary), ...boxRadius, border: 'none', padding: 20, width: '100%', fontSize: 14, fontWeight: 700, color: '#ffffff'}}>SECONDARY</button>
          </div>
          <div>
            <button style={{backgroundColor: getColorString(colorSecondaryDark), ...boxRadius, border: 'none', padding: 20, width: '100%', fontSize: 14, fontWeight: 700, color: '#ffffff'}}>SECONDARY DARK</button>
          </div>
          <div>
            <button style={{backgroundColor: '#212127', ...boxRadius, border: 'none', padding: 20, width: '100%', fontSize: 14, fontWeight: 700, color: '#ffffff'}}>NEUTRAL</button>
          </div>
        </div>
        <div style={{marginTop: 20}} className={styles.pageColumn}>
          <div>
            <button className={styles.lowOpacity} style={{backgroundColor: getColorString(colorPrimary), ...boxRadius, border: 'none', padding: 20, width: '100%', fontSize: 14, fontWeight: 700, color: '#ffffff'}}>PRIMARY</button>
          </div>
          <div>
            <button className={styles.lowOpacity} style={{backgroundColor: getColorString(colorSecondary), ...boxRadius, border: 'none', padding: 20, width: '100%', fontSize: 14, fontWeight: 700, color: '#ffffff'}}>SECONDARY</button>
          </div>
          <div>
            <button className={styles.lowOpacity} style={{backgroundColor: getColorString(colorSecondaryDark), ...boxRadius, border: 'none', padding: 20, width: '100%', fontSize: 14, fontWeight: 700, color: '#ffffff'}}>SECONDARY DARK</button>
          </div>
          <div>
            <button className={styles.lowOpacity} style={{backgroundColor: '#212127', ...boxRadius, border: 'none', padding: 20, width: '100%', fontSize: 14, fontWeight: 700, color: '#ffffff'}}>NEUTRAL</button>
          </div>
        </div>
        <div style={{marginTop: 60}} className={styles.pageColumn}>
          <div>
            <button style={{backgroundColor: '#ffffff',border: `2px solid ${getColorString(colorPrimary)}`, ...boxRadius, padding: 16, width: '100%', fontSize: 12, fontWeight: 700, color: getColorString(colorPrimary)}}>PRIMARY</button>
          </div>
          <div>
            <button style={{backgroundColor: '#ffffff',border: `2px solid ${getColorString(colorSecondary)}`, ...boxRadius, padding: 16, width: '100%', fontSize: 12, fontWeight: 700, color: getColorString(colorSecondary)}}>SECONDARY</button>
          </div>
          <div>
            <button style={{backgroundColor: '#ffffff',border: `2px solid ${getColorString(colorSecondaryDark)}`, ...boxRadius, padding: 16, width: '100%', fontSize: 12, fontWeight: 700, color: getColorString(colorSecondaryDark)}}>SECONDARY DARK</button>
          </div>
          <div>
            <button style={{backgroundColor: '#ffffff',border: '2px solid #cccccc', ...boxRadius, padding: 16, width: '100%', fontSize: 12, fontWeight: 700, color: '#cccccc'}}>NEUTRAL LIGHT</button>
          </div>
          <div>
            <button style={{backgroundColor: '#ffffff',border: '2px solid #212127', ...boxRadius, padding: 16, width: '100%', fontSize: 12, fontWeight: 700, color: '#212127'}}>NEUTRAL</button>
          </div>
        </div>
        <div style={{marginTop: 20}} className={styles.pageColumn}>
          <div>
            <button className={styles.lowOpacity} style={{backgroundColor: '#ffffff',border: `2px solid ${getColorString(colorPrimary)}`, ...boxRadius, padding: 16, width: '100%', fontSize: 12, fontWeight: 700, color: getColorString(colorPrimary)}}>PRIMARY</button>
          </div>
          <div>
            <button className={styles.lowOpacity} style={{backgroundColor: '#ffffff',border: `2px solid ${getColorString(colorSecondary)}`, ...boxRadius, padding: 16, width: '100%', fontSize: 12, fontWeight: 700, color: getColorString(colorSecondary)}}>SECONDARY</button>
          </div>
          <div>
            <button className={styles.lowOpacity} style={{backgroundColor: '#ffffff',border: `2px solid ${getColorString(colorSecondaryDark)}`, ...boxRadius, padding: 16, width: '100%', fontSize: 12, fontWeight: 700, color: getColorString(colorSecondaryDark)}}>SECONDARY DARK</button>
          </div>
          <div>
            <button className={styles.lowOpacity} style={{backgroundColor: '#ffffff',border: '2px solid #cccccc', ...boxRadius, padding: 16, width: '100%', fontSize: 12, fontWeight: 700, color: '#cccccc'}}>NEUTRAL LIGHT</button>
          </div>
          <div>
            <button className={styles.lowOpacity} style={{backgroundColor: '#ffffff',border: '2px solid #212127', ...boxRadius, padding: 16, width: '100%', fontSize: 12, fontWeight: 700, color: '#212127'}}>NEUTRAL</button>
          </div>
        </div>

        
        
      </div>
      <div className={styles.lowOpacity} style={{padding: 20, fontSize: 16, color: '#ffffff'}}>
        <div style={{padding: 14, fontSize: 14, lineHeight: 1.4, backgroundColor: '#242427', borderRadius: 8}}>
          .primaryColor &#123;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;background-color: {getColorString(colorPrimary)}&#59;<br/>
          &#125;<br/>
          <br/>
          .secondaryColor&#123;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;background-color: {getColorString(colorSecondary)}&#59;<br/>
          &#125;<br/>
          <br/>
          .secondaryDarkColor&#123;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;background-color: {getColorString(colorSecondaryDark)}&#59;<br/>
          &#125;<br/>
          <br/>
        </div>
      </div>
    </div>

    <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
        html,
        body {
          padding: 0;
          margin: 0;
          background-color: #1C1C1E;
          font-family: 'Roboto', sans-serif;
          text-align: center;
        }
        * {
          box-sizing: border-box;
        }
        h1 {
          margin: 0px auto;
        }
        h2 {
          margin: 0px auto;
        }
        p {
          margin: 0px;
          line-height: 24px;
        }
      `}</style>
    </div>
    
  )



}

