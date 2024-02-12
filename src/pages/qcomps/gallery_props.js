function Scientist({scientist, size = 100}){
  return(
    <section className="profile">
        <h2>{scientist.ScientistName}</h2>
        <img
          className="avatar"
          src={scientist.Imgsrc}
          alt={scientist.ScientistName}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {scientist.Profession}
          </li>
          <li>
            <b>Awards: {scientist.AwardNum} </b>
            ({scientist.Award})
          </li>
          <li>
            <b>Discovered: </b>
            {scientist.Discovered}
          </li>
        </ul>
      </section>
      )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Scientist scientist = {{ScientistName:'Maria Skłodowska-Curie',Imgsrc : 'https://i.imgur.com/szV5sdGs.jpg',Profession:'physicist and chemist'
      ,AwardNum : '4', Award :'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal', Discovered:'polonium (element)'}} size = {200}></Scientist>
      <Scientist scientist = {{ScientistName:'Katsuko Saruhashi',Imgsrc : 'https://i.imgur.com/YfeOqp2s.jpg', Discovered:'a method for measuring carbon dioxide in seawater',Profession:'geochemist'
      ,AwardNum : '2', Award :'Miyake Prize for geochemistry, Tanaka Prize'}} size = {200}></Scientist>
    </div>
  );
}