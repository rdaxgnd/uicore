import React from 'react'
import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

// Generator settings as basic
const varStyles = {
  boxradius: [3, 4, 8, 8, 8, 10, 10, 10, 10, 12, 12, 12, 16, 20, 24, 30, 34, 38],
  boxpadding: [30, 32, 34, 40, 42, 44],
  boxborder: ['0px', '0px', '0px', '0px', '0px', '0px', '0px', '0px', '4px', '4px', '4px', '4px', '4px'],

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
  const [colorPrimaryLight, setColorPrimaryLight] = useState({ red: 25, green: 25, blue: 25 });
  const [colorPrimaryDark, setColorPrimaryDark] = useState({ red: 25, green: 25, blue: 25 });
  const [colorSecondary, setColorSecondary] = useState({ red: 25, green: 25, blue: 25 });
  const [colorSecondaryLight, setColorSecondaryLight] = useState({ red: 25, green: 25, blue: 25 });
  const [colorSecondaryDark, setColorSecondaryDark] = useState({ red: 25, green: 25, blue: 25 });

  const [colorPrimarySuccess, setColorPrimarySuccess] = useState({ red: 25, green: 25, blue: 25 });
  const [colorPrimaryDanger, setColorPrimaryDanger] = useState({ red: 25, green: 25, blue: 25 });
  const [colorPrimaryWarning, setColorPrimaryWarning] = useState({ red: 25, green: 25, blue: 25 });
  const [colorPrimaryInfo, setColorPrimaryInfo] = useState({ red: 25, green: 25, blue: 25 });

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

    const newColorPrimaryLight = {
      red: Math.min(250, newColorPrimary.red + Math.round(newColorPrimary.red * 0.50)),
      green: Math.min(250, newColorPrimary.green + Math.round(newColorPrimary.green * 0.50)),
      blue: Math.min(250, newColorPrimary.blue + Math.round(newColorPrimary.blue * 0.50))
    };
    setColorPrimaryLight(newColorPrimaryLight);

    const newColorPrimaryDark = {
      red: Math.max(0, newColorPrimary.red - Math.round(newColorPrimary.red * 0.50)),
      green: Math.max(0, newColorPrimary.green - Math.round(newColorPrimary.green * 0.50)),
      blue: Math.max(0, newColorPrimary.blue - Math.round(newColorPrimary.blue * 0.50))
    };
    setColorPrimaryDark(newColorPrimaryDark);

    const newColorSecondary = {
      red: Math.floor(Math.random() * 256),
      green: Math.floor(Math.random() * 256),
      blue: Math.floor(Math.random() * 256)
    };
    setColorSecondary(newColorSecondary);

    const newColorSecondaryLight = {
      red: Math.min(250, newColorSecondary.red + Math.round(newColorSecondary.red * 0.50)),
      green: Math.min(250, newColorSecondary.green + Math.round(newColorSecondary.green * 0.50)),
      blue: Math.min(250, newColorSecondary.blue + Math.round(newColorSecondary.blue * 0.50))
    };
    setColorSecondaryLight(newColorSecondaryLight);

    const newColorSecondaryDark = {
      red: Math.max(0, newColorSecondary.red - Math.round(newColorSecondary.red * 0.50)),
      green: Math.max(0, newColorSecondary.green - Math.round(newColorSecondary.green * 0.50)),
      blue: Math.max(0, newColorSecondary.blue - Math.round(newColorSecondary.blue * 0.50))
    };
    setColorSecondaryDark(newColorSecondaryDark);

    const newColorPrimarySuccess = {
      red: Math.min(200, newColorPrimary.red + Math.round(newColorPrimary.red * 0.50)),
      green: 250,
      blue: Math.min(200, newColorPrimary.blue + Math.round(newColorPrimary.blue * 0.50))
    };
    setColorPrimarySuccess(newColorPrimarySuccess);

    const newColorPrimaryDanger = {
      red: 255,
      green: Math.min(220, newColorPrimary.green + Math.round(newColorPrimary.green * 0.10)),
      blue: Math.min(220, newColorPrimary.blue + Math.round(newColorPrimary.blue * 0.10))
    };
    setColorPrimaryDanger(newColorPrimaryDanger);

    const newColorPrimaryWarning = {
      red: 250,
      green: 250,
      blue: Math.min(200, newColorPrimary.blue + Math.round(newColorPrimary.blue * 0.50))
    };
    setColorPrimaryWarning(newColorPrimaryWarning);

    const newColorPrimaryInfo = {
      red: Math.min(220, newColorPrimary.red + Math.round(newColorPrimary.red * 0.10)),
      green: Math.min(220, newColorPrimary.green + Math.round(newColorPrimary.green * 0.10)),
      blue: 255
    };
    setColorPrimaryInfo(newColorPrimaryInfo);
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

        <div style={{marginTop: 60,backgroundColor: getColorString(colorPrimary), ...boxRadius, ...boxPadding, border: `${boxBorder.border} solid ${getColorString(colorPrimaryLight)}`}}>
          <br/>
          <br/>
          <br/>
          <br/>
          <h2 style={{...h2Style, color: '#ffffff'}}>Primary</h2>
          <p className={styles.lowOpacity} style={{marginTop: 8, fontSize: 16, color: '#ffffff'}}>{getColorText(colorPrimary)}</p>
        </div>
        <div className={styles.pageColumn}>
          <div style={{marginTop: 20, ...boxPadding, backgroundColor: getColorString(colorSecondary), ...boxRadius, border: `${boxBorder.border} solid ${getColorString(colorSecondaryLight)}`}}>
            <br/>
            <br/>
            <br/>
            <br/>
            <h2 style={{...h2Style, color: '#ffffff'}}>Secondary</h2>
            <p className={styles.lowOpacity} style={{marginTop: 8, fontSize: 16, color: '#ffffff'}}>{getColorText(colorSecondary)}</p>
          </div>
          <div style={{marginTop: 20, ...boxPadding, backgroundColor: getColorString(colorSecondaryDark), ...boxRadius, border: `${boxBorder.border} solid ${getColorString(colorSecondary)}`}}>
            <br/>
            <br/>
            <br/>
            <br/>
            <h2 style={{...h2Style, color: '#ffffff'}}>Secondary Dark</h2>
            <p className={styles.lowOpacity} style={{marginTop: 8, fontSize: 16, color: '#ffffff'}}>{getColorText(colorSecondaryDark)}</p>
          </div>
        </div>

        <div style={{marginTop: 120, ...boxPadding}}>
          <h2 style={{...h2Style, color: '#212127'}}>Fonts</h2>
        </div>
        <div style={{marginTop: 40}} className={styles.pageColumn}>
          <div style={{...boxPadding, backgroundColor: '#cccccc', ...boxRadius}}>
            <p style={{marginTop: 40, color: '#212127', fontSize: 120}}>Aa</p>
            <p style={{marginTop: 90, color: '#212127', fontSize: 20}}>
              a b c d e f g h i j k l m n o p r s t u v w x y z<br/>
              <br/>
              1 2 3 4 5 6 7 8 9 0
            </p>
            <br/>
          </div>
          <div style={{...boxPadding}}>
            <p style={{textAlign: 'justify', lineHeight: '28px',}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in <a href={'#'} style={{color: getColorString(colorPrimary), textDecoration: 'none'}}>Primary Link</a> eu qui officia deserunt mollit fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>

        <div style={{marginTop: 120, ...boxPadding}}>
          <h2 style={{...h2Style, color: '#212127'}}>Buttons</h2>
        </div>
        <div style={{...boxPadding}}>
          <div className={styles.pageColumn}>
            <div>
              <button style={{backgroundColor: getColorString(colorPrimaryLight), ...boxRadius, border: 'none', padding: 20, width: '100%', fontSize: 14, fontWeight: 700, color: getColorString(colorPrimaryDark)}}>PRIMARY</button>
            </div>
            <div>
              <button style={{backgroundColor: getColorString(colorSecondaryLight), ...boxRadius, border: 'none', padding: 20, width: '100%', fontSize: 14, fontWeight: 700, color: getColorString(colorSecondaryDark)}}>SECONDARY</button>
            </div>
            <div>
              <button style={{backgroundColor: getColorString(colorSecondaryDark), ...boxRadius, border: 'none', padding: 20, width: '100%', fontSize: 14, fontWeight: 700, color: getColorString(colorSecondaryLight)}}>SECONDARY DARK</button>
            </div>
            <div>
              <button style={{backgroundColor: '#cccccc', ...boxRadius, border: 'none', padding: 20, width: '100%', fontSize: 14, fontWeight: 700, color: '#212127'}}>NEUTRAL</button>
            </div>
          </div>
          <div style={{marginTop: 20}} className={styles.pageColumn}>
            <div>
              <button style={{backgroundColor: '#ffffff', border: `3px solid ${getColorString(colorPrimary)}`, ...boxRadius, padding: 10, width: '100%', fontSize: 12, fontWeight: 700, color: getColorString(colorPrimary)}}>PRIMARY</button>
            </div>
            <div>
              <button style={{backgroundColor: '#ffffff', border: `3px solid ${getColorString(colorSecondary)}`, ...boxRadius, padding: 10, width: '100%', fontSize: 12, fontWeight: 700, color: getColorString(colorSecondary)}}>SECONDARY</button>
            </div>
            <div>
              <button style={{backgroundColor: '#ffffff', border: `3px solid ${getColorString(colorSecondaryDark)}`, ...boxRadius, padding: 10, width: '100%', fontSize: 12, fontWeight: 700, color: getColorString(colorSecondaryDark)}}>SECONDARY DARK</button>
            </div>
            <div>
              <button style={{backgroundColor: '#ffffff', border: `3px solid #212127`, ...boxRadius, padding: 10, width: '100%', fontSize: 12, fontWeight: 700, color: '#212127'}}>NEUTRAL</button>
            </div>
          </div>
        </div>

        <div style={{marginTop: 90, ...boxPadding}}>
          <h2 style={{...h2Style, color: '#212127'}}>Cards</h2>
        </div>
        <div style={{marginTop: 40}} className={styles.pageColumn}>
          <div>
            <div style={{backgroundColor: '#212127', ...boxRadius, ...boxPadding, border: `${boxBorder.border} solid #cccccc`}}>
            <br/>
            <br/>
            <h1 style={{...h1Style, color: '#ffffff'}}>Heading 1</h1>
            <br/>
            <p className={styles.lowOpacity} style={{marginTop: 8, fontSize: 16, color: '#ffffff'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <br/>
            <br/>
            </div>
          </div>
          <div>
            <div style={{backgroundColor: getColorString(colorSecondary), ...boxRadius, ...boxPadding, border: `${boxBorder.border} solid ${getColorString(colorSecondary)}`}}>
            <br/>
            <br/>
            <br/>
            <br/>
            <img src={'info.svg'} style={{height: 34}}></img>
            <br/>
            <br/>
            <p style={{marginTop: 8, fontSize: 16, color: '#ffffff'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <br/>
            <br/>
            <br/>
            <br/>
            </div>
          </div>
          <div>
            <div style={{backgroundColor: '#ffffff', border: `3px solid ${getColorString(colorPrimary)}`, ...boxRadius, ...boxPadding}}>
            <p className={styles.lowOpacity} style={{marginTop: 8, color: getColorString(colorPrimary)}}>Lorem Ipsum</p>
            <h1 style={{fontSize: 76, color: getColorString(colorPrimary)}}>&#36;28</h1>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className={styles.pageColumn}>
              <div>
              <button style={{backgroundColor: '#ffffff', border: `3px solid ${getColorString(colorPrimary)}`, ...boxRadius, padding: 10, width: '100%', fontSize: 12, fontWeight: 700, color: getColorString(colorPrimary)}}>PRIMARY</button>
              </div>
              <div>
              <button style={{backgroundColor: '#cccccc', border: `3px solid #cccccc`, ...boxRadius, padding: 10, width: '100%', fontSize: 12, fontWeight: 700, color: '#212127'}}>NEUTRAL</button>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div style={{...boxPadding, marginTop: 120}}>
          <h2 style={{...h2Style, color: '#212127'}}>Essentials</h2>
        </div>
        <div className={styles.pageColumn} style={{marginTop: 40}}>
          <div>
            <div style={{marginTop: 0, ...boxPadding, ...boxRadius, backgroundColor: getColorString(colorPrimaryLight)}}>
              <h1 style={{...h1Style, color: getColorString(colorPrimaryDark)}}>Call to Action</h1>
              <br/>
              <br/>
              <p style={{paddingRight: 160, color: getColorString(colorPrimaryDark)}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit sedo eiusmod tempor.</p>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <button style={{backgroundColor: getColorString(colorPrimaryDark), ...boxRadius, border: 'none', padding: 20, width: '100%', fontSize: 14, fontWeight: 700, color: getColorString(colorPrimaryLight)}}>GO TO ACTION</button>
            </div>
            <div style={{backgroundColor: '#efefef', marginTop: 20, ...boxPadding, ...boxRadius}} className={styles.pageColumn}>
              <div>
                  <p style={{color: '#1C1C1E', marginBottom: 20}}>
                    It's and example web form to see how powerful our generated interfaces.
                  </p>
                  <div className={styles.formColumn} style={{backgroundColor: '#ffffff', padding: 14, fontSize: 15, color: getColorString(colorSecondary), border: `2px solid ${getColorString(colorSecondaryDark)}`, ...boxRadius}}>
                    <div style={{paddingLeft: 10}}>Name</div>
                    <div><input placeholder='Your name' style={{width: '100%', border: 'none', outline: 'none', fontSize: 15, color: getColorString(colorSecondary)}}></input></div>
                  </div>
                  <div className={styles.formColumn} style={{marginTop: 16, backgroundColor: '#ffffff', padding: 14, fontSize: 15, color: getColorString(colorSecondary), ...boxRadius}}>
                    <div style={{paddingLeft: 10}}>Surname</div>
                    <div><input placeholder='Your surname' style={{width: '100%', border: 'none', backgroundColor: '#ffffff', outline: 'none', fontSize: 15, color: getColorString(colorSecondary)}}></input></div>
                  </div>
                  <div className={styles.formColumn} style={{marginTop: 16, backgroundColor: '#ffffff', padding: 14, fontSize: 15, color: getColorString(colorSecondary), ...boxRadius}}>
                    <div style={{paddingLeft: 10}}>E-mail</div>
                    <div><input placeholder='Your email address' style={{width: '100%', border: 'none', backgroundColor: '#ffffff', outline: 'none', fontSize: 15, color: getColorString(colorSecondary)}}></input></div>
                  </div>
                  <div className={styles.formColumn} style={{marginTop: 16, backgroundColor: '#ffffff', padding: 14, fontSize: 15, color: getColorString(colorSecondary), ...boxRadius}}>
                    <div style={{paddingLeft: 10}}>Message</div>
                    <div><textarea maxLength={120} resize={'none'} placeholder='Type your message here' style={{resize: 'none', fontFamily: 'roboto', width: '100%', height: 100, border: 'none', backgroundColor: '#ffffff', outline: 'none', fontSize: 15, color: getColorString(colorPrimary)}}></textarea></div>
                  </div>
                  <button style={{marginTop: 26, backgroundColor: getColorString(colorSecondaryDark), ...boxRadius, border: 'none', padding: 16, width: 180, fontSize: 14, fontWeight: 700, color: '#ffffff'}}>BUTTON</button>
              </div>
            </div>
          </div>
          <div>
            <div style={{backgroundColor: '#efefef', marginTop: 0, ...boxPadding, ...boxRadius}} className={styles.pageColumn}>
              <div>
                <div className={styles.pageColumn} style={{backgroundColor: '#212127', color: getColorString(colorPrimaryLight), ...boxRadius, padding: 20}}>
                  <div>
                    Name
                  </div>
                  <div>
                    Surname
                  </div>
                  <div style={{textAlign: 'right'}}>
                    
                  </div>
                </div>
                <div className={styles.pageColumn} style={{marginTop: 20, backgroundColor: '#ffffff', color: '#212127', ...boxRadius, padding: 20}}>
                  <div>
                    John
                  </div>
                  <div>
                    Doe
                  </div>
                  <div style={{textAlign: 'right'}}>
                    
                  </div>
                </div>
                <div className={styles.pageColumn} style={{marginTop: 20, backgroundColor: '#ffffff', color: '#212127', ...boxRadius, padding: 20}}>
                  <div>
                    Charlie
                  </div>
                  <div>
                    Brown
                  </div>
                  <div style={{textAlign: 'right'}}>
                    
                  </div>
                </div>
                <div className={styles.pageColumn} style={{marginTop: 20, backgroundColor: '#ffffff', color: '#212127', ...boxRadius, padding: 20}}>
                  <div>
                    Aaron
                  </div>
                  <div>
                    Smith
                  </div>
                  <div style={{textAlign: 'right'}}>
                    
                  </div>
                </div>
                <div className={styles.pageColumn} style={{marginTop: 20, backgroundColor: '#ffffff', color: '#212127', ...boxRadius, padding: 20}}>
                  <div>
                    Robert
                  </div>
                  <div>
                    Waldman
                  </div>
                  <div style={{textAlign: 'right'}}>
                    
                  </div>
                </div>
              </div>
            </div>
            <div>
            <div style={{marginTop: 20, ...boxPadding, ...boxRadius, backgroundColor: getColorString(colorPrimarySuccess)}}>
            <img className={styles.lowOpacity} style={{position: 'relative', float: 'right', height: 24}} src={'close.svg'}></img>
              <p style={{color: '#212127'}}><strong>Success!</strong> Sum dolor consectetur adipiscing.</p>
            </div>
            <div style={{marginTop: 20, ...boxPadding, ...boxRadius, backgroundColor: getColorString(colorPrimaryDanger)}}>
            <img className={styles.lowOpacity} style={{position: 'relative', float: 'right', height: 24}} src={'close.svg'}></img>
              <p style={{color: '#212127'}}><strong>Danger!</strong> Sum dolor consectetur adipiscing.</p>
            </div>
            <div style={{marginTop: 20, ...boxPadding, ...boxRadius, backgroundColor: getColorString(colorPrimaryWarning)}}>
            <img className={styles.lowOpacity} style={{position: 'relative', float: 'right', height: 24}} src={'close.svg'}></img>
              <p style={{color: '#212127'}}><strong>Warning!</strong> Sum dolor consectetur adipiscing.</p>
            </div>
            <div style={{marginTop: 20, ...boxPadding, ...boxRadius, backgroundColor: getColorString(colorPrimaryInfo)}}>
            <img className={styles.lowOpacity} style={{position: 'relative', float: 'right', height: 24}} src={'close.svg'}></img>
              <p style={{color: '#212127'}}><strong>Info!</strong> Sum dolor consectetur adipiscing.</p>
            </div>
        </div>
          </div>
        </div>
      </div>
      <div className={styles.lowOpacity} style={{padding: 20, fontSize: 16, color: '#ffffff'}}>
        <div style={{padding: 14, fontSize: 14, lineHeight: 1.4, backgroundColor: '#242427', borderRadius: 8}}>
          .primaryColor &#123;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;background-color: {getColorString(colorPrimary)}&#59;<br/>
          &#125;<br/>
          <br/>
          .primaryColorLight &#123;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;background-color: {getColorString(colorPrimaryLight)}&#59;<br/>
          &#125;<br/>
          <br/>
          .secondaryColor&#123;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;background-color: {getColorString(colorSecondary)}&#59;<br/>
          &#125;<br/>
          <br/>
          .secondaryColorLight&#123;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;background-color: {getColorString(colorSecondaryLight)}&#59;<br/>
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

