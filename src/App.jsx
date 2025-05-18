import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Buah from "./Buah.jsx"
import Card from "./Card.jsx"
import DivExternal from "./DivExternal.jsx"
import DivModule from "./DivModule/DivModule.jsx"
import DivInline from "./DivInline.jsx"
import Identitas from "./Identitas.jsx"
import UserWelcome from "./UserWelcome.jsx"
import List from "./List.jsx"
import Button from "./Button.jsx"
import MyComponent from "./MyComponent.jsx"
import Counter from "./Counter/Counter.jsx"
import MyComponent2 from "./MyComponent2.jsx"
import ColorPicker from "./ColorPicker.jsx"
import CounterUF from "./Counter/CounterUF.jsx"
import MyComponent3 from "./MyComponent3.jsx"
import MyComponent4 from "./MyComponent4.jsx"
import MyComponent5 from "./MyComponent5.jsx"
import MyComponent6 from "./MyComponent6.jsx"
import MyComponent7 from "./MyComponent7.jsx"
import JamDigital from "./JamDigital.jsx"
import Component1 from "./Component1.jsx"
import MyComponent8 from "./MyComponent8.jsx"
import Stopwatch from "./Stopwatch.jsx"

function App() {


  const buahBuahan = [
    {
        id: 1,
        nama: "Mangga",
        kalori: 50
    },
    {
        id: 2,
        nama: "Apel",
        kalori: 32
    },
    {
        id: 3,
        nama: "Semangka",
        kalori: 46
    }
]

const SayurSayuran = [
  {
      id: 4,
      nama: "Bayam",
      kalori: 23
  },
  {
      id: 5,
      nama: "Sawi",
      kalori: 25
  },
  {
      id: 6,
      nama: "Kacang Panjang",
      kalori: 12
  }
]

  return (
    <>
        {/* // ! 1. */}
        <Header/>
        <div style={{backgroundColor: "#333333"}}>
          <Buah/>
        </div>

        {/* // ! 2. */}
        <div>
          <h2>--- Making a card ---</h2>
          <Card/>
          <Card/>
          <Card/>
          <hr />
        </div>
      

        {/* // ! 3. */}
        <div style={{backgroundColor: "#333333"}}>
          <h2>--- Styling using CSS ---</h2>
          <ol>
            <li>External : global css (using index.css)</li>
            <li>Module : for working with a components</li>
            <li>Inline : using an object as a css</li>
          </ol>
          <DivExternal />
          <DivModule />
          <DivInline />
          <hr />
        </div>
        

        {/* // ! 4. */}
        <h2>--- using props ----</h2>
        <ol>
          <li>Usage : it use for passing value beetween element</li>
          <p>
            <b>
              <i>THIS BOTH BELOW IS DEPRECEATED</i>
            </b>
          </p>
          <li>PropTypes : to store the datatypes of the value</li>
          <li>DefaultProps : the default value of every value</li>
        </ol>
        {/* Jika selain dari string maka tutup dengan {}*/}
        <Identitas nama="Spongebob" umur="30" isStudent={true}/>
        <hr />

        {/* // ! 5. */}
        <div style={{backgroundColor: "#333333"}}>
          <h2>--- conditional rendering ----</h2>
          <i>Check if some condition is true then show something if not then hide something</i>
          <UserWelcome isLoggedIn={true} nama="Fahrel"/>
          <hr />
        </div>
        

        {/* // ! 6. */}
        <h2>--- List ----</h2>
        {/* SHORTCUT UNTUK TERNARY CONDITIONAL RENDERING */}
        {buahBuahan.length > 0 && <List nama={buahBuahan} kategori="Buah"/>}
        <List nama={SayurSayuran} kategori="Sayuran"/>
        <hr />

        {/* // ! 7. */}
        <div style={{backgroundColor: "#333333"}}>
          <h2>--- Click Event ----</h2>
          <Button/>
          <hr />
        </div>

        {/* // ! 8. */}
        <h2>--- ReactHook ----</h2>
        <ol>
          <li>React Hook : Function based component (useState, dan use-use lainnya)</li>
          <li>UseState() : Array destructuring that include [varname, serVarName] the setter to update virtually</li>
        </ol>
        <MyComponent/>
        <h3>GAME COUNTER SEDERHANA</h3>
        <Counter />
        <hr />

        {/* // ! 9. */}
        <div style={{backgroundColor: "#333333"}}>
          <h2>--- onChange ----</h2>
          <ol>
            <li>Use Primerly on form</li>
            <li>Included but not stricly on (input, textarea, dropdown, radio)</li>
            <li>Trigger a function that will update it value in realtime</li>
          </ol>
          <MyComponent2 />
          <hr />
        </div>

        {/* // ! 10. */}
        <h2>--- Color Picker ----</h2>
        <ColorPicker/>
        <hr />

        {/* // ! 11. */}
        <div style={{backgroundColor: "#333333"}}>
          <h2>--- Updater Function ----</h2>
          <ol>
            <li> to update state in line</li>
            <li> ex. setCounter(arrow function)</li>
            <li> and not setCounter(counter + 1)</li>
            <li> it will make a queue / antrian</li>
          </ol>
          <CounterUF />
          <hr />
        </div>
        {/* // ! 12. */}
        <h2>--- Update state of OBJECT ----</h2>
        <MyComponent3/>
        <hr />
        {/* // ! 13. */}
        <div style={{backgroundColor: "#333333"}}>
          <h2>--- Update state of ARRAY ----</h2>
          <MyComponent4/>
          <hr />
        </div>
        {/* // ! 14. */}
        <h2>--- Update state of ARRAY of OBJECT ----</h2>
        <MyComponent5 />
        <hr />

        {/* // ! 15. */}
        <div style={{backgroundColor: "#333333"}}>
          <h2>--- To-do-list ----</h2>
          <MyComponent6/>
          <hr />
        </div>

        {/* // ! 16. */}
        <h2>--- useEffect() ----</h2>
        <ol>
          <li>useEffect(function, [dependencies])</li>
          <li>do the function everytime the dependencies change</li>
        </ol>
        <MyComponent7/>
        <hr />

        {/* // ! 17. */}
        <div style={{backgroundColor: "#333333"}}>
          <h2>--- Jam Digital ----</h2>
          <JamDigital />
          <hr />
        </div>

        {/* // ! 18. */}
        <h2>--- useContext, createContext ----</h2>
        <i>Pass a value without a props</i>
        <Component1/>
        <hr />

        {/* // ! 19. */}
        <div style={{backgroundColor: "#333333"}}>
          <h2>--- useRef ----</h2>
          <ol>
            <li>Doesnt make a value change to re-render like useState </li>
            <li>it nice for working with DOM or animation</li>
            <li>REMEMBER THAT IT WAS OBJECT with single property call current</li>
          </ol>
          <MyComponent8/>
          <hr />
        </div>
        {/* // ! 20. */}
        <h2>--- STOPWATCH ----</h2>
        <Stopwatch/>

        <Footer/>
      </>
  )
}

export default App
