import "./App.css";

const famousPlace = "Manakamana";
const inDistrict = "Gorkha Manakamana";
const mainContent =
  "Manakamana Mandir that grants wishes of its devotees') is a Hindu temple dedicated to goddess Bhagwati, an incarnation of Parvati and it is situated in the village of Manakamana in Gorkha District, Gandaki Province, Nepal.[1]";
const bigPhoto = "picture";
function App() {
  return (
    <div>
      <div className="sahas">
        <h1>{famousPlace}</h1>
        <img
          src="https://admin.visitmanakamana.com/assets/images/pages/1646373481.jpg"
          alt="picture of Manakamana Temple"
        />
      </div>

      <div className="sahas1">
        <h2>{inDistrict}</h2>
      </div>

      <div className="sahas2">
        <h3>{mainContent}</h3>
      </div>
    </div>
  );
}

export default App;
